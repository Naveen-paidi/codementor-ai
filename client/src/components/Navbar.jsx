import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useLearning } from '../context/LearningContext.jsx';
import { api } from '../services/api.js';
import {
  Menu,
  Sparkles,
  Flame,
  Zap,
  ChevronDown,
  User,
  LogOut,
  ChevronRight,
  Search,
  Bell,
  CheckCircle2,
  BookOpen,
  MessageSquare,
  Command,
  Settings
} from 'lucide-react';
import Button from './ui/Button.jsx';
import Badge from './ui/Badge.jsx';
import ThemeToggle from './ui/ThemeToggle.jsx';

export const Navbar = ({
  currentView,
  setCurrentView,
  onToggleMobileSidebar,
  sidebarCollapsed
}) => {
  const { user, logout } = useAuth();
  const { selectedLanguage, setSelectedLanguage, setIsChatOpen } = useLearning();
  const navigate = useNavigate();
  const location = useLocation();

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'cpp', name: 'C++', icon: '⚡' },
    { id: 'c', name: 'C', icon: '⚙️' }
  ];

  const userRole = user?.role || 'user';
  const rolePrefix =
    userRole === 'super_admin'
      ? '/admin'
      : userRole === 'college_admin'
      ? '/college-admin'
      : userRole === 'faculty'
      ? '/faculty'
      : '/student';

  // Fetch real unread notification / message count
  useEffect(() => {
    if (!user || user.isGuest) {
      setUnreadCount(0);
      return;
    }

    const fetchNotifications = async () => {
      try {
        const res = await api.getUnreadMessageCount();
        if (typeof res?.unreadCount === 'number') {
          setUnreadCount(res.unreadCount);
        }
      } catch (_) {}
    };

    fetchNotifications();
  }, [user?.id, user?.isGuest]);

  const getViewBreadcrumb = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('/dashboard')) {
      if (userRole === 'super_admin') return 'Platform Governance';
      if (userRole === 'college_admin') return 'Institutional Administration';
      if (userRole === 'faculty') return 'Faculty Portal';
      return 'Dashboard';
    }
    if (path.includes('/courses')) return 'Course Catalog';
    if (path.includes('/topic')) return 'Topic Lesson';
    if (path.includes('/curriculum')) return 'Curriculum Roadmap';
    if (path.includes('/practice')) return 'Interactive IDE';
    if (path.includes('/dsa')) return 'DSA Practice (200 Problems)';
    if (path.includes('/playground')) return 'Code Playground';
    if (path.includes('/ai-mentor')) return 'AI Mentor';
    if (path.includes('/progress')) return 'Progress Analytics';
    if (path.includes('/achievements')) return 'Milestones & Achievements';
    if (path.includes('/college')) return 'College Directory';
    if (path.includes('/messages')) return 'Messages';
    if (path.includes('/profile')) return 'Profile & Preferences';

    // Fallback using legacy currentView
    switch (currentView) {
      case 'superadmin':
        return 'Platform Governance';
      case 'collegeadmin':
        return 'Institutional Administration';
      case 'facultydashboard':
        return 'Faculty Portal';
      case 'college':
        return 'College Directory';
      case 'messages':
        return 'Messages';
      case 'dashboard':
        return 'Dashboard';
      case 'curriculum':
        return 'Curriculum Roadmap';
      case 'topicDetail':
        return 'Topic Lesson';
      case 'practice':
        return 'Interactive IDE';
      case 'dsa':
        return 'DSA Practice (200 Problems)';
      case 'playground':
        return 'Code Playground';
      case 'aimentor':
        return 'AI Mentor';
      case 'progress':
        return 'Progress Analytics';
      case 'achievements':
        return 'Milestones & Achievements';
      case 'profile':
        return 'Profile & Preferences';
      default:
        return 'CodeMentor';
    }
  };

  const handleSelectLanguage = (langId) => {
    setSelectedLanguage(langId);
    setLangDropdownOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const realXP = typeof user?.xp === 'number' ? user.xp : 0;
  const realStreak = typeof user?.streakDays === 'number' ? user.streakDays : 0;

  const getRoleLabel = (role) => {
    switch (role) {
      case 'super_admin':
        return 'Super Admin';
      case 'college_admin':
        return 'College Admin';
      case 'faculty':
        return 'Faculty';
      default:
        return 'Student';
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full h-16 bg-white/85 dark:bg-[#070B20]/85 backdrop-blur-xl border-b border-[#E5E1F0] dark:border-white/10 px-4 sm:px-6 flex items-center justify-between select-none transition-colors duration-300">
      {/* Left side: Mobile Hamburger + Logo + Breadcrumbs */}
      <div className="flex items-center gap-3">
        {/* Mobile menu toggle */}
        <button
          onClick={onToggleMobileSidebar}
          className="lg:hidden p-2 rounded-xl text-[#64748B] dark:text-slate-400 hover:text-[#171725] dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 transition-colors"
          title="Open menu"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Mobile Logo */}
        <div
          onClick={() => navigate(`${rolePrefix}/dashboard`)}
          className="lg:hidden flex items-center gap-2 cursor-pointer"
        >
          <img src="/logo.png" alt="CodeMentor" className="w-7 h-7 object-contain" />
          <span className="font-extrabold text-sm text-[#171725] dark:text-white tracking-tight">CodeMentor</span>
        </div>

        {/* Breadcrumb Path */}
        <nav aria-label="Breadcrumb" className="hidden sm:flex items-center text-xs font-semibold text-[#64748B] dark:text-slate-400 gap-1.5">
          <span className="text-[#171725] dark:text-slate-200 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-cyan-400 dark:to-indigo-400 inline-block shadow-2xs" />
            {selectedLanguage || 'python'}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#64748B]/50 dark:text-slate-600" />
          <span className="text-indigo-600 dark:text-cyan-400 font-bold tracking-tight">{getViewBreadcrumb()}</span>
        </nav>
      </div>

      {/* Middle: Quick Search Box */}
      <div className="hidden md:flex items-center max-w-sm w-full mx-4">
        <div
          onClick={() => navigate(`${rolePrefix}/curriculum`)}
          className="relative w-full flex items-center justify-between px-3.5 py-1.5 rounded-2xl bg-[#F7F5FC] dark:bg-[#10152E]/90 hover:bg-white dark:hover:bg-[#131938] border border-[#E5E1F0] dark:border-white/10 hover:border-purple-400/50 dark:hover:border-cyan-400/50 text-xs text-[#64748B] dark:text-slate-400 cursor-pointer transition-all shadow-xs"
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
            <span className="truncate">Search topics, syntax, or lessons...</span>
          </div>
          <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-[#64748B] dark:text-slate-400 bg-white dark:bg-[#070B20] rounded-md border border-[#E5E1F0] dark:border-white/10 shadow-xs">
            <Command className="w-2.5 h-2.5" /> K
          </kbd>
        </div>
      </div>

      {/* Right side: Notifications, Streak, XP, Theme Toggle, AI Launch, User Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Real Streak Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100/60 dark:bg-amber-950/40 border border-amber-300/80 dark:border-amber-500/30 text-xs font-bold text-amber-800 dark:text-amber-300 shadow-2xs">
          <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>{realStreak}d Streak</span>
        </div>

        {/* Real XP Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-100/60 dark:bg-purple-950/40 border border-purple-300/80 dark:border-purple-500/30 text-xs font-bold text-purple-800 dark:text-purple-300 shadow-2xs">
          <Zap className="w-3.5 h-3.5 fill-purple-600 text-purple-600 dark:fill-purple-400 dark:text-purple-400" />
          <span>{realXP} XP</span>
        </div>

        {/* Theme Toggle Pill (Dual Art Direction) */}
        <ThemeToggle />

        {/* Notifications Bell Dropdown */}
        <div className="relative">
          <button
            onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
            className="p-2 rounded-xl text-[#64748B] dark:text-slate-400 hover:text-[#171725] dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 transition-colors relative cursor-pointer"
            title="Notifications"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
            )}
          </button>

          {notifDropdownOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setNotifDropdownOpen(false)} />
              <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white dark:bg-[#0E1433] border border-[#E5E1F0] dark:border-white/10 shadow-xl z-50 p-4 space-y-3 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
                <div className="flex items-center justify-between pb-2 border-b border-[#E5E1F0] dark:border-white/10">
                  <h4 className="text-xs font-bold text-[#171725] dark:text-white">Notifications</h4>
                  <span className="text-[10px] font-semibold text-[#64748B] dark:text-slate-400">
                    {unreadCount > 0 ? `${unreadCount} unread` : '0 unread'}
                  </span>
                </div>

                {unreadCount > 0 ? (
                  <div
                    onClick={() => {
                      navigate(`${rolePrefix}/messages`);
                      setNotifDropdownOpen(false);
                    }}
                    className="p-2.5 rounded-xl bg-purple-50 dark:bg-cyan-950/30 border border-purple-200 dark:border-cyan-500/30 flex items-start gap-2.5 cursor-pointer hover:bg-purple-100/70 dark:hover:bg-cyan-950/50 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#171725] dark:text-white">New Messages</p>
                      <p className="text-[11px] text-[#64748B] dark:text-slate-400">You have {unreadCount} unread message(s).</p>
                    </div>
                  </div>
                ) : (
                  <div className="py-6 text-center text-xs text-[#64748B] dark:text-slate-400">
                    No new notifications
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* AI Mentor Quick Launch */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="border border-purple-300/70 dark:border-cyan-500/40 text-purple-700 dark:text-cyan-300 bg-gradient-to-r from-purple-100/80 to-indigo-100/80 dark:from-cyan-950/40 dark:to-indigo-950/40 hover:opacity-90 px-3 py-1.5 rounded-xl text-xs font-bold hidden md:flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-cyan-400" />
          <span>Ask Mentor</span>
        </button>

        {/* User Account / Profile Dropdown */}
        {user?.isGuest ? (
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button size="sm" variant="primary" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-2 p-1 rounded-2xl hover:bg-purple-100/50 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {user?.fullName?.charAt(0) || user?.full_name?.charAt(0) || 'U'}
              </div>
              <div className="hidden lg:block text-left leading-tight">
                <span className="text-xs font-bold text-[#171725] dark:text-white block truncate max-w-[100px]">
                  {user?.fullName || user?.full_name}
                </span>
                <span className="text-[10px] text-indigo-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                  {getRoleLabel(user?.role)}
                </span>
              </div>
              <ChevronDown className="w-3 h-3 text-[#64748B] dark:text-slate-400 hidden sm:block" />
            </button>

            {userDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setUserDropdownOpen(false)} />
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-[#0E1433] border border-[#E5E1F0] dark:border-white/10 shadow-xl z-50 py-2 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
                  <div className="px-4 py-2.5 border-b border-[#E5E1F0] dark:border-white/10">
                    <p className="text-xs font-bold text-[#171725] dark:text-white truncate">{user?.fullName || user?.full_name}</p>
                    <p className="text-[11px] text-[#64748B] dark:text-slate-400 truncate">{user?.email}</p>
                    <div className="mt-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-purple-100/80 dark:bg-cyan-950/50 border border-purple-200 dark:border-cyan-500/30 text-indigo-700 dark:text-cyan-300 text-[10px] font-bold uppercase tracking-wider">
                        {getRoleLabel(user?.role)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      navigate(`${rolePrefix}/profile`);
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-[#171725] dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-white/5 transition-colors text-left cursor-pointer font-medium"
                  >
                    <User className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                    <span>Profile & Preferences</span>
                  </button>

                  <button
                    onClick={() => {
                      navigate(`${rolePrefix}/curriculum`);
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-[#171725] dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-white/5 transition-colors text-left cursor-pointer font-medium"
                  >
                    <BookOpen className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                    <span>Curriculum Roadmap</span>
                  </button>

                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors text-left border-t border-[#E5E1F0] dark:border-white/10 mt-1 cursor-pointer font-semibold"
                  >
                    <LogOut className="w-4 h-4 text-rose-500" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
