/**
 * Student Information Backend Tools (Tool-Augmented RAG)
 * -------------------------------------------------------
 * Secure, authenticated tool suite retrieving verified live student learning data.
 *
 * CRITICAL SECURITY GUARANTEE:
 * The `userId` is ALWAYS derived server-side from the verified JWT token (`req.user.id`).
 * It CANNOT be overridden by frontend request payloads or generated LLM arguments.
 */

import { dbService } from '../../db.service.js';
import { DSAService } from '../../../dsa/dsa.service.js';
import { courses, topicsById } from '../../../curriculum/index.js';

export const studentTools = {
  /**
   * 1. Get all courses the student is currently enrolled in with live progress.
   */
  async getMyEnrolledCourses({ userId }) {
    if (!userId || userId === 'guest-learner') {
      return {
        authenticated: false,
        message: 'Student is currently browsing as a guest. Please log in to view personal enrolled courses.'
      };
    }

    const enrollments = dbService.getStudentEnrollments(userId);
    if (!enrollments || enrollments.length === 0) {
      return {
        authenticated: true,
        enrolledCount: 0,
        enrolledCourses: [],
        message: 'You have not enrolled in any courses yet. You can enroll in Python, Java, JavaScript, C, or C++ from the Courses catalogue.'
      };
    }

    return {
      authenticated: true,
      enrolledCount: enrollments.length,
      enrolledCourses: enrollments.map(e => ({
        courseId: e.course_id,
        courseName: e.course_name || e.course_id.toUpperCase(),
        progressPercentage: e.progress_percentage || 0,
        completedTopicsCount: e.completed_topics || 0,
        totalTopicsCount: e.total_topics || 0,
        status: e.status,
        enrolledAt: e.enrolled_at,
        lastAccessedAt: e.last_accessed_at
      }))
    };
  },

  /**
   * 2. Get detailed progress for a specific course (or all enrolled courses).
   */
  async getMyCourseProgress({ userId, courseId = null }) {
    if (!userId || userId === 'guest-learner') {
      return { authenticated: false, message: 'Please log in to view course progress.' };
    }

    const enrollments = dbService.getStudentEnrollments(userId);
    let target = enrollments;

    if (courseId) {
      const norm = String(courseId).toLowerCase().trim();
      target = enrollments.filter(e => e.course_id.toLowerCase() === norm);
    }

    if (target.length === 0) {
      return {
        authenticated: true,
        found: false,
        message: courseId
          ? `You are not currently enrolled in the ${courseId} course.`
          : 'No course progress records found.'
      };
    }

    return {
      authenticated: true,
      found: true,
      courses: target.map(e => ({
        courseId: e.course_id,
        courseName: e.course_name || e.course_id,
        progressPercentage: e.progress_percentage,
        completedTopics: e.completed_topics,
        totalTopics: e.total_topics,
        status: e.status,
        lastAccessedAt: e.last_accessed_at
      }))
    };
  },

  /**
   * 3. Get completed vs incomplete lessons/topics for a student.
   */
  async getMyLessonProgress({ userId, courseId = null }) {
    if (!userId || userId === 'guest-learner') {
      return { authenticated: false, message: 'Please log in to view lesson progress.' };
    }

    dbService.syncFromDisk();
    const userTopics = (dbService.data.topic_progress || []).filter(tp => tp.student_id === userId);
    const completedTopicIds = new Set(
      userTopics.filter(t => t.status === 'completed').map(t => t.topic_id)
    );

    const result = {};
    const coursesToCheck = courseId
      ? [String(courseId).toLowerCase().trim()]
      : Object.keys(courses);

    for (const cId of coursesToCheck) {
      const courseData = courses[cId];
      if (!courseData) continue;

      const completed = [];
      const incomplete = [];

      for (const level of courseData.levels || []) {
        for (const module of level.modules || []) {
          for (const topic of module.topics || []) {
            const isDone = completedTopicIds.has(topic.id);
            const topicInfo = {
              id: topic.id,
              title: topic.title,
              level: level.title,
              module: module.title
            };
            if (isDone) completed.push(topicInfo);
            else incomplete.push(topicInfo);
          }
        }
      }

      result[cId] = {
        courseTitle: courseData.title,
        completedCount: completed.length,
        incompleteCount: incomplete.length,
        totalCount: completed.length + incomplete.length,
        completedTopics: completed.slice(0, 10), // limit preview
        incompleteTopics: incomplete.slice(0, 10)
      };
    }

    return {
      authenticated: true,
      coursesProgress: result
    };
  },

  /**
   * 4. Get comprehensive DSA performance statistics.
   */
  async getMyDSAStatistics({ userId }) {
    if (!userId || userId === 'guest-learner') {
      return { authenticated: false, message: 'Please log in to view your DSA statistics.' };
    }

    const stats = await DSAService.getUserStats(userId);
    return {
      authenticated: true,
      totalSolved: stats.totalSolved || 0,
      totalAttempted: stats.totalAttempted || 0,
      difficultyBreakdown: {
        easy: stats.easySolved || 0,
        medium: stats.mediumSolved || 0,
        hard: stats.hardSolved || 0
      },
      currentStreakDays: stats.streak || 0,
      totalSubmissions: stats.totalSubmissions || 0,
      acceptanceRate: stats.acceptanceRate || '0%'
    };
  },

  /**
   * 5. Get topic-wise DSA performance and problem breakdown.
   */
  async getMyTopicWiseProgress({ userId }) {
    if (!userId || userId === 'guest-learner') {
      return { authenticated: false, message: 'Please log in to view topic-wise progress.' };
    }

    const topicProgress = await DSAService.getTopicProgress(userId);
    return {
      authenticated: true,
      topics: topicProgress
    };
  },

  /**
   * 6. Get student's most recent activities across courses and DSA.
   */
  async getMyRecentActivity({ userId }) {
    if (!userId || userId === 'guest-learner') {
      return { authenticated: false, message: 'Please log in to view recent activity.' };
    }

    dbService.syncFromDisk();
    const dsaSubs = (dbService.data.dsa_submissions || [])
      .filter(s => s.user_id === userId)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 5);

    const topicProg = (dbService.data.topic_progress || [])
      .filter(t => t.student_id === userId)
      .sort((a, b) => new Date(b.completed_at || b.last_activity_at) - new Date(a.completed_at || a.last_activity_at))
      .slice(0, 5);

    return {
      authenticated: true,
      recentDSASubmissions: dsaSubs.map(s => ({
        problemId: s.problem_id,
        status: s.status,
        language: s.language,
        createdAt: s.created_at
      })),
      recentLessonsCompleted: topicProg.map(t => ({
        courseId: t.course_id,
        topicId: t.topic_id,
        status: t.status,
        completedAt: t.completed_at || t.last_activity_at
      }))
    };
  },

  /**
   * 7. Get current learning streak and activity days.
   */
  async getMyLearningStreak({ userId }) {
    if (!userId || userId === 'guest-learner') {
      return { authenticated: false, message: 'Please log in to view your learning streak.' };
    }

    const profile = dbService.getProfile(userId);
    const dsaStats = await DSAService.getUserStats(userId);

    const streakDays = Math.max(profile?.streak_days || 0, dsaStats?.streak || 0);
    return {
      authenticated: true,
      streakDays,
      xp: profile?.xp || 0,
      level: profile?.level || 'Beginner',
      message: streakDays > 0
        ? `🔥 You are currently on a ${streakDays}-day learning streak! Keep it up!`
        : 'Start practicing today to ignite your learning streak!'
    };
  },

  /**
   * 8. Identify topics where the student has struggled or had failed submissions.
   */
  async getMyWeakTopics({ userId }) {
    if (!userId || userId === 'guest-learner') {
      return { authenticated: false, message: 'Please log in to view weak topics.' };
    }

    dbService.syncFromDisk();
    // Failed submissions in DSA
    const failedSubs = (dbService.data.dsa_submissions || [])
      .filter(s => s.user_id === userId && s.status !== 'Accepted');

    const failCountByProblem = {};
    for (const s of failedSubs) {
      failCountByProblem[s.problem_id] = (failCountByProblem[s.problem_id] || 0) + 1;
    }

    // Sort by most failures
    const problemIds = Object.keys(failCountByProblem)
      .sort((a, b) => failCountByProblem[b] - failCountByProblem[a])
      .slice(0, 5);

    return {
      authenticated: true,
      strugglingProblems: problemIds.map(pId => ({
        problemId: pId,
        unsuccessfulAttempts: failCountByProblem[pId]
      })),
      totalFailedSubmissions: failedSubs.length,
      recommendation: problemIds.length > 0
        ? `Consider reviewing concepts and reviewing test cases for problems: ${problemIds.join(', ')}.`
        : 'Great job! No persistent struggle patterns detected in your recent submissions.'
    };
  },

  /**
   * 9. Determine next recommended lesson based on actual incomplete curriculum.
   */
  async getMyRecommendedNextLesson({ userId, courseId = null }) {
    if (!userId || userId === 'guest-learner') {
      return {
        authenticated: false,
        message: 'Please log in to get personalized curriculum recommendations based on your progress.'
      };
    }

    dbService.syncFromDisk();
    const enrollments = dbService.getStudentEnrollments(userId);
    if (enrollments.length === 0) {
      return {
        authenticated: true,
        hasEnrollment: false,
        recommendation: 'You are not enrolled in any course yet. We recommend starting with "Python: Beginner to Advanced" or "Data Structures & Algorithms".'
      };
    }

    // Determine target course
    const targetCourse = courseId
      ? enrollments.find(e => e.course_id.toLowerCase() === String(courseId).toLowerCase().trim()) || enrollments[0]
      : enrollments[0];

    const courseData = courses[targetCourse.course_id];
    if (!courseData) {
      return {
        authenticated: true,
        recommendation: `Explore the next module in your enrolled ${targetCourse.course_id} track!`
      };
    }

    // Find first incomplete topic in linear sequence
    const userTopics = (dbService.data.topic_progress || []).filter(tp => tp.student_id === userId && tp.course_id === targetCourse.course_id);
    const completedTopicIds = new Set(
      userTopics.filter(t => t.status === 'completed').map(t => t.topic_id)
    );

    let nextTopic = null;
    let currentModule = null;

    for (const level of courseData.levels || []) {
      for (const module of level.modules || []) {
        for (const topic of module.topics || []) {
          if (!completedTopicIds.has(topic.id)) {
            nextTopic = topic;
            currentModule = module;
            break;
          }
        }
        if (nextTopic) break;
      }
      if (nextTopic) break;
    }

    if (!nextTopic) {
      return {
        authenticated: true,
        completedCourse: true,
        courseId: targetCourse.course_id,
        recommendation: `Congratulations! You have completed all curriculum topics in ${courseData.title}! Try solving advanced DSA challenges in the DSA Practice module.`
      };
    }

    return {
      authenticated: true,
      courseId: targetCourse.course_id,
      courseTitle: courseData.title,
      nextTopicId: nextTopic.id,
      nextTopicTitle: nextTopic.title,
      moduleTitle: currentModule?.title,
      summary: nextTopic.summary || 'Fundamental concept topic.',
      estimatedMinutes: nextTopic.estimated_minutes || 15,
      recommendation: `Based on your ${courseData.title} progress, your next lesson is "${nextTopic.title}" in the "${currentModule?.title}" module.`
    };
  }
};

