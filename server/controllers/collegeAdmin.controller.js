import { dbService } from '../services/db.service.js';

/**
 * Helper to get the college ID for the calling college admin
 */
const getAdminCollegeId = (req) => {
  if (req.user.role === 'super_admin') {
    return req.query.collegeId || req.params.collegeId || req.user.college_id;
  }
  return req.user.college_id;
};

/**
 * College Admin Dashboard
 */
export const getDashboard = async (req, res, next) => {
  try {
    const collegeId = getAdminCollegeId(req);
    if (!collegeId) {
      return res.status(400).json({ success: false, error: 'No college associated with this administrative account.' });
    }

    const metrics = dbService.getCollegeAdminMetrics(collegeId);
    res.json({ success: true, ...metrics });
  } catch (error) {
    next(error);
  }
};

/**
 * Get Students belonging to the College
 */
export const getCollegeStudents = async (req, res, next) => {
  try {
    const collegeId = getAdminCollegeId(req);
    if (!collegeId) {
      return res.status(400).json({ success: false, error: 'No college associated with this administrative account.' });
    }

    const { search, facultyId } = req.query;
    const students = dbService.getCollegeStudents(collegeId, { search, facultyId });
    res.json({ success: true, count: students.length, students });
  } catch (error) {
    next(error);
  }
};

/**
 * Deactivate a student's college membership
 */
export const deactivateStudent = async (req, res, next) => {
  try {
    const collegeId = getAdminCollegeId(req);
    const { studentId } = req.params;
    const membership = dbService.deactivateStudentMembership(studentId, collegeId, req.user.id);
    res.json({ success: true, message: 'Student college membership deactivated.', membership });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Get Faculty Members for the College
 */
export const getCollegeFaculty = async (req, res, next) => {
  try {
    const collegeId = getAdminCollegeId(req);
    if (!collegeId) {
      return res.status(400).json({ success: false, error: 'No college associated with this administrative account.' });
    }

    const faculty = dbService.getCollegeFaculty(collegeId);
    res.json({ success: true, count: faculty.length, faculty });
  } catch (error) {
    next(error);
  }
};

/**
 * Promote an existing user to Faculty in this college
 */
export const promoteFaculty = async (req, res, next) => {
  try {
    const collegeId = getAdminCollegeId(req);
    const { userId, email } = req.body;

    let targetUserId = userId;
    if (!targetUserId && email) {
      const profile = dbService.getProfileByEmail(email);
      if (!profile) {
        return res.status(404).json({
          success: false,
          error: 'No registered user found with this email. Users must be registered before being promoted to faculty.'
        });
      }
      targetUserId = profile.id;
    }

    if (!targetUserId) {
      return res.status(400).json({ success: false, error: 'User ID or email is required.' });
    }

    const result = dbService.promoteFaculty({
      userId: targetUserId,
      collegeId,
      actorId: req.user.id
    });

    res.json({ success: true, message: 'User successfully promoted to faculty.', ...result });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Remove Faculty privileges
 */
export const removeFaculty = async (req, res, next) => {
  try {
    const collegeId = getAdminCollegeId(req);
    const { facultyId } = req.params;

    dbService.removeFaculty({
      facultyId,
      collegeId,
      actorId: req.user.id
    });

    res.json({ success: true, message: 'Faculty privileges successfully removed.' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Assign or reassign a student to a faculty member
 */
export const assignStudentToFaculty = async (req, res, next) => {
  try {
    const collegeId = getAdminCollegeId(req);
    const { studentId, facultyId } = req.body;

    if (!studentId || !facultyId) {
      return res.status(400).json({ success: false, error: 'Student ID and Faculty ID are required.' });
    }

    const assignment = dbService.assignStudentToFaculty({
      studentId,
      facultyId,
      collegeId,
      actorId: req.user.id
    });

    res.json({
      success: true,
      message: 'Student successfully assigned to faculty.',
      assignment
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Get courses enabled for this college
 */
export const getCollegeCourses = async (req, res, next) => {
  try {
    const collegeId = getAdminCollegeId(req);
    const courses = dbService.data.college_courses.filter(cc => cc.college_id === collegeId);
    res.json({ success: true, count: courses.length, courses });
  } catch (error) {
    next(error);
  }
};

/**
 * Update college course status (is_active, is_mandatory)
 */
export const updateCollegeCourse = async (req, res, next) => {
  try {
    const collegeId = getAdminCollegeId(req);
    const { courseId } = req.params;
    const { is_active, is_mandatory } = req.body;

    let item = dbService.data.college_courses.find(cc => cc.college_id === collegeId && cc.course_id === courseId);
    if (!item) {
      item = {
        id: `cc-${collegeId}-${courseId}`,
        college_id: collegeId,
        course_id: courseId,
        is_active: Boolean(is_active),
        is_mandatory: Boolean(is_mandatory),
        created_at: new Date().toISOString()
      };
      dbService.data.college_courses.push(item);
    } else {
      if (is_active !== undefined) item.is_active = Boolean(is_active);
      if (is_mandatory !== undefined) item.is_mandatory = Boolean(is_mandatory);
    }

    dbService.logAudit({
      actorId: req.user.id,
      action: 'UPDATE_COLLEGE_COURSE',
      targetType: 'college_course',
      targetId: item.id,
      details: { courseId, is_active, is_mandatory }
    });

    dbService.save();
    res.json({ success: true, course: item });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
