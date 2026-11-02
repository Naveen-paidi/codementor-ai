import { Router } from 'express';
import { register, login, getCurrentUserProfile, logout } from '../controllers/auth.controller.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// POST /api/auth/register or /api/auth/signup
router.post('/register', register);
router.post('/signup', register);

// POST /api/auth/login
router.post('/login', login);

// GET /api/auth/profile
router.get('/profile', requireAuth, getCurrentUserProfile);
router.get('/me', requireAuth, getCurrentUserProfile);

// POST /api/auth/logout
router.post('/logout', logout);

export default router;
