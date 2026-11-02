import { Router } from 'express';
import { getLesson, generateLessonEndpoint } from '../controllers/lesson.controller.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// Protect all lesson content behind authenticated session
router.use(requireAuth);

// POST /api/lessons/generate
router.post('/generate', generateLessonEndpoint);

// GET /api/lessons/:topicId
router.get('/:topicId', getLesson);

export default router;
