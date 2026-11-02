import { Router } from 'express';
import { handleChatMessage } from '../controllers/chatbot.controller.js';
import { optionalAuth } from '../middleware/auth.js';
import { rateLimiter, validateBody } from '../middleware/validation.js';

const router = Router();

// POST /api/chat (Allows authenticated and guest users)
router.post(
  '/',
  optionalAuth,
  rateLimiter({ windowMs: 60000, max: 40, message: 'Chatbot rate limit reached. Please wait a moment.' }),
  validateBody(['message']),
  handleChatMessage
);

export default router;
