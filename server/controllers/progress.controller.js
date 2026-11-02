import { progressService } from '../services/progress.service.js';

export const getUserProgress = async (req, res, next) => {
  try {
    const userId = req.user?.id || 'guest-learner';
    const language = req.query.language || 'python';
    const data = await progressService.getUserProgress(userId, language);
    res.json({ success: true, ...data });
  } catch (error) {
    next(error);
  }
};

export const getRecommendations = async (req, res, next) => {
  try {
    const userId = req.user?.id || 'guest-learner';
    const language = req.query.language || 'python';
    const data = await progressService.getRecommendations(userId, language);
    res.json({ success: true, recommendations: data.recommendations });
  } catch (error) {
    next(error);
  }
};

export const logMistake = async (req, res, next) => {
  try {
    const userId = req.user?.id || 'guest-learner';
    const { errorType, summary, topic, questionId } = req.body;
    await progressService.recordMistake({ userId, errorType, summary, topic, questionId });
    res.json({ success: true, message: 'Mistake logged successfully.' });
  } catch (error) {
    next(error);
  }
};
