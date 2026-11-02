import { dbService } from '../services/db.service.js';

/**
 * Super Admin Platform Analytics Dashboard
 */
export const getPlatformDashboard = async (req, res, next) => {
  try {
    const metrics = dbService.getSuperAdminPlatformMetrics();
    res.json({ success: true, metrics });
  } catch (error) {
    next(error);
  }
};

/**
 * List / Search all colleges
 */
export const getColleges = async (req, res, next) => {
  try {
    const { search } = req.query;
    const colleges = dbService.getColleges({ search });
    res.json({ success: true, count: colleges.length, colleges });
  } catch (error) {
    next(error);
  }
};

/**
 * Create a new College
 */
export const createCollege = async (req, res, next) => {
  try {
    const { name, slug, description, contact_email, website, address } = req.body;
    if (!name || !slug) {
      return res.status(400).json({ success: false, error: 'College name and unique slug are required.' });
    }

    const college = dbService.createCollege({
      name,
      slug,
      description,
      contact_email,
      website,
      address
    }, req.user.id);

    res.status(201).json({
      success: true,
      message: 'College created successfully.',
      college
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Update college details or activate/deactivate
 */
export const updateCollege = async (req, res, next) => {
  try {
    const { collegeId } = req.params;
    const updateData = req.body;
    const updated = dbService.updateCollege(collegeId, updateData, req.user.id);
    res.json({
      success: true,
      message: 'College updated successfully.',
      college: updated
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Get college administrator details
 */
export const getCollegeAdmin = async (req, res, next) => {
  try {
    const { collegeId } = req.params;
    const college = dbService.getCollegeById(collegeId);
    if (!college) {
      return res.status(404).json({ success: false, error: 'College not found.' });
    }

    const adminRole = dbService.data.user_roles.find(
      r => r.college_id === college.id && r.role === 'college_admin'
    );
    const admin = adminRole ? dbService.getProfile(adminRole.user_id) : null;

    res.json({
      success: true,
      collegeId: college.id,
      collegeName: college.name,
      admin: admin ? {
        id: admin.id,
        email: admin.email,
        name: admin.full_name,
        created_at: admin.created_at
      } : null
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Promote an existing user to College Admin
 */
export const promoteCollegeAdmin = async (req, res, next) => {
  try {
    const { collegeId } = req.params;
    const { userId, email } = req.body;

    let targetUserId = userId;
    if (!targetUserId && email) {
      const profile = dbService.getProfileByEmail(email);
      if (!profile) {
        return res.status(404).json({
          success: false,
          error: 'No registered user found with this email. Account must exist in the platform before promotion.'
        });
      }
      targetUserId = profile.id;
    }

    if (!targetUserId) {
      return res.status(400).json({ success: false, error: 'User ID or registered email is required.' });
    }

    const result = dbService.promoteCollegeAdmin({
      userId: targetUserId,
      collegeId,
      actorId: req.user.id
    });

    res.json({
      success: true,
      message: 'User successfully promoted to college administrator.',
      ...result
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Send College Admin Invitation (Super Admin)
 */
export const createCollegeAdminInvitation = async (req, res, next) => {
  try {
    const { collegeId, email } = req.body;
    if (!collegeId || !email) {
      return res.status(400).json({ success: false, error: 'Target college and user email are required.' });
    }

    const invitation = dbService.createCollegeAdminInvitation({
      collegeId,
      email,
      actorId: req.user.id
    });

    res.status(201).json({
      success: true,
      message: 'College administrator invitation sent successfully.',
      invitation
    });
  } catch (error) {
    const status = error.message.includes('No registered user') ? 404 : 400;
    res.status(status).json({ success: false, error: error.message });
  }
};

/**
 * List / Filter College Admin Invitations (Super Admin)
 */
export const getCollegeAdminInvitations = async (req, res, next) => {
  try {
    const { collegeId, status } = req.query;
    const invitations = dbService.getCollegeAdminInvitations({ collegeId, status });
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
 * Cancel College Admin Invitation (Super Admin)
 */
export const cancelCollegeAdminInvitation = async (req, res, next) => {
  try {
    const { invitationId } = req.params;
    const invitation = dbService.cancelCollegeAdminInvitation(invitationId, req.user.id);
    res.json({
      success: true,
      message: 'Invitation cancelled successfully.',
      invitation
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Platform-wide User Management
 */
export const getUsers = async (req, res, next) => {
  try {
    const { query, role, collegeId, status } = req.query;

    let users = dbService.data.profiles.map(p => {
      const roleInfo = dbService.getUserPrimaryRole(p.id);
      return {
        ...p,
        role: roleInfo.role,
        college_id: roleInfo.college_id,
        college_name: roleInfo.college?.name || null
      };
    });

    if (query) {
      const q = query.toLowerCase();
      users = users.filter(u => u.full_name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q));
    }

    if (role) {
      users = users.filter(u => u.role === role);
    }

    if (collegeId) {
      users = users.filter(u => u.college_id === collegeId);
    }

    if (status) {
      users = users.filter(u => u.account_status === status);
    }

    res.json({ success: true, count: users.length, users });
  } catch (error) {
    next(error);
  }
};

/**
 * Manage User Role Assignment
 */
export const updateUserRole = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { role, collegeId } = req.body;

    if (!role) {
      return res.status(400).json({ success: false, error: 'Role is required.' });
    }

    const newRole = dbService.setUserRole({
      userId,
      role,
      collegeId: collegeId || null,
      actorId: req.user.id
    });

    res.json({
      success: true,
      message: 'User role updated successfully.',
      role: newRole
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * View Audit Logs
 */
export const getAuditLogs = async (req, res, next) => {
  try {
    const { limit, action, actorId } = req.query;
    const logs = dbService.getAuditLogs({
      limit: Number(limit) || 50,
      action,
      actorId
    });
    res.json({ success: true, count: logs.length, logs });
  } catch (error) {
    next(error);
  }
};
