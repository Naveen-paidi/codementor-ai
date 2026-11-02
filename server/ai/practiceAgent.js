/**
 * Practice Agent
 * --------------
 * Generates coding practice questions using Gemini.
 *
 * Important:
 * AI-generated questions are returned as application-level objects.
 * They are NOT inserted directly into the UUID-based `questions` table.
 *
 * JavaScript only.
 */

import crypto from 'crypto';

import {
  generateJSON,
  isGeminiConfigured
} from '../config/gemini.js';

import {
  PRACTICE_GEN_SYSTEM_PROMPT,
  buildPracticePrompt
} from './prompts/aiPrompts.js';


const SUPPORTED_LANGUAGES = new Set([
  'python',
  'javascript',
  'java',
  'c',
  'cpp'
]);

const DIFFICULTIES = new Set([
  'easy',
  'medium',
  'hard'
]);


/**
 * ============================================================================
 * NORMALISATION
 * ============================================================================
 */

export function normalizeDifficulty(
  difficulty
) {
  const value =
    String(
      difficulty || 'easy'
    )
      .trim()
      .toLowerCase();

  return DIFFICULTIES.has(value)
    ? value
    : 'easy';
}


export function normalizeLanguage(
  language
) {
  const value =
    String(
      language || ''
    )
      .trim()
      .toLowerCase();

  const aliases = {
    js: 'javascript',
    'java script': 'javascript',
    py: 'python',
    'c++': 'cpp',
    cplusplus: 'cpp'
  };

  const normalized =
    aliases[value] || value;

  return SUPPORTED_LANGUAGES.has(
    normalized
  )
    ? normalized
    : null;
}


function createAIQuestionId() {
  return `ai-gen-${Date.now()}-${crypto
    .randomBytes(4)
    .toString('hex')}`;
}


function normalizeArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (
    typeof value === 'string' &&
    value.trim()
  ) {
    return [value.trim()];
  }

  return [];
}


/**
 * ============================================================================
 * TEST CASE NORMALISATION
 * ============================================================================
 */

export function normalizeTestCases(
  testCases
) {
  if (!Array.isArray(testCases)) {
    return [];
  }

  return testCases
    .map((testCase) => {
      if (
        !testCase ||
        typeof testCase !== 'object'
      ) {
        return null;
      }

      return {
        input: String(
          testCase.input ?? ''
        ),

        expectedOutput: String(
          testCase.expectedOutput ??
          testCase.expected_output ??
          ''
        ),

        explanation:
          testCase.explanation
            ? String(
              testCase.explanation
            )
            : '',

        isHidden: Boolean(
          testCase.isHidden ??
          testCase.is_hidden ??
          false
        )
      };
    })
    .filter(Boolean)
    .filter(
      (testCase) =>
        testCase.expectedOutput
          .trim()
          .length > 0
    );
}


/**
 * ============================================================================
 * QUESTION NORMALISATION
 * ============================================================================
 */

export function normalizeQuestion({
  question,
  language,
  topic,
  difficulty
}) {
  const source =
    question &&
      typeof question === 'object'
      ? question
      : {};

  return {
    id: createAIQuestionId(),

    source: 'ai_generated',

    language,

    topic: topic || '',

    title:
      String(
        source.title ||
        'Practice Problem'
      ).trim(),

    slug:
      String(
        source.slug ||
        `ai-practice-${Date.now()}`
      )
        .trim()
        .toLowerCase()
        .replace(
          /[^a-z0-9]+/g,
          '-'
        )
        .replace(
          /^-+|-+$/g,
          ''
        ),

    problemStatement:
      String(
        source.problemStatement ||
        source.problem_statement ||
        ''
      ).trim(),

    inputFormat:
      String(
        source.inputFormat ||
        source.input_format ||
        ''
      ).trim(),

    outputFormat:
      String(
        source.outputFormat ||
        source.output_format ||
        ''
      ).trim(),

    constraints:
      normalizeArray(
        source.constraints
      ),

    sampleInput:
      String(
        source.sampleInput ||
        source.sample_input ||
        ''
      ),

    sampleOutput:
      String(
        source.sampleOutput ||
        source.sample_output ||
        ''
      ),

    sampleExplanation:
      String(
        source.sampleExplanation ||
        source.sample_explanation ||
        ''
      ),

    starterCode:
      String(
        source.starterCode ||
        source.starter_code ||
        ''
      ),

    difficulty,

    concepts:
      normalizeArray(
        source.concepts
      ),

    hints:
      normalizeArray(
        source.hints
      ),

    testCases:
      normalizeTestCases(
        source.testCases ||
        source.test_cases
      )
  };
}


/**
 * ============================================================================
 * GENERATE PRACTICE QUESTION
 * ============================================================================
 */

export async function generatePracticeQuestion({
  language = 'python',

  topic = '',

  topicTitle = '',

  topicId = '',

  difficulty = 'easy',

  studentLevel = 'beginner',

  concepts = [],

  learningObjectives = [],

  previousQuestions = [],

  previousMistakes = []
} = {}) {
  const normalizedLanguage =
    normalizeLanguage(language);

  if (!normalizedLanguage) {
    return {
      success: false,
      error:
        'Unsupported programming language. Supported languages: Python, JavaScript, Java, C, C++.'
    };
  }

  const normalizedDifficulty =
    normalizeDifficulty(
      difficulty
    );

  /*
   * Support both the old `topic` parameter
   * and the corrected service's `topicTitle`.
   */
  const resolvedTopic =
    String(
      topicTitle ||
      topic ||
      topicId ||
      'Programming Fundamentals'
    ).trim();

  /*
   * Merge learning objectives into concepts
   * without creating duplicates.
   */
  const resolvedConcepts = [
    ...normalizeArray(concepts),
    ...normalizeArray(
      learningObjectives
    )
  ];

  const resolvedPreviousMistakes =
    Array.isArray(
      previousMistakes
    )
      ? previousMistakes
      : [];

  const resolvedPreviousQuestions =
    Array.isArray(
      previousQuestions
    )
      ? previousQuestions
      : [];

  try {
    if (!isGeminiConfigured()) {
      return {
        success: false,
        error:
          'Gemini AI is not configured. Please check GEMINI_API_KEY.',
        provider: 'fallback'
      };
    }

    const prompt =
      buildPracticePrompt({
        language:
          normalizedLanguage,

        topic:
          resolvedTopic,

        difficulty:
          normalizedDifficulty,

        studentLevel,

        previousMistakes:
          resolvedPreviousMistakes,

        learningObjectives:
          resolvedConcepts,

        previousQuestions:
          resolvedPreviousQuestions
      });

    /*
     * IMPORTANT:
     *
     * generateJSON() expects:
     *
     * generateJSON(prompt, options)
     *
     * It does NOT expect:
     *
     * generateJSON({
     *   prompt,
     *   ...
     * })
     */
    const generated =
      await generateJSON(
        prompt,
        {
          systemInstruction:
            PRACTICE_GEN_SYSTEM_PROMPT,

          temperature: 0.45,

          maxOutputTokens: 7000
        }
      );

    const question =
      normalizeQuestion({
        question: generated,

        language:
          normalizedLanguage,

        topic:
          resolvedTopic,

        difficulty:
          normalizedDifficulty
      });

    /*
     * Validate minimum fields.
     */
    if (
      !question.title ||
      !question.problemStatement
    ) {
      throw new Error(
        'Gemini returned an incomplete practice question.'
      );
    }

    /*
     * A coding question should have at least
     * one test case for backend execution.
     */
    if (
      !Array.isArray(
        question.testCases
      ) ||
      question.testCases.length === 0
    ) {
      throw new Error(
        'Gemini returned a practice question without valid test cases.'
      );
    }

    return {
      success: true,

      question,

      provider: 'gemini',

      topicId,

      studentLevel,

      source: 'ai_generated'
    };

  } catch (error) {
    console.error(
      '[PracticeAgent] Generation failed:',
      error.message
    );

    return {
      success: false,

      error:
        'Unable to generate a practice question right now.',

      details:
        process.env.NODE_ENV ===
          'development'
          ? error.message
          : undefined
    };
  }
}       