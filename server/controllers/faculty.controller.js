import { dbService } from '../services/db.service.js';

/**
 * Faculty Dashboard
 */
export const getDashboard = async (req, res, next) => {
  try {
    const facultyId = req.user.id;
    const metrics = dbService.getFacultyMetrics(facultyId);
    res.json({ success: true, ...metrics });
  } catch (error) {
    next(error);
  }
};

/**
 * View students assigned to this faculty member
 */
export const getAssignedStudents = async (req, res, next) => {
  try {
    const facultyId = req.user.id;
    const students = dbService.getFacultyAssignedStudents(facultyId);
    res.json({ success: true, count: students.length, students });
  } catch (error) {
    next(error);
  }
};

/**
 * Get details for a specific assigned student
 */
export const getStudentDetails = async (req, res, next) => {
  try {
    const facultyId = req.user.id;
    const { studentId } = req.params;

    // Verify student is assigned to this faculty
    const assignment = dbService.data.faculty_assignments.find(
      fa => fa.faculty_id === facultyId && fa.student_id === studentId && fa.status === 'active'
    );

    if (!assignment && req.user.role !== 'super_admin' && req.user.role !== 'college_admin') {
      return res.status(403).json({
        success: false,
        error: 'Access denied. You can only inspect students assigned directly to you.'
      });
    }

    const studentProfile = dbService.getProfile(studentId);
    const enrollments = dbService.getStudentEnrollments(studentId);
    const progressList = dbService.data.topic_progress.filter(tp => tp.student_id === studentId);

    res.json({
      success: true,
      student: studentProfile,
      enrollments,
      topic_progress: progressList
    });
  } catch (error) {
    next(error);
  }
};
