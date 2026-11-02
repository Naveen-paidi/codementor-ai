import {
  generateText,
  isGeminiConfigured,
} from '../config/gemini.js';

import {
  DOUBT_SYSTEM_PROMPT,
  buildProblemDoubtPrompt,
} from './prompts/aiPrompts.js';

/**
 * Answer a student's doubt regarding a specific coding problem and their submitted code.
 *
 * Preserves complete context:
 * - Problem title & statement
 * - Programming language
 * - Student's submitted code
 * - Prior AI code review
 * - Conversation history on this problem
 */
export async function answerProblemDoubt({
  question,
  problemTitle = '',
  problemStatement = '',
  language = 'python',
  userCode = '',
  code = '',
  reviewResult = null,
  review = null,
  history = [],
}) {
  try {
    const learnerQuestion = String(question || '').trim();
    if (!learnerQuestion) {
      return {
        success: false,
        error: 'Please enter a question or doubt.',
      };
    }

    const resolvedCode = userCode || code || '';
    const resolvedReview = reviewResult || review || null;

    if (!isGeminiConfigured()) {
      return {
        success: true,
        answer: `I am currently operating in offline mode. For this problem (${problemTitle || 'Coding Challenge'}), check your logic at the core loop or condition, and ensure your code handles boundary inputs like empty or single-element inputs.`,
        provider: 'fallback',
      };
    }

    const prompt = buildProblemDoubtPrompt({
      question: learnerQuestion,
      problemTitle,
      problemStatement,
      language,
      userCode: resolvedCode,
      reviewResult: resolvedReview,
      history,
    });

    const answer = await generateText(prompt, {
      systemInstruction: DOUBT_SYSTEM_PROMPT,
      temperature: 0.3,
      maxOutputTokens: 2500,
    });

    return {
      success: true,
      answer,
      provider: 'openrouter',
    };
  } catch (error) {
    console.error('[DoubtAgent] answerProblemDoubt error:', error.message);
    return {
      success: false,
      error: 'Unable to resolve doubt at this moment. Please try again.',
      details: error.message,
    };
  }
}
