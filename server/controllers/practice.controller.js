import { practiceService } from '../services/practice.service.js';

/**
 * GET /api/practice
 *
 * Get practice questions for a language/topic.
 * Returns only public data and sample test cases.
 */
export const getQuestions = async (req, res, next) => {
  try {
    const {
      language = 'python',
      topicId = '',
      difficulty = ''
    } = req.query || {};

    const result = await practiceService.getQuestions({
      language,
      topicId,
      difficulty
    });

    if (!result.success) {
      return res.status(400).json(result);
    }

    return res.json({
      success: true,
      count: result.questions?.length || 0,
      source: result.source || 'unknown',
      fromCache: Boolean(result.fromCache),
      questions: result.questions || []
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/practice/hierarchy
 *
 * Get structured practice hierarchy for a language:
 * Language -> Levels -> Topics -> Coding Problems.
 */
export const getPracticeHierarchy = async (req, res, next) => {
  try {
    const { language = 'python' } = req.query;
    const result = await practiceService.getHierarchy(language);

    if (!result.success) {
      return res.status(404).json(result);
    }

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/practice/:id
 *
 * Get a single practice question by ID (sanitized with only sample test cases).
 */
export const getQuestionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { language } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Question ID is required.'
      });
    }

    const result = await practiceService.getQuestionById(id, { includeHidden: false, language });

    if (!result.success) {
      return res.status(404).json(result);
    }

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/practice/run
 *
 * Execute ONLY the 3 sample test cases.
 * Does NOT run or expose hidden tests.
 */
export const handleRunSampleTests = async (req, res, next) => {
  try {
    const { questionId, problemId, language = 'python', code, sourceCode } = req.body;
    const qId = questionId || problemId;
    const src = code || sourceCode;

    if (!qId || !src) {
      return res.status(400).json({
        success: false,
        error: 'questionId and code are required.'
      });
    }

    const result = await practiceService.runSampleTests({
      questionId: qId,
      language,
      code: src
    });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/practice/submit
 *
 * Execute ALL 10 test cases (3 visible + 7 hidden) on the backend.
 */
export const handleSubmitPractice = async (req, res, next) => {
  try {
    const { questionId, problemId, language = 'python', code, sourceCode, attemptNumber = 1 } = req.body;
    const qId = questionId || problemId;
    const src = code || sourceCode;
    const userId = req.user?.id || 'guest-learner';

    if (!qId || !src) {
      return res.status(400).json({
        success: false,
        error: 'questionId and code are required.'
      });
    }

    const result = await practiceService.submitSolution({
      userId,
      questionId: qId,
      language,
      code: src,
      attemptNumber: Number(attemptNumber) || 1
    });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/practice/generate
 *
 * Generate a new AI-powered practice question.
 */
export const generateAIQuestion = async (req, res, next) => {
  try {
    const {
      language = 'python',
      topicTitle = 'Programming Fundamentals',
      topicId = '',
      difficulty = 'easy',
      studentLevel = 'beginner',
      previousMistakes = [],
      learningObjectives = []
    } = req.body || {};

    if (!topicTitle && !topicId) {
      return res.status(400).json({
        success: false,
        error: 'topicTitle or topicId is required.'
      });
    }

    const result = await practiceService.generateQuestion({
      language,
      topicTitle,
      topicId,
      difficulty,
      studentLevel,
      previousMistakes,
      learningObjectives
    });

    if (!result.success) {
      return res.status(400).json(result);
    }

    return res.json(result);
  } catch (error) {
    next(error);
  }
};