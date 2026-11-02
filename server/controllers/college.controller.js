import { dbService } from '../services/db.service.js';

/**
 * Public College Directory
 */
export const getColleges = async (req, res, next) => {
  try {
    const { search, active } = req.query;
    const colleges = dbService.getColleges({
      search: search || '',
      activeOnly: active === 'true'
    });
    res.json({ success: true, count: colleges.length, colleges });
  } catch (error) {
    next(error);
  }
};

/**
 * Get College Profile by ID or Slug
 */
export const getCollegeById = async (req, res, next) => {
  try {
    const { collegeId } = req.params;
    const college = dbService.getCollegeById(collegeId);
    if (!college) {
      return res.status(404).json({ success: false, error: 'College not found.' });
    }
    res.json({ success: true, college });
  } catch (error) {
    next(error);
  }
};

/**
 * Student requests to join a college
 */
export const submitJoinRequest = async (req, res, next) => {
  try {
    const { collegeId } = req.params;
    const studentId = req.user.id;

    if (!studentId || req.user.isGuest) {
      return res.status(401).json({ success: false, error: 'You must be logged in to request college membership.' });
    }

    const request = dbService.submitCollegeJoinRequest(studentId, collegeId);
    res.status(201).json({
      success: true,
      message: 'College membership request submitted successfully.',
      request
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Student views their own join requests
 */
export const getMyJoinRequests = async (req, res, next) => {
  try {
    const studentId = req.user.id;
    const requests = dbService.getStudentJoinRequests(studentId);
    res.json({ success: true, count: requests.length, requests });
  } catch (error) {
    next(error);
  }
};

/**
 * Student cancels / withdraws a pending request
 */
export const withdrawJoinRequest = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const studentId = req.user.id;
    const updated = dbService.withdrawJoinRequest(requestId, studentId);
    res.json({
      success: true,
      message: 'Join request withdrawn successfully.',
      request: updated
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * College Admin reviews a join request (approve / reject)
 */
export const reviewJoinRequest = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const { action, rejectionReason } = req.body;
    const reviewerId = req.user.id;

    // Check college authorization
    const reqRecord = dbService.data.college_join_requests.find(r => r.id === requestId);
    if (!reqRecord) {
      return res.status(404).json({ success: false, error: 'Join request not found.' });
    }

    if (req.user.role !== 'super_admin' && req.user.college_id !== reqRecord.college_id) {
      return res.status(403).json({
        success: false,
        error: 'You are only authorized to review requests for your own college.'
      });
    }

    const updated = dbService.reviewJoinRequest({
      requestId,
      action,
      reviewerId,
      rejectionReason: rejectionReason || ''
    });

    res.json({
      success: true,
      message: `Request successfully ${action}.`,
      request: updated
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Get college join requests (College Admin & Super Admin)
 */
export const getCollegeRequests = async (req, res, next) => {
  try {
    const { collegeId } = req.params;
    const { status } = req.query;

    if (req.user.role !== 'super_admin' && req.user.college_id !== collegeId) {
      return res.status(403).json({
        success: false,
        error: 'Access denied. You can only view requests for your own college.'
      });
    }

    const requests = dbService.getCollegeJoinRequests(collegeId, status || null);
    res.json({ success: true, count: requests.length, requests });
  } catch (error) {
    next(error);
  }
};
