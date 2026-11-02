import { Router } from 'express';
import {
  handleExplainConcept,
  handleReviewCode,
  handleGeneratePractice,
  handleProblemDoubt,
} from '../controllers/ai.controller.js';
import { rateLimiter } from '../middleware/validation.js';

const router = Router();

// POST /api/ai/explain
router.post(
  '/explain',
  rateLimiter({ windowMs: 60000, max: 30, message: 'AI explanation rate limit reached.' }),
  handleExplainConcept
);

// POST /api/ai/review
router.post(
  '/review',
  rateLimiter({ windowMs: 60000, max: 30, message: 'AI code review rate limit reached.' }),
  handleReviewCode
);

// POST /api/ai/problem-doubt
router.post(
  '/problem-doubt',
  rateLimiter({ windowMs: 60000, max: 30, message: 'AI doubt assistance rate limit reached.' }),
  handleProblemDoubt
);

// POST /api/ai/practice
router.post(
  '/practice',
  rateLimiter({ windowMs: 60000, max: 20, message: 'AI practice generation rate limit reached.' }),
  handleGeneratePractice
);

export default router;
