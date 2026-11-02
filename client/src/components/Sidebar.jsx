import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Globe,
  BookMarked,
  BookOpen,
  Terminal,
  Code2,
  Sparkles,
  BarChart3,
  MessageSquare,
  Trophy,
  User,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Flame,
  Zap,
  Building2,
  GraduationCap,
  ShieldCheck,
  MoreVertical,
  Binary,
  Award
} from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';
import { useLearning } from '../context/LearningContext.jsx';

export const Sidebar = ({
  currentView,
  setCurrentView,
  isCollapsed,
  setIsCollapsed,
  mobileOpen,
  setMobileOpen,
}) => {
  const { user, logout } = useAuth();
  const { selectedLanguage } = useLearning();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const userRole = user?.role || 'user';

  // Base route prefix according to user role
  const getRolePrefix = () => {
    switch (userRole) {
      case 'super_admin':
        return '/admin';
      case 'college_admin':
        return '/college-admin';
      case 'faculty':
        return '/faculty';
      default:
        return '/student';
    }
  };

  const rolePrefix = getRolePrefix();

  // Role-specific navigation items
  const getNavItems = () => {
    if (userRole === 'super_admin') {
      return [
        { path: '/admin/dashboard', label: 'Platform Governance', icon: ShieldCheck, badge: 'ROOT' },
        { path: '/admin/courses', label: 'Courses', icon: Globe, badge: null },
        { path: '/admin/curriculum', label: 'Curriculum', icon: BookOpen, badge: null },
        { path: '/admin/practice', label: 'Practice', icon: Terminal, badge: null },
        { path: '/admin/dsa', label: 'DSA Practice', icon: Binary, badge: '200' },
        { path: '/admin/playground', label: 'Code Playground', icon: Code2, badge: 'IDE' },
        { path: '/admin/messages', label: 'Messages', icon: MessageSquare, badge: null },
        { path: '/admin/profile', label: 'Profile', icon: User, badge: null },
      ];
    }

    if (userRole === 'college_admin') {
      return [
        { path: '/college-admin/dashboard', label: 'College Dashboard', icon: Building2, badge: 'ADMIN' },
        { path: '/college-admin/courses', label: 'Courses', icon: Globe, badge: null },
        { path: '/college-admin/curriculum', label: 'Curriculum', icon: BookOpen, badge: null },
        { path: '/college-admin/practice', label: 'Practice', icon: Terminal, badge: null },
        { path: '/college-admin/dsa', label: 'DSA Practice', icon: Binary, badge: '200' },
        { path: '/college-admin/playground', label: 'Code Playground', icon: Code2, badge: 'IDE' },
        { path: '/college-admin/messages', label: 'Messages', icon: MessageSquare, badge: null },
        { path: '/college-admin/profile', label: 'Profile', icon: User, badge: null },
      ];
    }

    if (userRole === 'faculty') {
      return [
        { path: '/faculty/dashboard', label: 'Faculty Dashboard', icon: GraduationCap, badge: 'FACULTY' },
        { path: '/faculty/courses', label: 'Courses', icon: Globe, badge: null },
        { path: '/faculty/curriculum', label: 'Curriculum', icon: BookOpen, badge: null },
        { path: '/faculty/practice', label: 'Practice', icon: Terminal, badge: null },
        { path: '/faculty/dsa', label: 'DSA Practice', icon: Binary, badge: '200' },
        { path: '/faculty/playground', label: 'Code Playground', icon: Code2, badge: 'IDE' },
        { path: '/faculty/ai-mentor', label: 'AI Mentor', icon: Sparkles, badge: 'AI' },
        { path: '/faculty/messages', label: 'Messages', icon: MessageSquare, badge: null },
        { path: '/faculty/profile', label: 'Profile', icon: User, badge: null },
      ];
    }

    // Default: Student Navigation
    return [
      { path: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
      { path: '/student/courses', label: 'Courses', icon: Globe, badge: null },
      { path: '/student/curriculum', label: 'Curriculum', icon: BookOpen, badge: null },
      { path: '/student/practice', label: 'Practice', icon: Terminal, badge: null },
      { path: '/student/dsa', label: 'DSA Practice', icon: Binary, badge: '200' },
      { path: '/student/playground', label: 'Code Playground', icon: Code2, badge: 'IDE' },
      { path: '/student/ai-mentor', label: 'AI Mentor', icon: Sparkles, badge: 'AI' },
      { path: '/student/progress', label: 'My Progress', icon: BarChart3, badge: null },
      { path: '/student/messages', label: 'Messages', icon: MessageSquare, badge: null },
      { path: '/student/achievements', label: 'Achievements', icon: Trophy, badge: null },
      { path: '/student/certificates', label: 'Certificates', icon: Award, badge: 'New' },
      { path: '/student/college', label: 'College', icon: Building2, badge: user?.college ? 'Enrolled' : null },
      { path: '/student/profile', label: 'Profile', icon: User, badge: null },
    ];
  };

  const navItems = getNavItems();

  const handleNavClick = (path) => {
    navigate(path);
    if (setCurrentView) {
      // Map path to view string for legacy callers
      const segs = path.split('/').filter(Boolean);
      const last = segs[segs.length - 1];
      setCurrentView(last || 'dashboard');
    }
    if (setMobileOpen) setMobileOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 bg-[#F7F5FC] dark:bg-[#070B20] text-[#171725] dark:text-[#F8FAFC] border-r border-[#E5E1F0] dark:border-white/10 shadow-xl transition-all duration-300 flex flex-col justify-between select-none ${
          isCollapsed ? 'w-20' : 'w-64'
        } ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex-1 flex flex-col min-h-0">
          {/* Top Brand Header with Official Logo */}
          <div className="h-16 flex items-center justify-between px-3.5 border-b border-[#E5E1F0] dark:border-white/10 shrink-0">
            <div
              onClick={() => handleNavClick(`${rolePrefix}/dashboard`)}
              className="flex items-center gap-3 cursor-pointer overflow-hidden group"
            >
              <div className="relative p-1.5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-cyan-500/30 shadow-xs group-hover:scale-105 transition-all shrink-0">
                <img
                  src="/logo.png"
                  alt="CodeMentor Logo"
                  className="w-7 h-7 rounded-lg object-contain drop-shadow-[0_2px_8px_rgba(99,102,241,0.25)] dark:drop-shadow-[0_2px_8px_rgba(6,182,212,0.4)]"
                />
              </div>
              {!isCollapsed && (
                <div className="leading-tight">
                  <div className="flex items-center gap-1.5 font-black text-[#171725] dark:text-white tracking-tight text-base">
                    <span>Code</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-indigo-400">Mentor</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-purple-100/80 dark:bg-cyan-950/50 text-indigo-700 dark:text-cyan-300 border border-purple-200 dark:border-cyan-500/30">
                      {userRole === 'super_admin' ? 'ROOT' : userRole === 'college_admin' ? 'ADMIN' : userRole === 'faculty' ? 'FAC' : 'PRO'}
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-[#64748B] dark:text-slate-400 truncate max-w-[130px]">
                    {user?.college?.name || 'Developer Platform'}
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-1.5 rounded-xl text-[#64748B] dark:text-slate-400 hover:text-[#171725] dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 transition-colors cursor-pointer"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Active Track / Status Indicator */}
          {!isCollapsed && (
            <div className="mx-3 mt-3 px-3 py-2 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 flex items-center justify-between shrink-0 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 dark:bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600 dark:bg-cyan-400"></span>
                </span>
                <span className="text-[11px] font-bold text-[#171725] dark:text-slate-200 uppercase tracking-wider">
                  {userRole.replace('_', ' ')}
                </span>
              </div>
              <span className="text-[10px] font-bold text-indigo-700 dark:text-cyan-300 bg-purple-100/80 dark:bg-cyan-950/60 px-2 py-0.5 rounded-lg border border-purple-200 dark:border-cyan-500/30 uppercase">
                {selectedLanguage || 'python'}
              </span>
            </div>
          )}

          {/* Navigation Items (Scrollable) */}
          <nav className="p-2.5 space-y-1 mt-2 flex-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              // Check active status by exact path or subpath
              const isActive =
                location.pathname === item.path ||
                (item.path !== '/' &&
                 item.path !== '/student' &&
                 item.path !== '/faculty' &&
                 item.path !== '/college-admin' &&
                 item.path !== '/admin' &&
                 location.pathname.startsWith(item.path));

              return (
                <div key={item.path} className="relative group">
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer relative ${
                      isActive
                        ? 'bg-white dark:bg-[#10152E] text-indigo-600 dark:text-cyan-300 shadow-xs border-l-4 border-indigo-600 dark:border-cyan-400 font-bold'
                        : 'text-[#64748B] dark:text-slate-400 hover:text-[#171725] dark:hover:text-white hover:bg-purple-100/40 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className={`p-1.5 rounded-xl transition-colors shrink-0 ${
                      isActive
                        ? 'text-indigo-600 dark:text-cyan-300 bg-purple-100 dark:bg-cyan-950/60'
                        : 'text-[#64748B] dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-cyan-300'
                    }`}>
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>

                    {!isCollapsed && (
                      <div className="flex-1 flex items-center justify-between overflow-hidden">
                        <span className="truncate">{item.label}</span>
                        {item.badge && (
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider ${
                              item.badge === 'AI' || item.badge === 'ROOT'
                                ? 'bg-purple-100 dark:bg-cyan-950/60 text-indigo-700 dark:text-cyan-300 border border-purple-200 dark:border-cyan-500/40'
                                : item.badge === 'Enrolled'
                                ? 'bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-500/40'
                                : 'bg-[#EAE5F6] dark:bg-white/10 text-[#64748B] dark:text-white/90'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </button>

                  {/* Collapsed Tooltip */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-xl bg-white dark:bg-[#0E1433] border border-[#E5E1F0] dark:border-cyan-500/30 text-[#171725] dark:text-white text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
                      {item.label}
                      {item.badge && <span className="ml-1.5 text-[9px] text-indigo-600 dark:text-cyan-400">({item.badge})</span>}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* User Card / Bottom Profile & Menu */}
        <div className="p-3 border-t border-[#E5E1F0] dark:border-white/10 bg-white/60 dark:bg-[#030617]/70 shrink-0 relative backdrop-blur-md">
          {!isCollapsed ? (
            <div className="space-y-2.5">
              {/* Streak and XP Telemetry */}
              <div className="flex items-center justify-between text-[11px] px-1 font-semibold">
                <span className="flex items-center gap-1 text-amber-700 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-400/30 shadow-2xs">
                  <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  {user?.streakDays || 0}d Streak
                </span>
                <span className="flex items-center gap-1 text-purple-700 dark:text-cyan-300 bg-purple-100/70 dark:bg-cyan-500/20 px-2 py-0.5 rounded-full border border-purple-200 dark:border-cyan-500/30 shadow-2xs">
                  <Zap className="w-3.5 h-3.5 fill-purple-600 dark:fill-cyan-400 text-purple-600 dark:text-cyan-400" />
                  {user?.xp || 0} XP
                </span>
              </div>

              {/* Profile Card & Action */}
              <div className="flex items-center justify-between pt-1">
                <div
                  onClick={() => handleNavClick(`${rolePrefix}/profile`)}
                  className="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0 p-1.5 rounded-xl hover:bg-purple-100/50 dark:hover:bg-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs border border-purple-300/40 dark:border-cyan-400/30">
                    {user?.fullName?.charAt(0) || user?.full_name?.charAt(0) || 'U'}
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold text-[#171725] dark:text-white truncate">
                      {user?.fullName || user?.full_name || 'Scholar'}
                    </p>
                    <p className="text-[10px] text-[#64748B] dark:text-slate-400 truncate uppercase font-medium">
                      {userRole.replace('_', ' ')}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <button
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className="p-1.5 text-[#64748B] dark:text-slate-400 hover:text-[#171725] dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                    title="Account options"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {/* Profile Popup Menu */}
                  {profileMenuOpen && (
                    <div
                      className="absolute right-0 bottom-full mb-2 w-48 rounded-2xl bg-white dark:bg-[#0E1433] border border-[#E5E1F0] dark:border-white/10 shadow-2xl py-1.5 z-50 text-xs backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
                      onMouseLeave={() => setProfileMenuOpen(false)}
                    >
                      <button
                        onClick={() => {
                          setProfileMenuOpen(false);
                          handleNavClick(`${rolePrefix}/profile`);
                        }}
                        className="w-full text-left px-3.5 py-2 text-[#171725] dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-white/5 flex items-center gap-2 cursor-pointer font-medium"
                      >
                        <User className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
                        View Profile
                      </button>
                      <div className="my-1 border-t border-[#E5E1F0] dark:border-white/10" />
                      <button
                        onClick={() => {
                          setProfileMenuOpen(false);
                          handleLogout();
                        }}
                        className="w-full text-left px-3.5 py-2 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 flex items-center gap-2 cursor-pointer font-semibold"
                      >
                        <LogOut className="w-3.5 h-3.5 text-rose-500" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div
                onClick={() => handleNavClick(`${rolePrefix}/profile`)}
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-purple-600 text-white flex items-center justify-center font-bold text-xs cursor-pointer shadow-xs hover:shadow-md transition-shadow border border-purple-300/40 dark:border-cyan-400/30"
                title={`${user?.fullName || 'User'} (${userRole})`}
              >
                {user?.fullName?.charAt(0) || user?.full_name?.charAt(0) || 'U'}
              </div>
              <button
                onClick={handleLogout}
                title="Sign out"
                className="p-2 text-[#64748B] dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-100/50 dark:hover:bg-rose-500/20 rounded-lg transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
