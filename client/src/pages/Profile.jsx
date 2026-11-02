import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useLearning } from '../context/LearningContext.jsx';
import { api } from '../services/api.js';
import {
  User,
  Award,
  Flame,
  Zap,
  Shield,
  BookOpen,
  LogOut,
  CheckCircle2,
  Globe,
  Settings,
  Mail,
  Building2,
  GraduationCap,
  Calendar,
  Lock,
  Layers,
  Terminal,
  Trophy
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import Card from '../components/ui/Card.jsx';
import LoadingSkeleton from '../components/ui/LoadingSkeleton.jsx';

export const Profile = ({ onNavigateToLanguages }) => {
  const { user, logout } = useAuth();
  const { selectedLanguage, setSelectedLanguage } = useLearning();

  const [loading, setLoading] = useState(true);
  const [studentLMS, setStudentLMS] = useState(null);
  const [progressData, setProgressData] = useState(null);

  const languages = ['python', 'javascript', 'java', 'cpp', 'c'];

  useEffect(() => {
    let isMounted = true;
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const [progRes, lmsRes] = await Promise.allSettled([
          api.getProgress(selectedLanguage || 'python'),
          api.getStudentDashboard()
        ]);

        if (isMounted) {
          if (progRes.status === 'fulfilled' && progRes.value?.success) {
            setProgressData(progRes.value);
          }
          if (lmsRes.status === 'fulfilled' && lmsRes.value?.success) {
            setStudentLMS(lmsRes.value);
          }
        }
      } catch (err) {
        console.warn('Failed to fetch profile telemetry:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUserData();
    return () => { isMounted = false; };
  }, [selectedLanguage, user?.id]);

  const realStreak = progressData?.streakDays ?? (user?.streakDays || 0);
  const realXP = progressData?.xp ?? (user?.xp || 0);
  const enrollments = studentLMS?.enrollments || [];
  const completedTopicsCount = progressData?.completedTopics?.length || (studentLMS?.total_completed_topics || 0);
  const solvedCount = (progressData?.masteryData || []).filter(m => m.successfulAttempts > 0).length || (progressData?.solvedQuestions || 0);

  // Real milestones matching system achievements
  const milestones = [
    {
      id: 'first_topic',
      title: 'First Topic Mastered',
      description: 'Completed your first structured curriculum topic lesson',
      icon: Zap,
      unlocked: completedTopicsCount >= 1
    },
    {
      id: 'streak_3',
      title: 'Consistency Champion',
      description: 'Maintained a 3-day active coding habit on CodeMentor',
      icon: Flame,
      unlocked: realStreak >= 3
    },
    {
      id: 'xp_100',
      title: 'Century Milestone',
      description: 'Accumulated 100+ XP from practice challenges',
      icon: Trophy,
      unlocked: realXP >= 100
    },
    {
      id: 'code_warrior',
      title: 'Code Warrior',
      description: 'Passed 5 or more coding exercises with clean execution',
      icon: Terminal,
      unlocked: solvedCount >= 5
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 py-6 space-y-6 select-none">
      {/* 1. Header Card (Avatar, Name, Email, Role) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 shadow-xs dark:shadow-[0_0_25px_rgba(34,211,238,0.05)] flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#064E52] via-[#0F766E] to-[#10B981] dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 flex items-center justify-center text-3xl text-white shadow-md font-black shrink-0">
          {user?.fullName?.charAt(0) || user?.full_name?.charAt(0) || 'U'}
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#172B3A] dark:text-white">
              {user?.fullName || user?.full_name || 'Scholar'}
            </h1>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#ECFDF5] dark:bg-cyan-500/10 text-[#0F766E] dark:text-cyan-400 border border-[#A7F3D0] dark:border-cyan-500/30">
              {user?.role?.replace('_', ' ') || 'Student'}
            </span>
          </div>

          <p className="text-xs text-[#64748B] dark:text-slate-400 font-mono flex items-center justify-center sm:justify-start gap-1">
            <Mail className="w-3 h-3 text-[#64748B] dark:text-slate-400" />
            {user?.email || 'scholar@codementor.dev'}
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-3 text-xs font-semibold">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] dark:bg-cyan-500/10 border border-[#A7F3D0] dark:border-cyan-500/30 text-[#0F766E] dark:text-cyan-400 shadow-2xs">
              <Zap className="w-3.5 h-3.5 fill-[#10B981] dark:fill-cyan-400 text-[#10B981] dark:text-cyan-400" />
              <span>{realXP} Total XP</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFBEB] dark:bg-amber-500/10 border border-[#FDE68A] dark:border-amber-500/20 text-[#B45309] dark:text-amber-400 shadow-2xs">
              <Flame className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
              <span>{realStreak}d Streak</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5FAFA] dark:bg-white/5 border border-[#DCE8E8] dark:border-white/10 text-[#172B3A] dark:text-slate-200 shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-[#0F766E] dark:text-cyan-400" />
              <span className="uppercase">{selectedLanguage || 'python'} Track</span>
            </div>
          </div>
        </div>

        <div>
          <Button
            size="sm"
            variant="outline"
            onClick={logout}
            leftIcon={<LogOut className="w-3.5 h-3.5 text-[#EF4444]" />}
            className="hover:bg-rose-50 dark:hover:bg-rose-950/30 hover:text-[#EF4444] hover:border-rose-300 dark:border-white/10"
          >
            Sign Out
          </Button>
        </div>
      </div>

      {/* 2. Account Information Section */}
      <Card className="p-6 space-y-4" hoverEffect={false}>
        <div className="flex items-center justify-between border-b border-[#DCE8E8] dark:border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#0F766E] dark:text-cyan-400" />
            <h2 className="font-bold text-[#172B3A] dark:text-white text-sm">Account Information</h2>
          </div>
          <Badge variant="teal">Verified Profile</Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10 space-y-1">
            <span className="text-[#64748B] dark:text-slate-400 font-medium block">Full Name</span>
            <span className="font-bold text-[#172B3A] dark:text-white text-sm block">
              {user?.fullName || user?.full_name || 'Scholar'}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10 space-y-1">
            <span className="text-[#64748B] dark:text-slate-400 font-medium block">Email Address</span>
            <span className="font-bold text-[#172B3A] dark:text-white text-sm block truncate">
              {user?.email || 'scholar@codementor.dev'}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10 space-y-1">
            <span className="text-[#64748B] dark:text-slate-400 font-medium block">Platform Role</span>
            <span className="font-bold text-[#172B3A] dark:text-white text-sm block uppercase">
              {user?.role?.replace('_', ' ') || 'Student'}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10 space-y-1">
            <span className="text-[#64748B] dark:text-slate-400 font-medium block">Institutional Affiliation</span>
            <span className="font-bold text-[#172B3A] dark:text-white text-sm block">
              {user?.college?.name || studentLMS?.college_membership?.college?.name || 'Independent Scholar'}
            </span>
          </div>
        </div>
      </Card>

      {/* 3. Learning Statistics Section */}
      <Card className="p-6 space-y-4" hoverEffect={false}>
        <div className="flex items-center justify-between border-b border-[#DCE8E8] dark:border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#10B981] dark:text-cyan-400 fill-[#10B981] dark:fill-cyan-400" />
            <h2 className="font-bold text-[#172B3A] dark:text-white text-sm">Learning Statistics</h2>
          </div>
          <Badge variant="emerald">Live Telemetry</Badge>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-center">
          <div className="p-4 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10">
            <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider block">Enrolled Courses</span>
            <span className="text-2xl font-black text-[#172B3A] dark:text-white mt-1 block">{enrollments.length}</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10">
            <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider block">Completed Topics</span>
            <span className="text-2xl font-black text-[#172B3A] dark:text-white mt-1 block">{completedTopicsCount}</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10">
            <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider block">Problems Solved</span>
            <span className="text-2xl font-black text-[#172B3A] dark:text-white mt-1 block">{solvedCount}</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10">
            <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider block">Total XP</span>
            <span className="text-2xl font-black text-[#0F766E] dark:text-cyan-400 mt-1 block">{realXP}</span>
          </div>
        </div>
      </Card>

      {/* 4. Enrolled Courses Section */}
      <Card className="p-6 space-y-4" hoverEffect={false}>
        <div className="flex items-center justify-between border-b border-[#DCE8E8] dark:border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#0F766E] dark:text-cyan-400" />
            <h2 className="font-bold text-[#172B3A] dark:text-white text-sm">Enrolled Courses</h2>
          </div>
          {onNavigateToLanguages && (
            <button
              onClick={onNavigateToLanguages}
              className="text-xs font-bold text-[#0F766E] dark:text-cyan-400 hover:text-[#064E52] dark:hover:text-cyan-300 cursor-pointer"
            >
              Explore Catalogue →
            </button>
          )}
        </div>

        {enrollments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {enrollments.map((enr) => (
              <div key={enr.id} className="p-4 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[#0F766E] dark:text-cyan-400 bg-[#ECFDF5] dark:bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-[#A7F3D0] dark:border-cyan-500/30">
                    {enr.course_id}
                  </span>
                  <span className="text-xs font-black text-[#172B3A] dark:text-white">{enr.progress_percentage || 0}%</span>
                </div>
                <div className="w-full bg-[#ECFDF5] dark:bg-white/5 h-1.5 rounded-full overflow-hidden border border-[#DCE8E8] dark:border-white/10">
                  <div
                    className="h-full bg-[#10B981] dark:bg-cyan-400 rounded-full"
                    style={{ width: `${enr.progress_percentage || 0}%` }}
                  />
                </div>
                <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">
                  {enr.completed_topics_count || 0} topics mastered
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center text-xs text-[#64748B] dark:text-slate-400 bg-[#F5FAFA] dark:bg-white/5 rounded-xl border border-dashed border-[#DCE8E8] dark:border-white/10">
            No enrolled courses yet. Explore the catalogue to get started!
          </div>
        )}
      </Card>

      {/* 5. Achievements Section */}
      <Card className="p-6 space-y-4" hoverEffect={false}>
        <div className="flex items-center justify-between border-b border-[#DCE8E8] dark:border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#10B981] dark:text-cyan-400" />
            <h2 className="font-bold text-[#172B3A] dark:text-white text-sm">Platform Achievements</h2>
          </div>
          <Badge variant="mint">Real Telemetry</Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {milestones.map((ach) => {
            const Icon = ach.icon;
            return (
              <div
                key={ach.id}
                className={`p-4 rounded-xl border flex items-start gap-3.5 transition-all ${
                  ach.unlocked
                    ? 'bg-white dark:bg-[#070B20]/90 border-[#A7F3D0] dark:border-cyan-500/30 shadow-2xs'
                    : 'bg-[#F5FAFA] dark:bg-white/5 border-[#DCE8E8] dark:border-white/10 opacity-60'
                }`}
              >
                <div className={`p-2.5 rounded-xl border shrink-0 ${
                  ach.unlocked
                    ? 'bg-gradient-to-tr from-[#064E52] to-[#0F766E] dark:from-cyan-600 dark:to-indigo-600 text-[#34D399] dark:text-cyan-300 border-[#0F766E]/30 dark:border-white/10'
                    : 'bg-[#E2E8F0] dark:bg-white/10 text-[#94A3B8] dark:text-slate-500 border-[#CBD5E1] dark:border-white/5'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-xs text-[#172B3A] dark:text-white">{ach.title}</h3>
                    {ach.unlocked && <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] dark:text-cyan-400" />}
                  </div>
                  <p className="text-[11px] text-[#64748B] dark:text-slate-400 mt-0.5 leading-relaxed">{ach.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* 6. Preferences Section */}
      <Card className="p-6 space-y-4" hoverEffect={false}>
        <div className="flex items-center justify-between border-b border-[#DCE8E8] dark:border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-[#0F766E] dark:text-cyan-400" />
            <h2 className="font-bold text-[#172B3A] dark:text-white text-sm">Learning Preferences</h2>
          </div>
          <Badge variant="teal">Customizable</Badge>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-[#172B3A] dark:text-white block mb-2">
              Active Language Track:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`p-2.5 rounded-xl border text-xs font-bold uppercase transition-all cursor-pointer ${
                    (selectedLanguage || 'python').toLowerCase() === lang
                      ? 'bg-[#0F766E] dark:bg-cyan-500 text-white dark:text-black border-[#0F766E] dark:border-cyan-400 shadow-xs'
                      : 'bg-[#F5FAFA] dark:bg-white/5 border-[#DCE8E8] dark:border-white/10 text-[#172B3A] dark:text-slate-300 hover:bg-[#ECFDF5] dark:hover:bg-white/10 hover:border-[#A7F3D0] dark:hover:border-cyan-500/30'
                  }`}
                >
                  {lang === 'cpp' ? 'C++' : lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
