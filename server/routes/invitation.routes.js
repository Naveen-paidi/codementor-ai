import { Router } from 'express';
import {
  getMyInvitations,
  acceptInvitation,
  rejectInvitation
} from '../controllers/invitation.controller.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// All invitation actions require valid authentication
router.use(requireAuth);

router.get('/', getMyInvitations);
router.get('/my', getMyInvitations);
router.post('/:invitationId/accept', acceptInvitation);
router.post('/:invitationId/reject', rejectInvitation);

export default router;
