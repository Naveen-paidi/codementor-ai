import { Router } from 'express';
import {
  getAllCourses,
  getCourseByLanguage,
  getLevelDetails,
  getTopicDetails,
  getTopicCodingProblem,
  getNextTopic,
  getPreviousTopic
} from '../controllers/course.controller.js';

import { requireAuth } from '../middleware/auth.js';

const router = Router();

// GET /api/courses (Public course directory & overview)
router.get('/', getAllCourses);

// Topic routes — Protected: requires authenticated session to access full lesson content
router.get('/topics/:topicId', requireAuth, getTopicDetails);
router.get('/topics/:topicId/coding-problem', requireAuth, getTopicCodingProblem);
router.get('/topics/:topicId/next', requireAuth, getNextTopic);
router.get('/topics/:topicId/prev', requireAuth, getPreviousTopic);

// Language course routes
router.get('/:language', getCourseByLanguage);
router.get('/:language/:levelId', getLevelDetails);

export default router;
