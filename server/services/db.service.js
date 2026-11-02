import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { supabaseAdmin, isSupabaseAdminConfigured } from '../config/supabase.js';
import { config } from '../config/env.js';
import { courses } from '../curriculum/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STORAGE_FILE = path.resolve(__dirname, '../database/storage.json');

// Ensure database directory exists
const dbDir = path.dirname(STORAGE_FILE);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

export const CERTIFICATE_TITLES = {
  c: 'C Programming Specialist',
  cpp: 'C++ Programming Specialist',
  python: 'Python Programming Specialist',
  java: 'Java Programming Specialist',
  javascript: 'JavaScript Programming Specialist',
  dsa: 'Data Structures & Algorithms Specialist'
};

// Initial empty storage structure
const initialData = {
  profiles: [],
  colleges: [],
  user_roles: [],
  college_admin_invitations: [],
  college_memberships: [],
  college_join_requests: [],
  faculty_assignments: [],
  college_courses: [],
  course_enrollments: [],
  topic_progress: [],
  conversations: [],
  messages: [],
  audit_logs: [],
  dsa_submissions: [],
  dsa_progress: [],
  dsa_activity: [],
  xp_transactions: [],
  daily_activities: [],
  certificates: []
};

class DBService {
  constructor() {
    this.lastMtime = 0;
    this.data = this.loadData();
  }

  syncFromDisk() {
    try {
      if (fs.existsSync(STORAGE_FILE)) {
        const stat = fs.statSync(STORAGE_FILE);
        if (!this.lastMtime || stat.mtimeMs > this.lastMtime) {
          const raw = fs.readFileSync(STORAGE_FILE, 'utf-8');
          this.data = { ...initialData, ...JSON.parse(raw) };
          this.lastMtime = stat.mtimeMs;
        }
      }
    } catch (e) {}
  }

  loadData() {
    try {
      if (fs.existsSync(STORAGE_FILE)) {
        const raw = fs.readFileSync(STORAGE_FILE, 'utf-8');
        const parsed = JSON.parse(raw);
        this.lastMtime = fs.statSync(STORAGE_FILE).mtimeMs;
        return { ...initialData, ...parsed };
      }
    } catch (e) {
      console.warn('[DBService] Could not parse existing storage.json, initializing fresh store.', e.message);
    }
    const fresh = { ...initialData };
    this.saveDataDirect(fresh);
    return fresh;
  }

  saveDataDirect(dataToSave) {
    try {
      const tempPath = `${STORAGE_FILE}.tmp`;
      fs.writeFileSync(tempPath, JSON.stringify(dataToSave, null, 2), 'utf-8');
      fs.renameSync(tempPath, STORAGE_FILE);
      if (fs.existsSync(STORAGE_FILE)) {
        this.lastMtime = fs.statSync(STORAGE_FILE).mtimeMs;
      }
    } catch (err) {
      console.error('[DBService] Failed to persist data:', err.message);
    }
  }

  save() {
    this.saveDataDirect(this.data);
  }

  // --------------------------------------------------------------------------
  // SUPER ADMIN PROVISIONING
  // --------------------------------------------------------------------------
  async provisionSuperAdmins() {
    this.syncFromDisk();
    const admin1Email = config.SUPER_ADMIN_1_EMAIL;
    const admin1Pass = config.SUPER_ADMIN_1_PASSWORD;
    const admin2Email = config.SUPER_ADMIN_2_EMAIL;
    const admin2Pass = config.SUPER_ADMIN_2_PASSWORD;

    const credentials = [
      { email: admin1Email, pass: admin1Pass, label: 'Super Admin 1' },
      { email: admin2Email, pass: admin2Pass, label: 'Super Admin 2' }
    ];

    for (let i = 0; i < credentials.length; i++) {
      const cred = credentials[i];
      if (!cred.email || !cred.pass) {
        console.warn(`[SuperAdmin] Missing credentials for ${cred.label} in environment. Secure provisioning required.`);
        continue;
      }

      const normEmail = cred.email.trim().toLowerCase();
      try {
        let userId = null;

        // 1. Check if user already exists in Supabase Auth
        if (isSupabaseAdminConfigured()) {
          const { data: usersList, error: listErr } = await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 100 });
          if (!listErr && usersList?.users) {
            const existing = usersList.users.find(u => u.email?.toLowerCase() === normEmail);
            if (existing) {
              userId = existing.id;
            }
          }

          if (!userId) {
            // Create user in Supabase Auth
            const { data: created, error: createErr } = await supabaseAdmin.auth.admin.createUser({
              email: normEmail,
              password: cred.pass,
              email_confirm: true,
              user_metadata: { full_name: cred.label }
            });

            if (createErr) {
              console.warn(`[SuperAdmin] Error creating Supabase auth user for ${normEmail}:`, createErr.message);
            } else if (created?.user) {
              userId = created.user.id;
            }
          }
        }

        // Fallback ID if Supabase admin is offline
        if (!userId) {
          let localProfile = this.data.profiles.find(p => p.email?.toLowerCase() === normEmail);
          if (!localProfile) {
            userId = `sa-${i + 1}`;
          } else {
            userId = localProfile.id;
          }
        }

        // Purge any stale/duplicate profiles with same email but different ID
        this.data.profiles = this.data.profiles.filter(p => !(p.email?.toLowerCase() === normEmail && p.id !== userId));

        // 2. Ensure profile exists and is updated
        this.upsertProfile({
          id: userId,
          email: normEmail,
          full_name: cred.label,
          level: 'Administrator',
          xp: 1000
        });

        // Purge any duplicate or conflicting super_admin roles for this user / email
        this.data.user_roles = this.data.user_roles.filter(r => !(r.role === 'super_admin' && r.user_id !== userId && this.getProfile(r.user_id)?.email?.toLowerCase() === normEmail));

        // 3. Ensure role in user_roles
        const existingRole = this.data.user_roles.find(r => r.user_id === userId && r.role === 'super_admin');
        if (!existingRole) {
          this.data.user_roles.push({
            id: `role-sa-${userId}`,
            user_id: userId,
            role: 'super_admin',
            college_id: null,
            created_at: new Date().toISOString(),
            created_by: 'system'
          });
          this.logAudit({
            actorId: 'system',
            action: 'PROVISION_SUPER_ADMIN',
            targetType: 'user',
            targetId: userId,
            details: { email: normEmail, label: cred.label }
          });
        }

        this.save();
        console.log(`[SuperAdmin] Successfully provisioned/verified ${cred.label}: ${normEmail} (ID: ${userId})`);
      } catch (err) {
        console.error(`[SuperAdmin] Provisioning failed for ${cred.email}:`, err.message);
      }
    }
  }

  // --------------------------------------------------------------------------
  // PROFILES & USERS
  // --------------------------------------------------------------------------
  getProfile(userId) {
    if (!userId) return null;
    this.syncFromDisk();
    return this.data.profiles.find(p => p.id === userId) || null;
  }

  getProfileByEmail(email) {
    if (!email) return null;
    this.syncFromDisk();
    const norm = email.trim().toLowerCase();
    return this.data.profiles.find(p => p.email?.toLowerCase() === norm) || null;
  }

  upsertProfile(profileData) {
    this.syncFromDisk();
    const normEmail = profileData.email?.trim().toLowerCase();
    const existingIndex = this.data.profiles.findIndex(
      p => p.id === profileData.id || (normEmail && p.email?.toLowerCase() === normEmail)
    );
    const now = new Date().toISOString();
    if (existingIndex >= 0) {
      this.data.profiles[existingIndex] = {
        ...this.data.profiles[existingIndex],
        ...profileData,
        id: profileData.id || this.data.profiles[existingIndex].id,
        email: normEmail || this.data.profiles[existingIndex].email,
        updated_at: now
      };
      this.save();
      return this.data.profiles[existingIndex];
    } else {
      const newProfile = {
        id: profileData.id,
        email: normEmail,
        full_name: profileData.full_name || profileData.fullName || normEmail?.split('@')[0],
        avatar_url: profileData.avatar_url || null,
        preferred_language: profileData.preferred_language || 'python',
        level: profileData.level || 'Beginner',
        xp: profileData.xp || 0,
        streak_days: profileData.streak_days || 0,
        account_status: 'active',
        created_at: now,
        updated_at: now
      };
      this.data.profiles.push(newProfile);
      this.save();
      return newProfile;
    }
  }

  deleteUserAndData(userId) {
    if (!userId) return;
    this.syncFromDisk();
    this.data.profiles = this.data.profiles.filter(p => p.id !== userId);
    this.data.user_roles = this.data.user_roles.filter(r => r.user_id !== userId);
    this.data.college_memberships = this.data.college_memberships.filter(m => m.student_id !== userId);
    this.data.college_join_requests = this.data.college_join_requests.filter(r => r.student_id !== userId);
    this.data.faculty_assignments = this.data.faculty_assignments.filter(a => a.student_id !== userId && a.faculty_id !== userId);
    this.data.course_enrollments = this.data.course_enrollments.filter(e => e.student_id !== userId);
    this.data.topic_progress = this.data.topic_progress.filter(tp => tp.student_id !== userId);
    this.data.conversations = this.data.conversations.filter(c => !c.participant_ids?.includes(userId));
    this.data.messages = this.data.messages.filter(m => m.sender_id !== userId && m.receiver_id !== userId);
    this.save();
  }

  deleteCollege(collegeId) {
    if (!collegeId) return;
    this.syncFromDisk();
    this.data.colleges = this.data.colleges.filter(c => c.id !== collegeId);
    this.data.college_courses = this.data.college_courses.filter(cc => cc.college_id !== collegeId);
    this.data.college_memberships = this.data.college_memberships.filter(m => m.college_id !== collegeId);
    this.data.college_join_requests = this.data.college_join_requests.filter(r => r.college_id !== collegeId);
    this.data.faculty_assignments = this.data.faculty_assignments.filter(a => a.college_id !== collegeId);
    this.data.user_roles = this.data.user_roles.map(r => {
      if (r.college_id === collegeId) {
        return { ...r, college_id: null, role: r.role === 'user' ? 'user' : 'user' };
      }
      return r;
    });
    this.save();
  }

  // --------------------------------------------------------------------------
  // ROLES
  // --------------------------------------------------------------------------
  getUserRoles(userId) {
    if (!userId) return [];
    this.syncFromDisk();
    return this.data.user_roles.filter(r => r.user_id === userId);
  }

  getUserPrimaryRole(userId) {
    if (!userId || userId === 'guest-learner') {
      return { role: 'user', college_id: null, college: null };
    }
    this.syncFromDisk();
    const roles = this.getUserRoles(userId);
    // Hierarchy: super_admin > college_admin > faculty > user
    let primary = roles.find(r => r.role === 'super_admin');
    if (!primary) primary = roles.find(r => r.role === 'college_admin');
    if (!primary) primary = roles.find(r => r.role === 'faculty');
    if (!primary) primary = roles.find(r => r.role === 'user');

    if (!primary) {
      primary = { role: 'user', college_id: null };
    }

    let college = null;
    if (primary.college_id) {
      college = this.getCollegeById(primary.college_id);
    } else {
      // Check if student has an active college membership
      const membership = this.getStudentActiveMembership(userId);
      if (membership) {
        college = this.getCollegeById(membership.college_id);
      }
    }

    return {
      role: primary.role,
      college_id: primary.college_id || college?.id || null,
      college
    };
  }

  setUserRole({ userId, role, collegeId = null, actorId = 'system' }) {
    const validRoles = ['user', 'faculty', 'college_admin', 'super_admin'];
    if (!validRoles.includes(role)) {
      throw new Error(`Invalid role: ${role}`);
    }

    // Faculty and College Admin must belong to exactly one college
    if ((role === 'faculty' || role === 'college_admin') && !collegeId) {
      throw new Error(`Role ${role} requires an associated college.`);
    }

    // Check if user already has an active faculty role in another college
    if (role === 'faculty') {
      const otherFac = this.data.user_roles.find(r => r.user_id === userId && r.role === 'faculty' && r.college_id !== collegeId);
      if (otherFac) {
        throw new Error('User is already assigned as faculty in another college. Multi-college faculty assignment is prohibited.');
      }
    }

    // Check if user already has an active college_admin role in another college
    if (role === 'college_admin') {
      const otherAdmin = this.data.user_roles.find(r => r.user_id === userId && r.role === 'college_admin' && r.college_id !== collegeId);
      if (otherAdmin) {
        throw new Error('User is already assigned as administrator of another college.');
      }
    }

    // Remove old conflicting role of the same type if exists
    this.data.user_roles = this.data.user_roles.filter(r => !(r.user_id === userId && r.role === role));

    const newRole = {
      id: `role-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      user_id: userId,
      role,
      college_id: collegeId,
      created_at: new Date().toISOString(),
      created_by: actorId
    };

    this.data.user_roles.push(newRole);

    this.logAudit({
      actorId,
      action: 'SET_USER_ROLE',
      targetType: 'user_role',
      targetId: userId,
      details: { role, collegeId }
    });

    this.save();
    return newRole;
  }

  removeUserRole({ userId, role, collegeId, actorId = 'system' }) {
    this.data.user_roles = this.data.user_roles.filter(r => {
      const match = r.user_id === userId && r.role === role && (!collegeId || r.college_id === collegeId);
      return !match;
    });

    this.logAudit({
      actorId,
      action: 'REMOVE_USER_ROLE',
      targetType: 'user_role',
      targetId: userId,
      details: { role, collegeId }
    });

    this.save();
    return true;
  }

  // --------------------------------------------------------------------------
  // COLLEGES
  // --------------------------------------------------------------------------
  getColleges({ search = '', activeOnly = false } = {}) {
    let list = this.data.colleges || [];
    if (activeOnly) {
      list = list.filter(c => c.is_active);
    }
    if (search) {
      const s = search.toLowerCase();
      list = list.filter(c => c.name.toLowerCase().includes(s) || c.slug.toLowerCase().includes(s) || (c.description && c.description.toLowerCase().includes(s)));
    }
    return list.map(c => this.enrichCollegeSummary(c));
  }

  getCollegeById(id) {
    if (!id) return null;
    const col = this.data.colleges.find(c => c.id === id || c.slug === id);
    if (!col) return null;
    return this.enrichCollegeSummary(col);
  }

  enrichCollegeSummary(college) {
    const adminRole = this.data.user_roles.find(r => r.college_id === college.id && r.role === 'college_admin');
    let admin = null;
    if (adminRole) {
      admin = this.getProfile(adminRole.user_id);
    }

    const pendingAdminInvitation = (this.data.college_admin_invitations || []).find(
      i => i.college_id === college.id && i.status === 'pending'
    );
    let pendingInvitationDetails = null;
    if (pendingAdminInvitation) {
      const invUser = this.getProfile(pendingAdminInvitation.invited_user_id);
      pendingInvitationDetails = {
        id: pendingAdminInvitation.id,
        invited_user_id: pendingAdminInvitation.invited_user_id,
        invited_user_name: invUser?.full_name || 'Invited Scholar',
        invited_user_email: invUser?.email || '',
        created_at: pendingAdminInvitation.created_at
      };
    }

    const facultyRoles = this.data.user_roles.filter(r => r.college_id === college.id && r.role === 'faculty');
    const studentMemberships = this.data.college_memberships.filter(m => m.college_id === college.id && m.status === 'active');
    const pendingRequests = this.data.college_join_requests.filter(r => r.college_id === college.id && r.status === 'pending');
    const enabledCourses = this.data.college_courses.filter(cc => cc.college_id === college.id && cc.is_active);

    return {
      ...college,
      admin: admin ? { id: admin.id, name: admin.full_name, email: admin.email } : null,
      pending_admin_invitation: pendingInvitationDetails,
      faculty_count: facultyRoles.length,
      student_count: studentMemberships.length,
      pending_requests_count: pendingRequests.length,
      active_courses_count: enabledCourses.length
    };
  }

  createCollege({ name, slug, description, contact_email, website, address }, actorId = 'system') {
    const existing = this.data.colleges.find(c => c.name.toLowerCase() === name.trim().toLowerCase() || c.slug.toLowerCase() === slug.trim().toLowerCase());
    if (existing) {
      throw new Error(`A college with name "${name}" or slug "${slug}" already exists.`);
    }

    const now = new Date().toISOString();
    const newCollege = {
      id: `col-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      name: name.trim(),
      slug: slug.trim().toLowerCase(),
      description: description || '',
      contact_email: contact_email || '',
      website: website || '',
      address: address || '',
      is_active: true,
      created_at: now,
      updated_at: now
    };

    this.data.colleges.push(newCollege);

    // Enable default curriculum tracks for the new college
    const defaultCourses = ['python', 'javascript', 'java', 'c', 'cpp'];
    for (const c of defaultCourses) {
      this.data.college_courses.push({
        id: `cc-${newCollege.id}-${c}`,
        college_id: newCollege.id,
        course_id: c,
        is_active: true,
        is_mandatory: false,
        created_at: now
      });
    }

    this.logAudit({
      actorId,
      action: 'COLLEGE_CREATED',
      targetType: 'college',
      targetId: newCollege.id,
      details: { name: newCollege.name, slug: newCollege.slug, contact_email: newCollege.contact_email }
    });

    this.save();
    return this.enrichCollegeSummary(newCollege);
  }

  updateCollege(collegeId, updateData, actorId = 'system') {
    const idx = this.data.colleges.findIndex(c => c.id === collegeId);
    if (idx === -1) {
      throw new Error('College not found.');
    }

    const current = this.data.colleges[idx];
    const updated = {
      ...current,
      ...updateData,
      updated_at: new Date().toISOString()
    };
    this.data.colleges[idx] = updated;

    this.logAudit({
      actorId,
      action: 'UPDATE_COLLEGE',
      targetType: 'college',
      targetId: collegeId,
      details: updateData
    });

    this.save();
    return this.enrichCollegeSummary(updated);
  }

  // --------------------------------------------------------------------------
  // COLLEGE ADMIN MANAGEMENT (Super Admin Only)
  // --------------------------------------------------------------------------
  promoteCollegeAdmin({ userId, collegeId, actorId }) {
    const college = this.data.colleges.find(c => c.id === collegeId);
    if (!college) throw new Error('Target college does not exist.');

    const targetProfile = this.getProfile(userId);
    if (!targetProfile) throw new Error('User profile does not exist.');

    // Check if user is currently admin of another college
    const currentAdminRole = this.data.user_roles.find(r => r.user_id === userId && r.role === 'college_admin' && r.college_id !== collegeId);
    if (currentAdminRole) {
      throw new Error('This user is already an administrator of another college. One user cannot administer multiple colleges.');
    }

    // Remove existing admin of this college if any
    const existingColAdmin = this.data.user_roles.find(r => r.college_id === collegeId && r.role === 'college_admin');
    if (existingColAdmin) {
      this.data.user_roles = this.data.user_roles.filter(r => r.id !== existingColAdmin.id);
      this.logAudit({
        actorId,
        action: 'REVOKE_COLLEGE_ADMIN',
        targetType: 'user',
        targetId: existingColAdmin.user_id,
        details: { collegeId, replacedBy: userId }
      });
    }

    // Assign new college admin
    const newRole = this.setUserRole({
      userId,
      role: 'college_admin',
      collegeId,
      actorId
    });

    this.logAudit({
      actorId,
      action: 'PROMOTE_COLLEGE_ADMIN',
      targetType: 'user',
      targetId: userId,
      details: { collegeId, collegeName: college.name }
    });

    this.save();
    return { success: true, college: this.enrichCollegeSummary(college), admin: targetProfile };
  }

  // --------------------------------------------------------------------------
  // COLLEGE ADMIN INVITATIONS (Super Admin Workflow)
  // --------------------------------------------------------------------------
  createCollegeAdminInvitation({ collegeId, email, actorId = 'system' }) {
    this.syncFromDisk();
    if (!collegeId) {
      throw new Error('Target college is required.');
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      throw new Error('A valid user email address is required.');
    }

    const college = this.data.colleges.find(c => c.id === collegeId);
    if (!college) {
      throw new Error('Target college does not exist.');
    }

    const normEmail = email.trim().toLowerCase();
    const targetProfile = this.getProfileByEmail(normEmail);
    if (!targetProfile) {
      throw new Error('No registered user found with this email address.');
    }

    // Role eligibility check
    const userRoleInfo = this.getUserPrimaryRole(targetProfile.id);
    if (userRoleInfo.role === 'super_admin') {
      throw new Error('Super Administrators cannot be invited as College Administrators.');
    }
    if (userRoleInfo.role === 'college_admin') {
      throw new Error('This user is already a College Administrator.');
    }

    if (!this.data.college_admin_invitations) {
      this.data.college_admin_invitations = [];
    }

    // Check for existing pending invitation for this user and college
    const existingPending = this.data.college_admin_invitations.find(
      i => i.invited_user_id === targetProfile.id && i.college_id === collegeId && i.status === 'pending'
    );
    if (existingPending) {
      throw new Error('A pending invitation already exists for this user and college.');
    }

    const now = new Date().toISOString();
    const invitation = {
      id: `cai-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      college_id: college.id,
      invited_user_id: targetProfile.id,
      invited_by: actorId,
      status: 'pending',
      created_at: now,
      responded_at: null,
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };

    this.data.college_admin_invitations.push(invitation);

    this.logAudit({
      actorId,
      action: 'COLLEGE_ADMIN_INVITATION_CREATED',
      targetType: 'college_admin_invitation',
      targetId: invitation.id,
      details: {
        collegeId: college.id,
        collegeName: college.name,
        invitedUserId: targetProfile.id,
        invitedEmail: targetProfile.email
      }
    });

    this.save();
    return this.enrichInvitation(invitation);
  }

  getCollegeAdminInvitations({ collegeId, status } = {}) {
    this.syncFromDisk();
    let list = this.data.college_admin_invitations || [];
    if (collegeId) {
      list = list.filter(i => i.college_id === collegeId);
    }
    if (status) {
      list = list.filter(i => i.status === status);
    }
    return list.map(i => this.enrichInvitation(i));
  }

  getPendingInvitationsForUser(userId) {
    this.syncFromDisk();
    const list = (this.data.college_admin_invitations || []).filter(
      i => i.invited_user_id === userId && i.status === 'pending'
    );
    return list.map(i => this.enrichInvitation(i));
  }

  cancelCollegeAdminInvitation(invitationId, actorId = 'system') {
    this.syncFromDisk();
    const invitation = (this.data.college_admin_invitations || []).find(i => i.id === invitationId);
    if (!invitation) {
      throw new Error('Invitation not found.');
    }
    if (invitation.status !== 'pending') {
      throw new Error(`Cannot cancel invitation with status "${invitation.status}".`);
    }

    invitation.status = 'cancelled';
    invitation.responded_at = new Date().toISOString();

    this.logAudit({
      actorId,
      action: 'COLLEGE_ADMIN_INVITATION_CANCELLED',
      targetType: 'college_admin_invitation',
      targetId: invitation.id,
      details: { collegeId: invitation.college_id, invitedUserId: invitation.invited_user_id }
    });

    this.save();
    return this.enrichInvitation(invitation);
  }

  acceptCollegeAdminInvitation(invitationId, userId) {
    this.syncFromDisk();
    const invitation = (this.data.college_admin_invitations || []).find(i => i.id === invitationId);
    if (!invitation) {
      throw new Error('Invitation not found.');
    }
    if (invitation.invited_user_id !== userId) {
      throw new Error('Access denied. You can only respond to invitations addressed to your account.');
    }
    if (invitation.status !== 'pending') {
      throw new Error(`This invitation is no longer pending (current status: ${invitation.status}).`);
    }

    const college = this.data.colleges.find(c => c.id === invitation.college_id);
    if (!college) {
      throw new Error('Target college no longer exists.');
    }

    const userProfile = this.getProfile(userId);
    if (!userProfile) {
      throw new Error('User profile not found.');
    }

    const userRoleInfo = this.getUserPrimaryRole(userId);
    if (userRoleInfo.role === 'super_admin') {
      throw new Error('Super Administrators cannot become College Administrators.');
    }

    // Remove any previous admin of this college if one exists
    const existingColAdmin = this.data.user_roles.find(
      r => r.college_id === college.id && r.role === 'college_admin'
    );
    if (existingColAdmin && existingColAdmin.user_id !== userId) {
      this.data.user_roles = this.data.user_roles.filter(r => r.id !== existingColAdmin.id);
    }

    // Assign user role to college_admin
    this.setUserRole({
      userId,
      role: 'college_admin',
      collegeId: college.id,
      actorId: userId
    });

    invitation.status = 'accepted';
    invitation.responded_at = new Date().toISOString();

    this.logAudit({
      actorId: userId,
      action: 'COLLEGE_ADMIN_INVITATION_ACCEPTED',
      targetType: 'college_admin_invitation',
      targetId: invitation.id,
      details: { collegeId: college.id, collegeName: college.name }
    });

    this.save();
    return {
      success: true,
      message: `You are now the College Administrator for ${college.name}.`,
      invitation: this.enrichInvitation(invitation),
      collegeId: college.id,
      collegeName: college.name,
      role: 'college_admin'
    };
  }

  rejectCollegeAdminInvitation(invitationId, userId) {
    this.syncFromDisk();
    const invitation = (this.data.college_admin_invitations || []).find(i => i.id === invitationId);
    if (!invitation) {
      throw new Error('Invitation not found.');
    }
    if (invitation.invited_user_id !== userId) {
      throw new Error('Access denied. You can only respond to invitations addressed to your account.');
    }
    if (invitation.status !== 'pending') {
      throw new Error(`This invitation is no longer pending (current status: ${invitation.status}).`);
    }

    invitation.status = 'rejected';
    invitation.responded_at = new Date().toISOString();

    this.logAudit({
      actorId: userId,
      action: 'COLLEGE_ADMIN_INVITATION_REJECTED',
      targetType: 'college_admin_invitation',
      targetId: invitation.id,
      details: { collegeId: invitation.college_id }
    });

    this.save();
    return {
      success: true,
      message: 'Invitation rejected.',
      invitation: this.enrichInvitation(invitation)
    };
  }

  enrichInvitation(invitation) {
    const college = this.data.colleges.find(c => c.id === invitation.college_id);
    const user = this.getProfile(invitation.invited_user_id);
    const inviter = this.getProfile(invitation.invited_by);
    return {
      ...invitation,
      college_name: college?.name || 'Unknown College',
      college_slug: college?.slug || '',
      user_name: user?.full_name || 'Registered Scholar',
      user_email: user?.email || '',
      inviter_name: inviter?.full_name || (invitation.invited_by === 'system' ? 'Platform System' : 'Super Admin'),
      inviter_email: inviter?.email || ''
    };
  }

  // --------------------------------------------------------------------------
  // FACULTY MANAGEMENT (College Admin)
  // --------------------------------------------------------------------------
  promoteFaculty({ userId, collegeId, actorId }) {
    const college = this.data.colleges.find(c => c.id === collegeId);
    if (!college) throw new Error('Target college does not exist.');

    const targetProfile = this.getProfile(userId);
    if (!targetProfile) throw new Error('Target user does not exist.');

    // Enforce 1-college constraint for faculty
    const otherFaculty = this.data.user_roles.find(r => r.user_id === userId && r.role === 'faculty' && r.college_id !== collegeId);
    if (otherFaculty) {
      throw new Error('User already has active faculty membership at another college.');
    }

    this.setUserRole({
      userId,
      role: 'faculty',
      collegeId,
      actorId
    });

    this.logAudit({
      actorId,
      action: 'PROMOTE_FACULTY',
      targetType: 'user',
      targetId: userId,
      details: { collegeId, collegeName: college.name }
    });

    this.save();
    return { success: true, faculty: targetProfile };
  }

  removeFaculty({ facultyId, collegeId, actorId }) {
    // 1. Remove faculty role
    this.removeUserRole({
      userId: facultyId,
      role: 'faculty',
      collegeId,
      actorId
    });

    // 2. Deactivate any active student assignments to this faculty
    const now = new Date().toISOString();
    this.data.faculty_assignments.forEach(fa => {
      if (fa.faculty_id === facultyId && fa.college_id === collegeId && fa.status === 'active') {
        fa.status = 'inactive';
        fa.unassigned_at = now;
      }
    });

    this.logAudit({
      actorId,
      action: 'REMOVE_FACULTY',
      targetType: 'user',
      targetId: facultyId,
      details: { collegeId }
    });

    this.save();
    return { success: true };
  }

  getCollegeFaculty(collegeId) {
    const facultyRoles = this.data.user_roles.filter(r => r.college_id === collegeId && r.role === 'faculty');
    return facultyRoles.map(fr => {
      const prof = this.getProfile(fr.user_id) || { id: fr.user_id, full_name: 'Unknown Faculty', email: '' };
      const assignedCount = this.data.faculty_assignments.filter(fa => fa.faculty_id === fr.user_id && fa.college_id === collegeId && fa.status === 'active').length;
      return {
        ...prof,
        assigned_student_count: assignedCount,
        role_assigned_at: fr.created_at
      };
    });
  }

  // --------------------------------------------------------------------------
  // COLLEGE MEMBERSHIPS & JOIN REQUESTS
  // --------------------------------------------------------------------------
  getStudentActiveMembership(studentId) {
    if (!studentId) return null;
    return this.data.college_memberships.find(m => m.student_id === studentId && m.status === 'active') || null;
  }

  submitCollegeJoinRequest(studentId, collegeId) {
    // Check if student already has active membership in ANY college
    const activeMembership = this.getStudentActiveMembership(studentId);
    if (activeMembership) {
      const activeCol = this.getCollegeById(activeMembership.college_id);
      throw new Error(`You are already an active member of "${activeCol?.name || 'another college'}". A student cannot belong to multiple colleges simultaneously.`);
    }

    // Check if there is already a pending request for this college
    const pendingForSame = this.data.college_join_requests.find(
      r => r.student_id === studentId && r.college_id === collegeId && r.status === 'pending'
    );
    if (pendingForSame) {
      throw new Error('You already have a pending membership request for this college.');
    }

    // Ensure college exists and is active
    const college = this.data.colleges.find(c => c.id === collegeId && c.is_active);
    if (!college) {
      throw new Error('College not found or is currently inactive.');
    }

    const now = new Date().toISOString();
    const newReq = {
      id: `req-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      student_id: studentId,
      college_id: collegeId,
      status: 'pending',
      requested_at: now,
      reviewed_at: null,
      reviewed_by: null,
      rejection_reason: null,
      created_at: now,
      updated_at: now
    };

    this.data.college_join_requests.push(newReq);

    this.logAudit({
      actorId: studentId,
      action: 'SUBMIT_JOIN_REQUEST',
      targetType: 'college_join_request',
      targetId: newReq.id,
      details: { collegeId, collegeName: college.name }
    });

    this.save();
    return {
      ...newReq,
      college: { id: college.id, name: college.name, slug: college.slug }
    };
  }

  withdrawJoinRequest(requestId, studentId) {
    const req = this.data.college_join_requests.find(r => r.id === requestId);
    if (!req) throw new Error('Join request not found.');
    if (req.student_id !== studentId) {
      throw new Error('You are not authorized to withdraw this request.');
    }
    if (req.status !== 'pending') {
      throw new Error(`Cannot withdraw request that is already ${req.status}.`);
    }

    req.status = 'withdrawn';
    req.updated_at = new Date().toISOString();

    this.logAudit({
      actorId: studentId,
      action: 'WITHDRAW_JOIN_REQUEST',
      targetType: 'college_join_request',
      targetId: requestId,
      details: { college_id: req.college_id }
    });

    this.save();
    return req;
  }

  reviewJoinRequest({ requestId, action, reviewerId, rejectionReason = '' }) {
    const req = this.data.college_join_requests.find(r => r.id === requestId);
    if (!req) throw new Error('Join request not found.');
    if (req.status !== 'pending') {
      throw new Error(`Request has already been ${req.status}.`);
    }
    if (!['approved', 'rejected'].includes(action)) {
      throw new Error('Action must be either "approved" or "rejected".');
    }

    // Reviewer cannot be the student
    if (reviewerId === req.student_id) {
      throw new Error('Students cannot review their own requests.');
    }

    const now = new Date().toISOString();
    req.status = action;
    req.reviewed_at = now;
    req.reviewed_by = reviewerId;
    req.rejection_reason = action === 'rejected' ? rejectionReason : null;
    req.updated_at = now;

    if (action === 'approved') {
      // Ensure student is not already active in another college
      const currentActive = this.getStudentActiveMembership(req.student_id);
      if (currentActive && currentActive.college_id !== req.college_id) {
        throw new Error('Student is already an active member of another college.');
      }

      // Check if membership record exists or create new
      const existingMem = this.data.college_memberships.find(
        m => m.student_id === req.student_id && m.college_id === req.college_id
      );

      if (existingMem) {
        existingMem.status = 'active';
        existingMem.approved_by = reviewerId;
        existingMem.updated_at = now;
      } else {
        this.data.college_memberships.push({
          id: `mem-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
          student_id: req.student_id,
          college_id: req.college_id,
          status: 'active',
          joined_at: now,
          approved_by: reviewerId,
          created_at: now,
          updated_at: now
        });
      }

      // Auto-enroll student into mandatory college courses
      const mandatoryCourses = this.data.college_courses.filter(cc => cc.college_id === req.college_id && cc.is_active && cc.is_mandatory);
      for (const mc of mandatoryCourses) {
        try {
          this.enrollCourse({ studentId: req.student_id, courseId: mc.course_id, collegeId: req.college_id });
        } catch (_) {}
      }
    }

    this.logAudit({
      actorId: reviewerId,
      action: action === 'approved' ? 'APPROVE_JOIN_REQUEST' : 'REJECT_JOIN_REQUEST',
      targetType: 'college_join_request',
      targetId: requestId,
      details: { student_id: req.student_id, college_id: req.college_id, reason: rejectionReason }
    });

    this.save();
    return req;
  }

  getStudentJoinRequests(studentId) {
    const list = this.data.college_join_requests.filter(r => r.student_id === studentId);
    return list.map(r => {
      const col = this.getCollegeById(r.college_id);
      return {
        ...r,
        college: col ? { id: col.id, name: col.name, slug: col.slug } : null
      };
    });
  }

  getCollegeJoinRequests(collegeId, status = null) {
    let list = this.data.college_join_requests.filter(r => r.college_id === collegeId);
    if (status) {
      list = list.filter(r => r.status === status);
    }
    return list.map(r => {
      const prof = this.getProfile(r.student_id) || { id: r.student_id, full_name: 'Student', email: '' };
      return {
        ...r,
        student: prof
      };
    });
  }

  deactivateStudentMembership(studentId, collegeId, actorId) {
    const mem = this.data.college_memberships.find(m => m.student_id === studentId && m.college_id === collegeId);
    if (!mem) throw new Error('Membership record not found.');

    mem.status = 'inactive';
    mem.updated_at = new Date().toISOString();

    // Deactivate faculty assignment if any
    this.data.faculty_assignments.forEach(fa => {
      if (fa.student_id === studentId && fa.college_id === collegeId && fa.status === 'active') {
        fa.status = 'inactive';
        fa.unassigned_at = new Date().toISOString();
      }
    });

    this.logAudit({
      actorId,
      action: 'DEACTIVATE_STUDENT_MEMBERSHIP',
      targetType: 'college_membership',
      targetId: mem.id,
      details: { studentId, collegeId }
    });

    this.save();
    return mem;
  }

  // --------------------------------------------------------------------------
  // FACULTY ASSIGNMENTS
  // --------------------------------------------------------------------------
  assignStudentToFaculty({ studentId, facultyId, collegeId, actorId }) {
    // Verify student is active member of college
    const studentMem = this.data.college_memberships.find(m => m.student_id === studentId && m.college_id === collegeId && m.status === 'active');
    if (!studentMem) {
      throw new Error('Student does not have an active membership in this college.');
    }

    // Verify faculty belongs to college
    const facultyRole = this.data.user_roles.find(r => r.user_id === facultyId && r.college_id === collegeId && r.role === 'faculty');
    if (!facultyRole) {
      throw new Error('Selected faculty is not associated with this college.');
    }

    const now = new Date().toISOString();

    // Deactivate previous active assignment in this college
    this.data.faculty_assignments.forEach(fa => {
      if (fa.student_id === studentId && fa.college_id === collegeId && fa.status === 'active') {
        fa.status = 'inactive';
        fa.unassigned_at = now;
      }
    });

    const newAssignment = {
      id: `fa-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      student_id: studentId,
      faculty_id: facultyId,
      college_id: collegeId,
      status: 'active',
      assigned_by: actorId,
      assigned_at: now,
      unassigned_at: null
    };

    this.data.faculty_assignments.push(newAssignment);

    this.logAudit({
      actorId,
      action: 'ASSIGN_STUDENT_FACULTY',
      targetType: 'faculty_assignment',
      targetId: newAssignment.id,
      details: { studentId, facultyId, collegeId }
    });

    this.save();
    return newAssignment;
  }

  getStudentAssignedFaculty(studentId) {
    const assignment = this.data.faculty_assignments.find(fa => fa.student_id === studentId && fa.status === 'active');
    if (!assignment) return null;
    const prof = this.getProfile(assignment.faculty_id);
    const col = this.getCollegeById(assignment.college_id);
    return {
      ...assignment,
      faculty: prof ? { id: prof.id, full_name: prof.full_name, email: prof.email } : null,
      college: col ? { id: col.id, name: col.name } : null
    };
  }

  getFacultyAssignedStudents(facultyId) {
    const assignments = this.data.faculty_assignments.filter(fa => fa.faculty_id === facultyId && fa.status === 'active');
    return assignments.map(fa => {
      const prof = this.getProfile(fa.student_id) || { id: fa.student_id, full_name: 'Student', email: '' };
      const enrollments = this.getStudentEnrollments(fa.student_id);
      const avgProgress = enrollments.length > 0
        ? Math.round(enrollments.reduce((sum, e) => sum + e.progress_percentage, 0) / enrollments.length)
        : 0;

      // Detect if student needs support (e.g. low progress or recent failed submissions)
      const needsHelp = avgProgress < 25;

      return {
        ...prof,
        assignment_id: fa.id,
        assigned_at: fa.assigned_at,
        enrollments,
        average_progress: avgProgress,
        needs_help: needsHelp
      };
    });
  }

  getCollegeStudents(collegeId, { search = '', facultyId = null } = {}) {
    let memberships = this.data.college_memberships.filter(m => m.college_id === collegeId && m.status === 'active');

    return memberships.map(m => {
      const prof = this.getProfile(m.student_id) || { id: m.student_id, full_name: 'Student', email: '' };
      const activeAssign = this.data.faculty_assignments.find(fa => fa.student_id === m.student_id && fa.college_id === collegeId && fa.status === 'active');
      let faculty = null;
      if (activeAssign) {
        const facProf = this.getProfile(activeAssign.faculty_id);
        faculty = facProf ? { id: facProf.id, name: facProf.full_name, email: facProf.email } : null;
      }

      const enrollments = this.getStudentEnrollments(m.student_id);
      const avgProgress = enrollments.length > 0
        ? Math.round(enrollments.reduce((sum, e) => sum + e.progress_percentage, 0) / enrollments.length)
        : 0;

      return {
        ...prof,
        membership_id: m.id,
        joined_at: m.joined_at,
        assigned_faculty: faculty,
        enrollments,
        average_progress: avgProgress
      };
    }).filter(s => {
      if (search) {
        const query = search.toLowerCase();
        if (!s.full_name?.toLowerCase().includes(query) && !s.email?.toLowerCase().includes(query)) {
          return false;
        }
      }
      if (facultyId) {
        if (s.assigned_faculty?.id !== facultyId) return false;
      }
      return true;
    });
  }

  // --------------------------------------------------------------------------
  // COURSE ENROLLMENTS & PROGRESS
  // --------------------------------------------------------------------------
  enrollCourse({ studentId, courseId, collegeId = null }) {
    // If course is college-restricted or requested in college context:
    if (collegeId) {
      const activeMem = this.getStudentActiveMembership(studentId);
      if (!activeMem || activeMem.college_id !== collegeId) {
        throw new Error('You do not have an active membership in this college.');
      }
      const collegeCourse = this.data.college_courses.find(cc => cc.college_id === collegeId && cc.course_id === courseId && cc.is_active);
      if (!collegeCourse) {
        throw new Error('This course is not enabled for your college.');
      }
    }

    const now = new Date().toISOString();
    const existing = this.data.course_enrollments.find(e => e.student_id === studentId && e.course_id === courseId);
    if (existing) {
      if (existing.status !== 'active') {
        existing.status = 'active';
        existing.last_accessed_at = now;
        this.save();
      }
      return this.enrichEnrollmentProgress(existing);
    }

    const newEnrollment = {
      id: `enr-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      student_id: studentId,
      course_id: courseId,
      college_id: collegeId,
      status: 'active',
      enrolled_at: now,
      completed_at: null,
      last_accessed_at: now
    };

    this.data.course_enrollments.push(newEnrollment);

    this.logAudit({
      actorId: studentId,
      action: 'ENROLL_COURSE',
      targetType: 'course_enrollment',
      targetId: newEnrollment.id,
      details: { courseId, collegeId }
    });

    this.save();
    return this.enrichEnrollmentProgress(newEnrollment);
  }

  getCourseTotalTopics(courseId) {
    if (!courseId) return 25;
    const key = courseId.toLowerCase();
    if (key === 'dsa') return 200;
    const course = courses[key];
    if (!course || !Array.isArray(course.levels)) return 25;
    let count = 0;
    for (const level of course.levels) {
      for (const mod of level.modules || []) {
        if (Array.isArray(mod.topics) && mod.topics.length > 0) {
          count += mod.topics.length;
        } else if (Array.isArray(mod.sections)) {
          for (const s of mod.sections) {
            if (Array.isArray(s.topics)) count += s.topics.length;
          }
        }
      }
    }
    return count > 0 ? count : 25;
  }

  recordTopicProgress({ studentId, courseId, topicId, status = 'completed' }) {
    this.syncFromDisk();
    const now = new Date().toISOString();
    const normCourseId = (courseId || '').toLowerCase().trim();
    const normTopicId = (topicId || '').trim();

    let existing = this.data.topic_progress.find(
      tp => tp.student_id === studentId && tp.course_id.toLowerCase() === normCourseId && tp.topic_id === normTopicId
    );

    // Rule 2: Topic completion is STRICTLY PERMANENT.
    // Once marked completed, a topic cannot be unmarked or toggled back.
    if (existing && existing.status === 'completed') {
      let enrollment = this.data.course_enrollments.find(
        e => e.student_id === studentId && e.course_id.toLowerCase() === normCourseId
      );
      const enriched = enrollment ? this.enrichEnrollmentProgress(enrollment) : null;
      const profile = this.getProfile(studentId);
      return {
        topicProgress: existing,
        enrollment: enriched,
        alreadyCompleted: true,
        xpAwarded: false,
        currentXP: profile?.xp || 0,
        message: 'Topic is already permanently completed.'
      };
    }

    if (existing) {
      existing.status = 'completed';
      existing.completed_at = existing.completed_at || now;
      existing.last_activity_at = now;
    } else {
      existing = {
        id: `tp-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
        student_id: studentId,
        course_id: normCourseId,
        topic_id: normTopicId,
        status: 'completed',
        completed_at: now,
        last_activity_at: now
      };
      this.data.topic_progress.push(existing);
    }

    // Persist to Supabase topic_progress table if configured
    if (isSupabaseAdminConfigured() && studentId !== 'guest-learner') {
      try {
        supabaseAdmin.from('topic_progress').upsert({
          student_id: studentId,
          course_id: normCourseId,
          topic_id: normTopicId,
          status: 'completed',
          completed_at: existing.completed_at || now,
          last_activity_at: now
        }, { onConflict: 'student_id,course_id,topic_id' }).catch(() => {});
      } catch (_) {}
    }

    // Award +1 XP and record daily activity
    const xpResult = this.awardXP({
      userId: studentId,
      amount: 1,
      reason: `Completed topic: ${normTopicId}`,
      activityType: 'topic_completion',
      activityId: `${normCourseId}_${normTopicId}`
    });
    const streakResult = this.recordDailyActivity({
      userId: studentId,
      activityType: 'topic_completion',
      activityId: `${normCourseId}_${normTopicId}`
    });

    // Update or auto-create enrollment last accessed
    let enrollment = this.data.course_enrollments.find(
      e => e.student_id === studentId && e.course_id.toLowerCase() === normCourseId
    );
    if (!enrollment) {
      enrollment = {
        id: `enr-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
        student_id: studentId,
        course_id: normCourseId,
        college_id: this.getStudentActiveMembership(studentId)?.college_id || null,
        status: 'active',
        enrolled_at: now,
        completed_at: null,
        last_accessed_at: now
      };
      this.data.course_enrollments.push(enrollment);
    } else {
      enrollment.last_accessed_at = now;
    }

    // Check progress percentage
    const enriched = this.enrichEnrollmentProgress(enrollment);
    if (enriched.progress_percentage === 100 && !enrollment.completed_at) {
      enrollment.status = 'completed';
      enrollment.completed_at = now;
    }

    this.save();
    const profile = this.getProfile(studentId);
    return {
      topicProgress: existing,
      enrollment: enriched,
      xpAwarded: Boolean(xpResult?.awarded),
      currentXP: xpResult?.currentXP || profile?.xp || 0,
      streak: streakResult?.currentStreak
    };
  }

  getStudentEnrollments(studentId) {
    const enrollments = this.data.course_enrollments.filter(e => e.student_id === studentId);
    return enrollments.map(e => this.enrichEnrollmentProgress(e));
  }

  enrichEnrollmentProgress(enrollment) {
    const completedTopics = this.data.topic_progress.filter(
      tp => tp.student_id === enrollment.student_id && tp.course_id.toLowerCase() === enrollment.course_id.toLowerCase() && tp.status === 'completed'
    );

    const totalRequired = this.getCourseTotalTopics(enrollment.course_id);
    let completedCount = completedTopics.length;

    if (enrollment.course_id.toLowerCase() === 'dsa') {
      const solvedDSA = (this.data.dsa_progress || []).filter(
        p => p.user_id === enrollment.student_id && p.status === 'solved'
      ).length;
      completedCount = Math.max(completedCount, solvedDSA);
    }

    const progressPct = totalRequired > 0 ? Math.min(100, Math.round((completedCount / totalRequired) * 100)) : 0;

    return {
      ...enrollment,
      completed_topics_count: completedCount,
      completed_topic_ids: completedTopics.map(tp => tp.topic_id),
      total_topics_count: totalRequired,
      progress_percentage: progressPct,
      is_completed: progressPct >= 100
    };
  }

  // --------------------------------------------------------------------------
  // GAMIFICATION: XP, COINS & STREAKS
  // --------------------------------------------------------------------------
  awardXP({ userId, amount, reason, activityType, activityId }) {
    if (!userId || !amount) return { awarded: false, reason: 'Missing userId or amount' };
    this.syncFromDisk();
    if (!this.data.xp_transactions) this.data.xp_transactions = [];

    // Idempotency check: if activityType and activityId already exist for this user, do not award again
    if (activityType && activityId) {
      const existing = this.data.xp_transactions.find(
        tx => tx.user_id === userId && tx.activity_type === activityType && tx.activity_id === activityId
      );
      if (existing) {
        const profile = this.getProfile(userId);
        return {
          awarded: false,
          alreadyAwarded: true,
          amount: 0,
          currentXP: profile?.xp || 0
        };
      }
    }

    const tx = {
      id: `xp-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      user_id: userId,
      amount: Number(amount),
      reason: reason || activityType || 'Activity completion',
      activity_type: activityType || 'general',
      activity_id: activityId || null,
      created_at: new Date().toISOString()
    };
    this.data.xp_transactions.push(tx);

    let profile = this.getProfile(userId);
    if (profile) {
      profile.xp = (profile.xp || 0) + Number(amount);
      profile.updated_at = new Date().toISOString();
      if (isSupabaseAdminConfigured() && userId !== 'guest-learner') {
        try {
          supabaseAdmin.from('profiles').update({ xp: profile.xp }).eq('id', userId).catch(() => {});
        } catch (_) {}
      }
    }

    this.save();
    return {
      awarded: true,
      amount: Number(amount),
      currentXP: profile?.xp || 0,
      transaction: tx
    };
  }

  recordDailyActivity({ userId, activityType, activityId, metadata = {} }) {
    if (!userId) return { currentStreak: 0, longestStreak: 0, totalActiveDays: 0 };
    this.syncFromDisk();
    if (!this.data.daily_activities) this.data.daily_activities = [];

    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    // Multiple successful problems on one day: create ONLY ONE daily streak record per user per calendar day
    const alreadyRecorded = this.data.daily_activities.some(
      a => a.user_id === userId && a.activity_date === todayStr
    );

    if (!alreadyRecorded) {
      const newAct = {
        id: `act-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
        user_id: userId,
        activity_date: todayStr,
        activity_type: activityType,
        activity_id: activityId,
        metadata,
        created_at: now.toISOString()
      };
      this.data.daily_activities.push(newAct);

      // Persist to Supabase if configured
      if (isSupabaseAdminConfigured() && userId !== 'guest-learner') {
        try {
          supabaseAdmin.from('daily_activities').upsert({
            user_id: userId,
            activity_date: todayStr,
            activity_type: activityType,
            activity_id: activityId,
            metadata
          }, { onConflict: 'user_id,activity_date' }).catch(() => {});
        } catch (_) {}
      }
    }

    // Calculate streaks based on unique active calendar days
    const streakStats = this.calculateUserStreakStats(userId);

    // Update user profile in local DB and Supabase
    const profile = this.getProfile(userId);
    if (profile) {
      profile.streak_days = streakStats.currentStreak;
      profile.longest_streak = Math.max(profile.longest_streak || 0, streakStats.longestStreak);
      profile.total_active_days = streakStats.totalActiveDays;
      profile.updated_at = now.toISOString();

      if (isSupabaseAdminConfigured() && userId !== 'guest-learner') {
        try {
          supabaseAdmin.from('profiles').update({
            streak_days: profile.streak_days,
            longest_streak: profile.longest_streak
          }).eq('id', userId).catch(() => {});
        } catch (_) {}
      }
    }

    this.save();
    return streakStats;
  }

  calculateUserStreakStats(userId) {
    if (!userId) return { currentStreak: 0, longestStreak: 0, totalActiveDays: 0 };
    this.syncFromDisk();

    // Helper: convert YYYY-MM-DD to UTC epoch days (DST and timezone invariant)
    const toEpochDays = (dateStr) => {
      if (!dateStr || typeof dateStr !== 'string') return 0;
      const parts = dateStr.split('-').map(Number);
      if (parts.length < 3 || isNaN(parts[0])) return 0;
      return Math.floor(Date.UTC(parts[0], parts[1] - 1, parts[2]) / 86400000);
    };

    // Collect all unique activity dates from both daily_activities and dsa_activity
    const dateSet = new Set();

    (this.data.daily_activities || [])
      .filter(a => a.user_id === userId && a.activity_date)
      .forEach(a => dateSet.add(a.activity_date));

    // Also include dsa_activity solves
    (this.data.dsa_activity || [])
      .filter(a => a.user_id === userId)
      .forEach(a => {
        if (a.solved_count > 0 && a.activity_date) dateSet.add(a.activity_date);
      });

    const totalActiveDays = dateSet.size;
    if (totalActiveDays === 0) {
      return { currentStreak: 0, longestStreak: 0, totalActiveDays: 0 };
    }

    const sortedDates = Array.from(dateSet).sort(); // Ascending 'YYYY-MM-DD'

    // Compute longest streak across entire user history
    let longestStreak = 1;
    let runningStreak = 1;

    for (let i = 1; i < sortedDates.length; i++) {
      const prevDays = toEpochDays(sortedDates[i - 1]);
      const currDays = toEpochDays(sortedDates[i]);
      const diffDays = currDays - prevDays;

      if (diffDays === 1) {
        runningStreak++;
        if (runningStreak > longestStreak) longestStreak = runningStreak;
      } else if (diffDays > 1) {
        runningStreak = 1;
      }
    }

    // Compute current streak:
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const todayEpoch = toEpochDays(todayStr);

    const latestDate = sortedDates[sortedDates.length - 1];
    const latestEpoch = toEpochDays(latestDate);

    let currentStreak = 0;
    // Current streak is valid if user was active today OR yesterday
    if (latestEpoch === todayEpoch || latestEpoch === todayEpoch - 1) {
      currentStreak = 1;
      for (let i = sortedDates.length - 1; i > 0; i--) {
        const curr = toEpochDays(sortedDates[i]);
        const prev = toEpochDays(sortedDates[i - 1]);
        if (curr - prev === 1) {
          currentStreak++;
        } else {
          break;
        }
      }
    }

    return {
      currentStreak,
      longestStreak: Math.max(longestStreak, currentStreak),
      totalActiveDays
    };
  }

  getUserGamification(userId) {
    if (!userId) return null;
    this.syncFromDisk();
    const profile = this.getProfile(userId);
    const streakStats = this.calculateUserStreakStats(userId);
    const transactions = (this.data.xp_transactions || [])
      .filter(tx => tx.user_id === userId)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 50);

    return {
      userId,
      xp: profile?.xp || 0,
      coins: profile?.xp || 0,
      currentStreak: streakStats.currentStreak,
      longestStreak: streakStats.longestStreak,
      totalActiveDays: streakStats.totalActiveDays,
      level: profile?.level || 'Beginner',
      recentTransactions: transactions
    };
  }

  // --------------------------------------------------------------------------
  // CERTIFICATES
  // --------------------------------------------------------------------------
  getStudentCertificates(userId) {
    if (!userId) return [];
    this.syncFromDisk();
    return (this.data.certificates || []).filter(c => c.user_id === userId);
  }

  getCertificateById(certificateId) {
    if (!certificateId) return null;
    this.syncFromDisk();
    return (this.data.certificates || []).find(
      c => c.id.toLowerCase() === certificateId.toLowerCase().trim()
    ) || null;
  }

  generateCertificate({ userId, courseId }) {
    if (!userId || !courseId) throw new Error('User ID and Course ID are required.');
    this.syncFromDisk();
    if (!this.data.certificates) this.data.certificates = [];

    const normalizedCourse = courseId.toLowerCase().trim();
    const profile = this.getProfile(userId);
    const studentName = profile?.full_name || profile?.fullName || 'CodeMentor Graduate';

    // Check if certificate already exists
    const existing = this.data.certificates.find(
      c => c.user_id === userId && c.course_id === normalizedCourse
    );
    if (existing) return existing;

    // Verify 100% completion requirement
    let isCompleted = false;
    let completedCount = 0;
    let totalRequired = 0;

    if (normalizedCourse === 'dsa') {
      totalRequired = 200;
      const solvedCount = (this.data.dsa_progress || []).filter(
        p => p.user_id === userId && p.status === 'solved'
      ).length;
      completedCount = solvedCount;
      isCompleted = completedCount >= totalRequired;
    } else {
      totalRequired = this.getCourseTotalTopics(normalizedCourse);
      const userCompletedTopics = this.data.topic_progress.filter(
        tp => tp.student_id === userId && tp.course_id === normalizedCourse && tp.status === 'completed'
      );
      completedCount = userCompletedTopics.length;
      isCompleted = totalRequired > 0 && completedCount >= totalRequired;
    }

    if (!isCompleted) {
      const pct = totalRequired > 0 ? Math.round((completedCount / totalRequired) * 100) : 0;
      throw new Error(
        `Course not eligible for certificate: Completed ${completedCount}/${totalRequired} (${pct}%). 100% completion is strictly required.`
      );
    }

    const courseTitle = CERTIFICATE_TITLES[normalizedCourse] || `${normalizedCourse.toUpperCase()} Specialist`;
    const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase();
    const certId = `CM-CERT-${normalizedCourse.toUpperCase()}-${randomHex}`;
    const now = new Date().toISOString();

    const cert = {
      id: certId,
      user_id: userId,
      course_id: normalizedCourse,
      course_title: courseTitle,
      student_name: studentName,
      issued_at: now,
      verification_url: `/verify-certificate/${certId}`,
      metadata: {
        totalTopicsCompleted: completedCount,
        grade: 'Exemplary Completion',
        institution: 'CodeMentor Learning Academy',
        issuer: 'CodeMentor Verification Authority'
      }
    };

    this.data.certificates.push(cert);
    this.save();
    return cert;
  }

  // --------------------------------------------------------------------------
  // MESSAGING (Authorized Communication)
  // --------------------------------------------------------------------------
  getOrCreateConversation({ type, collegeId, participantIds }) {
    // Sort participant IDs for deterministic uniqueness
    const sorted = [...participantIds].sort();

    let conv = this.data.conversations.find(c => {
      if (c.type !== type || c.college_id !== collegeId) return false;
      const cSorted = [...c.participant_ids].sort();
      return cSorted.length === sorted.length && cSorted.every((val, idx) => val === sorted[idx]);
    });

    if (!conv) {
      const now = new Date().toISOString();
      conv = {
        id: `conv-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
        type,
        college_id: collegeId,
        participant_ids: sorted,
        created_at: now,
        updated_at: now
      };
      this.data.conversations.push(conv);
      this.save();
    }

    return conv;
  }

  validateMessagingAuthorization(senderId, receiverId) {
    const senderRoleObj = this.getUserPrimaryRole(senderId);
    const receiverRoleObj = this.getUserPrimaryRole(receiverId);

    // 1. Student -> Faculty: Must be assigned within same college
    if (senderRoleObj.role === 'user' && receiverRoleObj.role === 'faculty') {
      const assignment = this.data.faculty_assignments.find(
        fa => fa.student_id === senderId && fa.faculty_id === receiverId && fa.status === 'active'
      );
      if (!assignment) {
        throw new Error('You may only message the faculty member currently assigned to you in your college.');
      }
      return { type: 'student_faculty', collegeId: assignment.college_id };
    }

    // 2. Faculty -> Student: Must be assigned within same college
    if (senderRoleObj.role === 'faculty' && receiverRoleObj.role === 'user') {
      const assignment = this.data.faculty_assignments.find(
        fa => fa.faculty_id === senderId && fa.student_id === receiverId && fa.status === 'active'
      );
      if (!assignment) {
        throw new Error('You may only message students assigned to you in your college.');
      }
      return { type: 'student_faculty', collegeId: assignment.college_id };
    }

    // 3. Faculty -> College Admin: Must be same college
    if (senderRoleObj.role === 'faculty' && receiverRoleObj.role === 'college_admin') {
      if (!senderRoleObj.college_id || senderRoleObj.college_id !== receiverRoleObj.college_id) {
        throw new Error('You can only message the administrator of your own college.');
      }
      return { type: 'faculty_admin', collegeId: senderRoleObj.college_id };
    }

    // 4. College Admin -> Faculty: Must be same college
    if (senderRoleObj.role === 'college_admin' && receiverRoleObj.role === 'faculty') {
      if (!senderRoleObj.college_id || senderRoleObj.college_id !== receiverRoleObj.college_id) {
        throw new Error('You can only message faculty belonging to your college.');
      }
      return { type: 'faculty_admin', collegeId: senderRoleObj.college_id };
    }

    // 5. Super Admin can message anyone
    if (senderRoleObj.role === 'super_admin' || receiverRoleObj.role === 'super_admin') {
      return { type: 'direct', collegeId: senderRoleObj.college_id || receiverRoleObj.college_id || null };
    }

    throw new Error('Messaging between these users is not authorized by institutional policy.');
  }

  sendMessage({ senderId, receiverId, content }) {
    if (!content || !content.trim()) {
      throw new Error('Message content cannot be empty.');
    }

    const { type, collegeId } = this.validateMessagingAuthorization(senderId, receiverId);
    const conversation = this.getOrCreateConversation({
      type,
      collegeId,
      participantIds: [senderId, receiverId]
    });

    const now = new Date().toISOString();
    const message = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      conversation_id: conversation.id,
      sender_id: senderId,
      receiver_id: receiverId,
      content: content.trim(),
      is_read: false,
      read_at: null,
      created_at: now
    };

    this.data.messages.push(message);
    conversation.updated_at = now;

    this.save();
    return message;
  }

  getUserConversations(userId) {
    const list = this.data.conversations.filter(c => c.participant_ids.includes(userId));
    return list.map(conv => {
      const otherId = conv.participant_ids.find(id => id !== userId);
      const otherProfile = this.getProfile(otherId) || { id: otherId, full_name: 'User', email: '' };
      const otherRole = this.getUserPrimaryRole(otherId);

      const msgs = this.data.messages.filter(m => m.conversation_id === conv.id);
      const lastMsg = msgs.length > 0 ? msgs[msgs.length - 1] : null;
      const unreadCount = msgs.filter(m => m.receiver_id === userId && !m.is_read).length;

      return {
        ...conv,
        other_user: {
          id: otherProfile.id,
          full_name: otherProfile.full_name,
          email: otherProfile.email,
          role: otherRole.role
        },
        last_message: lastMsg,
        unread_count: unreadCount
      };
    }).sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  }

  getUserUnreadMessageCount(userId) {
    if (!userId || userId === 'guest-learner') return 0;
    return this.data.messages.filter(m => m.receiver_id === userId && !m.is_read).length;
  }

  getConversationMessages(conversationId, userId) {
    const conv = this.data.conversations.find(c => c.id === conversationId);
    if (!conv) throw new Error('Conversation not found.');
    if (!conv.participant_ids.includes(userId)) {
      throw new Error('Unauthorized to access this conversation.');
    }

    // Mark messages directed to userId as read
    const now = new Date().toISOString();
    let updated = false;
    this.data.messages.forEach(m => {
      if (m.conversation_id === conversationId && m.receiver_id === userId && !m.is_read) {
        m.is_read = true;
        m.read_at = now;
        updated = true;
      }
    });

    if (updated) this.save();

    return this.data.messages.filter(m => m.conversation_id === conversationId);
  }

  // --------------------------------------------------------------------------
  // AUDIT LOGS
  // --------------------------------------------------------------------------
  logAudit({ actorId, action, targetType, targetId, details = {} }) {
    const entry = {
      id: `audit-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      actor_id: actorId,
      action,
      target_type: targetType,
      target_id: targetId ? String(targetId) : null,
      details,
      created_at: new Date().toISOString()
    };
    this.data.audit_logs.push(entry);
    // Keep last 1000 audit logs
    if (this.data.audit_logs.length > 1000) {
      this.data.audit_logs = this.data.audit_logs.slice(-1000);
    }
    return entry;
  }

  getAuditLogs({ limit = 50, actorId = null, action = null } = {}) {
    let logs = [...(this.data.audit_logs || [])];
    if (actorId) logs = logs.filter(l => l.actor_id === actorId);
    if (action) logs = logs.filter(l => l.action === action);
    logs.reverse();
    return logs.slice(0, limit).map(l => {
      const actor = this.getProfile(l.actor_id);
      return {
        ...l,
        actor: actor ? { id: actor.id, name: actor.full_name, email: actor.email } : { id: l.actor_id, name: 'System' }
      };
    });
  }

  // --------------------------------------------------------------------------
  // ANALYTICS & DASHBOARDS
  // --------------------------------------------------------------------------
  getSuperAdminPlatformMetrics() {
    const totalUsers = this.data.profiles.length;
    const collegeStudentsCount = this.data.college_memberships.filter(m => m.status === 'active').length;
    const independentLearners = Math.max(0, totalUsers - collegeStudentsCount);
    const totalColleges = this.data.colleges.length;
    const collegeAdminsCount = this.data.user_roles.filter(r => r.role === 'college_admin').length;
    const facultyCount = this.data.user_roles.filter(r => r.role === 'faculty').length;
    const totalEnrollments = this.data.course_enrollments.length;
    const completedCourses = this.data.course_enrollments.filter(e => e.status === 'completed').length;
    const activeLearners = this.data.course_enrollments.filter(e => e.status === 'active').length;

    return {
      total_users: totalUsers,
      independent_learners: independentLearners,
      college_students: collegeStudentsCount,
      total_colleges: totalColleges,
      college_admins: collegeAdminsCount,
      faculty_count: facultyCount,
      total_enrollments: totalEnrollments,
      active_learners: activeLearners,
      completed_courses: completedCourses,
      recent_colleges: this.getColleges().slice(0, 5)
    };
  }

  getCollegeAdminMetrics(collegeId) {
    const college = this.getCollegeById(collegeId);
    if (!college) throw new Error('College not found.');

    const students = this.getCollegeStudents(collegeId);
    const faculty = this.getCollegeFaculty(collegeId);
    const pendingRequests = this.getCollegeJoinRequests(collegeId, 'pending');
    const enabledCourses = this.data.college_courses.filter(cc => cc.college_id === collegeId && cc.is_active);

    const enrollments = this.data.course_enrollments.filter(e => e.college_id === collegeId);
    const avgProgress = students.length > 0
      ? Math.round(students.reduce((sum, s) => sum + s.average_progress, 0) / students.length)
      : 0;

    const completedEnrollments = enrollments.filter(e => e.status === 'completed').length;

    return {
      college,
      total_students: students.length,
      total_faculty: faculty.length,
      pending_join_requests_count: pendingRequests.length,
      active_enrollments_count: enrollments.length,
      average_progress: avgProgress,
      completed_enrollments_count: completedEnrollments,
      enabled_courses: enabledCourses,
      recent_students: students.slice(0, 5),
      faculty_list: faculty
    };
  }

  getFacultyMetrics(facultyId) {
    const assignedStudents = this.getFacultyAssignedStudents(facultyId);
    const totalAssigned = assignedStudents.length;
    const needingHelp = assignedStudents.filter(s => s.needs_help).length;
    const activeStudents = assignedStudents.filter(s => s.average_progress > 0).length;

    const allEnrollments = [];
    assignedStudents.forEach(s => allEnrollments.push(...s.enrollments));

    const avgProgress = totalAssigned > 0
      ? Math.round(assignedStudents.reduce((sum, s) => sum + s.average_progress, 0) / totalAssigned)
      : 0;

    const convs = this.getUserConversations(facultyId);
    const unreadMessagesCount = convs.reduce((sum, c) => sum + c.unread_count, 0);

    return {
      total_assigned_students: totalAssigned,
      active_students: activeStudents,
      needing_support_count: needingHelp,
      total_enrollments: allEnrollments.length,
      average_progress: avgProgress,
      unread_messages_count: unreadMessagesCount,
      assigned_students: assignedStudents
    };
  }

  getStudentDashboardData(studentId) {
    const profile = this.getProfile(studentId) || { id: studentId, full_name: 'Student', email: '', xp: 0 };
    const gamification = this.getUserGamification(studentId);
    if (gamification) {
      profile.xp = gamification.xp;
      profile.streak_days = gamification.currentStreak;
      profile.longest_streak = gamification.longestStreak;
      profile.total_active_days = gamification.totalActiveDays;
    }

    const membership = this.getStudentActiveMembership(studentId);
    let college = null;
    if (membership) {
      college = this.getCollegeById(membership.college_id);
    }

    const assignedFaculty = this.getStudentAssignedFaculty(studentId);
    const enrollments = this.getStudentEnrollments(studentId);
    const joinRequests = this.getStudentJoinRequests(studentId);
    const convs = this.getUserConversations(studentId);
    const unreadMessagesCount = convs.reduce((sum, c) => sum + c.unread_count, 0);

    const totalEnrollments = enrollments.length;
    const avgProgress = totalEnrollments > 0
      ? Math.round(enrollments.reduce((sum, e) => sum + e.progress_percentage, 0) / totalEnrollments)
      : 0;
    const totalCompletedTopics = enrollments.reduce((sum, e) => sum + e.completed_topics_count, 0);

    return {
      profile,
      gamification,
      college_membership: membership ? { status: membership.status, joined_at: membership.joined_at, college } : null,
      assigned_faculty: assignedFaculty,
      enrollments,
      total_enrolled: totalEnrollments,
      average_progress: avgProgress,
      total_completed_topics: totalCompletedTopics,
      join_requests: joinRequests,
      unread_messages_count: unreadMessagesCount
    };
  }
}

export const dbService = new DBService();
export default dbService;
