import { Router } from 'express';
import {
  getColleges,
  getCollegeById,
  submitJoinRequest,
  getMyJoinRequests,
  withdrawJoinRequest,
  reviewJoinRequest,
  getCollegeRequests
} from '../controllers/college.controller.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

// Public College Directory & Search
router.get('/', getColleges);
router.get('/:collegeId', getCollegeById);

// Student Membership Request Actions
router.post('/:collegeId/join', requireAuth, submitJoinRequest);
router.get('/requests/my', requireAuth, getMyJoinRequests);
router.post('/requests/:requestId/withdraw', requireAuth, withdrawJoinRequest);

// College Admin / Super Admin Review & List Requests
router.get('/:collegeId/requests', requireAuth, requireRole(['college_admin', 'super_admin']), getCollegeRequests);
router.post('/requests/:requestId/review', requireAuth, requireRole(['college_admin', 'super_admin']), reviewJoinRequest);

export default router;
