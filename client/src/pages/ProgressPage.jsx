import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  Flame,
  Zap,
  CheckCircle2,
  BookOpen,
  TrendingUp,
  Award,
  ArrowRight,
  Target,
  BarChart3,
  Calendar,
  AlertCircle,
  RefreshCw,
  Terminal,
  Trophy
} from 'lucide-react';
import Card from '../components/ui/Card.jsx';
import StatCard from '../components/ui/StatCard.jsx';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useLearning } from '../context/LearningContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { api } from '../services/api.js';

export const ProgressPage = ({ onNavigateToCurriculum, onNavigateToPractice }) => {
  const { user, sessionLoading } = useAuth();
  const { selectedLanguage } = useLearning();
  const { isDark } = useTheme();

  const [progressData, setProgressData] = useState(null);
  const [studentLMS, setStudentLMS] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProgress = async () => {
    setLoading(true);
    setError(null);

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
        achievements: [],
        completedTopics: []
      });
      setStudentLMS({ enrollments: [], average_progress: 0, total_completed_topics: 0 });
      setLoading(false);
      return;
    }

    try {
      const [progRes, lmsRes] = await Promise.allSettled([
        api.getProgress(selectedLanguage),
        api.getStudentDashboard()
      ]);

      if (progRes.status === 'fulfilled' && progRes.value?.success) {
        setProgressData(progRes.value);
      }
      if (lmsRes.status === 'fulfilled' && lmsRes.value?.success) {
        setStudentLMS(lmsRes.value);
      }
    } catch (err) {
      console.error('Failed to load progress telemetry:', err);
      setError('Unable to load your learning telemetry. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!sessionLoading) {
      fetchProgress();
    }
  }, [selectedLanguage, user?.id, user?.isGuest, sessionLoading]);

  // Real Calculated Values (Zero fake data)
  const enrollments = studentLMS?.enrollments || [];
  const registeredCourseCount = enrollments.length;

  const overallProgress = registeredCourseCount > 0
    ? Math.round(enrollments.reduce((sum, e) => sum + (e.progress_percentage || 0), 0) / registeredCourseCount)
    : (studentLMS?.average_progress || progressData?.overallMastery || 0);

  const completedTopicsCount = enrollments.reduce((sum, e) => sum + (e.completed_topics_count || 0), 0) || (studentLMS?.total_completed_topics || progressData?.completedTopics?.length || 0);
  const masteryData = progressData?.masteryData || [];
  const solvedProblemsCount = masteryData.filter(m => m.successfulAttempts > 0).length;
  const realXP = typeof user?.xp === 'number' ? user.xp : (progressData?.xp || 0);
  const realStreak = typeof user?.streakDays === 'number' ? user.streakDays : (progressData?.streakDays || 0);
  const achievements = progressData?.achievements || [];

  const chartData = masteryData.map(m => ({
    name: m.topic?.length > 14 ? m.topic.substring(0, 12) + '...' : m.topic,
    score: m.score || 0
  }));

  if (error && !loading) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-rose-200 text-center space-y-4">
        <AlertCircle className="w-8 h-8 text-rose-500 mx-auto" />
        <h2 className="text-xl font-bold text-slate-900">Unable to load progress</h2>
        <p className="text-xs text-slate-500">{error}</p>
        <Button variant="outline" onClick={fetchProgress} leftIcon={<RefreshCw className="w-4 h-4" />}>
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Page Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] dark:bg-cyan-500/10 border border-[#A7F3D0] dark:border-cyan-500/30 text-[#0F766E] dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <BarChart3 className="w-3.5 h-3.5 text-[#0F766E] dark:text-cyan-400" />
          <span>Real-time Learning Telemetry</span>
        </div>
        <h1 className="text-3xl font-extrabold text-[#172B3A] dark:text-white tracking-tight">
          Learning Analytics & Progress
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400">
          Verifiable progress metrics derived strictly from your code submissions and completed curriculum topics.
        </p>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-[#64748B] dark:text-slate-400">
            <span className="text-xs font-semibold text-[#64748B] dark:text-slate-400">Overall Mastery</span>
            <Target className="w-4 h-4 text-[#0F766E] dark:text-cyan-400" />
          </div>
          {loading ? (
            <div className="w-14 h-7 skeleton" />
          ) : (
            <div className="text-2xl font-extrabold text-[#172B3A] dark:text-white">{overallProgress}%</div>
          )}
          <div className="text-[11px] text-[#64748B] dark:text-slate-400">Across enrolled tracks</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-[#64748B] dark:text-slate-400">
            <span className="text-xs font-semibold text-[#64748B] dark:text-slate-400">Topics Mastered</span>
            <CheckCircle2 className="w-4 h-4 text-[#10B981] dark:text-emerald-400" />
          </div>
          {loading ? (
            <div className="w-10 h-7 skeleton" />
          ) : (
            <div className="text-2xl font-extrabold text-[#172B3A] dark:text-white">{completedTopicsCount}</div>
          )}
          <div className="text-[11px] text-[#64748B] dark:text-slate-400">Curriculum topics</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-[#64748B] dark:text-slate-400">
            <span className="text-xs font-semibold text-[#64748B] dark:text-slate-400">Total XP</span>
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          {loading ? (
            <div className="w-12 h-7 skeleton" />
          ) : (
            <div className="text-2xl font-extrabold text-[#172B3A] dark:text-white">{realXP}</div>
          )}
          <div className="text-[11px] text-[#64748B] dark:text-slate-400">Experience points</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-[#64748B] dark:text-slate-400">
            <span className="text-xs font-semibold text-[#64748B] dark:text-slate-400">Active Streak</span>
            <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
          </div>
          {loading ? (
            <div className="w-10 h-7 skeleton" />
          ) : (
            <div className="text-2xl font-extrabold text-[#172B3A] dark:text-white">{realStreak}d</div>
          )}
          <div className="text-[11px] text-[#64748B] dark:text-slate-400">Days in a row</div>
        </div>
      </div>

      {/* Enrolled Tracks Real Progress */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[#172B3A] dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#0F766E] dark:text-cyan-400" /> Enrolled Course Tracks
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 space-y-3">
              <div className="w-32 h-5 skeleton" />
              <div className="w-full h-2 skeleton" />
            </div>
          </div>
        ) : enrollments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enrollments.map((enr) => (
              <div key={enr.id} className="p-5 rounded-2xl bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E] dark:text-cyan-400 bg-[#ECFDF5] dark:bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-[#A7F3D0] dark:border-cyan-500/30">
                    {enr.course_id}
                  </span>
                  <span className="text-xs font-extrabold text-[#10B981] dark:text-emerald-400">{enr.progress_percentage || 0}%</span>
                </div>
                <div className="w-full bg-[#ECFDF5] dark:bg-white/5 h-2 rounded-full overflow-hidden border border-[#DCE8E8]/50 dark:border-white/10">
                  <div
                    className="h-full bg-[#10B981] dark:bg-cyan-400 rounded-full"
                    style={{ width: `${enr.progress_percentage || 0}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#64748B] dark:text-slate-400">
                  <span>{enr.completed_topics_count || 0} of {enr.total_topics_count || 28} topics</span>
                  <span className="capitalize">{enr.status || 'Active'}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-white dark:bg-[#070B20]/90 rounded-2xl border border-[#DCE8E8] dark:border-white/10 text-xs text-[#64748B] dark:text-slate-400 space-y-2">
            <p>You have not registered for any courses yet.</p>
            <Button size="sm" variant="outline" onClick={onNavigateToCurriculum} className="border-[#0F766E] dark:border-cyan-500/40 text-[#0F766E] dark:text-cyan-400 hover:bg-[#ECFDF5] dark:hover:bg-cyan-500/10">
              Explore Courses
            </Button>
          </div>
        )}
      </div>

      {/* Middle Grid: Mastery Distribution & Verified Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Topic Skill Chart */}
        <Card className="lg:col-span-8 p-6" hoverEffect={false}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-[#172B3A] dark:text-white text-base">Topic Skill Mastery</h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400">Evaluated from your successful code submissions</p>
            </div>
            <Badge variant="teal">Live Telemetry</Badge>
          </div>

          <div className="h-64 w-full">
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: isDark ? '#94A3B8' : '#64748B' }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: isDark ? '#94A3B8' : '#64748B' }} />
                  <Tooltip contentStyle={{ backgroundColor: isDark ? '#070B20' : '#064E52', borderColor: isDark ? 'rgba(34,211,238,0.3)' : '#043639', borderRadius: '12px', fontSize: '12px', color: '#FFFFFF' }} />
                  <Bar dataKey="score" fill={isDark ? '#22D3EE' : '#0F766E'} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-xs text-[#64748B] dark:text-slate-400 space-y-2">
                <Terminal className="w-8 h-8 text-[#DCE8E8] dark:text-slate-600" />
                <span>Complete your first practice challenge to populate skill mastery charts.</span>
              </div>
            )}
          </div>
        </Card>

        {/* Verified Achievements */}
        <Card className="lg:col-span-4 p-6" hoverEffect={false}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#172B3A] dark:text-white text-base flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              Achievements
            </h3>
            <span className="text-xs font-semibold text-[#0F766E] dark:text-cyan-400 bg-[#ECFDF5] dark:bg-cyan-500/10 px-2 py-0.5 rounded-full border border-[#A7F3D0] dark:border-cyan-500/30">
              {achievements.length} Unlocked
            </span>
          </div>

          <div className="space-y-3">
            {achievements.length > 0 ? (
              achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#ECFDF5]/50 dark:bg-white/5 border border-[#A7F3D0] dark:border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-[#ECFDF5] dark:bg-amber-500/10 text-[#0F766E] dark:text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 border border-[#A7F3D0] dark:border-amber-500/30">
                    🏆
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#172B3A] dark:text-white">{ach.title}</h4>
                    <p className="text-[11px] text-[#64748B] dark:text-slate-400 mt-0.5">{ach.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-xs text-[#64748B] dark:text-slate-400 space-y-2 bg-[#F5FAFA] dark:bg-white/5 rounded-2xl border border-dashed border-[#DCE8E8] dark:border-white/10">
                <Trophy className="w-6 h-6 text-[#64748B]/50 dark:text-slate-500 mx-auto" />
                <p>Complete curriculum topics and challenges to unlock verified achievement badges.</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProgressPage;
