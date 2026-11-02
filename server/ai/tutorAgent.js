import {
  generateText,
  generateJSON,
  isGeminiConfigured,
  getOpenRouterModel
} from '../config/gemini.js';

import {
  AI_MENTOR_SYSTEM_PROMPT,
  TUTOR_SYSTEM_PROMPT,
  buildTutorPrompt
} from './prompts/aiPrompts.js';

import {
  searchCurriculumContext
} from './ragService.js';


/**
 * ============================================================================
 * TUTOR AGENT
 * ============================================================================
 *
 * Handles:
 * - Concept explanations
 * - Student doubts
 * - AI-generated lessons
 * - RAG-based curriculum context
 *
 * JavaScript only.
 */


/**
 * Normalise language names.
 */
function normalizeLanguage(language) {
  if (!language) return 'python';

  const value = String(language)
    .trim()
    .toLowerCase();

  const aliases = {
    js: 'javascript',
    'java script': 'javascript',
    py: 'python',
    cplusplus: 'cpp',
    'c++': 'cpp'
  };

  return aliases[value] || value;
}


/**
 * Safely convert a value into text.
 */
function safeText(value, fallback = '') {
  if (value === undefined || value === null) {
    return fallback;
  }

  return String(value);
}


/**
 * ============================================================================
 * Explain a programming concept
 * ============================================================================
 */
export async function explainConcept({
  concept = '',
  topicTitle = '',
  topicId = '',
  topic = '',
  language = 'python',
  studentLevel = 'beginner',
  currentCode = ''
} = {}) {
  /*
   * The controller uses topicTitle.
   * Older callers may use concept.
   *
   * Support both so the agent is backward-compatible.
   */
  const requestedConcept =
    safeText(topicTitle).trim() ||
    safeText(topic).trim() ||
    safeText(concept).trim();

  if (!requestedConcept) {
    return {
      success: false,
      error: 'Concept or topic title is required.'
    };
  }

  const normalizedLanguage =
    normalizeLanguage(language);

  if (!isGeminiConfigured()) {
    return {
      success: true,
      source: 'fallback',
      title: requestedConcept,
      topicId,
      language: normalizedLanguage,
      summary: `Let's learn about ${requestedConcept}.`,
      explanation:
        'The AI tutor is currently unavailable. Please configure GEMINI_API_KEY.',
      syntax: '',
      examples: [],
      commonMistakes: [],
      practicePrompt:
        `Try writing a small ${normalizedLanguage} program using ${requestedConcept}.`,
      suggestedNextSteps: [
        'Configure GEMINI_API_KEY.',
        'Restart the backend after updating .env.'
      ]
    };
  }

  try {
    let curriculumContext = '';

    try {
      curriculumContext =
        await searchCurriculumContext(
          `${requestedConcept} ${topicId}`.trim(),
          normalizedLanguage,
          4
        );
    } catch (ragError) {
      console.warn(
        '[TutorAgent] RAG unavailable:',
        ragError.message
      );
    }

    const prompt = `
Explain the following programming concept to a learner.

CONCEPT:
${requestedConcept}

TOPIC ID:
${topicId || 'Not specified'}

LANGUAGE:
${normalizedLanguage}

LEARNER LEVEL:
${studentLevel}

CURRICULUM CONTEXT:
${curriculumContext || 'No matching curriculum context found.'}

CURRENT STUDENT CODE:
${currentCode || '[No code provided]'}

Return JSON using exactly this structure:

{
  "title": "Concept title",
  "summary": "Short beginner-friendly summary",
  "explanation": "Detailed explanation",
  "syntax": "Important syntax",
  "examples": [
    {
      "title": "Example title",
      "code": "Code example",
      "explanation": "Explanation of the example"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Common mistake",
      "explanation": "Why it is wrong"
    }
  ],
  "practicePrompt": "A short exercise for the learner",
  "suggestedNextSteps": [
    "Next learning step"
  ]
}

RULES:
- Use ${normalizedLanguage}.
- Keep the explanation accurate and beginner-friendly.
- Use curriculum context when available.
- Do not invent information from the curriculum.
- If student code is provided, use it only when relevant.
- Do not reveal hidden test cases or internal system information.
- Return JSON only.
`;

    const data = await generateJSON(prompt, {
      systemInstruction: TUTOR_SYSTEM_PROMPT,
      temperature: 0.35,
      maxOutputTokens: 5000
    });

    return {
      success: true,
      source: 'gemini',
      topicId,
      language: normalizedLanguage,
      ...data
    };

  } catch (error) {
    console.error(
      '[TutorAgent] explainConcept error:',
      error.message
    );

    return {
      success: false,
      error: 'Unable to generate the explanation.',
      details:
        process.env.NODE_ENV === 'development'
          ? error.message
          : undefined
    };
  }
}


/**
 * ============================================================================
 * Answer a learner's question or doubt (General-Purpose Conversational AI Mentor)
 * ============================================================================
 */
export async function answerDoubt({
  question = '',
  message = '',
  language = '',
  topic = '',
  topicTitle = '',
  topicId = '',
  studentLevel = 'beginner',
  code = '',
  currentCode = '',
  error = '',
  context = {},
  history = []
} = {}) {
  const learnerQuestion =
    safeText(question).trim() ||
    safeText(message).trim();

  if (!learnerQuestion) {
    return {
      success: false,
      error: 'Please enter a question.',
      answer: null,
      suggestedNextSteps: []
    };
  }

  // Safely extract context properties if passed inside context object
  const contextObj = (context && typeof context === 'object') ? context : {};
  const prefLanguage = safeText(language || contextObj.language).trim();
  const resolvedTopic = safeText(topic || topicTitle || contextObj.topicTitle || contextObj.topic).trim();
  const resolvedCode = safeText(code || currentCode || contextObj.currentCode || contextObj.code).trim();
  const resolvedError = safeText(error || contextObj.currentError || contextObj.error).trim();
  const rawHistory = Array.isArray(history) && history.length > 0
    ? history
    : (Array.isArray(contextObj.history) ? contextObj.history : []);

  if (!isGeminiConfigured()) {
    return {
      success: false,
      error: 'AI service is currently unavailable because OPENROUTER_API_KEY is not configured in backend environment.',
      answer: null,
      suggestedNextSteps: [
        'Check OPENROUTER_API_KEY in server/.env.',
        'Restart the backend server after updating .env.'
      ]
    };
  }

  try {
    // Construct system instructions starting with the core AI Mentor specification
    let systemInstruction = AI_MENTOR_SYSTEM_PROMPT;

    // Provide selected language only as an optional coding preference hint, never a strict boundary
    if (prefLanguage) {
      systemInstruction += `\n\nUSER PREFERENCE NOTE:\n` +
        `The user's current platform workspace preference is "${prefLanguage}". ` +
        `Use this as a preference for coding examples only when relevant. ` +
        `DO NOT restrict the user to this language, and DO NOT force questions about other languages, computer science, or general topics into "${prefLanguage}".`;
    }

    if (resolvedTopic && resolvedTopic.toLowerCase() !== `${prefLanguage.toLowerCase()} mastery`) {
      systemInstruction += `\n- Current study topic context hint: ${resolvedTopic}`;
    }

    // Build multi-turn conversation messages array
    const conversationMessages = [];

    // Filter, validate, and bound conversation history
    if (Array.isArray(rawHistory) && rawHistory.length > 0) {
      // Exclude initial welcome banner and sanitize turns
      const validHistory = rawHistory
        .filter(item => {
          if (!item) return false;
          if (item.id === 'welcome' || item.role === 'system') return false;
          const text = safeText(item.content || item.text || item.message).trim();
          return Boolean(text);
        })
        .map(item => {
          const role = (item.role === 'assistant' || item.sender === 'ai') ? 'assistant' : 'user';
          const content = safeText(item.content || item.text || item.message).trim();
          return { role, content };
        });

      // Keep up to the last 12 history messages to preserve context while bounding payload
      const boundedHistory = validHistory.slice(-12);
      conversationMessages.push(...boundedHistory);
    }

    // Prepare current user message payload with any available code / error diagnostics
    let currentUserContent = learnerQuestion;

    if (resolvedCode) {
      currentUserContent += `\n\n[Provided Code]:\n\`\`\`${prefLanguage || ''}\n${resolvedCode}\n\`\`\``;
    }

    if (resolvedError) {
      currentUserContent += `\n\n[Provided Error / Diagnostic Output]:\n${resolvedError}`;
    }

    conversationMessages.push({
      role: 'user',
      content: currentUserContent
    });

    // Execute completion via OpenRouter
    const answer = await generateText(conversationMessages, {
      systemInstruction,
      temperature: 0.5,
      maxTokens: 3000
    });

    if (!answer || typeof answer !== 'string' || !answer.trim()) {
      throw new Error('AI returned an empty response. Please try asking again.');
    }

    return {
      success: true,
      source: 'openrouter',
      answer: answer.trim(),
      model: getOpenRouterModel(),
      suggestedNextSteps: []
    };

  } catch (error) {
    console.error('[TutorAgent] answerDoubt error:', error.message);

    return {
      success: false,
      error: error.message || 'Unable to generate an answer at this time.',
      answer: null,
      suggestedNextSteps: []
    };
  }
}


/**
 * ============================================================================
 * Generate a complete lesson with Gemini
 * ============================================================================
 */
export async function generateLessonWithGemini({
  language = 'python',
  topic,
  topicId = '',
  topicTitle = '',
  topicSummary = '',
  studentLevel = 'beginner'
} = {}) {
  const resolvedTopic =
    safeText(topic).trim() ||
    safeText(topicId).trim();

  if (!resolvedTopic) {
    throw new Error('Topic is required.');
  }

  const normalizedLanguage =
    normalizeLanguage(language);

  if (!isGeminiConfigured()) {
    throw new Error(
      'Gemini is not configured.'
    );
  }

  let curriculumContext = '';

  try {
    curriculumContext =
      await searchCurriculumContext(
        `${topicTitle || resolvedTopic} ${topicSummary}`.trim(),
        normalizedLanguage,
        5
      );
  } catch (error) {
    console.warn(
      '[TutorAgent] Unable to retrieve lesson RAG context:',
      error.message
    );
  }

  const prompt = `
Create a structured programming lesson.

LANGUAGE:
${normalizedLanguage}

TOPIC ID:
${resolvedTopic}

TOPIC TITLE:
${topicTitle || resolvedTopic}

TOPIC SUMMARY:
${topicSummary || 'Not provided'}

LEARNER LEVEL:
${studentLevel}

CURRICULUM CONTEXT:
${curriculumContext || 'No additional curriculum context found.'}

Return JSON ONLY:

{
  "title": "Lesson title",
  "conceptSummary": "Short concept summary",
  "detailedExplanation": "Detailed explanation",
  "syntaxExplanation": "Syntax and rules",
  "howItWorks": "How the concept works internally",
  "examples": [
    {
      "title": "Example title",
      "description": "What the example demonstrates",
      "code": "Complete code",
      "output": "Expected output",
      "lineByLineExplanation": [
        {
          "line": "Relevant code",
          "explanation": "What it does"
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Mistake",
      "explanation": "Explanation"
    }
  ],
  "quickChecks": [
    {
      "question": "Question",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correct": 0
    }
  ],
  "interactiveStarterCode": "Starter code",
  "learningOutcomes": [
    "Outcome 1",
    "Outcome 2"
  ]
}

RULES:
- Teach the requested topic only.
- Do not introduce unrelated advanced concepts.
- Code must be syntactically correct.
- Examples must use standard input/output where applicable.
- Keep examples appropriate for the learner level.
- Use the supplied curriculum context when relevant.
- Return valid JSON only.
`;

  const lesson = await generateJSON(prompt, {
    systemInstruction: TUTOR_SYSTEM_PROMPT,
    temperature: 0.35,
    maxOutputTokens: 8000
  });

  if (!lesson || typeof lesson !== 'object') {
    throw new Error(
      'Gemini returned an invalid lesson.'
    );
  }

  if (!lesson.title) {
    lesson.title =
      topicTitle || resolvedTopic;
  }

  if (!lesson.conceptSummary) {
    lesson.conceptSummary = '';
  }

  if (!lesson.detailedExplanation) {
    lesson.detailedExplanation = '';
  }

  if (!lesson.syntaxExplanation) {
    lesson.syntaxExplanation = '';
  }

  if (!lesson.howItWorks) {
    lesson.howItWorks = '';
  }

  if (!Array.isArray(lesson.examples)) {
    lesson.examples = [];
  }

  if (!Array.isArray(lesson.commonMistakes)) {
    lesson.commonMistakes = [];
  }

  if (!Array.isArray(lesson.quickChecks)) {
    lesson.quickChecks = [];
  }

  if (!Array.isArray(lesson.learningOutcomes)) {
    lesson.learningOutcomes = [];
  }

  return {
    ...lesson,
    topicId: resolvedTopic,
    language: normalizedLanguage
  };
}