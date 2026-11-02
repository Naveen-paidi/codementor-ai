import { courseService } from './course.service.js';
import { generateLessonWithGemini } from '../ai/tutorAgent.js';

/**
 * In-memory cache for dynamically generated lessons.
 *
 * Key format:
 * language:topicId
 */
const lessonMemoryCache = new Map();

/**
 * Safely convert a value into an array.
 */
const asArray = (value) => {
  return Array.isArray(value) ? value : [];
};

/**
 * Build a stable cache key.
 */
const buildCacheKey = (language, topicId) => {
  return `${language}:${topicId}`;
};

export const lessonService = {
  /**
   * Get or dynamically generate a complete lesson for a topic.
   *
   * @param {string} topicId
   * @param {string|null} language
   * @param {boolean} forceRegenerate
   */
  async getLessonByTopicId(
    topicId,
    language = null,
    forceRegenerate = false
  ) {
    if (!topicId) {
      return {
        success: false,
        error: 'topicId is required.'
      };
    }

    // ---------------------------------------------------------
    // 1. Find topic from canonical curriculum
    // ---------------------------------------------------------
    const topicInfo = await courseService.getTopicById(
      topicId,
      language
    );

    if (!topicInfo) {
      return {
        success: false,
        error: `Topic with ID "${topicId}" was not found in any curriculum blueprint.`
      };
    }

    const {
      language: targetLanguage,
      level,
      module,
      topic
    } = topicInfo;

    const cacheKey = buildCacheKey(
      targetLanguage,
      topic.id
    );

    // ---------------------------------------------------------
    // 2. Return cached lesson when available
    // ---------------------------------------------------------
    if (
      !forceRegenerate &&
      lessonMemoryCache.has(cacheKey)
    ) {
      return {
        success: true,
        fromCache: true,
        source: 'memory-cache',
        language: targetLanguage,
        level,
        module,
        topic,
        lesson: lessonMemoryCache.get(cacheKey)
      };
    }

    // ---------------------------------------------------------
    // 3. Serve lesson directly from local canonical curriculum
    // ---------------------------------------------------------
    if (topic && (topic.detailedExplanation || topic.lesson)) {
      const localLesson = topic.lesson || {
        id: topic.id,
        title: topic.title,
        slug: topic.slug,
        description: topic.description,
        learningObjectives: topic.learningObjectives || [],
        prerequisites: topic.prerequisites || [],
        conceptSummary: topic.conceptSummary || topic.description || '',
        detailedExplanation: topic.detailedExplanation || '',
        syntaxExplanation: topic.syntaxExplanation || '',
        howItWorks: topic.howItWorks || [],
        examples: topic.examples || [],
        commonMistakes: topic.commonMistakes || [],
        quickChecks: topic.quickChecks || [],
        practiceQuestions: topic.practiceQuestions || [],
        codingProblem: topic.codingProblem || null,
        difficulty: topic.difficulty || 'beginner',
        estimatedMinutes: topic.estimatedMinutes || 15
      };

      lessonMemoryCache.set(cacheKey, localLesson);

      return {
        success: true,
        fromCache: false,
        source: 'local-canonical-curriculum',
        language: targetLanguage,
        level,
        module,
        topic,
        lesson: localLesson
      };
    }

    // ---------------------------------------------------------
    // 4. Fallback (Only if topic had no local explanation)
    // ---------------------------------------------------------
    console.log(
      `[LessonService] Generating supplementary lesson for ` +
      `[${targetLanguage}] ${topic.title} (${topic.id})`
    );

    let generatedResult;

    try {
      generatedResult = await generateLessonWithGemini({
        language: targetLanguage,
        topicTitle: topic.title,
        topicId: topic.id,
        moduleTitle: module?.title || '',
        levelTitle: level?.title || '',
        difficulty: topic.difficulty || 'beginner',
        prerequisites: asArray(topic.prerequisites),
        learningObjectives: asArray(topic.learningObjectives)
      });
    } catch (error) {
      console.error(
        '[LessonService] Gemini lesson generation failed:',
        error
      );

      return {
        success: false,
        error:
          error?.message ||
          'Failed to generate lesson with Gemini.'
      };
    }

    if (!generatedResult?.success) {
      return {
        success: false,
        error:
          generatedResult?.error ||
          'Failed to generate lesson content.'
      };
    }

    const generatedLesson =
      generatedResult.lesson;

    if (
      !generatedLesson ||
      typeof generatedLesson !== 'object'
    ) {
      return {
        success: false,
        error: 'AI returned an invalid lesson structure.'
      };
    }

    // ---------------------------------------------------------
    // 5. Store generated lesson in memory
    // ---------------------------------------------------------
    lessonMemoryCache.set(
      cacheKey,
      generatedLesson
    );

    // ---------------------------------------------------------
    // 6. Return complete lesson response
    // ---------------------------------------------------------
    return {
      success: true,
      fromCache: false,
      source: 'openrouter-ai',
      language: targetLanguage,
      level,
      module,
      topic,
      lesson: generatedLesson
    };
  },

  /**
   * Clear one cached lesson.
   */
  clearLessonCache(topicId, language = null) {
    if (!topicId) {
      return false;
    }

    if (language) {
      const cacheKey = buildCacheKey(
        language.toLowerCase(),
        topicId
      );

      return lessonMemoryCache.delete(cacheKey);
    }

    let deleted = false;

    for (const key of lessonMemoryCache.keys()) {
      if (key.endsWith(`:${topicId}`)) {
        lessonMemoryCache.delete(key);
        deleted = true;
      }
    }

    return deleted;
  },

  /**
   * Clear all generated lesson cache.
   */
  clearAllLessonCache() {
    lessonMemoryCache.clear();
  }
};