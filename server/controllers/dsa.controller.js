/**
 * DSA Controller
 * Handles incoming REST requests for the DSA module, validates parameters,
 * routes execution to DSAService, and ensures private test cases remain server-side.
 */

import { DSAService } from '../dsa/dsa.service.js';

export const getProblems = async (req, res) => {
  try {
    const { topic, difficulty, status, search, sortBy, sortOrder } = req.query;
    const userId = req.user?.id || 'guest-learner';

    const problems = await DSAService.getProblems({
      userId,
      topic,
      difficulty,
      status,
      search,
      sortBy,
      sortOrder
    });

    res.json({
      success: true,
      count: problems.length,
      data: problems
    });
  } catch (error) {
    console.error('[DSAController.getProblems] Error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to retrieve DSA problems' });
  }
};

export const getProblemById = async (req, res) => {
  try {
    const { problemId } = req.params;
    const userId = req.user?.id || 'guest-learner';

    const problem = await DSAService.getProblemDetails(problemId, userId);
    if (!problem) {
      return res.status(404).json({ success: false, error: `DSA Problem "${problemId}" not found` });
    }

    res.json({
      success: true,
      data: problem
    });
  } catch (error) {
    console.error('[DSAController.getProblemById] Error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to retrieve problem details' });
  }
};

export const getTopics = async (req, res) => {
  try {
    const userId = req.user?.id || 'guest-learner';
    const topics = await DSAService.getTopicProgress(userId);

    res.json({
      success: true,
      count: topics.length,
      data: topics
    });
  } catch (error) {
    console.error('[DSAController.getTopics] Error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to retrieve topic progress' });
  }
};

export const getStats = async (req, res) => {
  try {
    const userId = req.user?.id || 'guest-learner';
    const stats = await DSAService.getUserStats(userId);

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('[DSAController.getStats] Error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to calculate DSA stats' });
  }
};

export const getHeatmap = async (req, res) => {
  try {
    const userId = req.user?.id || 'guest-learner';
    const heatmap = await DSAService.getHeatmap(userId);

    res.json({
      success: true,
      data: heatmap
    });
  } catch (error) {
    console.error('[DSAController.getHeatmap] Error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to retrieve activity heatmap' });
  }
};

export const getDayDetails = async (req, res) => {
  try {
    const { date } = req.params;
    const userId = req.user?.id || 'guest-learner';

    const dayDetails = await DSAService.getDayDetails(userId, date);
    res.json({
      success: true,
      data: dayDetails
    });
  } catch (error) {
    console.error('[DSAController.getDayDetails] Error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to retrieve day details' });
  }
};

export const runSampleTests = async (req, res) => {
  try {
    const { problemId, language, code } = req.body;
    if (!problemId || !language || !code) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters: problemId, language, and code are required'
      });
    }

    const result = await DSAService.runCode({ problemId, language, code });
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('[DSAController.runSampleTests] Error:', error.message);
    res.status(500).json({ success: false, error: error.message || 'Execution failed' });
  }
};

export const submitSolution = async (req, res) => {
  try {
    const { problemId, language, code } = req.body;
    const userId = req.user?.id || 'guest-learner';

    if (!problemId || !language || !code) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters: problemId, language, and code are required'
      });
    }

    const result = await DSAService.submitCode({
      userId,
      problemId,
      language,
      code
    });

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('[DSAController.submitSolution] Error:', error.message);
    res.status(500).json({ success: false, error: error.message || 'Submission failed' });
  }
};

export const getProblemSubmissions = async (req, res) => {
  try {
    const { problemId } = req.params;
    const userId = req.user?.id || 'guest-learner';

    const submissions = await DSAService.getUserSubmissionsForProblem(userId, problemId);
    res.json({
      success: true,
      count: submissions.length,
      data: submissions
    });
  } catch (error) {
    console.error('[DSAController.getProblemSubmissions] Error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to retrieve submissions' });
  }
};

export const getAIReview = async (req, res) => {
  try {
    const { problemId, language, code, errorSummary, status } = req.body;
    if (!problemId || !language || !code) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters: problemId, language, and code are required'
      });
    }

    const review = await DSAService.getAIReview({
      problemId,
      language,
      code,
      errorSummary,
      status: status || 'Submitted'
    });

    res.json({
      success: true,
      data: review
    });
  } catch (error) {
    console.error('[DSAController.getAIReview] Error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to generate AI code review' });
  }
};
