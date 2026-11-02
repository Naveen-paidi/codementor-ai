import { supabase, isSupabaseConfigured } from '../config/supabase.js';
import { dbService } from '../services/db.service.js';

/**
 * In-memory token verification cache: token -> { user, expiresAt }
 * Caches verified identity for up to 60 seconds (or JWT exp) to eliminate redundant
 * remote network round-trips to Supabase Auth servers across the internet.
 */
const verifiedTokenCache = new Map();

export const invalidateTokenCache = (token) => {
  if (token) verifiedTokenCache.delete(token);
};

// Periodic garbage collection for expired token cache entries
setInterval(() => {
  const now = Date.now();
  for (const [t, entry] of verifiedTokenCache.entries()) {
    if (entry.expiresAt <= now) {
      verifiedTokenCache.delete(t);
    }
  }
}, 60000);

/**
 * Enhanced Authentication Middleware
 * Validates Supabase JWT bearer token and attaches verified identity, role, and college context.
 */
export const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // If not authenticated, reject protected request
    return res.status(401).json({
      success: false,
      error: 'Authentication required. Missing Bearer authorization token.'
    });
  }

  const token = authHeader.split(' ')[1];

  if (!isSupabaseConfigured()) {
    return res.status(503).json({
      success: false,
      error: 'Authentication service is currently unavailable.'
    });
  }

  try {
    let user = null;
    const cached = verifiedTokenCache.get(token);
    if (cached && cached.expiresAt > Date.now()) {
      user = cached.user;
    } else {
      const { data, error } = await supabase.auth.getUser(token);
      if (error || !data?.user) {
        verifiedTokenCache.delete(token);
        return res.status(401).json({
          success: false,
          error: 'Invalid or expired authentication token.'
        });
      }
      user = data.user;

      // Calculate expiration: 60s TTL or token's JWT exp timestamp
      let expMs = Date.now() + 60000;
      try {
        const parts = token.split('.');
        if (parts.length === 3) {
          const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf8'));
          if (payload.exp) {
            expMs = Math.min(expMs, payload.exp * 1000);
          }
        }
      } catch (_) {}

      verifiedTokenCache.set(token, { user, expiresAt: expMs });
    }

    // Attach profile and verified role from persistent store
    const profile = dbService.getProfile(user.id) || dbService.upsertProfile({
      id: user.id,
      email: user.email,
      full_name: user.user_metadata?.full_name || user.email.split('@')[0]
    });

    const roleInfo = dbService.getUserPrimaryRole(user.id);

    req.user = {
      id: user.id,
      email: user.email,
      fullName: profile.full_name,
      role: roleInfo.role,
      college_id: roleInfo.college_id,
      college: roleInfo.college,
      level: profile.level,
      xp: profile.xp
    };

    next();
  } catch (err) {
    verifiedTokenCache.delete(token);
    return res.status(401).json({
      success: false,
      error: 'Authentication verification failed: ' + (err.message || 'Unknown error')
    });
  }
};

/**
 * Optional Auth Middleware
 * For endpoints that allow guests but can personalize if token is provided.
 */
export const optionalAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    req.user = {
      id: 'guest-learner',
      email: 'guest@aimentor.edu',
      fullName: 'Guest Scholar',
      role: 'user',
      college_id: null,
      isGuest: true
    };
    return next();
  }

  const token = authHeader.split(' ')[1];
  try {
    let user = null;
    const cached = verifiedTokenCache.get(token);
    if (cached && cached.expiresAt > Date.now()) {
      user = cached.user;
    } else {
      const { data } = await supabase.auth.getUser(token);
      if (data?.user) {
        user = data.user;
        let expMs = Date.now() + 60000;
        try {
          const parts = token.split('.');
          if (parts.length === 3) {
            const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf8'));
            if (payload.exp) expMs = Math.min(expMs, payload.exp * 1000);
          }
        } catch (_) {}
        verifiedTokenCache.set(token, { user, expiresAt: expMs });
      }
    }

    if (user) {
      const profile = dbService.getProfile(user.id) || dbService.upsertProfile({
        id: user.id,
        email: user.email,
        full_name: user.user_metadata?.full_name || user.email.split('@')[0]
      });
      const roleInfo = dbService.getUserPrimaryRole(user.id);
      req.user = {
        id: user.id,
        email: user.email,
        fullName: profile.full_name,
        role: roleInfo.role,
        college_id: roleInfo.college_id,
        college: roleInfo.college,
        level: profile.level,
        xp: profile.xp,
        isGuest: false
      };
    } else {
      req.user = { id: 'guest-learner', role: 'user', isGuest: true };
    }
  } catch (_) {
    req.user = { id: 'guest-learner', role: 'user', isGuest: true };
  }
  next();
};

/**
 * Require specific role or list of roles
 */
export const requireRole = (allowedRoles) => {
  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'Authentication required.' });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: `Access denied. Required role: ${roles.join(' or ')}. Current role: ${req.user.role}`
      });
    }
    next();
  };
};

/**
 * Super Admin Only
 */
export const requireSuperAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'super_admin') {
    return res.status(403).json({
      success: false,
      error: 'Access denied. Super administrator privileges required.'
    });
  }
  next();
};

/**
 * College Admin Only
 */
export const requireCollegeAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'college_admin') {
    return res.status(403).json({
      success: false,
      error: 'Access denied. College administrator privileges required.'
    });
  }
  next();
};

/**
 * Faculty Only
 */
export const requireFaculty = (req, res, next) => {
  if (!req.user || req.user.role !== 'faculty') {
    return res.status(403).json({
      success: false,
      error: 'Access denied. Faculty privileges required.'
    });
  }
  next();
};

/**
 * Enforce same college boundary
 * Verifies that the requested collegeId matches the caller's authorized college
 */
export const requireSameCollege = (req, res, next) => {
  if (req.user?.role === 'super_admin') {
    return next(); // Super admin has global access
  }
  const targetCollegeId = req.params.collegeId || req.body.collegeId || req.query.collegeId;
  if (!targetCollegeId) {
    return res.status(400).json({ success: false, error: 'College ID is required.' });
  }
  if (!req.user?.college_id || req.user.college_id !== targetCollegeId) {
    return res.status(403).json({
      success: false,
      error: 'Access denied. You can only access and manage records for your own college.'
    });
  }
  next();
};
