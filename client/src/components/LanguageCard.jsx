import React from 'react';
import { ArrowRight, BookOpen, Layers, Clock, CheckCircle2, Lock, Sparkles, Terminal, Cpu } from 'lucide-react';
import Badge from './ui/Badge.jsx';
import Button from './ui/Button.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

export const LanguageCard = ({
  language,
  isEnrolled,
  enrollment,
  isGuest,
  onExplore,
  onEnroll,
  onContinue,
  onRequireAuth,
  isEnrolling
}) => {
  const { isDark } = useTheme();
  const { id, name, title, icon, description, tagline, difficulty, totalModules, totalTopics, duration } = language;

  const displayTitle = name || title || `${id?.charAt(0).toUpperCase() + id?.slice(1)} Programming`;
  const displayDesc = tagline || description || 'Master fundamental concepts through canonical lessons and interactive challenges.';
  const topicCount = totalTopics || (id === 'python' ? 28 : id === 'javascript' ? 26 : id === 'java' ? 27 : id === 'c' ? 24 : 25);
  const diffLabel = difficulty || (id === 'python' || id === 'javascript' ? 'Beginner' : id === 'c' || id === 'cpp' ? 'Intermediate' : 'Beginner');

  // Language Icon mapping with modern badge styling
  const renderIcon = () => {
    switch (id?.toLowerCase()) {
      case 'python':
        return <span className="text-3xl">🐍</span>;
      case 'javascript':
        return <span className="text-3xl">🟨</span>;
      case 'java':
        return <span className="text-3xl">☕</span>;
      case 'cpp':
        return <span className="text-3xl">⚡</span>;
      case 'c':
        return <span className="text-3xl">⚙️</span>;
      default:
        return <span className="text-3xl">💻</span>;
    }
  };

  const getDifficultyBadge = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'beginner':
      case 'easy':
        return 'emerald';
      case 'intermediate':
      case 'medium':
        return 'amber';
      case 'advanced':
      case 'hard':
        return 'rose';
      default:
        return 'indigo';
    }
  };

  return (
    <div className={`group relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden select-none border ${
      isDark
        ? 'bg-[#070B20]/90 border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] text-white backdrop-blur-xl'
        : 'bg-white border-[#D8D1EE] hover:border-purple-300 hover:shadow-xl text-[#1E1B4B]'
    }`}>
      {/* Subtle Top Glow on Hover */}
      <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none transition-all duration-300 ${
        isDark
          ? 'bg-cyan-500/0 group-hover:bg-cyan-500/10'
          : 'bg-purple-500/0 group-hover:bg-purple-500/10'
      }`} />

      <div>
        {/* Top Header: Icon & Difficulty */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs group-hover:scale-110 transition-all shrink-0 border ${
            isDark
              ? 'bg-[#10152E] border-white/10'
              : 'bg-[#F7F5FC] border-[#D8D1EE]'
          }`}>
            {renderIcon()}
          </div>

          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <Badge variant={getDifficultyBadge(diffLabel)}>
              {diffLabel}
            </Badge>
            {isEnrolled && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-cyan-300 bg-emerald-100/70 dark:bg-cyan-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-cyan-500/30 shadow-2xs">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-cyan-400" /> Enrolled
              </span>
            )}
          </div>
        </div>

        {/* Title & Topic Count */}
        <div className="mb-2">
          <h3 className="text-lg font-black tracking-tight group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
            {displayTitle}
          </h3>
          <p className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider mt-0.5">
            {diffLabel} • {topicCount} Topics
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed mb-4 line-clamp-2">
          {displayDesc}
        </p>

        {/* Feature Highlights Divider Section */}
        <div className="pt-3 pb-3 border-t border-[#D8D1EE] dark:border-white/10 space-y-1.5 text-xs text-[#64748B] dark:text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
            <span className="text-[11px]">Canonical Curriculum</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
            <span className="text-[11px]">Sandboxed Coding IDE</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span className="text-[11px]">AI Mentor & Review</span>
          </div>
        </div>

        {/* Real Progress Bar if Enrolled */}
        {isEnrolled && enrollment && (
          <div className="mb-4 p-3 rounded-2xl bg-purple-50/70 dark:bg-[#10152E] border border-purple-200 dark:border-cyan-500/30 space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-indigo-900 dark:text-slate-200">Your Progress</span>
              <span className="text-indigo-600 dark:text-cyan-400">{enrollment.progress_percentage || 0}%</span>
            </div>
            <div className="w-full bg-[#EAE5F6] dark:bg-black/50 h-1.5 rounded-full overflow-hidden border border-[#D8D1EE] dark:border-white/10">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-cyan-400 dark:to-indigo-400 rounded-full transition-all duration-500"
                style={{ width: `${enrollment.progress_percentage || 0}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-[#64748B] dark:text-slate-400 font-medium pt-0.5">
              <span>{enrollment.completed_topics_count || 0} / {enrollment.total_topics_count || topicCount} topics</span>
              <span className="capitalize text-indigo-600 dark:text-cyan-400 font-bold">{enrollment.status || 'Active'}</span>
            </div>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="pt-3 border-t border-[#D8D1EE] dark:border-white/10">
        {isEnrolled ? (
          <Button
            size="md"
            variant="primary"
            onClick={() => onContinue(id)}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="w-full font-bold"
          >
            Continue Learning
          </Button>
        ) : isGuest ? (
          <div className="w-full flex items-center gap-2">
            <button
              onClick={() => onExplore(id)}
              className="flex-1 py-2 px-3 rounded-xl border border-[#D8D1EE] dark:border-white/10 hover:border-purple-300 dark:hover:border-cyan-400/50 bg-[#F7F5FC] dark:bg-[#10152E] text-[#1E1B4B] dark:text-slate-200 font-bold text-xs transition-colors cursor-pointer text-center"
            >
              Explore Track
            </button>
            <Button
              size="sm"
              variant="primary"
              onClick={() => onRequireAuth?.(id)}
              leftIcon={<Lock className="w-3.5 h-3.5" />}
              className="font-bold text-xs"
            >
              Enroll
            </Button>
          </div>
        ) : (
          <div className="w-full flex items-center gap-2">
            <button
              onClick={() => onExplore(id)}
              className="flex-1 py-2 px-3 rounded-xl border border-[#D8D1EE] dark:border-white/10 hover:border-purple-300 dark:hover:border-cyan-400/50 bg-[#F7F5FC] dark:bg-[#10152E] text-[#1E1B4B] dark:text-slate-200 font-bold text-xs transition-colors cursor-pointer text-center"
            >
              Explore Track
            </button>
            <Button
              size="sm"
              variant="primary"
              onClick={() => onEnroll(id)}
              isLoading={isEnrolling}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold text-xs"
            >
              Enroll
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageCard;
