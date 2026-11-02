import { Router } from 'express';
import {
  getPlatformDashboard,
  getColleges,
  createCollege,
  updateCollege,
  getCollegeAdmin,
  createCollegeAdminInvitation,
  getCollegeAdminInvitations,
  cancelCollegeAdminInvitation,
  getUsers,
  updateUserRole,
  getAuditLogs
} from '../controllers/superAdmin.controller.js';
import { requireAuth, requireSuperAdmin } from '../middleware/auth.js';

const router = Router();

// Apply auth & strict super admin enforcement
router.use(requireAuth);
router.use(requireSuperAdmin);

router.get('/dashboard', getPlatformDashboard);
router.get('/colleges', getColleges);
router.post('/colleges', createCollege);
router.put('/colleges/:collegeId', updateCollege);
router.get('/colleges/:collegeId/admin', getCollegeAdmin);

// College Admin Invitations (Super Admin)
router.post('/college-admin-invitations', createCollegeAdminInvitation);
router.get('/college-admin-invitations', getCollegeAdminInvitations);
router.post('/college-admin-invitations/:invitationId/cancel', cancelCollegeAdminInvitation);

router.get('/users', getUsers);
router.post('/users/:userId/role', updateUserRole);

router.get('/audit-logs', getAuditLogs);

export default router;
