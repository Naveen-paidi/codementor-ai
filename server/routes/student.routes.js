import { Router } from 'express';
import {
  getDashboard,
  enrollInCourse,
  getMyEnrollments,
  completeTopic,
  getTopicStatus,
  getCourseCompletedTopics
} from '../controllers/student.controller.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.use(requireAuth);

router.get('/dashboard', getDashboard);
router.post('/enroll', enrollInCourse);
router.get('/enrollments', getMyEnrollments);
router.post('/complete-topic', completeTopic);
router.get('/topic-status/:courseId/:topicId', getTopicStatus);
router.get('/courses/:courseId/completed-topics', getCourseCompletedTopics);

export default router;
