import { Router } from 'express';
import {
  getDashboard,
  getCollegeStudents,
  deactivateStudent,
  getCollegeFaculty,
  promoteFaculty,
  removeFaculty,
  assignStudentToFaculty,
  getCollegeCourses,
  updateCollegeCourse
} from '../controllers/collegeAdmin.controller.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

// Apply auth & role enforcement to all college admin routes
router.use(requireAuth);
router.use(requireRole(['college_admin', 'super_admin']));

router.get('/dashboard', getDashboard);
router.get('/students', getCollegeStudents);
router.post('/students/:studentId/deactivate', deactivateStudent);

router.get('/faculty', getCollegeFaculty);
router.post('/faculty/promote', promoteFaculty);
router.delete('/faculty/:facultyId', removeFaculty);
router.post('/faculty/assign', assignStudentToFaculty);

router.get('/courses', getCollegeCourses);
router.put('/courses/:courseId', updateCollegeCourse);

export default router;
