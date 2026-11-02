import { dbService } from '../services/db.service.js';

/**
 * Get authorized conversations for the logged in user
 */
export const getConversations = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const conversations = dbService.getUserConversations(userId);
    res.json({ success: true, count: conversations.length, conversations });
  } catch (error) {
    next(error);
  }
};

/**
 * Get total unread message count for badge notifications (fast lookup)
 */
export const getUnreadCount = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const count = dbService.getUserUnreadMessageCount(userId);
    res.json({ success: true, unreadCount: count });
  } catch (error) {
    next(error);
  }
};

/**
 * Get messages for a conversation and mark as read
 */
export const getMessages = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { conversationId } = req.params;
    const messages = dbService.getConversationMessages(conversationId, userId);
    res.json({ success: true, count: messages.length, messages });
  } catch (error) {
    res.status(403).json({ success: false, error: error.message });
  }
};

/**
 * Send a message
 * Strictly validates authorized communication relationships on the backend.
 */
export const sendMessage = async (req, res, next) => {
  try {
    const senderId = req.user.id;
    const { receiverId, content } = req.body;

    if (!receiverId || !content) {
      return res.status(400).json({ success: false, error: 'Receiver ID and content are required.' });
    }

    const message = dbService.sendMessage({
      senderId,
      receiverId,
      content
    });

    res.status(201).json({
      success: true,
      message
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Get conversation target contact for the current user
 * E.g., for a student, returns assigned faculty; for faculty, returns college admin.
 */
export const getMessagingContacts = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const role = req.user.role;
    let contacts = [];

    if (role === 'user') {
      // Student can only message assigned faculty
      const assignedFaculty = dbService.getStudentAssignedFaculty(userId);
      if (assignedFaculty?.faculty) {
        contacts.push({
          id: assignedFaculty.faculty.id,
          full_name: assignedFaculty.faculty.full_name,
          email: assignedFaculty.faculty.email,
          role: 'faculty',
          relationship: 'Assigned Faculty'
        });
      }
    } else if (role === 'faculty') {
      // Faculty can message assigned students and college admin
      const students = dbService.getFacultyAssignedStudents(userId);
      students.forEach(s => {
        contacts.push({
          id: s.id,
          full_name: s.full_name,
          email: s.email,
          role: 'user',
          relationship: 'Assigned Student'
        });
      });

      if (req.user.college_id) {
        const col = dbService.getCollegeById(req.user.college_id);
        if (col?.admin) {
          contacts.push({
            id: col.admin.id,
            full_name: col.admin.name,
            email: col.admin.email,
            role: 'college_admin',
            relationship: 'College Administrator'
          });
        }
      }
    } else if (role === 'college_admin') {
      // College admin can message faculty in their college AND Super Admins
      if (req.user.college_id) {
        const facultyList = dbService.getCollegeFaculty(req.user.college_id);
        facultyList.forEach(f => {
          contacts.push({
            id: f.id,
            full_name: f.full_name,
            email: f.email,
            role: 'faculty',
            relationship: 'College Faculty'
          });
        });
      }

      // Add Super Admins so College Admin can contact root administration
      const superAdminRoles = (dbService.data.user_roles || []).filter(r => r.role === 'super_admin');
      superAdminRoles.forEach(sar => {
        const p = dbService.getProfile(sar.user_id);
        if (p && !contacts.some(c => c.id === p.id)) {
          contacts.push({
            id: p.id,
            full_name: p.full_name || 'Super Administrator',
            email: p.email,
            role: 'super_admin',
            relationship: 'Platform Super Admin'
          });
        }
      });
    } else if (role === 'super_admin') {
      // Super Admin can message all College Administrators across all colleges
      const collegeAdminRoles = (dbService.data.user_roles || []).filter(r => r.role === 'college_admin');
      collegeAdminRoles.forEach(car => {
        const p = dbService.getProfile(car.user_id);
        const col = car.college_id ? dbService.getCollegeById(car.college_id) : null;
        if (p && !contacts.some(c => c.id === p.id)) {
          contacts.push({
            id: p.id,
            full_name: p.full_name || 'College Admin',
            email: p.email,
            role: 'college_admin',
            relationship: col?.name ? `Administrator (${col.name})` : 'College Administrator'
          });
        }
      });
    }

    res.json({ success: true, count: contacts.length, contacts });
  } catch (error) {
    next(error);
  }
};
