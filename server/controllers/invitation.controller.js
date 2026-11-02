import { dbService } from '../services/db.service.js';

/**
 * Get pending college administrator invitations for the currently authenticated user
 */
export const getMyInvitations = async (req, res, next) => {
  try {
    const invitations = dbService.getPendingInvitationsForUser(req.user.id);
    res.json({
      success: true,
      count: invitations.length,
      invitations
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Accept a college administrator invitation
 */
export const acceptInvitation = async (req, res, next) => {
  try {
    const { invitationId } = req.params;
    const result = dbService.acceptCollegeAdminInvitation(invitationId, req.user.id);
    res.json({
      success: true,
      ...result
    });
  } catch (error) {
    const status = error.message.includes('Access denied') ? 403 : 400;
    res.status(status).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Reject a college administrator invitation
 */
export const rejectInvitation = async (req, res, next) => {
  try {
    const { invitationId } = req.params;
    const result = dbService.rejectCollegeAdminInvitation(invitationId, req.user.id);
    res.json({
      success: true,
      ...result
    });
  } catch (error) {
    const status = error.message.includes('Access denied') ? 403 : 400;
    res.status(status).json({
      success: false,
      error: error.message
    });
  }
};
