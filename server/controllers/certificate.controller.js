import { dbService, CERTIFICATE_TITLES } from '../services/db.service.js';

const TRACK_LIST = [
  { id: 'python', title: 'Python Programming Specialist', totalTopics: 194 },
  { id: 'java', title: 'Java Programming Specialist', totalTopics: 172 },
  { id: 'javascript', title: 'JavaScript Programming Specialist', totalTopics: 120 },
  { id: 'c', title: 'C Programming Specialist', totalTopics: 80 },
  { id: 'cpp', title: 'C++ Programming Specialist', totalTopics: 90 },
  { id: 'dsa', title: 'Data Structures & Algorithms Specialist', totalTopics: 200 }
];

/**
 * Get all certificates claimed by the logged in student,
 * plus eligibility and progress across all 6 specialization tracks.
 */
export const getMyCertificates = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const claimedCertificates = dbService.getStudentCertificates(userId);
    const claimedMap = new Map();
    claimedCertificates.forEach(c => claimedMap.set(c.course_id.toLowerCase(), c));

    // Get current progress for each track
    const tracksWithStatus = TRACK_LIST.map(track => {
      const courseId = track.id;
      const claimed = claimedMap.get(courseId) || null;

      let completedCount = 0;
      let totalRequired = track.totalTopics;

      if (courseId === 'dsa') {
        totalRequired = 200;
        const dsaSolves = (dbService.data.dsa_progress || []).filter(
          p => p.user_id === userId && p.status === 'solved'
        ).length;
        completedCount = dsaSolves;
      } else {
        totalRequired = dbService.getCourseTotalTopics(courseId);
        const userCompleted = (dbService.data.topic_progress || []).filter(
          tp => tp.student_id === userId && tp.course_id === courseId && tp.status === 'completed'
        ).length;
        completedCount = userCompleted;
      }

      const progressPct = totalRequired > 0 ? Math.min(100, Math.round((completedCount / totalRequired) * 100)) : 0;
      const isEligible = progressPct >= 100;

      return {
        courseId,
        title: track.title,
        totalTopics: totalRequired,
        completedTopics: completedCount,
        progressPercentage: progressPct,
        isEligible,
        isClaimed: Boolean(claimed),
        certificate: claimed
      };
    });

    res.json({
      success: true,
      certificates: claimedCertificates,
      tracks: tracksWithStatus
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Claim/Generate a certificate for a 100% completed course
 */
export const claimCertificate = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { courseId } = req.params;

    if (!courseId) {
      return res.status(400).json({ success: false, error: 'Course ID is required.' });
    }

    const certificate = dbService.generateCertificate({
      userId,
      courseId
    });

    res.status(201).json({
      success: true,
      message: 'Certificate successfully generated and claimed!',
      certificate
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Public certificate authenticity verification endpoint
 */
export const verifyCertificate = async (req, res, next) => {
  try {
    const { certificateId } = req.params;
    if (!certificateId || !certificateId.trim()) {
      return res.status(400).json({ success: false, error: 'Certificate ID is required.' });
    }

    const certificate = dbService.getCertificateById(certificateId.trim());

    if (!certificate) {
      return res.status(404).json({
        success: false,
        verified: false,
        error: `Certificate "${certificateId}" could not be verified in the CodeMentor credential registry.`
      });
    }

    res.json({
      success: true,
      verified: true,
      certificate
    });
  } catch (error) {
    next(error);
  }
};

