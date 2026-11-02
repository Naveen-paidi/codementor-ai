/**
 * Platform Analytics Backend Tools (Authorized Admin RAG)
 * --------------------------------------------------------
 * Exposes verified aggregate platform metrics exclusively to authorized administrators.
 *
 * PERMISSION RULES:
 * - Only users with role 'super_admin' or 'college_admin' may execute these queries.
 * - Standard students ('user' or 'faculty') receive a 403 / Access Denied status.
 * - Aggregate metrics only; never leaks personal student identities or secrets.
 */

import { dbService } from '../../db.service.js';

function verifyAdminAuthorization(user) {
  if (!user || !user.role) {
    return {
      authorized: false,
      error: 'Authentication required to access platform analytics.'
    };
  }

  const role = String(user.role).toLowerCase();
  if (role !== 'super_admin' && role !== 'college_admin') {
    return {
      authorized: false,
      error: 'Access restricted. Platform analytics are reserved exclusively for authorized administrators.'
    };
  }

  return { authorized: true, role, collegeId: user.college_id };
}

export const analyticsTools = {
  /**
   * 1. Get total registered students count and learner breakdown
   */
  async getTotalRegisteredStudents(user) {
    const auth = verifyAdminAuthorization(user);
    if (!auth.authorized) return auth;

    dbService.syncFromDisk();
    const metrics = dbService.getSuperAdminPlatformMetrics();
    return {
      authorized: true,
      totalRegisteredStudents: metrics.total_users,
      collegeStudents: metrics.college_students,
      independentLearners: metrics.independent_learners,
      totalColleges: metrics.total_colleges
    };
  },

  /**
   * 2. Get active students over a specific period (week/month)
   */
  async getActiveStudents(user, period = 'month') {
    const auth = verifyAdminAuthorization(user);
    if (!auth.authorized) return auth;

    dbService.syncFromDisk();
    const days = period === 'week' ? 7 : 30;
    const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    // Filter profiles active within period or having submissions/progress
    const activeProfiles = (dbService.data.profiles || []).filter(p => {
      const lastActive = p.updated_at || p.created_at;
      return lastActive && new Date(lastActive) >= cutoff;
    });

    const activeDsaUsers = new Set(
      (dbService.data.dsa_submissions || [])
        .filter(s => new Date(s.created_at) >= cutoff)
        .map(s => s.user_id)
    );

    const activeTopicUsers = new Set(
      (dbService.data.topic_progress || [])
        .filter(t => new Date(t.completed_at || t.last_activity_at) >= cutoff)
        .map(t => t.student_id)
    );

    const unionActive = new Set([
      ...activeProfiles.map(p => p.id),
      ...Array.from(activeDsaUsers),
      ...Array.from(activeTopicUsers)
    ]);

    return {
      authorized: true,
      period,
      activeStudentCount: unionActive.size,
      activeWithDsaSubmissions: activeDsaUsers.size,
      activeWithLessonCompletions: activeTopicUsers.size
    };
  },

  /**
   * 3. Get course enrollment statistics broken down by language/course
   */
  async getCourseEnrollmentStatistics(user) {
    const auth = verifyAdminAuthorization(user);
    if (!auth.authorized) return auth;

    dbService.syncFromDisk();
    const enrollments = dbService.data.course_enrollments || [];
    const courseStats = {};

    for (const e of enrollments) {
      const cId = e.course_id.toLowerCase();
      if (!courseStats[cId]) {
        courseStats[cId] = { courseId: cId, totalEnrolled: 0, active: 0, completed: 0 };
      }
      courseStats[cId].totalEnrolled++;
      if (e.status === 'completed') courseStats[cId].completed++;
      else if (e.status === 'active') courseStats[cId].active++;
    }

    return {
      authorized: true,
      totalEnrollments: enrollments.length,
      breakdownByCourse: Object.values(courseStats)
    };
  },

  /**
   * 4. Get course completion statistics & average rates
   */
  async getCourseCompletionStatistics(user) {
    const auth = verifyAdminAuthorization(user);
    if (!auth.authorized) return auth;

    dbService.syncFromDisk();
    const enrollments = dbService.data.course_enrollments || [];
    const total = enrollments.length;
    const completed = enrollments.filter(e => e.status === 'completed').length;
    const avgCompletionRate = total > 0 ? ((completed / total) * 100).toFixed(1) + '%' : '0%';

    return {
      authorized: true,
      totalEnrollments: total,
      completedEnrollments: completed,
      averageCompletionRate: avgCompletionRate
    };
  },

  /**
   * 5. Get platform-wide DSA statistics (solved problems, problems attempted)
   */
  async getPlatformDSAStatistics(user) {
    const auth = verifyAdminAuthorization(user);
    if (!auth.authorized) return auth;

    dbService.syncFromDisk();
    const progressRecords = dbService.data.dsa_progress || [];
    const submissions = dbService.data.dsa_submissions || [];

    const solvedRecords = progressRecords.filter(p => p.status === 'solved');
    const uniqueSolvedProblems = new Set(solvedRecords.map(p => p.problem_id));

    return {
      authorized: true,
      totalSolvesAcrossAllUsers: solvedRecords.length,
      uniqueProblemsSolvedAtLeastOnce: uniqueSolvedProblems.size,
      totalSubmissions: submissions.length,
      acceptedSubmissions: submissions.filter(s => s.status === 'Accepted').length
    };
  },

  /**
   * 6. Total submission statistics across languages
   */
  async getPlatformSubmissionStatistics(user) {
    const auth = verifyAdminAuthorization(user);
    if (!auth.authorized) return auth;

    dbService.syncFromDisk();
    const submissions = dbService.data.dsa_submissions || [];
    const byLanguage = {};
    const byStatus = {};

    for (const s of submissions) {
      byLanguage[s.language] = (byLanguage[s.language] || 0) + 1;
      byStatus[s.status] = (byStatus[s.status] || 0) + 1;
    }

    return {
      authorized: true,
      totalSubmissions: submissions.length,
      byLanguage,
      byStatus
    };
  },

  /**
   * 7. Platform activity over period (week or month)
   */
  async getPlatformActivity(user, period = 'week') {
    const auth = verifyAdminAuthorization(user);
    if (!auth.authorized) return auth;

    dbService.syncFromDisk();
    const days = period === 'week' ? 7 : 30;
    const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    const recentSubmissions = (dbService.data.dsa_submissions || [])
      .filter(s => new Date(s.created_at) >= cutoff).length;

    const recentTopicCompletions = (dbService.data.topic_progress || [])
      .filter(t => new Date(t.completed_at || t.last_activity_at) >= cutoff).length;

    return {
      authorized: true,
      period,
      recentSubmissionsCount: recentSubmissions,
      recentTopicCompletionsCount: recentTopicCompletions
    };
  },

  /**
   * 8. Most popular courses by enrollment count
   */
  async getPopularCourses(user) {
    const auth = verifyAdminAuthorization(user);
    if (!auth.authorized) return auth;

    dbService.syncFromDisk();
    const counts = {};
    for (const e of dbService.data.course_enrollments || []) {
      const c = e.course_id;
      counts[c] = (counts[c] || 0) + 1;
    }

    const sorted = Object.entries(counts)
      .map(([courseId, enrollments]) => ({ courseId, enrollments }))
      .sort((a, b) => b.enrollments - a.enrollments);

    return {
      authorized: true,
      rankedCourses: sorted
    };
  },

  /**
   * 9. Overall course performance and completion rates
   */
  async getCoursePerformance(user) {
    const auth = verifyAdminAuthorization(user);
    if (!auth.authorized) return auth;

    dbService.syncFromDisk();
    const enrollments = dbService.data.course_enrollments || [];
    const perf = {};

    for (const e of enrollments) {
      if (!perf[e.course_id]) {
        perf[e.course_id] = { courseId: e.course_id, total: 0, completed: 0 };
      }
      perf[e.course_id].total++;
      if (e.status === 'completed') perf[e.course_id].completed++;
    }

    const results = Object.values(perf).map(p => ({
      courseId: p.courseId,
      totalEnrolled: p.total,
      completed: p.completed,
      completionRate: p.total > 0 ? ((p.completed / p.total) * 100).toFixed(1) + '%' : '0%'
    }));

    return {
      authorized: true,
      courses: results
    };
  }
};

