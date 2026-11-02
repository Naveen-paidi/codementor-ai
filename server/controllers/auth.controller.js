import { supabase, supabaseAdmin, isSupabaseConfigured } from '../config/supabase.js';
import { dbService } from '../services/db.service.js';

/**
 * Register a new user
 * Enforces email normalization, case-insensitive uniqueness, auto-confirm email,
 * and guarantees that regular signup can NEVER select a privileged role.
 */
export const register = async (req, res, next) => {
  try {
    const { email, password, fullName, name } = req.body;
    const displayName = (fullName || name || '').trim();

    if (!email || !password) {
      console.warn('[Registration] Registration failed: Email and password are required.');
      return res.status(400).json({ success: false, error: 'Email and password are required.' });
    }

    if (password.length < 6) {
      console.warn('[Registration] Registration failed: Password must be at least 6 characters.');
      return res.status(400).json({ success: false, error: 'Password must be at least 6 characters.' });
    }

    // Normalise email (case-insensitive)
    const normalizedEmail = email.trim().toLowerCase();

    // Check if user already exists in local db
    const existingLocal = dbService.getProfileByEmail(normalizedEmail);
    if (existingLocal) {
      console.warn(`[Registration] Registration failed: An account with email ${normalizedEmail} already exists in local database.`);
      return res.status(409).json({
        success: false,
        message: 'An account with this email already exists. Please log in.',
        error: 'An account with this email already exists. Please log in.'
      });
    }

    let authUser = null;
    let token = null;

    if (isSupabaseConfigured()) {
      // Create user using Supabase Admin Client with auto-confirmed email
      const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email: normalizedEmail,
        password,
        email_confirm: true,
        user_metadata: { full_name: displayName || normalizedEmail.split('@')[0] }
      });

      if (error) {
        console.warn(`[Registration] Registration failed: ${error.message}`);
        const msg = (error.message || '').toLowerCase();
        if (
          error.code === 'email_exists' ||
          error.status === 422 ||
          msg.includes('already') ||
          msg.includes('unique') ||
          msg.includes('exists')
        ) {
          return res.status(409).json({
            success: false,
            message: 'An account with this email already exists. Please log in.',
            error: 'An account with this email already exists. Please log in.'
          });
        }
        return res.status(400).json({ success: false, error: error.message });
      }

      authUser = data.user;

      // Automatically sign in to get an authenticated session / JWT token
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password
      });

      if (!signInError && signInData?.session) {
        token = signInData.session.access_token;
      }
    } else {
      // Fallback ID if Supabase is offline
      authUser = {
        id: `usr-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
        email: normalizedEmail
      };
    }

    // Create user profile in persistent store
    const profile = dbService.upsertProfile({
      id: authUser.id,
      email: normalizedEmail,
      full_name: displayName || normalizedEmail.split('@')[0],
      level: 'Beginner',
      xp: 0
    });

    // Enforce default 'user' role ONLY (ignore any client-supplied role like super_admin, college_admin, faculty)
    dbService.setUserRole({
      userId: authUser.id,
      role: 'user',
      collegeId: null,
      actorId: 'system'
    });

    dbService.logAudit({
      actorId: authUser.id,
      action: 'USER_REGISTRATION',
      targetType: 'user',
      targetId: authUser.id,
      details: { email: normalizedEmail }
    });

    res.status(201).json({
      success: true,
      message: 'Account created successfully.',
      token,
      user: {
        id: authUser.id,
        email: normalizedEmail,
        fullName: profile.full_name,
        role: 'user',
        college_id: null,
        college: null,
        level: profile.level,
        xp: profile.xp
      }
    });
  } catch (error) {
    console.warn(`[Registration] Registration failed: ${error.message}`);
    next(error);
  }
};

/**
 * Authenticate user login
 * Authenticates credentials via Supabase Auth and returns JWT token & user context
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password are required.' });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!isSupabaseConfigured()) {
      return res.status(503).json({ success: false, error: 'Authentication service unavailable.' });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password
    });

    if (error || !data?.session) {
      return res.status(401).json({
        success: false,
        error: error?.message || 'Invalid email or password.'
      });
    }

    const authUser = data.user;
    const profile = dbService.getProfile(authUser.id) || dbService.upsertProfile({
      id: authUser.id,
      email: authUser.email,
      full_name: authUser.user_metadata?.full_name || authUser.email.split('@')[0]
    });

    const roleInfo = dbService.getUserPrimaryRole(authUser.id);

    dbService.logAudit({
      actorId: authUser.id,
      action: 'USER_LOGIN',
      targetType: 'user',
      targetId: authUser.id,
      details: { email: normalizedEmail }
    });

    const streakStats = dbService.calculateUserStreakStats(authUser.id);

    res.json({
      success: true,
      token: data.session.access_token,
      user: {
        id: authUser.id,
        email: authUser.email,
        fullName: profile.full_name,
        role: roleInfo.role,
        college_id: roleInfo.college_id,
        college: roleInfo.college,
        level: profile.level,
        xp: profile.xp,
        streak_days: streakStats.currentStreak,
        streakDays: streakStats.currentStreak,
        longest_streak: streakStats.longestStreak
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get current authenticated user profile and roles
 */
export const getCurrentUserProfile = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user || user.id === 'guest-learner') {
      return res.json({
        success: true,
        user: {
          id: 'guest-learner',
          email: 'guest@aimentor.edu',
          fullName: 'Guest Scholar',
          role: 'user',
          level: 'Beginner',
          xp: 0,
          streak_days: 0,
          streakDays: 0,
          longest_streak: 0,
          isGuest: true
        }
      });
    }

    const profile = dbService.getProfile(user.id);
    const roleInfo = dbService.getUserPrimaryRole(user.id);
    const activeMembership = dbService.getStudentActiveMembership(user.id);
    const streakStats = dbService.calculateUserStreakStats(user.id);

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: profile?.full_name || user.fullName,
        role: roleInfo.role,
        college_id: roleInfo.college_id,
        college: roleInfo.college,
        college_membership: activeMembership ? { status: activeMembership.status, college_id: activeMembership.college_id } : null,
        level: profile?.level || 'Beginner',
        xp: profile?.xp || 0,
        streak_days: streakStats.currentStreak,
        streakDays: streakStats.currentStreak,
        longest_streak: streakStats.longestStreak
      }
    });
  } catch (error) {
    next(error);
  }
};

import { invalidateTokenCache } from '../middleware/auth.js';

/**
 * User logout
 */
export const logout = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      invalidateTokenCache(token);
    }
    if (isSupabaseConfigured()) {
      await supabase.auth.signOut();
    }
    res.json({ success: true, message: 'Logged out successfully.' });
  } catch (error) {
    next(error);
  }
};
