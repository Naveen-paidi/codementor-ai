import { Router } from 'express';
import { handleSubmitCode } from '../controllers/submission.controller.js';
import { requireAuth } from '../middleware/auth.js';
import { validateBody, rateLimiter } from '../middleware/validation.js';

const router = Router();

// POST /api/submit
router.post(
  '/',
  requireAuth,
  rateLimiter({ windowMs: 30000, max: 20, message: 'Submission rate limit reached. Please test your code before submitting.' }),
  validateBody(['questionId', 'language', 'code']),
  handleSubmitCode
);

export default router;
