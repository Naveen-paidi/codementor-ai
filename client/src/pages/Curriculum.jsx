/**
 * Curriculum / Course Details Page — displays course overview, curriculum preview for visitors,
 * and full unlocked curriculum for enrolled authenticated learners.
 * Location: client/src/pages/Curriculum.jsx
 */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  Layers,
  Target,
  TrendingUp,
  Search,
  Lock,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight,
  ShieldCheck,
  Play
} from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';
import { useLearning } from '../context/LearningContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { api } from '../services/api.js';
import {
  getCurriculum,
  getCurriculumStats,
} from '../curricula/index.js';
import ModuleAccordion from '../components/curriculum/ModuleAccordion.jsx';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';

export const Curriculum = ({
  languageSlug,
  onBack,
  onSelectTopic,
  onRequireAuth
}) => {
  const { user, updateXP, updateStreak } = useAuth();
  const { selectedLanguage, setSelectedLanguage } = useLearning();
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

  const langId = languageSlug || params?.languageSlug || selectedLanguage || 'python';
  const curriculum = getCurriculum(langId);
  const stats = getCurriculumStats(langId);

  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollment, setEnrollment] = useState(null);
  const [completedTopicIds, setCompletedTopicIds] = useState([]);
  const [loadingEnrollment, setLoadingEnrollment] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Sync context when opening via slug
  useEffect(() => {
    if (languageSlug && languageSlug !== selectedLanguage) {
      setSelectedLanguage(languageSlug);
    }
  }, [languageSlug, selectedLanguage, setSelectedLanguage]);

  // Load enrollment status and completed topics
  useEffect(() => {
    const fetchEnrollment = async () => {
      if (!user || user.isGuest) {
        setIsEnrolled(false);
        setEnrollment(null);
        setCompletedTopicIds([]);
        setLoadingEnrollment(false);
        return;
      }

      setLoadingEnrollment(true);
      try {
        const [enrollRes, completedRes, progressRes] = await Promise.all([
          api.getMyEnrollments().catch(() => ({ enrollments: [] })),
          api.getCourseCompletedTopics(langId).catch(() => ({ completedTopicIds: [] })),
          api.getProgress(langId).catch(() => ({ completedTopics: [] }))
        ]);

        const myEnr = (enrollRes?.enrollments || []).find(
          (e) => e.course_id?.toLowerCase() === langId.toLowerCase()
        );

        if (myEnr && (myEnr.status === 'active' || myEnr.status === 'completed')) {
          setIsEnrolled(true);
          setEnrollment(myEnr);
        } else {
          setIsEnrolled(false);
          setEnrollment(null);
        }

        const ids = new Set([
          ...(completedRes?.completedTopicIds || []),
          ...(myEnr?.completed_topic_ids || []),
          ...(progressRes?.completedTopics || [])
        ]);
        setCompletedTopicIds(Array.from(ids));
      } catch (err) {
        console.warn('Failed to load curriculum enrollment:', err);
      } finally {
        setLoadingEnrollment(false);
      }
    };

    fetchEnrollment();
  }, [user?.id, langId]);

  const handleCompleteTopic = async (topic, module) => {
    if (!user || user.isGuest) {
      if (onRequireAuth) {
        onRequireAuth(langId, topic.slug || topic.id);
      } else {
        navigate('/login', { state: { from: location } });
      }
      return;
    }

    const topicKey = topic.id || topic.slug;
    if (completedTopicIds.includes(topic.id) || (topic.slug && completedTopicIds.includes(topic.slug))) {
      return;
    }

    // Auto-enroll in course if not already enrolled
    if (!isEnrolled) {
      try {
        await api.enrollCourse(langId);
        setIsEnrolled(true);
      } catch (_) {}
    }

    // Optimistic UI update
    const newCompletedIds = [...completedTopicIds, topic.id, topic.slug].filter(Boolean);
    setCompletedTopicIds(newCompletedIds);
    setEnrollment(prev => {
      if (!prev) return prev;
      const newCount = (prev.completed_topics_count || 0) + 1;
      const total = prev.total_topics_count || stats.topics || 25;
      return {
        ...prev,
        completed_topics_count: newCount,
        progress_percentage: Math.min(100, Math.round((newCount / total) * 100))
      };
    });

    try {
      const res = await api.completeTopic(langId, topicKey, 'completed');
      if (res && res.success) {
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
        if (res.enrollment) {
          setEnrollment(res.enrollment);
        }
      }
    } catch (err) {
      console.error('Failed to complete topic:', err);
      setCompletedTopicIds(prev => prev.filter(id => id !== topic.id && id !== topic.slug));
    }
  };

  const handleEnrollNow = async () => {
    if (!user || user.isGuest) {
      if (onRequireAuth) onRequireAuth(langId);
      return;
    }

    setEnrolling(true);
    try {
      const res = await api.enrollCourse(langId);
      if (res.success) {
        setIsEnrolled(true);
        setEnrollment(res.enrollment);
      }
    } catch (err) {
      console.error('Failed to enroll:', err);
    } finally {
      setEnrolling(false);
    }
  };

  const handleBack = () => {
    if (onBack) return onBack();
    if (isRoleRoute) {
      navigate(`${rolePrefix}/courses`);
    } else {
      navigate('/courses');
    }
  };

  const handleTopicClick = (topic, module, level) => {
    if (!user || user.isGuest) {
      if (onRequireAuth) {
        onRequireAuth(langId, topic.slug || topic.id);
      } else {
        navigate('/login', { state: { from: location } });
      }
      return;
    }

    const proceed = () => {
      if (onSelectTopic) {
        onSelectTopic(topic, module, level);
      } else {
        navigate(`${basePath}/${langId}/topic/${topic.slug || topic.id}`);
      }
    };

    if (!isEnrolled) {
      handleEnrollNow().then(proceed);
      return;
    }

    proceed();
  };

  if (!curriculum) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center space-y-4">
        <p className="text-[#64748B] dark:text-slate-400 font-semibold">Course track not found.</p>
        <Button variant="outline" onClick={handleBack}>
          Back to Courses
        </Button>
      </div>
    );
  }

  const isGuest = !user || user.isGuest;
  const levelsToShow = selectedLevel === 'all'
    ? curriculum.levels
    : curriculum.levels.filter(l => String(l.level) === String(selectedLevel));

  const filterModules = (modules) => {
    if (!search.trim()) return modules;
    const q = search.toLowerCase();
    return modules
      .map(m => ({
        ...m,
        topics: (m.topics || []).filter(
          t => t.title?.toLowerCase().includes(q) || t.description?.toLowerCase().includes(q)
        )
      }))
      .filter(m => m.topics.length > 0);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8 select-none">
      {/* Back button */}
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-xs font-bold text-[#64748B] dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Course Catalogue
      </button>

      {/* ---------- Hero Overview Banner ---------- */}
      <div className={`relative overflow-hidden rounded-3xl text-white p-8 sm:p-10 shadow-xl transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-r from-[#030617] via-[#070B20] to-[#10152E] border border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.2)]'
          : 'bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 border border-indigo-400/30'
      }`}>
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-4xl p-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25">
                {curriculum.icon}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="purple" className="bg-white/20 text-white border-white/30">
                    {curriculum.version || 'Canonical Track'}
                  </Badge>
                  {isEnrolled && (
                    <Badge variant="emerald" className="bg-white/20 text-cyan-300 border-cyan-400/40">
                      ✓ Enrolled
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-1">
                  {curriculum.name}
                </h1>
              </div>
            </div>

            <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
              {curriculum.description}
            </p>

            {/* Quick Stats Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold flex items-center gap-2 text-white">
                <Layers className="w-3.5 h-3.5 text-cyan-300" />
                {stats.modules} Modules
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold flex items-center gap-2 text-white">
                <BookOpen className="w-3.5 h-3.5 text-cyan-300" />
                {stats.topics} Topics
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold flex items-center gap-2 text-white">
                <Clock className="w-3.5 h-3.5 text-cyan-300" />
                ~{Math.round((stats.topics * 15) / 60)} Hours Total
              </div>
            </div>

            {/* Enrolled Progress Bar */}
            {isEnrolled && enrollment && (
              <div className="pt-2 max-w-md">
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span>Track Completion</span>
                  <span className="text-cyan-300">{enrollment.progress_percentage || 0}%</span>
                </div>
                <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden border border-white/20">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                    style={{ width: `${enrollment.progress_percentage || 0}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Action Box */}
          <div className="shrink-0 p-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md max-w-xs w-full text-center space-y-3">
            {isGuest ? (
              <>
                <div className="w-10 h-10 rounded-2xl bg-white/20 text-white flex items-center justify-center mx-auto">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-white">Guest Preview Mode</h3>
                <p className="text-xs opacity-90 leading-relaxed">
                  Browse curriculum structure freely. Register or log in to unlock interactive lessons and practice problems.
                </p>
                <Button
                  size="md"
                  variant="primary"
                  onClick={() => onRequireAuth?.(langId)}
                  className="w-full font-bold bg-white hover:bg-slate-50 text-indigo-700 border-none shadow-lg"
                >
                  Register to Start
                </Button>
              </>
            ) : !isEnrolled ? (
              <>
                <div className="w-10 h-10 rounded-2xl bg-white/20 text-white flex items-center justify-center mx-auto">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-white">Enroll in Track</h3>
                <p className="text-xs opacity-90 leading-relaxed">
                  Add {curriculum.name} to your active learning dashboard and begin tracking completed topics.
                </p>
                <Button
                  size="md"
                  variant="primary"
                  isLoading={enrolling}
                  onClick={handleEnrollNow}
                  className="w-full font-bold bg-white hover:bg-slate-50 text-indigo-700 border-none shadow-lg"
                >
                  Register for Course
                </Button>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/25 text-cyan-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-white">Active Curriculum</h3>
                <p className="text-xs opacity-90 leading-relaxed">
                  You are actively enrolled. Pick any topic below to dive into lesson details and code challenges.
                </p>
                <span className="inline-block text-xs font-bold text-cyan-300">
                  {completedTopicIds.length} topics completed
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Guest Lock Banner Notice */}
      {isGuest && (
        <div className="p-5 rounded-3xl bg-amber-100/70 dark:bg-amber-950/40 border border-amber-300/80 dark:border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1E1B4B] dark:text-white">
                🔒 Register to start learning
              </h4>
              <p className="text-[11px] text-[#64748B] dark:text-slate-400 mt-0.5">
                Lesson materials, runnable code snippets, and practice challenges are locked for visitors.
              </p>
            </div>
          </div>
          <Button
            size="sm"
            variant="primary"
            onClick={() => onRequireAuth?.(langId)}
            className="font-bold shrink-0"
          >
            Register / Login
          </Button>
        </div>
      )}

      {/* ---------- Search & Level Filtering ---------- */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] dark:text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search topics in ${curriculum.name}...`}
            className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-xs sm:text-sm outline-none transition-all ${
              isDark
                ? 'bg-[#070B20] border-white/10 text-white placeholder-slate-400 focus:border-cyan-400'
                : 'bg-white border-[#D8D1EE] text-[#1E1B4B] placeholder-[#64748B]/60 focus:border-indigo-500 shadow-xs'
            }`}
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedLevel === 'all'
                ? isDark
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-indigo-600 text-white shadow-xs'
                : isDark
                  ? 'bg-[#070B20] text-slate-300 border border-white/10 hover:text-cyan-300'
                  : 'bg-white text-[#64748B] border border-[#D8D1EE] hover:text-[#1E1B4B]'
            }`}
          >
            All Levels
          </button>
          {curriculum.levels.map((lvl) => (
            <button
              key={lvl.level}
              onClick={() => setSelectedLevel(lvl.level)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                String(selectedLevel) === String(lvl.level)
                  ? isDark
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-indigo-600 text-white shadow-xs'
                  : isDark
                    ? 'bg-[#070B20] text-slate-300 border border-white/10 hover:text-cyan-300'
                    : 'bg-white text-[#64748B] border border-[#D8D1EE] hover:text-[#1E1B4B]'
              }`}
            >
              <Target className="w-3 h-3" />
              Level {lvl.level}
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Levels & Modules List ---------- */}
      <div className="space-y-8">
        {levelsToShow.map((level) => {
          const filteredModules = filterModules(level.modules || []);
          if (filteredModules.length === 0 && search) return null;

          return (
            <section key={level.id} className="space-y-4">
              {/* Level Header */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-indigo-600 text-white shadow-xs shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="purple">Level {level.level}</Badge>
                    <Badge variant={level.difficulty === 'advanced' ? 'hard' : level.difficulty === 'intermediate' ? 'medium' : 'easy'}>
                      {level.difficulty}
                    </Badge>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1E1B4B] dark:text-white">
                    {level.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 mt-1">
                    {level.description}
                  </p>
                </div>
              </div>

              {/* Module Accordions */}
              <div className="space-y-3">
                {filteredModules.map((module) => (
                  <ModuleAccordion
                    key={module.id}
                    module={module}
                    language={langId}
                    completedTopics={completedTopicIds}
                    defaultOpen={level.level === 1}
                    onSelectTopic={(topic) => handleTopicClick(topic, module, level)}
                    onCompleteTopic={handleCompleteTopic}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Floating XP & Completion Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-emerald-600 text-white shadow-2xl shadow-emerald-900/40 border border-emerald-400/40 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="p-1 rounded-full bg-white/20">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-black">{toastMessage.text}</p>
            <p className="text-[11px] text-emerald-100 font-medium">Permanent progress recorded</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Curriculum;
