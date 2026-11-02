import {
  explainConcept,
  answerDoubt
} from '../ai/tutorAgent.js';

import { reviewFailedCode } from '../ai/codeReviewerAgent.js';
import { generatePracticeQuestion } from '../ai/practiceAgent.js';
import { answerProblemDoubt } from '../ai/doubtAgent.js';


/**
 * POST /api/ai/explain
 *
 * Explain a programming concept using OpenRouter.
 */
export const handleExplainConcept = async (
  req,
  res,
  next
) => {
  try {
    const {
      topicTitle,
      topicId = '',
      language = 'python',
      studentLevel = 'beginner',
      query = '',
      currentCode = ''
    } = req.body || {};

    if (!topicTitle && !query) {
      return res.status(400).json({
        success: false,
        error:
          'topicTitle or query is required.'
      });
    }

    /*
     * Use the dedicated concept explanation flow when
     * a topic is supplied.
     */
    if (topicTitle) {
      const result =
        await explainConcept({
          topicTitle,
          topicId,
          language,
          studentLevel,
          currentCode
        });

      return res.json(result);
    }

    /*
     * If the request is a free-form doubt rather than
     * a specific concept explanation, use answerDoubt().
     */
    const result = await answerDoubt({
      message: query,

      context: {
        language,
        topicTitle: '',
        topicId,
        studentLevel,
        currentCode
      }
    });

    return res.json(result);

  } catch (error) {
    next(error);
  }
};


/**
 * POST /api/ai/review
 *
 * Review student code with 10-point educational feedback.
 */
export const handleReviewCode = async (
  req,
  res,
  next
) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        error: 'Request body is required.'
      });
    }

    const result =
      await reviewFailedCode(req.body);

    return res.json(result);

  } catch (error) {
    next(error);
  }
};


/**
 * POST /api/ai/problem-doubt
 *
 * Answer a doubt directly tied to a specific coding problem,
 * student's code, review results, and chat history.
 */
export const handleProblemDoubt = async (
  req,
  res,
  next
) => {
  try {
    const {
      question,
      problemTitle,
      problemStatement,
      language,
      userCode,
      code,
      reviewResult,
      review,
      history
    } = req.body || {};

    if (!question || !String(question).trim()) {
      return res.status(400).json({
        success: false,
        error: 'Question is required.'
      });
    }

    const result = await answerProblemDoubt({
      question,
      problemTitle,
      problemStatement,
      language,
      userCode: userCode || code,
      reviewResult: reviewResult || review,
      history: history || []
    });

    return res.json(result);

  } catch (error) {
    next(error);
  }
};


/**
 * POST /api/ai/practice
 *
 * Generate a dynamic programming practice
 * question using OpenRouter.
 */
export const handleGeneratePractice = async (
  req,
  res,
  next
) => {
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

    const result =
      await generatePracticeQuestion({
        language,
        topicTitle,
        topicId,
        difficulty,
        studentLevel,
        previousMistakes,
        learningObjectives
      });

    return res.json(result);

  } catch (error) {
    next(error);
  }
};