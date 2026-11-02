import { Router } from 'express';
import { handleExecuteCode } from '../controllers/execute.controller.js';
import { validateBody, rateLimiter } from '../middleware/validation.js';

const router = Router();

// POST /api/execute (Rate limited to prevent denial of service)
router.post(
  '/',
  rateLimiter({ windowMs: 30000, max: 40, message: 'Execution rate limit exceeded. Please wait a moment.' }),
  validateBody(['language', 'code']),
  handleExecuteCode
);

export default router;
