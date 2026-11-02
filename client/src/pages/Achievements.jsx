import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useLearning } from '../context/LearningContext.jsx';
import { api } from '../services/api.js';
import {
  Trophy,
  Zap,
  Flame,
  CheckCircle2,
  Lock,
  Sparkles,
  Award,
  BookOpen,
  Terminal,
  Target,
  RefreshCw,
  Compass
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import LoadingSkeleton from '../components/ui/LoadingSkeleton.jsx';

export const Achievements = ({ onNavigateToPractice, onNavigateToCurriculum }) => {
  const { user } = useAuth();
  const { selectedLanguage } = useLearning();

  const [loading, setLoading] = useState(true);
  const [progressData, setProgressData] = useState(null);
  const [error, setError] = useState(null);

  const fetchAchievements = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.getProgress(selectedLanguage || 'python');
      if (res && res.success) {
        setProgressData(res);
      } else {
        setProgressData(null);
      }
    } catch (err) {
      console.warn('Failed to fetch achievements progress:', err);
      setError('Unable to load achievements at this time.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, [selectedLanguage, user?.id]);

  const realStreak = progressData?.streakDays ?? (user?.streakDays || 0);
  const realXP = progressData?.xp ?? (user?.xp || 0);
  const completedTopicsCount = progressData?.completedTopics?.length || 0;
  const solvedCount = (progressData?.masteryData || []).filter(m => m.successfulAttempts > 0).length || (progressData?.solvedQuestions || 0);

  // Platform Canonical Milestones with real live evaluation based strictly on user telemetry
  const milestones = [
    {
      id: 'first_topic',
      title: 'First Topic Mastered',
      description: 'Successfully complete your first curriculum topic lesson and quiz',
      xpReward: 25,
      icon: Zap,
      category: 'Curriculum',
      isUnlocked: completedTopicsCount >= 1,
      currentProgress: Math.min(1, completedTopicsCount),
      targetGoal: 1,
      progressLabel: `${Math.min(1, completedTopicsCount)} / 1 topic`
    },
    {
      id: 'streak_3',
      title: 'Consistency Champion',
      description: 'Maintain a 3-day continuous coding streak on CodeMentor',
      xpReward: 50,
      icon: Flame,
      category: 'Dedication',
      isUnlocked: realStreak >= 3,
      currentProgress: Math.min(3, realStreak),
      targetGoal: 3,
      progressLabel: `${Math.min(3, realStreak)} / 3 days`
    },
    {
      id: 'xp_100',
      title: 'Century Milestone',
      description: 'Accumulate 100 or more total experience points through practice',
      xpReward: 100,
      icon: Trophy,
      category: 'Experience',
      isUnlocked: realXP >= 100,
      currentProgress: Math.min(100, realXP),
      targetGoal: 100,
      progressLabel: `${Math.min(100, realXP)} / 100 XP`
    },
    {
      id: 'code_warrior',
      title: 'Code Warrior',
      description: 'Solve 5 or more coding exercises in the interactive problem runner',
      xpReward: 75,
      icon: Terminal,
      category: 'Practice',
      isUnlocked: solvedCount >= 5,
      currentProgress: Math.min(5, solvedCount),
      targetGoal: 5,
      progressLabel: `${Math.min(5, solvedCount)} / 5 problems`
    },
    {
      id: 'curriculum_scholar',
      title: 'Curriculum Scholar',
      description: 'Master 10 distinct curriculum lessons across your chosen track',
      xpReward: 150,
      icon: BookOpen,
      category: 'Curriculum',
      isUnlocked: completedTopicsCount >= 10,
      currentProgress: Math.min(10, completedTopicsCount),
      targetGoal: 10,
      progressLabel: `${Math.min(10, completedTopicsCount)} / 10 topics`
    },
    {
      id: 'week_streak',
      title: 'Seven-Day Momentum',
      description: 'Keep your coding habit alive for an entire unbroken week',
      xpReward: 200,
      icon: Award,
      category: 'Dedication',
      isUnlocked: realStreak >= 7,
      currentProgress: Math.min(7, realStreak),
      targetGoal: 7,
      progressLabel: `${Math.min(7, realStreak)} / 7 days`
    }
  ];

  const unlockedCount = milestones.filter(m => m.isUnlocked).length;
  const totalMilestones = milestones.length;
  const completionPercentage = Math.round((unlockedCount / totalMilestones) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8 select-none">
      {/* Header Banner */}
      <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-[#ECFDF5] via-white to-[#F5FAFA] dark:from-[#070B20] dark:via-[#10152E] dark:to-[#070B20] border border-[#DCE8E8] dark:border-white/10 shadow-sm dark:shadow-[0_0_30px_rgba(34,211,238,0.05)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] dark:bg-cyan-500/10 text-[#0F766E] dark:text-cyan-400 text-xs font-bold border border-[#A7F3D0] dark:border-cyan-500/30">
            <Trophy className="w-3.5 h-3.5 text-[#0F766E] dark:text-cyan-400" />
            <span>Developer Badges & Honors</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#172B3A] dark:text-white tracking-tight">
            Milestones & Achievements
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 max-w-xl leading-relaxed">
            Earn badges and XP by conquering curriculum topics, maintaining coding consistency, and passing algorithm challenges.
          </p>
        </div>

        {/* Real Summary Pill Card */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 shadow-xs flex items-center gap-5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#064E52] via-[#0F766E] to-[#10B981] dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 flex items-center justify-center text-white shadow-xs">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-extrabold text-[#172B3A] dark:text-white">{unlockedCount} / {totalMilestones}</p>
              <p className="text-[11px] font-semibold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">Unlocked</p>
            </div>
          </div>
          <div className="h-9 w-px bg-[#DCE8E8] dark:bg-white/10" />
          <div>
            <p className="text-xl font-extrabold text-[#10B981] dark:text-emerald-400">{realXP} XP</p>
            <p className="text-[11px] font-semibold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">Total Earned</p>
          </div>
        </div>
      </div>

      {/* Progress Bar Overview */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 shadow-xs space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-[#172B3A] dark:text-white">Platform Milestone Completion</span>
          <span className="font-extrabold text-[#10B981] dark:text-emerald-400">{completionPercentage}% Completed</span>
        </div>
        <div className="w-full h-2.5 bg-[#ECFDF5] dark:bg-white/5 rounded-full overflow-hidden border border-[#DCE8E8] dark:border-white/10">
          <div
            className="h-full bg-gradient-to-r from-[#064E52] via-[#0F766E] to-[#10B981] dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      {/* Loading Skeletons */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 shadow-xs space-y-4">
              <div className="flex items-center gap-4">
                <LoadingSkeleton variant="circular" className="w-12 h-12" />
                <div className="space-y-2 flex-1">
                  <LoadingSkeleton variant="title" className="w-3/4" />
                  <LoadingSkeleton variant="text" className="w-1/2" />
                </div>
              </div>
              <LoadingSkeleton variant="text" count={2} />
            </div>
          ))}
        </div>
      ) : (
        /* Achievement Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {milestones.map((milestone) => {
            const Icon = milestone.icon;
            const pct = Math.min(100, Math.round((milestone.currentProgress / milestone.targetGoal) * 100));

            return (
              <div
                key={milestone.id}
                className={`p-6 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between overflow-hidden ${
                  milestone.isUnlocked
                    ? 'bg-white dark:bg-[#070B20]/90 border-[#A7F3D0] dark:border-cyan-500/30 shadow-md shadow-[#10B981]/5 hover:border-[#10B981] dark:hover:border-cyan-400 hover:shadow-lg hover:shadow-[#10B981]/10'
                    : 'bg-[#F5FAFA] dark:bg-[#030617]/50 border-[#DCE8E8] dark:border-white/10 opacity-75 hover:opacity-90'
                }`}
              >
                {/* Subtle Glow for Unlocked Achievements */}
                {milestone.isUnlocked && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#10B981]/10 dark:from-cyan-500/10 to-[#34D399]/10 dark:to-purple-500/10 rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                        milestone.isUnlocked
                          ? 'bg-gradient-to-tr from-[#064E52] via-[#0F766E] to-[#10B981] dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 text-white shadow-md shadow-[#064E52]/20 ring-2 ring-[#ECFDF5] dark:ring-white/10'
                          : 'bg-[#F5FAFA] dark:bg-white/5 border border-[#DCE8E8] dark:border-white/10 text-[#64748B] dark:text-slate-400'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider block">
                          {milestone.category}
                        </span>
                        <h3 className={`text-base font-bold tracking-tight ${
                          milestone.isUnlocked ? 'text-[#172B3A] dark:text-white' : 'text-[#64748B] dark:text-slate-400'
                        }`}>
                          {milestone.title}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {milestone.isUnlocked ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ECFDF5] dark:bg-emerald-500/10 text-[#065F46] dark:text-emerald-400 border border-[#A7F3D0] dark:border-emerald-500/30 text-[11px] font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] dark:text-emerald-400" />
                          Unlocked
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F5FAFA] dark:bg-white/5 border border-[#DCE8E8] dark:border-white/10 text-[#64748B] dark:text-slate-400 text-[11px] font-semibold">
                          <Lock className="w-3 h-3" />
                          Locked
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed mb-5">
                    {milestone.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-[#DCE8E8]/60 dark:border-white/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#64748B] dark:text-slate-400 font-medium">{milestone.progressLabel}</span>
                    <span className="font-bold text-[#0F766E] dark:text-cyan-400">+{milestone.xpReward} XP</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#F5FAFA] dark:bg-white/5 border border-[#DCE8E8] dark:border-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        milestone.isUnlocked
                          ? 'bg-[#10B981] dark:bg-cyan-400'
                          : 'bg-gradient-to-r from-[#064E52] to-[#0F766E] dark:from-slate-700 dark:to-slate-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Guidance Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#043639] via-[#064E52] to-[#0F766E] dark:from-[#0B0F24] dark:via-[#10152E] dark:to-[#172042] border border-[#0F766E]/40 dark:border-cyan-500/30 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base font-bold">Ready to unlock your next milestone?</h3>
          <p className="text-xs text-slate-200">
            Practice code solutions and continue your structured curriculum lessons today.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {onNavigateToCurriculum && (
            <Button
              size="sm"
              variant="outline"
              onClick={onNavigateToCurriculum}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Curriculum Roadmap
            </Button>
          )}
          {onNavigateToPractice && (
            <Button
              size="sm"
              variant="primary"
              onClick={onNavigateToPractice}
              className="bg-[#10B981] hover:bg-[#059669] text-white font-bold"
            >
              Start Practice
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
