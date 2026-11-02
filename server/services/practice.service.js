import { generatePracticeQuestion } from '../ai/practiceAgent.js';
import { courseService } from './course.service.js';
import {
  codingProblems,
  problemsById,
  problemsByTopicId,
  getPublicCodingProblem
} from '../curriculum/codingProblems.js';
import { courses } from '../curriculum/index.js';
import { executeCode } from './execution/executor.js';
import { submissionService } from './submission.service.js';
import {
  supabase,
  isSupabaseConfigured
} from '../config/supabase.js';

/**
 * Runtime cache for dynamically generated practice questions.
 */
const questionMemoryStore = new Map();

/**
 * Normalise language.
 */
const normalizeLanguage = (language) => {
  return String(language || 'python')
    .trim()
    .toLowerCase();
};

/**
 * Normalise difficulty.
 */
const normalizeDifficulty = (difficulty) => {
  const value = String(difficulty || 'easy')
    .trim()
    .toLowerCase();

  const allowed = ['easy', 'medium', 'hard'];

  return allowed.includes(value)
    ? value
    : 'easy';
};

/**
 * Build cache key.
 */
const buildCacheKey = (
  language,
  topicId,
  difficulty
) => {
  return [
    normalizeLanguage(language),
    topicId || 'general',
    normalizeDifficulty(difficulty)
  ].join(':');
};

/**
 * Normalize output before comparison (handling linebreaks and trailing whitespace).
 */
const normalizeOutput = (value) => {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .trim();
};

export const practiceService = {
  /**
   * Get practice questions for a language/topic/difficulty.
   */
  async getQuestions({
    language,
    topicId,
    difficulty = 'easy'
  }) {
    const langKey = normalizeLanguage(language);
    const normalizedDifficulty = normalizeDifficulty(difficulty);

    // ---------------------------------------------------------
    // 0. Check local canonical coding problems first
    // ---------------------------------------------------------
    let localMatches = codingProblems.filter(p => {
      const matchesLang = !langKey || p.languageId === langKey;
      const matchesTopic = !topicId || p.topicId === topicId;
      return matchesLang && matchesTopic;
    });

    // If no direct topic match, but language matches, return language problems
    if (localMatches.length === 0 && langKey) {
      localMatches = codingProblems.filter(p => p.languageId === langKey);
    }

    if (localMatches.length > 0) {
      return {
        success: true,
        fromCache: false,
        source: 'canonical-curriculum',
        questions: localMatches.map(p => getPublicCodingProblem(p, langKey))
      };
    }

    // ---------------------------------------------------------
    // 1. Check memory cache
    // ---------------------------------------------------------
    const cacheKey = buildCacheKey(langKey, topicId, normalizedDifficulty);
    const cachedQuestions = questionMemoryStore.get(cacheKey);

    if (Array.isArray(cachedQuestions) && cachedQuestions.length > 0) {
      return {
        success: true,
        fromCache: true,
        source: 'memory-cache',
        questions: cachedQuestions
      };
    }

    // ---------------------------------------------------------
    // 2. Resolve topic metadata and generate fallback with Gemini
    // ---------------------------------------------------------
    let topicTitle = 'Programming Practice';
    let learningObjectives = [];

    if (topicId) {
      const topicInfo = await courseService.getTopicById(topicId, langKey);
      if (topicInfo?.topic) {
        topicTitle = topicInfo.topic.title || topicTitle;
        learningObjectives = Array.isArray(topicInfo.topic.learningObjectives)
          ? topicInfo.topic.learningObjectives
          : [];
      }
    }

    try {
      const generatedResult = await generatePracticeQuestion({
        language: langKey,
        topicTitle,
        topicId: topicId || '',
        difficulty: normalizedDifficulty,
        learningObjectives
      });

      if (generatedResult?.success && generatedResult.question) {
        const newQuestion = generatedResult.question;
        const questionsList = [newQuestion];
        questionMemoryStore.set(cacheKey, questionsList);

        return {
          success: true,
          fromCache: false,
          source: 'openrouter-ai',
          questions: questionsList
        };
      }
    } catch (error) {
      console.warn('[PracticeService] OpenRouter fallback generation error:', error?.message);
    }

    // Default to any available coding problem
    return {
      success: true,
      fromCache: false,
      source: 'canonical-curriculum',
      questions: codingProblems.slice(0, 3).map(p => getPublicCodingProblem(p, langKey))
    };
  },

  /**
   * Get one question by ID.
   * If includeHidden is false (default), strips hidden test cases.
   */
  async getQuestionById(questionId, { includeHidden = false, language = null } = {}) {
    if (!questionId) {
      return {
        success: false,
        error: 'questionId is required.'
      };
    }

    // 0. Search local canonical coding problems
    const canonical = problemsById.get(questionId);
    if (canonical) {
      return {
        success: true,
        source: 'canonical-curriculum',
        question: includeHidden ? canonical : getPublicCodingProblem(canonical, language)
      };
    }

    // 1. Search runtime cache
    for (const questions of questionMemoryStore.values()) {
      if (!Array.isArray(questions)) continue;
      const found = questions.find(q => String(q.id) === String(questionId));
      if (found) {
        return {
          success: true,
          question: found
        };
      }
    }

    return {
      success: false,
      error: `Question with ID "${questionId}" was not found.`
    };
  },

  /**
   * Run ONLY the 3 sample/public test cases for quick debugging/experimentation.
   */
  async runSampleTests({ questionId, language = 'python', code = '' }) {
    if (!questionId) {
      throw new Error('questionId is required for running sample tests.');
    }
    if (!code || typeof code !== 'string' || !code.trim()) {
      throw new Error('Source code cannot be empty.');
    }

    const problem = problemsById.get(questionId);
    if (!problem) {
      throw new Error(`Problem with ID "${questionId}" not found.`);
    }

    // Extract ONLY visible/sample test cases (maximum 3)
    const sampleTests = (problem.testCases || []).filter(tc => !tc.isHidden).slice(0, 3);
    if (sampleTests.length === 0) {
      throw new Error('No sample test cases configured for this problem.');
    }

    let allPassed = true;
    let totalExecutionTime = 0;
    const testResults = [];

    for (let i = 0; i < sampleTests.length; i++) {
      const tc = sampleTests[i];
      let executionResult;

      try {
        executionResult = await executeCode(language, code, tc.input);
      } catch (err) {
        executionResult = {
          success: false,
          stdout: '',
          stderr: err?.message || 'Execution failed',
          executionTime: 0,
          isCompilationError: false
        };
      }

      const execTime = Number(executionResult?.executionTime || 0);
      totalExecutionTime += execTime;

      if (executionResult?.isCompilationError) {
        allPassed = false;
        testResults.push({
          testCaseIndex: i + 1,
          id: tc.id,
          passed: false,
          input: tc.input,
          expectedOutput: tc.expectedOutput,
          actualOutput: '',
          executionTime: execTime,
          error: executionResult.stderr || 'Compilation Error',
          isCompilationError: true
        });
        break;
      }

      const actualOut = normalizeOutput(executionResult?.stdout);
      const expectedOut = normalizeOutput(tc.expectedOutput);
      const passed = Boolean(executionResult?.success) && actualOut === expectedOut;

      if (!passed) {
        allPassed = false;
      }

      testResults.push({
        testCaseIndex: i + 1,
        id: tc.id,
        passed,
        input: tc.input,
        expectedOutput: tc.expectedOutput,
        actualOutput: executionResult?.stdout || '',
        executionTime: execTime,
        error: executionResult?.stderr || null
      });
    }

    return {
      success: true,
      allPassed,
      totalTests: sampleTests.length,
      passedTests: testResults.filter(r => r.passed).length,
      executionTime: totalExecutionTime,
      testResults
    };
  },

  /**
   * Submit student code for authoritative evaluation across ALL 10 test cases.
   */
  async submitSolution({ userId = 'guest-learner', questionId, language, code, attemptNumber = 1 }) {
    return submissionService.submitSolution({
      userId,
      questionId,
      language,
      code,
      attemptNumber
    });
  },

  /**
   * Get complete hierarchical practice structure for a language:
   * Language -> Levels -> Topics -> Coding Problems (with count & metadata).
   */
  async getHierarchy(language = 'python') {
    const langKey = normalizeLanguage(language);
    const course = courses[langKey];
    if (!course) {
      return {
        success: false,
        error: `Language '${language}' is not supported.`
      };
    }

    const levels = (course.levels || []).map(lvl => {
      const allTopics = [];
      for (const mod of lvl.modules || []) {
        if (Array.isArray(mod.topics)) {
          allTopics.push(...mod.topics);
        } else if (Array.isArray(mod.sections)) {
          for (const s of mod.sections) {
            if (Array.isArray(s.topics)) allTopics.push(...s.topics);
          }
        }
      }

      const topics = allTopics
        .map(t => {
          const raw = problemsByTopicId.get(t.id) || [];
          const pList = Array.isArray(raw) ? raw : [raw];
          const publicProblems = pList.map(p => getPublicCodingProblem(p, langKey));

          return {
            id: t.id,
            title: t.title,
            slug: t.slug,
            description: t.description,
            difficulty: t.difficulty || lvl.difficulty || 'beginner',
            problemCount: publicProblems.length,
            problems: publicProblems
          };
        })
        .filter(t => t.problemCount > 0);

      const totalProblems = topics.reduce((sum, t) => sum + t.problemCount, 0);

      return {
        id: lvl.id,
        level: lvl.level,
        title: lvl.title,
        difficulty: lvl.difficulty,
        description: lvl.description,
        totalTopics: topics.length,
        totalProblems,
        topics
      };
    });

    const totalProblems = levels.reduce((sum, l) => sum + l.totalProblems, 0);
    const totalTopics = levels.reduce((sum, l) => sum + l.totalTopics, 0);

    return {
      success: true,
      language: langKey,
      languageTitle: course.title,
      totalTopics,
      totalProblems,
      levels
    };
  },

  /**
   * Generate an additional practice question via AI.
   */
  async generateQuestion(data) {
    const langKey = normalizeLanguage(data.language);
    const normalizedDifficulty = normalizeDifficulty(data.difficulty || 'medium');

    const generatedResult = await generatePracticeQuestion({
      language: langKey,
      topicTitle: data.topicTitle || 'Programming Practice',
      topicId: data.topicId || '',
      difficulty: normalizedDifficulty,
      studentLevel: data.studentLevel || 'intermediate',
      previousMistakes: data.previousMistakes || []
    });

    if (generatedResult?.success && generatedResult.question) {
      const cacheKey = buildCacheKey(langKey, data.topicId, normalizedDifficulty);
      const existing = questionMemoryStore.get(cacheKey) || [];
      questionMemoryStore.set(cacheKey, [generatedResult.question, ...existing]);
      return { success: true, question: generatedResult.question };
    }

    return generatedResult;
  }
};