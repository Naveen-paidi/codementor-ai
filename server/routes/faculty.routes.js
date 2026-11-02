import { Router } from 'express';
import {
  getDashboard,
  getAssignedStudents,
  getStudentDetails
} from '../controllers/faculty.controller.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

// Apply auth & role enforcement to faculty routes
router.use(requireAuth);
router.use(requireRole(['faculty', 'college_admin', 'super_admin']));

router.get('/dashboard', getDashboard);
router.get('/students', getAssignedStudents);
router.get('/students/:studentId', getStudentDetails);

export default router;
