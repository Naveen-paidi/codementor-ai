import { dbService } from '../services/db.service.js';
import { progressService } from '../services/progress.service.js';

/**
 * Student Dashboard
 * Aggregates real data: enrollments, progress %, topic completions,
 * college membership, assigned faculty, unread messages, XP & telemetry.
 */
export const getDashboard = async (req, res, next) => {
  try {
    const studentId = req.user.id;
    const dashboardData = dbService.getStudentDashboardData(studentId);

    // Fetch learning telemetry for recommendations & XP
    let telemetry = {};
    try {
      telemetry = await progressService.getUserProgress(studentId, req.user.preferred_language || 'python');
    } catch (_) {}

    res.json({
      success: true,
      ...dashboardData,
      telemetry
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Enroll in a course
 */
export const enrollInCourse = async (req, res, next) => {
  try {
    const studentId = req.user.id;
    const { courseId, collegeId } = req.body;

    if (!courseId) {
      return res.status(400).json({ success: false, error: 'Course ID is required.' });
    }

    const enrollment = dbService.enrollCourse({
      studentId,
      courseId,
      collegeId: collegeId || null
    });

    res.json({
      success: true,
      message: `Enrolled in ${courseId} successfully.`,
      enrollment
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Get current student's enrolled courses
 */
export const getMyEnrollments = async (req, res, next) => {
  try {
    const studentId = req.user.id;
    const enrollments = dbService.getStudentEnrollments(studentId);
    res.json({ success: true, count: enrollments.length, enrollments });
  } catch (error) {
    next(error);
  }
};

/**
 * Record topic completion and update course progress
 */
export const completeTopic = async (req, res, next) => {
  try {
    const studentId = req.user.id;
    const { courseId, topicId, status = 'completed' } = req.body;

    if (!courseId || !topicId) {
      return res.status(400).json({ success: false, error: 'Course ID and Topic ID are required.' });
    }

    const result = dbService.recordTopicProgress({
      studentId,
      courseId,
      topicId,
      status
    });

    res.json({
      success: true,
      message: status === 'completed' ? 'Topic marked as completed.' : 'Topic marked as in progress.',
      ...result
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get individual topic completion status for the student
 */
export const getTopicStatus = async (req, res, next) => {
  try {
    const studentId = req.user.id;
    const { courseId, topicId } = req.params;
    dbService.syncFromDisk();
    const tp = (dbService.data.topic_progress || []).find(
      p => p.student_id === studentId && p.course_id === courseId && p.topic_id === topicId
    );
    res.json({
      success: true,
      isCompleted: tp?.status === 'completed',
      status: tp?.status || 'not_started',
      completedAt: tp?.completed_at || null
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all completed topic IDs and progress for a specific course
 */
export const getCourseCompletedTopics = async (req, res, next) => {
  try {
    const studentId = req.user.id;
    const { courseId } = req.params;
    dbService.syncFromDisk();
    const normCourseId = (courseId || '').toLowerCase().trim();

    const completed = (dbService.data.topic_progress || []).filter(
      tp => tp.student_id === studentId &&
            tp.course_id.toLowerCase() === normCourseId &&
            tp.status === 'completed'
    );
    const completedTopicIds = completed.map(tp => tp.topic_id);
    const totalTopics = dbService.getCourseTotalTopics(normCourseId);
    const progressPercentage = totalTopics > 0
      ? Math.min(100, Math.round((completedTopicIds.length / totalTopics) * 100))
      : 0;

    res.json({
      success: true,
      courseId: normCourseId,
      completedTopicIds,
      completedCount: completedTopicIds.length,
      totalTopics,
      progressPercentage
    });
  } catch (error) {
    next(error);
  }
};

