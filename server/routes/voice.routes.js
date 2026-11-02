import { Router } from 'express';
import {
  handleTranscribe,
  handleSynthesize,
  getVoices
} from '../controllers/voice.controller.js';
import { optionalAuth } from '../middleware/auth.js';
import { rateLimiter } from '../middleware/validation.js';

const router = Router();

// Rate limiter for voice operations (60 per minute per IP)
const voiceRateLimiter = rateLimiter({
  windowMs: 60000,
  max: 60,
  message: 'Voice assistant rate limit reached. Please wait a moment.'
});

// POST /api/voice/transcribe - Transcribe speech audio to text
router.post('/transcribe', optionalAuth, voiceRateLimiter, handleTranscribe);

// POST /api/voice/synthesize - Synthesize OpenRouter response text into audio
router.post('/synthesize', optionalAuth, voiceRateLimiter, handleSynthesize);

// GET /api/voice/voices - List supported voice options
router.get('/voices', getVoices);

export default router;
