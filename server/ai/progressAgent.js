/**
 * Progress Agent
 * --------------
 * Analyses learner activity and produces:
 * - topic mastery
 * - learning level
 * - strengths
 * - weaknesses
 * - recommendations
 *
 * JavaScript only.
 */

import {
  generateJSON,
  isGeminiConfigured
} from '../config/gemini.js';

import {
  PROGRESS_SYSTEM_PROMPT,
  buildProgressPrompt
} from './prompts/aiPrompts.js';


/**
 * ============================================================================
 * HELPERS
 * ============================================================================
 */

/**
 * Clamp a number between min and max.
 */
function clamp(value, min, max) {
  return Math.min(
    max,
    Math.max(min, value)
  );
}


/**
 * Safely convert a value to a number.
 */
function toNumber(
  value,
  fallback = 0
) {
  const number = Number(value);

  return Number.isFinite(number)
    ? number
    : fallback;
}


/**
 * ============================================================================
 * TOPIC MASTERY
 * ============================================================================
 */

/**
 * Calculate mastery from attempts.
 *
 * Success rate is combined with consistency so that
 * a learner who succeeds repeatedly receives a stronger
 * mastery score than someone with only one successful attempt.
 */
export function calculateTopicMastery({
  totalAttempts = 0,
  successfulAttempts = 0,
  recentAttempts = []
} = {}) {
  const total = Math.max(
    0,
    toNumber(totalAttempts)
  );

  const successful = clamp(
    toNumber(successfulAttempts),
    0,
    total
  );

  if (total === 0) {
    return {
      score: 0,
      level: 'novice',
      totalAttempts: 0,
      successfulAttempts: 0,
      successRate: 0
    };
  }

  const successRate =
    successful / total;

  /*
   * Recent performance is useful, but it should not
   * completely override the learner's overall history.
   */
  let recentScore =
    successRate;

  if (
    Array.isArray(recentAttempts) &&
    recentAttempts.length > 0
  ) {
    const recentPassed =
      recentAttempts.filter(
        (attempt) =>
          attempt === true ||
          attempt?.passed === true ||
          attempt?.status === 'passed'
      ).length;

    recentScore =
      recentPassed /
      recentAttempts.length;
  }

  const score = clamp(
    Math.round(
      (
        successRate * 0.7 +
        recentScore * 0.3
      ) * 100
    ),
    0,
    100
  );

  let level = 'novice';

  if (score >= 80) {
    level = 'master';
  } else if (score >= 60) {
    level = 'proficient';
  }

  return {
    score,
    level,
    totalAttempts: total,
    successfulAttempts: successful,
    successRate: Math.round(
      successRate * 100
    )
  };
}


/**
 * ============================================================================
 * AI LEARNER RECOMMENDATIONS
 * ============================================================================
 */

/**
 * Analyse progress using Gemini.
 */
export async function generateLearnerRecommendations({
  language,
  topics = [],
  recentMistakes = [],
  recentSubmissions = [],
  currentLevel = 'beginner',
  learnerLevel = ''
} = {}) {
  const resolvedLevel =
    learnerLevel ||
    currentLevel ||
    'beginner';

  try {
    /*
     * Gemini unavailable:
     * Return deterministic fallback recommendations.
     */
    if (!isGeminiConfigured()) {
      return {
        success: true,
        provider: 'fallback',
        recommendations:
          createFallbackRecommendations({
            topics,
            recentMistakes,
            currentLevel:
              resolvedLevel
          })
      };
    }

    const prompt =
      buildProgressPrompt({
        language,
        learnerLevel:
          resolvedLevel,
        topicStats: topics,
        recentMistakes
      });

    const result =
      await generateJSON(
        prompt,
        {
          systemInstruction:
            PROGRESS_SYSTEM_PROMPT,

          temperature: 0.25,

          maxOutputTokens: 5000
        }
      );

    return {
      success: true,
      provider: 'gemini',
      recommendations:
        normalizeRecommendations(
          result
        )
    };

  } catch (error) {
    console.error(
      '[ProgressAgent] Recommendation generation failed:',
      error.message
    );

    return {
      success: true,
      provider: 'fallback',

      recommendations:
        createFallbackRecommendations({
          topics,
          recentMistakes,
          currentLevel:
            resolvedLevel
        }),

      warning:
        'AI recommendations were unavailable, so fallback recommendations were returned.'
    };
  }
}


/**
 * ============================================================================
 * NORMALISE GEMINI RESPONSE
 * ============================================================================
 */

/**
 * Normalize Gemini's response so the frontend
 * receives predictable fields.
 */
export function normalizeRecommendations(
  data = {}
) {
  const strengths =
    Array.isArray(data.strengths)
      ? data.strengths
      : [];

  /*
   * Support both "weaknesses" and
   * "areasToImprove" because the prompt/schema
   * may use either terminology.
   */
  const weaknesses =
    Array.isArray(data.weaknesses)
      ? data.weaknesses
      : Array.isArray(
        data.areasToImprove
      )
        ? data.areasToImprove
        : [];

  const recommendations =
    Array.isArray(
      data.recommendations
    )
      ? data.recommendations
      : [];

  const nextTopics =
    Array.isArray(data.nextTopics)
      ? data.nextTopics
      : [];

  return {
    summary:
      data.summary ||
      data.overallSummary ||
      'Keep practising consistently and review the concepts where you make repeated mistakes.',

    strengths,

    weaknesses,

    recommendations,

    nextTopics,

    nextStep:
      data.nextStep ||
      '',

    studyPlan:
      data.studyPlan || {
        focus: 'Practice',
        durationMinutes: 30,
        activities: [
          'Review the concept',
          'Solve an easy problem',
          'Solve a medium problem'
        ]
      }
  };
}


/**
 * ============================================================================
 * FALLBACK RECOMMENDATIONS
 * ============================================================================
 */

/**
 * Deterministic recommendations when Gemini is unavailable.
 */
export function createFallbackRecommendations({
  topics = [],
  recentMistakes = [],
  currentLevel = 'beginner'
} = {}) {
  const safeTopics =
    Array.isArray(topics)
      ? topics
      : [];

  const safeMistakes =
    Array.isArray(
      recentMistakes
    )
      ? recentMistakes
      : [];

  const weakTopics =
    safeTopics
      .filter(
        (topic) =>
          toNumber(
            topic.score,
            0
          ) < 60
      )
      .sort(
        (a, b) =>
          toNumber(
            a.score,
            0
          ) -
          toNumber(
            b.score,
            0
          )
      )
      .slice(0, 3);

  const strongTopics =
    safeTopics
      .filter(
        (topic) =>
          toNumber(
            topic.score,
            0
          ) >= 80
      )
      .slice(0, 3);

  const mistakeTypes = [
    ...new Set(
      safeMistakes
        .map(
          (mistake) =>
            mistake?.errorType
        )
        .filter(Boolean)
    )
  ];

  const recommendations = [];

  if (weakTopics.length > 0) {
    const topicNames =
      weakTopics
        .map(
          (topic) =>
            topic.title ||
            topic.name ||
            topic.topic
        )
        .filter(Boolean);

    if (topicNames.length > 0) {
      recommendations.push(
        `Review ${topicNames.join(', ')}.`
      );
    }
  }

  if (
    mistakeTypes.includes(
      'syntax_error'
    )
  ) {
    recommendations.push(
      'Review language syntax and compiler errors before moving to harder problems.'
    );
  }

  if (
    mistakeTypes.includes(
      'runtime_error'
    )
  ) {
    recommendations.push(
      'Practise tracing variables and identifying runtime failures.'
    );
  }

  if (
    mistakeTypes.includes(
      'logical_error'
    )
  ) {
    recommendations.push(
      'Trace small examples manually and pay attention to edge cases.'
    );
  }

  if (
    recommendations.length === 0
  ) {
    recommendations.push(
      'Continue practising consistently and gradually increase problem difficulty.'
    );
  }

  return {
    summary:
      `Your current learning level is ${currentLevel}. ` +
      'Focus on strengthening weaker topics while continuing regular practice.',

    strengths:
      strongTopics
        .map(
          (topic) =>
            topic.title ||
            topic.name ||
            topic.topic
        )
        .filter(Boolean),

    weaknesses:
      weakTopics
        .map(
          (topic) =>
            topic.title ||
            topic.name ||
            topic.topic
        )
        .filter(Boolean),

    recommendations,

    nextTopics:
      weakTopics
        .map(
          (topic) =>
            topic.title ||
            topic.name ||
            topic.topic
        )
        .filter(Boolean),

    nextStep:
      weakTopics.length > 0
        ? 'Review your weakest topic and solve one practice problem.'
        : 'Continue practising consistently and gradually increase problem difficulty.',

    studyPlan: {
      focus:
        weakTopics.length > 0
          ? 'Weak topic revision'
          : 'Consistent practice',

      durationMinutes: 30,

      activities: [
        'Review the relevant concept',
        'Solve one easy problem',
        'Solve one medium problem',
        'Review mistakes'
      ]
    }
  };
}