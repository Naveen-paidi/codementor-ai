import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('ai_mentor_user');
    const token = localStorage.getItem('supabase_auth_token');
    // Only trust saved user if a token exists or if it's the default guest
    if (saved && token) {
      try {
        return JSON.parse(saved);
      } catch (_) {}
    }
    return {
      id: 'guest-learner',
      email: 'guest@aimentor.edu',
      fullName: 'Guest Scholar',
      role: 'user',
      college_id: null,
      college: null,
      level: 'Beginner',
      xp: 0,
      streakDays: 0,
      isGuest: true
    };
  });
  const [loading, setLoading] = useState(false);
  const [sessionLoading, setSessionLoading] = useState(() => {
    return Boolean(localStorage.getItem('supabase_auth_token'));
  });

  // Restore authenticated session on mount from real backend profile
  useEffect(() => {
    let isMounted = true;
    const restoreSession = async () => {
      const token = localStorage.getItem('supabase_auth_token');
      if (token) {
        setSessionLoading(true);
        try {
          const res = await api.getProfile();
          if (!isMounted) return;
          if (res.success && res.user && res.user.id !== 'guest-learner') {
            setUser({
              id: res.user.id,
              email: res.user.email,
              fullName: res.user.fullName || res.user.full_name || res.user.email.split('@')[0],
              role: res.user.role || 'user',
              college_id: res.user.college_id || null,
              college: res.user.college || null,
              college_membership: res.user.college_membership || null,
              level: res.user.level || 'Beginner',
              xp: res.user.xp || 0,
              streakDays: typeof res.user.streak_days === 'number' ? res.user.streak_days : 0,
              isGuest: false
            });
          } else {
            // Profile call returned failure or guest -> clear stale token
            localStorage.removeItem('supabase_auth_token');
            localStorage.removeItem('ai_mentor_user');
            setUser({
              id: 'guest-learner',
              email: 'guest@aimentor.edu',
              fullName: 'Guest Scholar',
              role: 'user',
              college_id: null,
              college: null,
              level: 'Beginner',
              xp: 0,
              streakDays: 0,
              isGuest: true
            });
          }
        } catch (err) {
          if (!isMounted) return;
          console.warn('[AuthContext] Failed to restore session from server:', err.message);
          localStorage.removeItem('supabase_auth_token');
          localStorage.removeItem('ai_mentor_user');
          setUser({
            id: 'guest-learner',
            email: 'guest@aimentor.edu',
            fullName: 'Guest Scholar',
            role: 'user',
            college_id: null,
            college: null,
            level: 'Beginner',
            xp: 0,
            streakDays: 0,
            isGuest: true
          });
        } finally {
          if (isMounted) setSessionLoading(false);
        }
      } else {
        setSessionLoading(false);
      }
    };
    restoreSession();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (user && !user.isGuest) {
      localStorage.setItem('ai_mentor_user', JSON.stringify(user));
    }
  }, [user]);

  const refreshProfile = async () => {
    const token = localStorage.getItem('supabase_auth_token');
    if (!token) return;
    try {
      const res = await api.getProfile();
      if (res.success && res.user) {
        setUser(prev => ({
          ...prev,
          role: res.user.role || 'user',
          college_id: res.user.college_id || null,
          college: res.user.college || null,
          college_membership: res.user.college_membership || null,
          xp: res.user.xp !== undefined ? res.user.xp : prev.xp,
          streakDays: typeof res.user.streak_days === 'number'
            ? res.user.streak_days
            : typeof res.user.streakDays === 'number'
            ? res.user.streakDays
            : prev.streakDays,
          level: res.user.level || prev.level
        }));
      }
    } catch (_) {}
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await api.login(email, password);
      if (res.success && res.token) {
        localStorage.setItem('supabase_auth_token', res.token);
        setUser({
          id: res.user.id,
          email: res.user.email,
          fullName: res.user.fullName,
          role: res.user.role || 'user',
          college_id: res.user.college_id || null,
          college: res.user.college || null,
          level: res.user.level || 'Beginner',
          xp: res.user.xp || 0,
          streakDays: typeof res.user.streak_days === 'number'
            ? res.user.streak_days
            : typeof res.user.streakDays === 'number'
            ? res.user.streakDays
            : 0,
          isGuest: false
        });
        return { success: true };
      }
      return { success: false, error: res.error || 'Failed to authenticate.' };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password, fullName) => {
    setLoading(true);
    try {
      const res = await api.register(email, password, fullName);
      if (res.success) {
        if (res.token) {
          localStorage.setItem('supabase_auth_token', res.token);
          setUser({
            id: res.user.id,
            email: res.user.email,
            fullName: res.user.fullName,
            role: res.user.role || 'user',
            college_id: res.user.college_id || null,
            college: res.user.college || null,
            level: res.user.level || 'Beginner',
            xp: res.user.xp || 0,
            streakDays: 1,
            isGuest: false
          });
          return { success: true };
        }
        // Fallback: login after signup if token wasn't directly returned
        const loginRes = await login(email, password);
        return loginRes;
      }
      return { success: false, error: res.message || res.error || 'Failed to register account.' };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await api.logout();
    } catch (_) {}
    localStorage.removeItem('supabase_auth_token');
    localStorage.removeItem('ai_mentor_user');
    localStorage.removeItem('fsi_solved_problems');
    setUser({
      id: 'guest-learner',
      email: 'guest@aimentor.edu',
      fullName: 'Guest Scholar',
      role: 'user',
      college_id: null,
      college: null,
      level: 'Beginner',
      xp: 0,
      streakDays: 0,
      isGuest: true
    });
  };

  const addXP = (points) => {
    setUser(prev => {
      const nextXP = (prev.xp || 0) + points;
      const updated = { ...prev, xp: nextXP };
      if (!prev.isGuest) {
        localStorage.setItem('ai_mentor_user', JSON.stringify(updated));
      }
      return updated;
    });
  };

  const updateXP = (newXP) => {
    setUser(prev => {
      const updated = { ...prev, xp: typeof newXP === 'number' ? newXP : prev.xp };
      if (!prev.isGuest) {
        localStorage.setItem('ai_mentor_user', JSON.stringify(updated));
      }
      return updated;
    });
  };

  const updateStreak = (newStreak) => {
    if (typeof newStreak !== 'number') return;
    setUser(prev => {
      const updated = { ...prev, streakDays: newStreak };
      if (!prev.isGuest) {
        localStorage.setItem('ai_mentor_user', JSON.stringify(updated));
      }
      return updated;
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      sessionLoading,
      login,
      signup,
      logout,
      addXP,
      updateXP,
      updateStreak,
      refreshProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
