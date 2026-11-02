import {
  calculateTopicMastery,
  generateLearnerRecommendations,
  createFallbackRecommendations
} from '../ai/progressAgent.js';

import {
  supabase,
  isSupabaseConfigured
} from '../config/supabase.js';
import { dbService } from './db.service.js';

/**
 * Runtime telemetry cache.
 *
 * This provides immediate progress updates during the
 * current server session.
 */
const userTelemetryStore = new Map();

/**
 * Cache for asynchronously generated recommendations (5-minute TTL).
 * Prevents duplicate LLM round-trips and keeps UI requests fast.
 */
const recommendationsCache = new Map();

/**
 * Create a fresh learner state with real defaults (ZERO fake data).
 */
const createDefaultTelemetry = (userId = 'guest-learner') => {
  const profile = dbService.getProfile(userId);
  return {
    xp: profile?.xp || 0,
    streakDays: profile?.streak_days || 0,
    level: profile?.level || 'Beginner',
    completedTopics: [],
    topicStats: {},
    recentMistakes: [],
    achievements: []
  };
};

/**
 * Get or create runtime telemetry for a learner.
 */
const getOrCreateUserTelemetry = (
  userId = 'guest-learner'
) => {
  if (!userTelemetryStore.has(userId)) {
    userTelemetryStore.set(
      userId,
      createDefaultTelemetry(userId)
    );
  }

  return userTelemetryStore.get(userId);
};

/**
 * Convert a topic ID into a readable display name.
 */
const formatTopicName = (topicId) => {
  if (!topicId) {
    return 'Unknown Topic';
  }

  return String(topicId)
    .replace(/^[a-z]+-top-/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
};

/**
 * Determine mastery level from score.
 */
const getMasteryLevel = (score) => {
  if (score >= 80) {
    return 'Master';
  }

  if (score >= 60) {
    return 'Proficient';
  }

  return 'Novice';
};

/**
 * Convert runtime topic statistics into the API
 * response format.
 */
const buildMasteryData = (topicStats) => {
  return Object.entries(topicStats).map(
    ([topicId, stat]) => ({
      topicId,

      topic: formatTopicName(topicId),

      score: Number(stat.score || 0),

      attempts: Number(stat.total || 0),

      successfulAttempts:
        Number(stat.passed || 0),

      level: getMasteryLevel(
        Number(stat.score || 0)
      )
    })
  );
};

export const progressService = {
  /**
   * Get a complete learner progress snapshot.
   */
  async getUserProgress(
    userId = 'guest-learner',
    language = 'python'
  ) {
    const data =
      getOrCreateUserTelemetry(userId);

    // Sync with real DB records
    if (userId !== 'guest-learner') {
      const profile = dbService.getProfile(userId);
      if (profile) {
        data.xp = typeof profile.xp === 'number' ? profile.xp : data.xp;
        data.streakDays = typeof profile.streak_days === 'number' ? profile.streak_days : data.streakDays;
        data.level = profile.level || data.level;
      }

      // Sync real completed topics from persistent storage
      const realProgress = (dbService.data.topic_progress || []).filter(
        tp => tp.student_id === userId && tp.status === 'completed' && (!tp.course_id || tp.course_id === language)
      );
      realProgress.forEach(tp => {
        const name = formatTopicName(tp.topic_id);
        if (!data.completedTopics.includes(name)) {
          data.completedTopics.push(name);
        }
        if (!data.topicStats[tp.topic_id]) {
          data.topicStats[tp.topic_id] = { passed: 1, total: 1, score: 100 };
        }
      });
    }

    // Build real achievements based strictly on user's actual milestones
    const realAchievements = [];
    if (data.completedTopics.length >= 1) {
      realAchievements.push({
        id: 'first_topic',
        title: 'First Topic Mastered',
        description: 'Successfully completed your first curriculum topic',
        icon: 'zap',
        unlocked: true
      });
    }
    if (data.streakDays >= 3) {
      realAchievements.push({
        id: 'streak_3',
        title: '3-Day Consistency Streak',
        description: 'Practiced coding 3 days in a row',
        icon: 'flame',
        unlocked: true
      });
    }
    if (data.xp >= 100) {
      realAchievements.push({
        id: 'xp_100',
        title: 'Century Milestone',
        description: 'Earned 100+ XP on CodeMentor',
        icon: 'trophy',
        unlocked: true
      });
    }
    data.achievements = realAchievements;

    const masteryData =
      buildMasteryData(data.topicStats);

    const overallMastery =
      masteryData.length > 0
        ? Math.round(
          masteryData.reduce(
            (total, item) =>
              total + item.score,
            0
          ) / masteryData.length
        )
        : 0;

    // Core progress returns immediately without blocking on external AI requests.
    return {
      xp: data.xp,
      streakDays: data.streakDays,
      level: data.level,
      overallMastery,
      completedTopics: data.completedTopics,
      masteryData,
      recentMistakes: data.recentMistakes,
      achievements: data.achievements,
      recommendations: []
    };
  },

  /**
   * Asynchronously load and cache AI learner recommendations.
   * Protects the core user dashboard from slow upstream AI latency.
   */
  async getRecommendations(userId = 'guest-learner', language = 'python') {
    const cacheKey = `${userId}:${language}`;
    const cached = recommendationsCache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.data;
    }

    const data = await this.getUserProgress(userId, language);
    let recommendations = [];

    try {
      // 6-second timeout race to prevent long-hanging LLM calls from freezing clients
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('AI recommendation generation timeout')), 6000)
      );

      const aiPromise = generateLearnerRecommendations({
        language,
        masteryData: data.masteryData,
        recentMistakes: data.recentMistakes,
        completedTopics: data.completedTopics
      });

      const recommendationResult = await Promise.race([aiPromise, timeoutPromise]);

      if (Array.isArray(recommendationResult)) {
        recommendations = recommendationResult;
      } else {
        recommendations = recommendationResult?.recommendations || [];
      }
    } catch (error) {
      console.warn(
        '[ProgressService] Live AI recommendation unavailable, returning deterministic plan:',
        error?.message || error
      );
      // Fallback to instantaneous deterministic recommendations
      const fallback = createFallbackRecommendations({
        topics: data.masteryData,
        recentMistakes: data.recentMistakes,
        currentLevel: data.level || 'beginner'
      });
      recommendations = fallback.recommendations || [];
    }

    const result = {
      success: true,
      recommendations,
      timestamp: new Date().toISOString()
    };

    // Cache for 5 minutes
    recommendationsCache.set(cacheKey, {
      data: result,
      expiresAt: Date.now() + 5 * 60 * 1000
    });

    return result;
  },

  /**
   * Record a successful problem submission.
   */
  async recordSuccessfulSubmission({
    userId = 'guest-learner',
    questionId,
    language = 'python',
    topicId
  }) {
    const user =
      getOrCreateUserTelemetry(userId);

    // ---------------------------------------------------------
    // Award Centralized XP (+2 XP for language coding problem)
    // ---------------------------------------------------------
    const xpResult = dbService.awardXP({
      userId,
      amount: 2,
      reason: `Solved problem: ${questionId}`,
      activityType: 'language_problem',
      activityId: String(questionId)
    });

    const streakResult = dbService.recordDailyActivity({
      userId,
      activityType: 'language_problem',
      activityId: String(questionId)
    });

    user.xp = xpResult.currentXP || (user.xp + 2);
    user.streakDays = streakResult.currentStreak;

    // ---------------------------------------------------------
    // Update topic mastery
    // ---------------------------------------------------------
    if (topicId) {
      if (!user.topicStats[topicId]) {
        user.topicStats[topicId] = {
          passed: 0,
          total: 0,
          score: 0
        };
      }

      const stat =
        user.topicStats[topicId];

      stat.passed += 1;
      stat.total += 1;

      stat.score =
        calculateTopicMastery({
          successfulSubmissions:
            stat.passed,

          totalAttempts:
            stat.total,

          recentPassedRate: 1.0
        });

      /*
       * Keep the display list readable.
       * Store the canonical topic ID in topicStats,
       * but use a readable topic name for completedTopics.
       */
      const topicName =
        formatTopicName(topicId);

      if (
        !user.completedTopics.includes(
          topicName
        )
      ) {
        user.completedTopics.push(
          topicName
        );
      }
    }

    // ---------------------------------------------------------
    // Persist XP to Supabase profile
    // ---------------------------------------------------------
    if (
      isSupabaseConfigured() &&
      userId !== 'guest-learner'
    ) {
      try {
        const { error } =
          await supabase
            .from('profiles')
            .update({
              xp: user.xp,

              last_active_at:
                new Date().toISOString(),

              updated_at:
                new Date().toISOString()
            })
            .eq('id', userId);

        if (error) {
          console.warn(
            '[ProgressService] Profile update failed:',
            error.message
          );
        }
      } catch (error) {
        console.warn(
          '[ProgressService] Supabase profile update error:',
          error?.message || error
        );
      }
    }

    return {
      success: true,

      xpGained: 25,

      totalXp: user.xp,
      currentXP: user.xp,
      streak: user.streakDays,
      streakDays: user.streakDays,

      questionId,

      topicId,

      language
    };
  },

  /**
   * Record a mistake detected during code submission.
   */
  async recordMistake({
    userId = 'guest-learner',
    errorType = 'logical_error',
    summary = 'Unknown mistake',
    topic = 'Programming Fundamentals',
    questionId = null,
    language = 'python',
    submissionId = null,
    whatWentWrong = null,
    whyItHappened = null,
    conceptToReview = null,
    hintGiven = null
  }) {
    const user =
      getOrCreateUserTelemetry(userId);

    const mistake = {
      errorType,

      summary,

      topic,

      questionId,

      timestamp:
        new Date().toISOString()
    };

    user.recentMistakes.unshift(
      mistake
    );

    // Keep only the latest 10 mistakes.
    user.recentMistakes =
      user.recentMistakes.slice(0, 10);

    // ---------------------------------------------------------
    // Persist mistake when possible.
    //
    // We intentionally do not insert questionId/topicId here
    // when the current canonical IDs are not UUIDs.
    // ---------------------------------------------------------
    if (
      isSupabaseConfigured() &&
      userId !== 'guest-learner'
    ) {
      try {
        const payload = {
          user_id: userId,

          language_id: language,

          error_type: errorType,

          summary,

          what_went_wrong:
            whatWentWrong,

          why_it_happened:
            whyItHappened,

          concept_to_review:
            conceptToReview,

          hint_given:
            hintGiven
        };

        /*
         * Only attach submission_id if it is a valid
         * UUID. The database schema requires UUID.
         */
        if (
          submissionId &&
          isUuid(submissionId)
        ) {
          payload.submission_id =
            submissionId;
        }

        /*
         * question_id is intentionally omitted unless
         * it is a UUID. Canonical AI questions may have
         * application-level IDs.
         */
        if (
          questionId &&
          isUuid(questionId)
        ) {
          payload.question_id =
            questionId;
        }

        const { error } =
          await supabase
            .from('mistakes')
            .insert(payload);

        if (error) {
          console.warn(
            '[ProgressService] Mistake persistence failed:',
            error.message
          );
        }
      } catch (error) {
        console.warn(
          '[ProgressService] Mistake persistence error:',
          error?.message || error
        );
      }
    }

    return {
      success: true,

      mistake
    };
  },

  /**
   * Get runtime telemetry for internal services.
   */
  getTelemetry(userId = 'guest-learner') {
    return getOrCreateUserTelemetry(
      userId
    );
  },

  /**
   * Reset one learner's runtime telemetry.
   */
  resetTelemetry(
    userId = 'guest-learner'
  ) {
    return userTelemetryStore.delete(
      userId
    );
  }
};

/**
 * UUID validation helper.
 */
function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    String(value)
  );
}