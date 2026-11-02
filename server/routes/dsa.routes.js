/**
 * DSA API Routes
 * Mounts endpoints under /api/dsa
 */

import { Router } from 'express';
import {
  getProblems,
  getProblemById,
  getTopics,
  getStats,
  getHeatmap,
  getDayDetails,
  runSampleTests,
  submitSolution,
  getProblemSubmissions,
  getAIReview
} from '../controllers/dsa.controller.js';
import { optionalAuth } from '../middleware/auth.js';
import { rateLimiter } from '../middleware/validation.js';

const router = Router();

// Problem Catalogue & Metadata
router.get('/problems', optionalAuth, getProblems);
router.get('/problems/:problemId', optionalAuth, getProblemById);
router.get('/problems/:problemId/submissions', optionalAuth, getProblemSubmissions);
router.get('/topics', optionalAuth, getTopics);
router.get('/stats', optionalAuth, getStats);

// Heatmap & Activity Tracking
router.get('/progress/heatmap', optionalAuth, getHeatmap);
router.get('/progress/day/:date', optionalAuth, getDayDetails);

// Execution & Judging
router.post(
  '/run',
  optionalAuth,
  rateLimiter({ windowMs: 30000, max: 40, message: 'Too many test runs. Please wait a moment.' }),
  runSampleTests
);

router.post(
  '/submit',
  optionalAuth,
  rateLimiter({ windowMs: 30000, max: 30, message: 'Too many submissions. Please wait a moment.' }),
  submitSolution
);

// AI Code Review (Sub-10s latency target)
router.post(
  '/ai-review',
  optionalAuth,
  rateLimiter({ windowMs: 30000, max: 20, message: 'Too many AI review requests. Please wait a moment.' }),
  getAIReview
);

export default router;
