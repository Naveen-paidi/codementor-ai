/**
 * Full topic detail page with rich layout and authentication barrier.
 * Location: client/src/pages/TopicDetail.jsx
 */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Home, Dumbbell, Terminal, Lock, CheckCircle2, Circle } from 'lucide-react';
import { findTopic, getCurriculum } from '../curricula/index.js';
import TopicViewer from '../components/curriculum/TopicViewer.jsx';
import Button from '../components/ui/Button.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { api } from '../services/api.js';

export const TopicDetail = ({
  languageSlug,
  topicSlug,
  onBack,
  onBackToCurriculum,
  onPracticeTopic,
  onRequireAuth
}) => {
  const { user, updateXP, updateStreak } = useAuth();
  const { isDark } = useTheme();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const userRole = user?.role || 'user';
  const rolePrefix =
    userRole === 'super_admin'
      ? '/admin'
      : userRole === 'college_admin'
      ? '/college-admin'
      : userRole === 'faculty'
      ? '/faculty'
      : '/student';

  const isRoleRoute =
    location.pathname.startsWith('/student') ||
    location.pathname.startsWith('/faculty') ||
    location.pathname.startsWith('/college-admin') ||
    location.pathname.startsWith('/admin');

  const basePath = isRoleRoute ? `${rolePrefix}/curriculum` : '/curriculum';

  const effectiveLangSlug = languageSlug || params?.languageSlug || 'python';
  const effectiveTopicSlug = topicSlug || params?.topicSlug;

  const result = findTopic(effectiveLangSlug, effectiveTopicSlug);
  const curriculum = getCurriculum(effectiveLangSlug);
  const [isCompleted, setIsCompleted] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleBack = () => {
    if (onBack) return onBack();
    navigate(isRoleRoute ? `${rolePrefix}/courses` : '/courses');
  };

  const handleBackToCurriculum = () => {
    if (onBackToCurriculum) return onBackToCurriculum();
    navigate(`${basePath}/${effectiveLangSlug}`);
  };

  const handlePracticeTopic = (t) => {
    if (onPracticeTopic) return onPracticeTopic(t);
    navigate(`${rolePrefix}/practice`);
  };

  const handleAuthRedirect = () => {
    if (onRequireAuth) return onRequireAuth(effectiveLangSlug, effectiveTopicSlug);
    navigate('/login', { state: { from: location } });
  };

  // Explicit completion check on mount (no auto-completion on visit!)
  useEffect(() => {
    let isMounted = true;
    if (user && !user.isGuest && result?.topic) {
      const topicId = result.topic.id || result.topic.slug;
      api.getTopicStatus(effectiveLangSlug, topicId)
        .then(res => {
          if (isMounted && res?.success) {
            setIsCompleted(Boolean(res.isCompleted));
          }
        })
        .catch(() => {});
    }
    return () => { isMounted = false; };
  }, [user?.id, effectiveLangSlug, result?.topic?.id, result?.topic?.slug]);

  const handleMarkComplete = async () => {
    if (!user || user.isGuest) {
      handleAuthRedirect();
      return;
    }
    if (isCompleted) {
      handleBackToCurriculum();
      return;
    }

    setActionLoading(true);
    try {
      const topicId = result?.topic?.id || result?.topic?.slug;
      const res = await api.completeTopic(effectiveLangSlug, topicId, 'completed');
      if (res && res.success) {
        setIsCompleted(true);
        if (res.xpAwarded) {
          if (updateXP && typeof res.currentXP === 'number') {
            updateXP(res.currentXP);
          }
          setToastMessage({
            type: 'success',
            text: '+1 XP – Topic Completed!'
          });
        }
        if (typeof res.streak === 'number') {
          updateStreak?.(res.streak);
        }
        // Seamlessly return to curriculum preserving course and module context
        setTimeout(() => {
          handleBackToCurriculum();
        }, 600);
      }
    } catch (err) {
      console.error('Failed to complete topic:', err);
    } finally {
      setActionLoading(false);
    }
  };

  if (!result) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center space-y-4">
        <h2 className="text-xl font-bold text-[#1E1B4B] dark:text-white">Topic not found</h2>
        <Button variant="outline" onClick={handleBack}>
          Back to Courses
        </Button>
      </div>
    );
  }

  const { level, module, topic } = result;

  // Requirement 7 & 9: Locked barrier for visitors
  if (!user || user.isGuest) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6 select-none">
        <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center mx-auto shadow-lg">
          <Lock className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/40 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-500/30">
            Protected Course Material
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#1E1B4B] dark:text-white tracking-tight">
            🔒 Register to start learning: {topic.title}
          </h1>
          <p className="text-sm text-[#64748B] dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
            Full conceptual explanations, runnable code examples, practice challenges, and AI mentor guidance require a free learner account.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            variant="primary"
            onClick={handleAuthRedirect}
            className="font-bold px-8 shadow-xl"
          >
            Register / Login
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleBackToCurriculum}
          >
            Back to Curriculum Overview
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 py-4 space-y-6 select-none">
      {/* ---------- Breadcrumbs & Actions ---------- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <nav className="flex items-center gap-1.5 text-xs text-[#64748B] dark:text-slate-400 flex-wrap font-medium">
          <button
            onClick={handleBack}
            className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            Courses
          </button>
          <ChevronRight className="w-3 h-3 text-[#D8D1EE] dark:text-slate-600" />
          <button
            onClick={handleBackToCurriculum}
            className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer uppercase"
          >
            {curriculum?.name || effectiveLangSlug}
          </button>
          <ChevronRight className="w-3 h-3 text-[#D8D1EE] dark:text-slate-600" />
          <span className="text-[#1E1B4B] dark:text-white font-bold truncate max-w-[200px]">
            {topic.title}
          </span>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={handleMarkComplete}
            disabled={actionLoading || isCompleted}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
              isCompleted
                ? 'bg-emerald-600 text-white cursor-default'
                : 'bg-white dark:bg-[#10152E] hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-white/10 cursor-pointer'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Completed ✓</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-slate-400" />
                <span>Mark as Completed (+1 XP)</span>
              </>
            )}
          </button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => handlePracticeTopic(topic)}
            leftIcon={<Dumbbell className="w-3.5 h-3.5" />}
            className="text-xs font-bold"
          >
            Practice Topic Challenges
          </Button>
        </div>
      </div>

      {/* ---------- Back to curriculum link ---------- */}
      <button
        onClick={handleBackToCurriculum}
        className="flex items-center gap-2 text-xs font-bold text-[#64748B] dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to {curriculum?.name} Curriculum
      </button>

      {/* ---------- The full topic renderer ---------- */}
      <TopicViewer
        topic={topic}
        language={effectiveLangSlug}
        isCompleted={isCompleted}
        onToggleComplete={isCompleted ? undefined : handleMarkComplete}
        completionLoading={actionLoading}
        onStartPractice={() => handlePracticeTopic(topic)}
      />

      {/* ---------- Bottom navigation ---------- */}
      <div className="pt-6 border-t border-[#D8D1EE] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <Button
          variant="outline"
          size="md"
          onClick={handleBackToCurriculum}
          leftIcon={<ArrowLeft className="w-4 h-4" />}
        >
          Back to Curriculum
        </Button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleMarkComplete}
            disabled={actionLoading || isCompleted}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
              isCompleted
                ? 'bg-emerald-600 text-white cursor-default'
                : 'bg-white dark:bg-[#10152E] hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-white/10 cursor-pointer'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Completed ✓</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-slate-400" />
                <span>Mark as Completed (+1 XP)</span>
              </>
            )}
          </button>

          <Button
            variant="primary"
            size="md"
            onClick={() => handlePracticeTopic(topic)}
            leftIcon={<Terminal className="w-4 h-4" />}
            className="font-bold"
          >
            Start Topic Practice
          </Button>
        </div>
      </div>

      {/* Floating XP & Completion Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-emerald-600 text-white shadow-2xl shadow-emerald-900/40 border border-emerald-400/40 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="p-1 rounded-full bg-white/20">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-black">{toastMessage.text}</p>
            <p className="text-[11px] text-emerald-100 font-medium">Topic marked as completed</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicDetail;
