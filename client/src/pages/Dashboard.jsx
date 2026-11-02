import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useLearning } from '../context/LearningContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { api } from '../services/api.js';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import Card from '../components/ui/Card.jsx';
import LoadingSkeleton from '../components/ui/LoadingSkeleton.jsx';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  ArrowRight,
  History,
  CheckCircle2,
  Code2,
  GraduationCap,
  Terminal,
  BarChart3,
  Building2,
  Clock,
  BookOpen,
  ShieldCheck,
  AlertCircle,
  Zap,
  Flame,
  Trophy,
  Target,
  RefreshCw,
  Compass,
  Cpu,
  Layers,
  ChevronRight,
  Binary
} from 'lucide-react';

export const Dashboard = ({
  initialSection,
  onNavigateToPractice,
  onNavigateToCurriculum,
  onNavigateToLanguages,
  onNavigateToPlayground,
  onNavigateToProgress,
  onNavigateToMentor,
  onNavigateToCollege,
  onNavigateToMessages,
  onNavigateToCollegeAdmin
}) => {
  const { user, sessionLoading, refreshProfile, logout } = useAuth();
  const { selectedLanguage, setSelectedLanguage } = useLearning();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const navPractice = onNavigateToPractice || (() => navigate('/student/practice'));
  const navCurriculum = onNavigateToCurriculum || ((lang) => navigate(`/student/curriculum/${lang || 'python'}`));
  const navLanguages = onNavigateToLanguages || (() => navigate('/student/courses'));
  const navPlayground = onNavigateToPlayground || (() => navigate('/student/playground'));
  const navProgress = onNavigateToProgress || (() => navigate('/student/progress'));
  const navMentor = onNavigateToMentor || (() => navigate('/student/ai-mentor'));
  const navCollege = onNavigateToCollege || (() => navigate('/student/college'));
  const navMessages = onNavigateToMessages || (() => navigate('/student/messages'));
  const navCollegeAdmin = onNavigateToCollegeAdmin || (() => navigate('/college-admin/dashboard'));

  const [progressData, setProgressData] = useState(null);
  const [studentLMS, setStudentLMS] = useState(null);
  const [pendingInvitations, setPendingInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState(null);
  const [invitationMessage, setInvitationMessage] = useState(null);

  // Recommendations state (non-blocking)
  const [recommendations, setRecommendations] = useState([]);
  const [recLoading, setRecLoading] = useState(false);

  const fetchDashboardData = async () => {
    setLoading(true);
    setError(null);
    setSessionExpired(false);

    const token = localStorage.getItem('supabase_auth_token');
    if (!token || user?.isGuest) {
      setProgressData({
        overallProgress: 0,
        solvedQuestions: 0,
        totalQuestions: 0,
        skillLevel: 'Beginner',
        currentStreak: 0,
        xp: 0,
        masteryData: [],
        recommendations: []
      });
      setStudentLMS({
        total_enrolled: 0,
        average_progress: 0,
        total_completed_topics: 0,
        enrollments: []
      });
      setPendingInvitations([]);
      setLoading(false);
      return;
    }

    try {
      const [progRes, lmsRes, invRes] = await Promise.allSettled([
        api.getProgress(selectedLanguage || 'python'),
        api.getStudentDashboard(),
        api.getMyCollegeAdminInvitations()
      ]);

      if (progRes.status === 'fulfilled' && progRes.value) {
        if (progRes.value.status === 401 || progRes.value.error?.includes('expired')) {
          setSessionExpired(true);
        } else if (progRes.value.success) {
          setProgressData(progRes.value);
        }
      }

      if (lmsRes.status === 'fulfilled' && lmsRes.value) {
        if (lmsRes.value.status === 401 || lmsRes.value.error?.includes('expired')) {
          setSessionExpired(true);
        } else if (lmsRes.value.success) {
          setStudentLMS(lmsRes.value);
        }
      }

      if (invRes.status === 'fulfilled' && invRes.value) {
        if (invRes.value.success && Array.isArray(invRes.value.invitations)) {
          setPendingInvitations(invRes.value.invitations);
        }
      }
    } catch (err) {
      setError(err.message || 'Failed to load telemetry from database.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [user?.id, selectedLanguage]);

  // Non-blocking fetch for recommendations
  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!user || user.isGuest) return;
      setRecLoading(true);
      try {
        const res = await api.getRecommendations(selectedLanguage || 'python');
        if (res?.success && Array.isArray(res.recommendations)) {
          setRecommendations(res.recommendations);
        }
      } catch (_) {
        // fail silently
      } finally {
        setRecLoading(false);
      }
    };

    fetchRecommendations();
  }, [user?.id, selectedLanguage]);

  const handleAcceptInvitation = async (invitationId) => {
    setActionLoadingId(invitationId);
    setInvitationMessage(null);
    try {
      const res = await api.acceptCollegeAdminInvitation(invitationId);
      if (res.success) {
        setPendingInvitations(prev => prev.filter(i => i.id !== invitationId));
        setInvitationMessage({
          type: 'success',
          text: 'College Administrator invitation accepted successfully!'
        });
        if (refreshProfile) await refreshProfile();
        if (onNavigateToCollegeAdmin) onNavigateToCollegeAdmin();
      } else {
        setInvitationMessage({
          type: 'error',
          text: res.error || 'Failed to accept invitation.'
        });
      }
    } catch (err) {
      setInvitationMessage({
        type: 'error',
        text: err.message || 'An unexpected error occurred.'
      });
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleRejectInvitation = async (invitationId) => {
    setActionLoadingId(invitationId);
    setInvitationMessage(null);
    try {
      const res = await api.rejectCollegeAdminInvitation(invitationId);
      if (res.success) {
        setPendingInvitations(prev => prev.filter(i => i.id !== invitationId));
        setInvitationMessage({
          type: 'info',
          text: 'College Administrator invitation declined.'
        });
      } else {
        setInvitationMessage({
          type: 'error',
          text: res.error || 'Failed to reject invitation.'
        });
      }
    } catch (err) {
      setInvitationMessage({
        type: 'error',
        text: err.message || 'An unexpected error occurred.'
      });
    } finally {
      setActionLoadingId(null);
    }
  };

  // Real backend calculations
  const realUserName = user?.fullName || user?.full_name || 'Scholar';
  const activeCollege = studentLMS?.college_membership?.college || user?.college;
  const assignedFaculty = studentLMS?.assigned_faculty?.faculty;
  const enrollments = studentLMS?.enrollments || [];
  const registeredCourseCount = enrollments.length;

  const overallProgressPct = registeredCourseCount > 0
    ? Math.round(enrollments.reduce((sum, e) => sum + (e.progress_percentage || 0), 0) / registeredCourseCount)
    : (studentLMS?.average_progress || 0);

  const completedTopicsCount = enrollments.reduce((sum, e) => sum + (e.completed_topics_count || 0), 0) || (studentLMS?.total_completed_topics || 0);
  const problemsSolvedCount = (progressData?.masteryData || []).filter(m => m.successfulAttempts > 0).length || (progressData?.solvedQuestions || 0);
  const realXP = typeof user?.xp === 'number' ? user.xp : (studentLMS?.profile?.xp || progressData?.xp || 0);
  const realStreak = typeof user?.streakDays === 'number' ? user.streakDays : (studentLMS?.profile?.streak_days || studentLMS?.gamification?.currentStreak || progressData?.streakDays || 0);
  const longestStreak = studentLMS?.profile?.longest_streak || studentLMS?.gamification?.longestStreak || realStreak;
  const totalActiveDays = studentLMS?.profile?.total_active_days || studentLMS?.gamification?.totalActiveDays || (realStreak > 0 ? 1 : 0);

  // Active track for "Continue Learning"
  const primaryEnrollment = enrollments.find(e => e.course_id === selectedLanguage) || enrollments[0];

  // Analytics Chart Data
  const chartData = (progressData?.masteryData || []).slice(0, 6).map(item => ({
    name: item.topic || 'Topic',
    score: item.score || 0
  }));

  // Expired session handling
  if (sessionExpired) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white dark:bg-[#070B20] rounded-3xl border border-[#D8D1EE] dark:border-white/10 shadow-xl text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">Your session has expired</h2>
        <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
          Please log in again to continue accessing your enrolled tracks and learning statistics.
        </p>
        <Button
          variant="primary"
          onClick={logout}
          className="w-full"
        >
          Login Again
        </Button>
      </div>
    );
  }

  // Error handling
  if (error && !loading) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white dark:bg-[#070B20] rounded-3xl border border-rose-200 dark:border-rose-500/30 shadow-xl text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">Unable to load your dashboard</h2>
        <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">{error}</p>
        <Button
          variant="outline"
          onClick={fetchDashboardData}
          leftIcon={<RefreshCw className="w-4 h-4" />}
          className="w-full"
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 select-none">
      {/* Invitation Alert */}
      {invitationMessage && (
        <div className={`p-4 rounded-2xl border flex items-center justify-between text-xs font-semibold ${
          invitationMessage.type === 'success'
            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
            : invitationMessage.type === 'info'
            ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-500/30 text-sky-800 dark:text-sky-300'
            : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-300'
        }`}>
          <div className="flex items-center gap-2">
            {invitationMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-500" />
            )}
            <span>{invitationMessage.text}</span>
          </div>
          <button
            onClick={() => setInvitationMessage(null)}
            className="text-xs underline hover:no-underline cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Pending College Admin Invitations */}
      {pendingInvitations.length > 0 && (
        <div className="space-y-4">
          {pendingInvitations.map((inv) => (
            <div
              key={inv.id}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-xl border border-purple-400/30 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="space-y-2.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                    <span>College Administrator Invitation</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    You have been invited to become a College Administrator for {inv.college_name || inv.college?.name}
                  </h2>
                  <p className="text-xs opacity-90 max-w-2xl leading-relaxed">
                    Accepting grants administrative access to manage campus faculty, student enrollments, and academic analytics.
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col lg:flex-row items-center gap-3 shrink-0">
                  <Button
                    size="md"
                    variant="primary"
                    onClick={() => handleAcceptInvitation(inv.id)}
                    isLoading={actionLoadingId === inv.id}
                    className="bg-white hover:bg-slate-50 text-indigo-700 font-bold shadow-lg"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-1.5" /> Accept Invitation
                  </Button>
                  <Button
                    size="md"
                    variant="outline"
                    onClick={() => handleRejectInvitation(inv.id)}
                    disabled={actionLoadingId === inv.id}
                    className="border-white/40 text-white hover:bg-white/10"
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          1. PERSONALISED WELCOME HEADER WITH 3D FLOATING Video1.mp4 CENTERPIECE
          Ref Image 1 & 3: Playful, elegant 3D claymorphic presentation
          Ref Image 2 & 4: Futuristic, cinematic neon glass presentation
      ========================================================================= */}
      <div className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 border relative overflow-hidden ${
        isDark
          ? 'bg-[#070B20]/90 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] backdrop-blur-xl'
          : 'clay-card-3d bg-white'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Greeting, Stats, Action CTAs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
              isDark
                ? 'bg-cyan-950/60 border border-cyan-500/40 text-cyan-300'
                : 'bg-purple-100 border border-purple-200 text-indigo-700'
            }">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
              <span>Interactive Learning Hub</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl font-black text-[#1E1B4B] dark:text-white tracking-tight">
                {isDark ? 'Welcome back,' : 'Good day,'} {realUserName} 👋
              </h1>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 max-w-xl leading-relaxed">
                Continue advancing your canonical track, maintain your daily practice streak, and master algorithmic problem solving.
              </p>
            </div>

            {/* Badges & Telemetry Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
              <span className="px-3 py-1 rounded-full bg-amber-100/70 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-bold border border-amber-300/80 dark:border-amber-500/30 flex items-center gap-1.5 shadow-2xs">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{realStreak} Day Streak</span>
              </span>

              <span className="px-3 py-1 rounded-full bg-purple-100/70 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 font-bold border border-purple-300/80 dark:border-purple-500/30 flex items-center gap-1.5 shadow-2xs">
                <Zap className="w-3.5 h-3.5 fill-purple-600 dark:fill-cyan-400 text-purple-600 dark:text-cyan-400" />
                <span>{realXP} XP Earned</span>
              </span>

              {activeCollege ? (
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-500/30 flex items-center gap-1.5 shadow-2xs">
                  <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{activeCollege.name}</span>
                </span>
              ) : (
                <button
                  onClick={navCollege}
                  className="px-3 py-1 rounded-full bg-white dark:bg-[#10152E] hover:bg-purple-50 dark:hover:bg-white/10 text-[#64748B] dark:text-slate-300 border border-[#D8D1EE] dark:border-white/10 font-medium cursor-pointer transition-colors"
                >
                  + Affiliate College
                </button>
              )}

              {assignedFaculty && (
                <span className="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 font-bold border border-sky-200 dark:border-sky-500/30 flex items-center gap-1.5 shadow-2xs">
                  <GraduationCap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>Mentor: Prof. {assignedFaculty.full_name}</span>
                </span>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Button
                size="md"
                variant="primary"
                onClick={navPractice}
                leftIcon={<Play className="w-4 h-4 fill-white text-white" />}
                className="font-black"
              >
                Start Practice IDE
              </Button>
              <Button
                size="md"
                variant="outline"
                onClick={navLanguages}
                leftIcon={<BookOpen className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />}
              >
                Browse Curricula
              </Button>
              <Button
                size="md"
                variant="ghost"
                onClick={navMentor}
                leftIcon={<Sparkles className="w-4 h-4 text-purple-600 dark:text-cyan-400" />}
              >
                Ask Mentor
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Floating Video1.mp4 Centerpiece Card (Decorative, No Controls) */}
          <div className="lg:col-span-5 relative pointer-events-none select-none">
            <div className={`p-2.5 rounded-3xl transition-all duration-300 shadow-xl ${
              isDark
                ? 'bg-[#030617] border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.3)]'
                : 'bg-gradient-to-tr from-[#F7F5FC] to-white border border-[#D8D1EE] shadow-[0_12px_30px_rgba(139,92,246,0.15)]'
            }`}>
              {/* Video Header Strip */}
              <div className="px-3 py-2 flex items-center justify-between text-xs font-bold text-[#64748B] dark:text-slate-400 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span className="font-mono text-[11px] text-indigo-600 dark:text-cyan-400">
                    codementor_hub.mp4
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/20">
                    Interactive Engine
                  </span>
                </div>
              </div>

              {/* Video Player Frame (Pure Visual Display) */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner pointer-events-none">
                <video
                  src="/Video1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                  className="w-full h-full object-cover pointer-events-none select-none"
                />

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white font-semibold pointer-events-none">
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Adaptive AI Learning</span>
                  </div>
                  <span className="text-cyan-300 font-mono text-[10px]">Active Track</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. DISTINCTIVE CONTINUE LEARNING HERO SECTION
      ========================================================================= */}
      {primaryEnrollment && (
        <div className={`p-7 sm:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden transition-all duration-300 ${
          isDark
            ? 'bg-gradient-to-r from-[#0A0F26] via-[#10152E] to-[#070B20] border border-cyan-500/40 shadow-[0_0_35px_rgba(6,182,212,0.2)]'
            : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 border border-indigo-400/30'
        }`}>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-full bg-white/20 text-white border border-white/30 shadow-2xs">
                  Continue Learning
                </span>
                <span className="text-xs opacity-90 font-medium">
                  Last active: {primaryEnrollment.last_accessed_at ? new Date(primaryEnrollment.last_accessed_at).toLocaleDateString() : 'Today'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white capitalize">
                {primaryEnrollment.course_id} Programming Track
              </h2>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span>Overall Track Progress</span>
                  <span className="text-cyan-300 font-black text-sm">{primaryEnrollment.progress_percentage || 0}%</span>
                </div>
                <div className="w-full bg-black/30 h-2.5 rounded-full overflow-hidden border border-white/20">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-500 shadow-sm"
                    style={{ width: `${primaryEnrollment.progress_percentage || 0}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] opacity-90 font-medium pt-0.5">
                  <span>{primaryEnrollment.completed_topics_count || 0} of {primaryEnrollment.total_topics_count || 28} topics mastered</span>
                  <span className="text-cyan-200 font-semibold">Next topic ready</span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  setSelectedLanguage(primaryEnrollment.course_id);
                  if (onNavigateToCurriculum) onNavigateToCurriculum(primaryEnrollment.course_id);
                }}
                rightIcon={<ArrowRight className="w-5 h-5 text-indigo-700" />}
                className="bg-white hover:bg-slate-50 text-indigo-700 font-black shadow-lg border-none px-6"
              >
                Resume Course
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          3. COMPACT STATISTIC CARDS (Dual Theme 3D Design)
          Registered Courses | Overall Progress | Mastered | Solved | XP | Streak
      ========================================================================= */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {/* Stat 1: Registered Courses */}
        <div className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 space-y-1 ${
          isDark
            ? 'bg-[#070B20]/80 border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
            : 'bg-white border-[#D8D1EE] hover:border-purple-300 shadow-xs'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">Tracks</span>
            <div className="p-1.5 rounded-xl bg-indigo-100/70 dark:bg-cyan-950/40 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-cyan-500/30">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
          </div>
          {loading ? (
            <div className="w-12 h-7 skeleton" />
          ) : (
            <div className="text-2xl font-black text-[#1E1B4B] dark:text-white">{registeredCourseCount}</div>
          )}
          <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">Active tracks</div>
        </div>

        {/* Stat 2: Overall Progress */}
        <div className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 space-y-1 ${
          isDark
            ? 'bg-[#070B20]/80 border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
            : 'bg-white border-[#D8D1EE] hover:border-purple-300 shadow-xs'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">Progress</span>
            <div className="p-1.5 rounded-xl bg-purple-100/70 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30">
              <Target className="w-3.5 h-3.5" />
            </div>
          </div>
          {loading ? (
            <div className="w-14 h-7 skeleton" />
          ) : (
            <div className="text-2xl font-black text-[#1E1B4B] dark:text-white">{overallProgressPct}%</div>
          )}
          <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">Syllabus completion</div>
        </div>

        {/* Stat 3: Mastered */}
        <div className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 space-y-1 ${
          isDark
            ? 'bg-[#070B20]/80 border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
            : 'bg-white border-[#D8D1EE] hover:border-purple-300 shadow-xs'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">Mastered</span>
            <div className="p-1.5 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>
          {loading ? (
            <div className="w-10 h-7 skeleton" />
          ) : (
            <div className="text-2xl font-black text-[#1E1B4B] dark:text-white">{completedTopicsCount}</div>
          )}
          <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">Lessons finished</div>
        </div>

        {/* Stat 4: Solved */}
        <div className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 space-y-1 ${
          isDark
            ? 'bg-[#070B20]/80 border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
            : 'bg-white border-[#D8D1EE] hover:border-purple-300 shadow-xs'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">Solved</span>
            <div className="p-1.5 rounded-xl bg-sky-100/70 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/30">
              <Terminal className="w-3.5 h-3.5" />
            </div>
          </div>
          {loading ? (
            <div className="w-10 h-7 skeleton" />
          ) : (
            <div className="text-2xl font-black text-[#1E1B4B] dark:text-white">{problemsSolvedCount}</div>
          )}
          <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">Code challenges</div>
        </div>

        {/* Stat 5: XP */}
        <div className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 space-y-1 ${
          isDark
            ? 'bg-[#070B20]/80 border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
            : 'bg-white border-[#D8D1EE] hover:border-purple-300 shadow-xs'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">Total XP</span>
            <div className="p-1.5 rounded-xl bg-amber-100/70 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">
              <Zap className="w-3.5 h-3.5 fill-amber-500" />
            </div>
          </div>
          {loading ? (
            <div className="w-14 h-7 skeleton" />
          ) : (
            <div className="text-2xl font-black text-[#1E1B4B] dark:text-white">{realXP}</div>
          )}
          <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">Earned points</div>
        </div>

        {/* Stat 6: Streak */}
        <div className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 space-y-1 ${
          isDark
            ? 'bg-[#070B20]/80 border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
            : 'bg-white border-[#D8D1EE] hover:border-purple-300 shadow-xs'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">Streak</span>
            <div className="p-1.5 rounded-xl bg-rose-100/70 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/30">
              <Flame className="w-3.5 h-3.5 fill-rose-500" />
            </div>
          </div>
          {loading ? (
            <div className="w-12 h-7 skeleton" />
          ) : (
            <div className="text-2xl font-black text-[#1E1B4B] dark:text-white">{realStreak}d</div>
          )}
          <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-medium truncate">
            Best: {longestStreak}d • {totalActiveDays} active {totalActiveDays === 1 ? 'day' : 'days'}
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. PROMINENT AI MENTOR CALLOUT
      ========================================================================= */}
      <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-r from-[#0E1433] via-[#070B20] to-[#10152E] border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
          : 'bg-gradient-to-r from-purple-100/70 via-indigo-50 to-white border-purple-200 shadow-xs'
      }`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#10152E] border border-purple-200 dark:border-cyan-500/30 text-indigo-700 dark:text-cyan-300 text-xs font-bold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
              <span>Intelligent Socratic Assistant</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#1E1B4B] dark:text-white tracking-tight">
              Meet Your 24/7 AI Programming Mentor
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
              Ask questions on any concept, debug runtime errors, analyze computational complexity, or request guided hints without spoiling solutions.
            </p>

            {/* Quick interactive prompt pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={navMentor}
                className="text-xs px-3 py-1.5 rounded-xl bg-white dark:bg-[#10152E] hover:bg-purple-50 dark:hover:bg-[#151C3E] text-[#1E1B4B] dark:text-slate-200 border border-[#D8D1EE] dark:border-white/10 hover:border-purple-300 font-medium transition-all shadow-xs cursor-pointer"
              >
                💡 "Explain recursion step-by-step"
              </button>
              <button
                onClick={navMentor}
                className="text-xs px-3 py-1.5 rounded-xl bg-white dark:bg-[#10152E] hover:bg-purple-50 dark:hover:bg-[#151C3E] text-[#1E1B4B] dark:text-slate-200 border border-[#D8D1EE] dark:border-white/10 hover:border-purple-300 font-medium transition-all shadow-xs cursor-pointer"
              >
                ⚡ "Review my code efficiency"
              </button>
              <button
                onClick={navMentor}
                className="text-xs px-3 py-1.5 rounded-xl bg-white dark:bg-[#10152E] hover:bg-purple-50 dark:hover:bg-[#151C3E] text-[#1E1B4B] dark:text-slate-200 border border-[#D8D1EE] dark:border-white/10 hover:border-purple-300 font-medium transition-all shadow-xs cursor-pointer"
              >
                🧠 "Give me a practice hint"
              </button>
            </div>
          </div>

          <div className="shrink-0">
            <Button
              size="lg"
              variant="primary"
              onClick={navMentor}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold px-6"
            >
              Start Conversation
            </Button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          5. MY LEARNING SECTION
      ========================================================================= */}
      <div id="my-learning-section" className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            <h2 className="text-lg font-black text-[#1E1B4B] dark:text-white tracking-tight">My Learning</h2>
          </div>
          {registeredCourseCount > 0 && (
            <span className="text-xs text-[#64748B] dark:text-slate-400 font-semibold">
              {registeredCourseCount} enrolled track{registeredCourseCount > 1 ? 's' : ''}
            </span>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2].map(i => (
              <div key={i} className="p-6 rounded-3xl bg-white dark:bg-[#070B20] border border-[#D8D1EE] dark:border-white/10 space-y-3">
                <div className="w-32 h-5 skeleton" />
                <div className="w-full h-2 skeleton" />
                <div className="w-24 h-4 skeleton" />
              </div>
            ))}
          </div>
        ) : registeredCourseCount === 0 ? (
          /* Empty State */
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#070B20] border border-[#D8D1EE] dark:border-white/10 text-center space-y-8 shadow-xs">
            <div className="max-w-md mx-auto space-y-3">
              <span className="text-4xl">🚀</span>
              <h3 className="text-xl font-black text-[#1E1B4B] dark:text-white tracking-tight">
                Your learning journey starts here
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 leading-relaxed">
                You haven't enrolled in any courses yet. Choose your preferred programming language track and begin mastering concepts with AI guidance.
              </p>
              <div className="pt-2">
                <Button
                  size="md"
                  variant="primary"
                  onClick={navLanguages}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="font-bold px-6"
                >
                  Explore Courses
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* Enrolled Course Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {enrollments.map((enr) => {
              const courseTitle = `${enr.course_id.charAt(0).toUpperCase() + enr.course_id.slice(1)} Programming`;
              const progressPct = enr.progress_percentage || 0;
              const completedCount = enr.completed_topics_count || 0;
              const totalCount = enr.total_topics_count || 28;

              return (
                <div
                  key={enr.id}
                  className="p-6 rounded-3xl bg-white dark:bg-[#070B20] border border-[#D8D1EE] dark:border-white/10 hover:border-purple-300 dark:hover:border-cyan-500/40 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-cyan-300 bg-purple-100/70 dark:bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-purple-200 dark:border-cyan-500/30">
                        {enr.course_id}
                      </span>
                      <span className="text-xs font-black text-[#1E1B4B] dark:text-white">{progressPct}% complete</span>
                    </div>

                    <h3 className="text-base font-black text-[#1E1B4B] dark:text-white">
                      {courseTitle}
                    </h3>

                    <div className="space-y-1.5">
                      <div className="w-full bg-[#EAE5F6] dark:bg-black/40 h-2 rounded-full overflow-hidden border border-[#D8D1EE] dark:border-white/10">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-cyan-400 dark:to-indigo-400 rounded-full transition-all duration-500"
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#64748B] dark:text-slate-400 font-medium">
                        <span>{completedCount} / {totalCount} topics</span>
                        <span className="capitalize text-indigo-600 dark:text-cyan-400 font-semibold">{enr.status || 'Active'}</span>
                      </div>
                    </div>

                    {enr.last_accessed_at && (
                      <div className="text-[11px] text-[#64748B] dark:text-slate-400 flex items-center gap-1.5 pt-1">
                        <Clock className="w-3 h-3 text-indigo-500 dark:text-cyan-400" />
                        <span>Last studied: {new Date(enr.last_accessed_at).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedLanguage(enr.course_id);
                      navCurriculum(enr.course_id);
                    }}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="w-full font-bold"
                  >
                    Continue Learning
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* =========================================================================
          6. DUAL-THEME ANALYTICS CHARTS & RECENT ACTIVITY
      ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Analytics Chart Card */}
        <Card className="p-6" hoverEffect={false}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
              <h3 className="font-bold text-[#1E1B4B] dark:text-white text-base">Progress Analytics</h3>
            </div>
            <span className="text-xs text-[#64748B] dark:text-slate-400 font-semibold">Mastery Performance</span>
          </div>

          {chartData.length > 0 ? (
            <div className="h-52 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: isDark ? '#94A3B8' : '#64748B' }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: isDark ? '#94A3B8' : '#64748B' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? '#070B20' : '#FFFFFF',
                      borderRadius: '16px',
                      border: isDark ? '1px solid rgba(6,182,212,0.4)' : '1px solid #D8D1EE',
                      color: isDark ? '#F8FAFC' : '#1E1B4B',
                      fontSize: '12px',
                      boxShadow: isDark ? '0 0 20px rgba(6,182,212,0.2)' : '0 10px 25px rgba(139,92,246,0.1)'
                    }}
                    formatter={(val) => [`${val}%`, 'Mastery Score']}
                  />
                  <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                    {chartData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          isDark
                            ? index % 3 === 0 ? '#22D3EE' : index % 3 === 1 ? '#C084FC' : '#38BDF8'
                            : index % 3 === 0 ? '#4F46E5' : index % 3 === 1 ? '#8B5CF6' : '#06B6D4'
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="h-52 flex items-center justify-center text-center p-6 text-xs text-[#64748B] dark:text-slate-400 bg-[#F7F5FC] dark:bg-[#10152E]/50 rounded-2xl border border-dashed border-[#D8D1EE] dark:border-white/10">
              Solve topics and coding exercises to generate mastery analytics!
            </div>
          )}
        </Card>

        {/* Recent Activity Card */}
        <Card className="p-6" hoverEffect={false}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <History className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
              <h3 className="font-bold text-[#1E1B4B] dark:text-white text-base">Recent Learning Activity</h3>
            </div>
            <span className="text-xs text-[#64748B] dark:text-slate-400 font-mono">Live Telemetry</span>
          </div>

          {loading ? (
            <div className="space-y-3">
              <div className="h-10 skeleton" />
              <div className="h-10 skeleton" />
            </div>
          ) : (progressData?.completedTopics?.length > 0 || completedTopicsCount > 0) ? (
            <div className="space-y-2.5">
              {(progressData?.completedTopics || []).slice(0, 4).map((topicTitle, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-[#F7F5FC] dark:bg-[#10152E] border border-[#D8D1EE] dark:border-white/10 text-xs">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <div>
                      <span className="font-semibold text-[#1E1B4B] dark:text-white">{topicTitle}</span>
                      <span className="text-[#64748B] dark:text-slate-400 text-[11px] block uppercase font-mono mt-0.5">
                        Completed & Mastered
                      </span>
                    </div>
                  </div>
                  <Badge variant="emerald">Completed</Badge>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-52 flex items-center justify-center p-6 text-center text-[#64748B] dark:text-slate-400 text-xs rounded-2xl bg-[#F7F5FC] dark:bg-[#10152E]/50 border border-dashed border-[#D8D1EE] dark:border-white/10">
              No learning activity recorded yet. Start your first topic or challenge to see live telemetry!
            </div>
          )}
        </Card>
      </div>

      {/* =========================================================================
          7. RECOMMENDATIONS (Asynchronous & Non-blocking)
      ========================================================================= */}
      {recommendations.length > 0 && (
        <div className="p-6 rounded-3xl bg-purple-50/70 dark:bg-[#070B20] border border-purple-200 dark:border-cyan-500/30 space-y-3">
          <div className="flex items-center gap-2 text-indigo-700 dark:text-cyan-300">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-cyan-400" />
            <h3 className="font-bold text-sm">Recommended Next Steps</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {recommendations.slice(0, 3).map((rec, i) => (
              <div
                key={i}
                onClick={navPractice}
                className="p-3.5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#D8D1EE] dark:border-white/10 hover:border-purple-300 dark:hover:border-cyan-400/50 shadow-xs transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <p className="text-xs font-bold text-[#1E1B4B] dark:text-white">{rec.title || rec.topic || 'Practice Challenge'}</p>
                  <p className="text-[11px] text-[#64748B] dark:text-slate-400 leading-relaxed line-clamp-2">{rec.reason || rec.description || 'Strengthen your core programming fundamentals.'}</p>
                </div>
                <div className="pt-2 flex items-center text-[11px] font-bold text-indigo-600 dark:text-cyan-400 gap-1">
                  <span>Start Practice</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
