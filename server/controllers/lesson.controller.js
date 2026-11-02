import { lessonService } from '../services/lesson.service.js';

export const getLesson = async (req, res, next) => {
  try {
    const { topicId, lessonId } = req.params;
    const targetId = topicId || lessonId;
    const { language, regenerate } = req.query;
    const forceRegenerate = regenerate === 'true';

    const result = await lessonService.getLessonByTopicId(targetId, language, forceRegenerate);

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const generateLessonEndpoint = async (req, res, next) => {
  try {
    const { topicId, language, forceRegenerate } = req.body;
    if (!topicId) {
      return res.status(400).json({ success: false, error: 'topicId is required in request body.' });
    }

    const result = await lessonService.getLessonByTopicId(topicId, language, Boolean(forceRegenerate));

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};
