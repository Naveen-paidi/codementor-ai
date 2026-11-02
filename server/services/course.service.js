/**
 * Course Service
 * Serves canonical curriculum exclusively from local JavaScript modules.
 * Zero external API calls, zero database dependencies, zero Gemini calls.
 */

import {
  courses,
  topicsById,
  topicsBySlug,
  linearTopicSequence,
  problemsByTopicId,
  getPublicCodingProblem
} from '../curriculum/index.js';

export const courseService = {
  /**
   * Get all available courses with metadata.
   */
  async getAllCourses() {
    return Object.values(courses).map(c => ({
      id: c.id,
      title: c.title,
      name: c.title,
      slug: c.slug,
      tagline: c.tagline,
      description: c.description,
      icon: c.icon,
      levelCount: c.levels.length,
      levels: c.levels.map(l => ({
        id: l.id,
        title: l.title,
        level: l.level,
        difficulty: l.difficulty,
        moduleCount: l.modules.length
      })),
      is_active: true
    }));
  },

  /**
   * Alias for backward compatibility with existing controllers/routes.
   */
  async getAllLanguages() {
    return this.getAllCourses();
  },

  /**
   * Get complete structured course curriculum for a language.
   * @param {string} languageId
   */
  async getCourse(languageId) {
    if (!languageId) return null;
    const key = String(languageId).trim().toLowerCase();
    const course = courses[key];
    if (!course) return null;

    // Return sanitized deep clone with topics and public coding problem summaries
    return {
      id: course.id,
      title: course.title,
      name: course.title,
      slug: course.slug,
      icon: course.icon,
      tagline: course.tagline,
      description: course.description,
      levels: course.levels.map(lvl => ({
        id: lvl.id,
        title: lvl.title,
        level: lvl.level,
        difficulty: lvl.difficulty,
        description: lvl.description,
        modules: lvl.modules.map(mod => {
          const modTopics = (mod.topics || []).map(t => {
            const rawProblems = problemsByTopicId.get(t.id) || [];
            const pList = Array.isArray(rawProblems) ? rawProblems : (rawProblems ? [rawProblems] : []);
            return {
              id: t.id,
              title: t.title,
              slug: t.slug,
              description: t.description,
              difficulty: t.difficulty,
              estimatedMinutes: t.estimatedMinutes,
              problemCount: pList.length,
              hasCodingProblem: pList.length > 0,
              codingProblem: pList.length > 0 ? getPublicCodingProblem(pList[0]) : null,
              codingProblems: pList.map(p => getPublicCodingProblem(p))
            };
          });

          const sections = (mod.sections || []).map(sec => ({
            id: sec.id,
            title: sec.title,
            topics: (sec.topics || []).map(st => {
              const fullTopic = topicsById.get(st.id) || st;
              const rawProblems = problemsByTopicId.get(st.id) || [];
              const pList = Array.isArray(rawProblems) ? rawProblems : (rawProblems ? [rawProblems] : []);
              return {
                id: fullTopic.id,
                title: fullTopic.title,
                slug: fullTopic.slug || st.id,
                description: fullTopic.description,
                difficulty: fullTopic.difficulty,
                estimatedMinutes: fullTopic.estimatedMinutes,
                problemCount: pList.length,
                hasCodingProblem: pList.length > 0,
                codingProblem: pList.length > 0 ? getPublicCodingProblem(pList[0]) : null,
                codingProblems: pList.map(p => getPublicCodingProblem(p))
              };
            })
          }));

          return {
            id: mod.id,
            title: mod.title,
            order: mod.order,
            description: mod.description,
            sections: sections.length > 0 ? sections : undefined,
            topics: modTopics
          };
        })
      }))
    };
  },

  /**
   * Alias for backward compatibility.
   */
  async getCourseByLanguage(language) {
    return this.getCourse(language);
  },

  /**
   * Get levels for a language course.
   */
  async getLevels(languageId) {
    const course = await this.getCourse(languageId);
    return course ? course.levels : [];
  },

  /**
   * Get modules for a specific language and level.
   */
  async getModules(languageId, levelId) {
    const levels = await this.getLevels(languageId);
    const targetLevel = levels.find(l => l.id === levelId || String(l.level) === String(levelId));
    return targetLevel ? targetLevel.modules : [];
  },

  /**
   * Get sections inside a module if present.
   */
  async getSections(languageId, levelId, moduleId) {
    const modules = await this.getModules(languageId, levelId);
    const targetMod = modules.find(m => m.id === moduleId);
    return targetMod && targetMod.sections ? targetMod.sections : [];
  },

  /**
   * Get topics for a specific module or section.
   */
  async getTopics(languageId, levelId, moduleId, sectionId = null) {
    const modules = await this.getModules(languageId, levelId);
    const targetMod = modules.find(m => m.id === moduleId);
    if (!targetMod) return [];

    if (sectionId && targetMod.sections) {
      const sec = targetMod.sections.find(s => s.id === sectionId);
      return sec ? sec.topics : [];
    }

    return targetMod.topics || [];
  },

  /**
   * Find topic by ID (O(1) in-memory lookup).
   */
  async getTopicById(topicId) {
    if (!topicId) return null;
    const normalizedId = String(topicId).trim();
    const topic = topicsById.get(normalizedId) || topicsBySlug.get(normalizedId);
    if (!topic) return null;

    const problem = problemsByTopicId.get(topic.id);
    return {
      language: topic.languageId,
      languageId: topic.languageId,
      levelId: topic.levelId,
      moduleId: topic.moduleId,
      topic: {
        ...topic,
        codingProblem: problem ? getPublicCodingProblem(problem) : null
      }
    };
  },

  /**
   * Find topic by slug.
   */
  async getTopicBySlug(slug) {
    if (!slug) return null;
    return this.getTopicById(slug);
  },

  /**
   * Get full educational lesson content for a topic.
   */
  async getLesson(topicId) {
    const topicData = await this.getTopicById(topicId);
    if (!topicData) return null;

    const t = topicData.topic;
    return {
      id: t.id,
      title: t.title,
      slug: t.slug,
      description: t.description,
      languageId: topicData.languageId,
      levelId: topicData.levelId,
      moduleId: topicData.moduleId,
      learningObjectives: t.learningObjectives || [],
      prerequisites: t.prerequisites || [],
      conceptSummary: t.conceptSummary || '',
      detailedExplanation: t.detailedExplanation || '',
      syntaxExplanation: t.syntaxExplanation || '',
      howItWorks: t.howItWorks || [],
      examples: t.examples || [],
      commonMistakes: t.commonMistakes || [],
      quickChecks: t.quickChecks || [],
      practiceQuestions: t.practiceQuestions || [],
      difficulty: t.difficulty || 'beginner',
      estimatedMinutes: t.estimatedMinutes || 15
    };
  },

  /**
   * Get coding problem attached to a topic (public version only).
   */
  async getCodingProblem(topicId) {
    if (!topicId) return null;
    const problem = problemsByTopicId.get(topicId);
    if (!problem) return null;
    return getPublicCodingProblem(problem);
  },

  /**
   * Get full private coding problem for execution engine (backend internal only).
   */
  async getInternalCodingProblem(topicIdOrProblemId) {
    if (!topicIdOrProblemId) return null;
    return problemsByTopicId.get(topicIdOrProblemId) || null;
  },

  /**
   * Get sequential next topic for smooth curriculum progression.
   */
  async getNextTopic(topicId) {
    const index = linearTopicSequence.findIndex(t => t.id === topicId || t.slug === topicId);
    if (index === -1 || index >= linearTopicSequence.length - 1) return null;
    const next = linearTopicSequence[index + 1];
    return {
      id: next.id,
      title: next.title,
      slug: next.slug,
      languageId: next.languageId
    };
  },

  /**
   * Get sequential previous topic.
   */
  async getPreviousTopic(topicId) {
    const index = linearTopicSequence.findIndex(t => t.id === topicId || t.slug === topicId);
    if (index <= 0) return null;
    const prev = linearTopicSequence[index - 1];
    return {
      id: prev.id,
      title: prev.title,
      slug: prev.slug,
      languageId: prev.languageId
    };
  }
};

export default courseService;