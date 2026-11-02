import { courseService } from '../services/course.service.js';

export const getAllCourses = async (req, res, next) => {
  try {
    const courses = await courseService.getAllCourses();
    res.json({
      success: true,
      count: courses.length,
      courses,
      languages: courses // Alias for backward compatibility
    });
  } catch (error) {
    next(error);
  }
};

export const getAllLanguages = getAllCourses;

export const getCourseByLanguage = async (req, res, next) => {
  try {
    const { language } = req.params;
    const course = await courseService.getCourse(language);
    if (!course) {
      return res.status(404).json({ success: false, error: `Language course "${language}" not found.` });
    }
    res.json({ success: true, course });
  } catch (error) {
    next(error);
  }
};

export const getLevelDetails = async (req, res, next) => {
  try {
    const { language, levelId } = req.params;
    const levels = await courseService.getLevels(language);
    const level = levels.find(l => l.id === levelId || String(l.level) === String(levelId));
    if (!level) {
      return res.status(404).json({ success: false, error: `Level "${levelId}" not found for "${language}".` });
    }
    res.json({ success: true, level });
  } catch (error) {
    next(error);
  }
};

export const getTopicDetails = async (req, res, next) => {
  try {
    const { topicId } = req.params;
    const topicData = await courseService.getTopicById(topicId);
    if (!topicData) {
      return res.status(404).json({ success: false, error: `Topic "${topicId}" not found.` });
    }
    res.json({ success: true, ...topicData });
  } catch (error) {
    next(error);
  }
};

export const getTopicCodingProblem = async (req, res, next) => {
  try {
    const { topicId } = req.params;
    const problem = await courseService.getCodingProblem(topicId);
    if (!problem) {
      return res.status(404).json({ success: false, error: `No coding problem configured for topic "${topicId}".` });
    }
    res.json({ success: true, problem });
  } catch (error) {
    next(error);
  }
};

export const getNextTopic = async (req, res, next) => {
  try {
    const { topicId } = req.params;
    const nextTopic = await courseService.getNextTopic(topicId);
    res.json({ success: true, nextTopic });
  } catch (error) {
    next(error);
  }
};

export const getPreviousTopic = async (req, res, next) => {
  try {
    const { topicId } = req.params;
    const previousTopic = await courseService.getPreviousTopic(topicId);
    res.json({ success: true, previousTopic });
  } catch (error) {
    next(error);
  }
};
