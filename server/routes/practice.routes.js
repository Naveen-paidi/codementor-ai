import { Router } from 'express';
import {
  getQuestions,
  getPracticeHierarchy,
  getQuestionById,
  handleRunSampleTests,
  handleSubmitPractice,
  generateAIQuestion
} from '../controllers/practice.controller.js';
import { validateBody, rateLimiter } from '../middleware/validation.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// GET /api/practice
router.get('/', getQuestions);

// GET /api/practice/hierarchy (Public syllabus overview)
router.get('/hierarchy', getPracticeHierarchy);

// POST /api/practice/run (Protected: Run sample tests)
router.post(
  '/run',
  requireAuth,
  rateLimiter({ windowMs: 30000, max: 40, message: 'Too many test runs. Please wait a moment.' }),
  handleRunSampleTests
);

// POST /api/practice/submit (Protected: Run all 10 test cases)
router.post(
  '/submit',
  requireAuth,
  rateLimiter({ windowMs: 30000, max: 30, message: 'Too many submissions. Please wait a moment.' }),
  handleSubmitPractice
);

// GET /api/practice/:id
router.get('/:id', getQuestionById);

// POST /api/practice/generate (Protected)
router.post('/generate', requireAuth, validateBody(['language', 'topicTitle']), generateAIQuestion);

export default router;
