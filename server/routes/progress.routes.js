import { Router } from 'express';
import { getUserProgress, getRecommendations, logMistake } from '../controllers/progress.controller.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// GET /api/progress
router.get('/', requireAuth, getUserProgress);

// GET /api/recommendations
router.get('/recommendations', requireAuth, getRecommendations);

// POST /api/progress/mistake
router.post('/mistake', requireAuth, logMistake);

export default router;
