import React, { useEffect, useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { useLearning } from '../context/LearningContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { api } from '../services/api.js';
import CodeEditor from '../components/CodeEditor.jsx';
import TestResults from '../components/TestResults.jsx';
import AIFeedback from '../components/AIFeedback.jsx';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import {
  Sparkles, Terminal, Play, Send, ChevronDown, ChevronUp, Lightbulb,
  CheckCircle2, AlertTriangle, Code, ArrowLeft, RotateCcw, Zap, Check, X,
  EyeOff, FileText, CheckCircle, Search, Filter, BookOpen, ChevronRight,
  Trophy, Award, RefreshCw
} from 'lucide-react';

const LANGUAGE_CONFIG = {
  python: { name: 'Python', icon: '🐍', color: 'from-[#064E52] to-[#0F766E]', activeBg: 'bg-[#0F766E]' },
  java: { name: 'Java', icon: '☕', color: 'from-[#0F766E] to-[#10B981]', activeBg: 'bg-[#0F766E]' },
  javascript: { name: 'JavaScript', icon: '⚡', color: 'from-[#10B981] to-[#34D399]', activeBg: 'bg-[#0F766E]' },
  c: { name: 'C', icon: '⚙️', color: 'from-[#064E52] to-[#3B82F6]', activeBg: 'bg-[#0F766E]' },
  cpp: { name: 'C++', icon: '🚀', color: 'from-[#043639] to-[#0F766E]', activeBg: 'bg-[#0F766E]' }
};

export const Practice = ({ initialTopic, onBackToCurriculum }) => {
  const { selectedLanguage, setSelectedLanguage, updateChatContext } = useLearning();
  const { user, addXP, updateXP, updateStreak } = useAuth();

  // Navigation & Catalog State
  const [viewMode, setViewMode] = useState('catalog'); // 'catalog' | 'workspace'
  const [hierarchy, setHierarchy] = useState(null);
  const [loadingHierarchy, setLoadingHierarchy] = useState(true);
  const [hierarchyError, setHierarchyError] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('all'); // 'all' | 'beginner' | 'intermediate' | 'advanced'
  const [searchQuery, setSearchQuery] = useState('');

  // Solved tracking scoped strictly per user (isolated per account)
  const storageKey = `codementor_solved_problems_${user?.id || 'guest'}`;
  const [solvedIds, setSolvedIds] = useState(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      setSolvedIds(stored ? new Set(JSON.parse(stored)) : new Set());
    } catch {
      setSolvedIds(new Set());
    }
  }, [user?.id, storageKey]);

  const markProblemSolved = (id) => {
    setSolvedIds(prev => {
      const next = new Set(prev);
      next.add(id);
      try {
        localStorage.setItem(storageKey, JSON.stringify([...next]));
      } catch {}
      return next;
    });
  };

  // Workspace Problem State
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [code, setCode] = useState('');

  // Execution states
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [runResults, setRunResults] = useState(null);
  const [submissionResults, setSubmissionResults] = useState(null);
  const [activeTab, setActiveTab] = useState('samples'); // 'samples' | 'run' | 'submit' | 'ai'

  // AI & Hints
  const [aiFeedback, setAiFeedback] = useState(null);
  const [attemptCount, setAttemptCount] = useState(1);
  const [showHints, setShowHints] = useState(false);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);

  // Fetch complete practice hierarchy for selected language
  const loadHierarchy = async () => {
    setLoadingHierarchy(true);
    setHierarchyError(null);
    try {
      const res = await api.getPracticeHierarchy(selectedLanguage);
      if (res && res.success && Array.isArray(res.levels)) {
        setHierarchy(res);
        setHierarchyError(null);

        // If coming from curriculum with initialTopic, automatically open its first problem
        if (initialTopic) {
          let foundProblem = null;
          let foundTopicMeta = null;
          for (const lvl of res.levels || []) {
            const matchedTopic = lvl.topics.find(t => t.id === initialTopic.id);
            if (matchedTopic && matchedTopic.problems.length > 0) {
              foundProblem = matchedTopic.problems[0];
              foundTopicMeta = matchedTopic;
              break;
            }
          }
          if (foundProblem) {
            handleOpenProblem(foundProblem, foundTopicMeta);
          }
        }
      } else {
        setHierarchy(null);
        setHierarchyError(res?.error || `No practice problems available for ${LANGUAGE_CONFIG[selectedLanguage]?.name || selectedLanguage}.`);
      }
    } catch (err) {
      console.error('Failed to load practice hierarchy:', err);
      setHierarchy(null);
      setHierarchyError(err.message || 'Unable to load practice problems. Please check your network connection.');
    } finally {
      setLoadingHierarchy(false);
    }
  };

  useEffect(() => {
    loadHierarchy();
  }, [selectedLanguage, initialTopic?.id]);

  // Open problem in workspace
  const handleOpenProblem = (problem, topicMeta = null) => {
    setCurrentQuestion(problem);
    if (topicMeta) setCurrentTopic(topicMeta);
    else if (hierarchy) {
      for (const lvl of hierarchy.levels || []) {
        const found = lvl.topics.find(t => t.id === problem.topicId);
        if (found) {
          setCurrentTopic(found);
          break;
        }
      }
    }

    const starter = problem.starterCodes?.[selectedLanguage] || problem.starterCode || '';
    setCode(starter);
    setRunResults(null);
    setSubmissionResults(null);
    setAiFeedback(null);
    setAttemptCount(1);
    setActiveTab('samples');
    setViewMode('workspace');
  };

  const handleLanguageChange = (newLang) => {
    setSelectedLanguage(newLang);
    setViewMode('catalog');
    setCurrentQuestion(null);
    setCurrentTopic(null);
  };

  const handleResetCode = () => {
    if (!currentQuestion) return;
    const starter = currentQuestion.starterCodes?.[selectedLanguage] || currentQuestion.starterCode || '';
    setCode(starter);
  };

  // Run ONLY the 3 sample test cases
  const handleRun = async () => {
    if (!currentQuestion) return;
    setIsRunning(true);
    setRunResults(null);
    setActiveTab('run');

    try {
      const res = await api.runSampleTests(
        currentQuestion.id,
        selectedLanguage,
        code
      );
      setRunResults(res);

      updateChatContext({
        language: selectedLanguage,
        topicTitle: currentQuestion.title,
        currentCode: code,
        currentError: res.testResults?.find(t => !t.passed)?.error || ''
      });
    } catch (err) {
      setRunResults({
        success: false,
        allPassed: false,
        error: err.message,
        testResults: []
      });
    } finally {
      setIsRunning(false);
    }
  };

  // Submit Code across ALL 10 test cases (3 visible + 7 hidden)
  const handleSubmit = async () => {
    if (!currentQuestion) return;
    setIsSubmitting(true);
    setSubmissionResults(null);
    setAiFeedback(null);
    setActiveTab('submit');

    try {
      const res = await api.submitSolution(
        currentQuestion.id,
        selectedLanguage,
        code,
        attemptCount
      );

      setSubmissionResults(res);

      if (res.allPassed) {
        markProblemSolved(currentQuestion.id);
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch {}

        if (typeof res.currentXP === 'number') {
          updateXP?.(res.currentXP);
        } else {
          addXP?.(res.xpGained || 25);
        }

        if (typeof res.streak === 'number' || typeof res.streakDays === 'number') {
          updateStreak?.(res.streak ?? res.streakDays);
        }
      } else {
        setAttemptCount(prev => prev + 1);
        if (res.aiFeedback) {
          setAiFeedback(res.aiFeedback);
          setActiveTab('ai');
        }
      }

      updateChatContext({
        language: selectedLanguage,
        topicTitle: currentQuestion.title,
        currentCode: code,
        currentError: res.aiFeedback?.summary || ''
      });
    } catch (err) {
      alert(`Submission error: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Request on-demand AI Code Review
  const handleRequestReview = async () => {
    if (!code || !code.trim()) {
      alert('Please write some code before requesting an AI review.');
      return;
    }
    setIsReviewing(true);
    try {
      const res = await api.requestCodeReview({
        language: selectedLanguage,
        topic: currentTopic?.title || currentQuestion?.title,
        code,
        problemTitle: currentQuestion?.title,
        problemStatement: currentQuestion?.problemStatement || currentQuestion?.description,
        attemptNumber: attemptCount,
        allPassed: submissionResults?.allPassed || false
      });

      if (res && res.feedback) {
        setAiFeedback(res.feedback);
        setActiveTab('ai');
      } else if (res && res.error) {
        alert(`Review error: ${res.error}`);
      }
    } catch (err) {
      alert(`Review request failed: ${err.message}`);
    } finally {
      setIsReviewing(false);
    }
  };

  // Generate dynamic AI challenge
  const handleGenerateAIQuestion = async () => {
    setIsGeneratingAI(true);
    try {
      const res = await api.generateAIQuestion({
        language: selectedLanguage,
        topicTitle: currentTopic?.title || currentQuestion?.title || 'Programming Challenge',
        topicId: currentTopic?.id || currentQuestion?.topicId || '',
        difficulty: currentQuestion?.difficulty || 'medium',
        studentLevel: 'intermediate'
      });

      if (res.success && res.question) {
        handleOpenProblem(res.question, currentTopic);
      } else {
        alert(`AI Challenge generation failed: ${res.error || 'Unknown error'}`);
      }
    } catch (err) {
      alert(`AI Challenge generation failed: ${err.message}`);
    } finally {
      setIsGeneratingAI(false);
    }
  };

  // Navigate to previous / next problem in the current topic
  const handleNavigateTopicProblem = (direction) => {
    if (!currentTopic || !currentQuestion) return;
    const problems = currentTopic.problems || [];
    const currentIndex = problems.findIndex(p => p.id === currentQuestion.id);
    if (currentIndex === -1) return;

    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < problems.length) {
      handleOpenProblem(problems[nextIndex], currentTopic);
    }
  };

  // Filtered hierarchy topics for catalog view
  const filteredLevels = useMemo(() => {
    if (!hierarchy?.levels) return [];

    return hierarchy.levels.map(lvl => {
      if (selectedLevel !== 'all' && lvl.level.toLowerCase() !== selectedLevel.toLowerCase()) {
        return null;
      }

      const matchingTopics = lvl.topics.filter(t => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        const matchesTopic = t.title.toLowerCase().includes(query) || t.id.toLowerCase().includes(query);
        const matchesProblem = t.problems.some(p => p.title.toLowerCase().includes(query));
        return matchesTopic || matchesProblem;
      });

      if (matchingTopics.length === 0) return null;

      return {
        ...lvl,
        topics: matchingTopics
      };
    }).filter(Boolean);
  }, [hierarchy, selectedLevel, searchQuery]);

  // Overall catalog stats
  const totalCatalogProblems = hierarchy?.totalProblems || 0;
  const solvedCatalogCount = useMemo(() => {
    if (!hierarchy?.levels) return 0;
    let count = 0;
    for (const lvl of hierarchy.levels) {
      for (const t of lvl.topics) {
        for (const p of t.problems) {
          if (solvedIds.has(p.id)) count++;
        }
      }
    }
    return count;
  }, [hierarchy, solvedIds]);

  const solvedPercentage = totalCatalogProblems > 0
    ? Math.round((solvedCatalogCount / totalCatalogProblems) * 100)
    : 0;

  // --------------------------------------------------------------------------
  // 1. CATALOG / DASHBOARD VIEW
  // --------------------------------------------------------------------------
  if (viewMode === 'catalog') {
    return (
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 py-6 space-y-6">
        {/* Top Header & Language Selector Tabs */}
        <div className="bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 rounded-2xl p-5 shadow-xs dark:shadow-[0_0_25px_rgba(34,211,238,0.05)] space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E] dark:text-cyan-400 bg-[#ECFDF5] dark:bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-[#A7F3D0] dark:border-cyan-500/30">
                  Comprehensive Curriculum Practice
                </span>
                {onBackToCurriculum && (
                  <button
                    onClick={onBackToCurriculum}
                    className="text-xs text-[#64748B] dark:text-slate-400 hover:text-[#0F766E] dark:hover:text-cyan-400 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Courses
                  </button>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172B3A] dark:text-white tracking-tight">
                Coding Practice Bank
              </h1>
              <p className="text-sm text-[#64748B] dark:text-slate-400 mt-1">
                Every topic features 2–5 canonical coding problems. Run 3 sample cases or submit against all 10 test cases.
              </p>
            </div>

            {/* Language Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5FAFA] dark:bg-[#030617]/80 rounded-xl border border-[#DCE8E8] dark:border-white/10">
              {Object.entries(LANGUAGE_CONFIG).map(([langKey, cfg]) => {
                const isActive = selectedLanguage === langKey;
                return (
                  <button
                    key={langKey}
                    onClick={() => handleLanguageChange(langKey)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white dark:bg-[#10152E] text-[#0F766E] dark:text-cyan-400 shadow-xs border border-[#0F766E]/30 dark:border-cyan-500/40 font-bold'
                        : 'text-[#64748B] dark:text-slate-400 hover:text-[#172B3A] dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{cfg.icon}</span>
                    <span>{cfg.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Progress & Stat Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2 border-t border-[#DCE8E8]/60 dark:border-white/10 text-xs">
            <div className="bg-[#F5FAFA] dark:bg-[#030617]/50 border border-[#DCE8E8] dark:border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#ECFDF5] dark:bg-cyan-500/10 text-[#0F766E] dark:text-cyan-400 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#64748B] dark:text-slate-400 block">Total Topics</span>
                <span className="text-base font-extrabold text-[#172B3A] dark:text-white">{hierarchy?.totalTopics || 0} Topics</span>
              </div>
            </div>

            <div className="bg-[#F5FAFA] dark:bg-[#030617]/50 border border-[#DCE8E8] dark:border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#ECFDF5] dark:bg-emerald-500/10 text-[#10B981] dark:text-emerald-400 flex items-center justify-center font-bold">
                <Code className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#64748B] dark:text-slate-400 block">Total Coding Problems</span>
                <span className="text-base font-extrabold text-[#172B3A] dark:text-white">{totalCatalogProblems} Problems</span>
              </div>
            </div>

            <div className="bg-[#F5FAFA] dark:bg-[#030617]/50 border border-[#DCE8E8] dark:border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-[#3B82F6] dark:text-blue-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#64748B] dark:text-slate-400 block">Completion Status</span>
                <span className="text-base font-extrabold text-[#10B981] dark:text-emerald-400">
                  {solvedCatalogCount} / {totalCatalogProblems} ({solvedPercentage}%)
                </span>
              </div>
            </div>

            <div className="bg-[#F5FAFA] dark:bg-[#030617]/50 border border-[#DCE8E8] dark:border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#64748B] dark:text-slate-400 block">Earnable XP</span>
                <span className="text-base font-extrabold text-amber-700 dark:text-amber-400">+{totalCatalogProblems * 25} XP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls: Level & Search */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-[#070B20]/90 p-3 rounded-2xl border border-[#DCE8E8] dark:border-white/10 shadow-2xs">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {['all', 'beginner', 'intermediate', 'advanced'].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-[#0F766E] dark:bg-cyan-500 text-white dark:text-black font-bold shadow-2xs'
                    : 'bg-[#F5FAFA] dark:bg-[#030617]/60 text-[#64748B] dark:text-slate-400 hover:text-[#172B3A] dark:hover:text-white hover:bg-[#ECFDF5] dark:hover:bg-white/5'
                }`}
              >
                {lvl === 'all' ? 'All Levels' : lvl}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px] sm:min-w-[300px]">
            <Search className="w-4 h-4 text-[#64748B] dark:text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topic or challenge..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-[#DCE8E8] dark:border-white/10 focus:outline-none focus:border-[#0F766E] dark:focus:border-cyan-400 bg-[#F5FAFA] dark:bg-[#030617] text-[#172B3A] dark:text-white placeholder-[#64748B] dark:placeholder-slate-500"
            />
          </div>
        </div>

        {/* 1. LOADING STATE (Skeleton UI) */}
        {loadingHierarchy ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
              <div className="w-48 h-6 skeleton rounded-lg" />
              <div className="w-28 h-4 skeleton rounded" />
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 space-y-4">
              <div className="w-64 h-5 skeleton rounded-md" />
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex justify-between">
                      <div className="w-16 h-4 skeleton rounded-md" />
                      <div className="w-12 h-4 skeleton rounded-md" />
                    </div>
                    <div className="w-3/4 h-4 skeleton rounded" />
                    <div className="w-full h-8 skeleton rounded" />
                    <div className="w-full h-8 skeleton rounded-lg mt-2" />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 space-y-4">
              <div className="w-56 h-5 skeleton rounded-md" />
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex justify-between">
                      <div className="w-16 h-4 skeleton rounded-md" />
                      <div className="w-12 h-4 skeleton rounded-md" />
                    </div>
                    <div className="w-3/4 h-4 skeleton rounded" />
                    <div className="w-full h-8 skeleton rounded" />
                    <div className="w-full h-8 skeleton rounded-lg mt-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : hierarchyError ? (
          /* 2. ERROR STATE (Unable to load practice problems + Retry) */
          <div className="py-14 text-center bg-white rounded-3xl border border-rose-200 p-8 sm:p-10 space-y-5 max-w-2xl mx-auto shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-100 shadow-inner">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Unable to load practice problems
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                {hierarchyError || 'Something went wrong while loading the practice data.'}
              </p>
            </div>
            <div className="pt-2 flex justify-center gap-3">
              <Button
                variant="primary"
                onClick={loadHierarchy}
                leftIcon={<RefreshCw className="w-4 h-4" />}
                className="bg-blue-600 hover:bg-blue-700 px-6 font-bold"
              >
                Retry
              </Button>
            </div>
          </div>
        ) : (hierarchy?.totalProblems === 0 || !hierarchy?.levels || hierarchy.levels.length === 0) ? (
          /* 3. EMPTY STATE (No practice problems for this language) */
          <div className="py-14 text-center bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-5 max-w-2xl mx-auto shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center mx-auto border border-slate-200">
              <BookOpen className="w-7 h-7" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                No practice problems available for this language yet.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                Coding problems for {LANGUAGE_CONFIG[selectedLanguage]?.name || selectedLanguage} are currently being added. Try switching to Python, Java, or JavaScript.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              {['python', 'javascript', 'java'].map(lang => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 capitalize cursor-pointer transition-colors"
                >
                  {LANGUAGE_CONFIG[lang]?.icon} Switch to {LANGUAGE_CONFIG[lang]?.name}
                </button>
              ))}
            </div>
          </div>
        ) : filteredLevels.length === 0 ? (
          /* 3b. FILTERED EMPTY STATE (Search query returned no matches) */
          <div className="py-14 text-center bg-white rounded-3xl border border-slate-200 p-8 space-y-4 max-w-md mx-auto">
            <Search className="w-8 h-8 mx-auto text-slate-300" />
            <div className="space-y-1">
              <div className="font-bold text-slate-900 text-base">No matching topics found</div>
              <div className="text-xs text-slate-500">
                No challenges matched "{searchQuery}". Try clearing your search query or changing level filters.
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          /* 4. SUCCESS STATE (Actual problems list) */
          <div className="space-y-8">
            {filteredLevels.map((lvl) => {
              const lvlSolvedCount = lvl.topics.reduce((acc, t) => {
                return acc + t.problems.filter(p => solvedIds.has(p.id)).length;
              }, 0);
              const lvlTotalCount = lvl.topics.reduce((acc, t) => acc + t.problemCount, 0);

              return (
                <div key={lvl.id} className="space-y-4">
                  {/* Level Header */}
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {lvl.title}
                      </h2>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 capitalize">
                        {lvl.level}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Progress: <span className="text-emerald-600 dark:text-emerald-400 font-bold">{lvlSolvedCount}</span> / {lvlTotalCount} Solved
                    </div>
                  </div>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-1 gap-5">
                    {lvl.topics.map((topic) => {
                      const topicSolvedCount = topic.problems.filter(p => solvedIds.has(p.id)).length;
                      const isTopicComplete = topicSolvedCount === topic.problemCount && topic.problemCount > 0;

                      return (
                        <div
                          key={topic.id}
                          className="bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-shadow space-y-4"
                        >
                          {/* Topic Heading Bar */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#DCE8E8]/60 dark:border-white/10 pb-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-base sm:text-lg font-bold text-[#172B3A] dark:text-white tracking-tight">
                                  {topic.title}
                                </h3>
                                {isTopicComplete && (
                                  <span className="flex items-center gap-1 text-[11px] font-bold text-[#10B981] dark:text-emerald-400 bg-[#ECFDF5] dark:bg-emerald-500/10 px-2 py-0.5 rounded-md border border-[#A7F3D0] dark:border-emerald-500/30">
                                    <CheckCircle className="w-3.5 h-3.5" /> Topic Mastered
                                  </span>
                                )}
                              </div>
                              {topic.description && (
                                <p className="text-xs text-[#64748B] dark:text-slate-400 mt-0.5 line-clamp-1">
                                  {topic.description}
                                </p>
                              )}
                            </div>

                            {/* Topic Progress Counter */}
                            <div className="flex items-center gap-2 text-xs self-start sm:self-auto">
                              <span className="text-[#64748B] dark:text-slate-400 font-medium">
                                {topic.problemCount} {topic.problemCount === 1 ? 'Problem' : 'Problems'}
                              </span>
                              <span className="text-slate-300 dark:text-slate-600">•</span>
                              <span className={`font-bold ${topicSolvedCount > 0 ? 'text-[#10B981] dark:text-emerald-400' : 'text-[#64748B] dark:text-slate-400'}`}>
                                {topicSolvedCount} / {topic.problemCount} Completed
                              </span>
                            </div>
                          </div>

                          {/* Problem Cards List */}
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                            {topic.problems.map((p, idx) => {
                              const isSolved = solvedIds.has(p.id);

                              return (
                                <div
                                  key={p.id}
                                  className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between gap-3 text-xs ${
                                    isSolved
                                      ? 'bg-[#ECFDF5]/50 dark:bg-emerald-950/20 border-[#A7F3D0] dark:border-emerald-500/30 hover:border-[#10B981] dark:hover:border-emerald-400'
                                      : 'bg-[#F5FAFA] dark:bg-[#030617]/70 border-[#DCE8E8] dark:border-white/10 hover:border-[#0F766E]/40 dark:hover:border-cyan-500/40 hover:bg-[#ECFDF5]/20 dark:hover:bg-cyan-950/20'
                                  }`}
                                >
                                  <div className="space-y-1.5">
                                    <div className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-1.5">
                                        <Badge variant={p.difficulty || 'easy'}>
                                          {p.difficulty}
                                        </Badge>
                                        <span className="text-[10px] font-mono text-[#64748B] dark:text-slate-400">
                                          #{idx + 1}
                                        </span>
                                      </div>

                                      {isSolved ? (
                                        <span className="flex items-center gap-1 text-[11px] font-bold text-[#065F46] dark:text-emerald-400 bg-[#ECFDF5] dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-[#A7F3D0] dark:border-emerald-500/30">
                                          <Check className="w-3 h-3 stroke-[3]" /> Solved
                                        </span>
                                      ) : (
                                        <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1 bg-amber-50 dark:bg-amber-500/10 px-2 py-0.5 rounded border border-amber-100 dark:border-amber-500/20">
                                          <Zap className="w-3 h-3 fill-amber-500" /> +25 XP
                                        </span>
                                      )}
                                    </div>

                                    <h4 className="font-bold text-[#172B3A] dark:text-white text-sm line-clamp-1">
                                      {p.title}
                                    </h4>

                                    <p className="text-[11px] text-[#64748B] dark:text-slate-400 line-clamp-2 leading-relaxed">
                                      {p.problemStatement || p.description}
                                    </p>
                                  </div>

                                  <div className="pt-2 border-t border-[#DCE8E8]/60 dark:border-white/10 flex items-center justify-between">
                                    <span className="text-[10px] text-[#64748B] dark:text-slate-400 font-mono">
                                      10 Test Cases
                                    </span>

                                    <Button
                                      size="sm"
                                      variant={isSolved ? 'outline' : 'primary'}
                                      onClick={() => handleOpenProblem(p, topic)}
                                      rightIcon={<ChevronRight className="w-3.5 h-3.5" />}
                                      className={`text-xs font-bold py-1 px-3 ${
                                        isSolved
                                          ? 'border-[#A7F3D0] dark:border-emerald-500/30 text-[#0F766E] dark:text-emerald-400 hover:bg-[#ECFDF5] dark:hover:bg-emerald-500/10'
                                          : 'bg-[#10B981] hover:bg-[#059669] text-white shadow-xs'
                                      }`}
                                    >
                                      {isSolved ? 'Review Code' : 'Solve Challenge'}
                                    </Button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 2. QUESTION WORKSPACE LAYOUT (Two-Column Competitive Editor)
  // --------------------------------------------------------------------------
  const sampleTestCases = currentQuestion?.sampleTestCases || [
    {
      id: 'tc-1',
      input: currentQuestion?.sampleInput || currentQuestion?.examples?.[0]?.input || '',
      expectedOutput: currentQuestion?.sampleOutput || currentQuestion?.examples?.[0]?.output || ''
    }
  ];

  const isCurrentSolved = currentQuestion ? solvedIds.has(currentQuestion.id) : false;

  return (
    <div className="max-w-[1600px] mx-auto px-2 sm:px-4 py-3 space-y-4">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-[#070B20]/90 p-3 rounded-2xl border border-[#DCE8E8] dark:border-white/10 shadow-xs">
        <div className="flex flex-wrap items-center gap-2.5">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setViewMode('catalog')}
            leftIcon={<ArrowLeft className="w-4 h-4" />}
            className="text-xs font-semibold text-[#172B3A] dark:text-white border-[#DCE8E8] dark:border-white/10 hover:bg-[#F5FAFA] dark:hover:bg-white/5"
          >
            Practice Catalog
          </Button>

          {/* Breadcrumbs */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-[#64748B] dark:text-slate-400 font-medium bg-[#F5FAFA] dark:bg-[#030617]/80 px-3 py-1.5 rounded-xl border border-[#DCE8E8] dark:border-white/10">
            <span className="capitalize font-bold text-[#0F766E] dark:text-cyan-400">{selectedLanguage}</span>
            <span>/</span>
            <span className="capitalize text-[#172B3A] dark:text-slate-200">{currentQuestion?.level || 'Beginner'}</span>
            <span>/</span>
            <span className="text-[#172B3A] dark:text-white font-semibold truncate max-w-[200px]">
              {currentTopic?.title || currentQuestion?.topicId}
            </span>
          </div>

          {/* Problem Selector Dropdown */}
          {currentTopic?.problems && currentTopic.problems.length > 0 && (
            <select
              value={currentQuestion?.id || ''}
              onChange={(e) => {
                const selected = currentTopic.problems.find(q => q.id === e.target.value);
                if (selected) handleOpenProblem(selected, currentTopic);
              }}
              className="bg-[#F5FAFA] dark:bg-[#030617] border border-[#DCE8E8] dark:border-white/10 text-xs font-semibold text-[#172B3A] dark:text-white rounded-xl px-3 py-2 focus:outline-none focus:border-[#0F766E] dark:focus:border-cyan-400 cursor-pointer max-w-[280px] sm:max-w-md truncate"
            >
              {currentTopic.problems.map((q, idx) => (
                <option key={q.id} value={q.id} className="bg-white dark:bg-[#070B20] text-[#172B3A] dark:text-white">
                  {idx + 1}. {q.title} ({q.difficulty}) {solvedIds.has(q.id) ? '✓' : ''}
                </option>
              ))}
            </select>
          )}

          {/* Language Switcher */}
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-[#ECFDF5] dark:bg-cyan-500/10 border border-[#A7F3D0] dark:border-cyan-500/30 text-xs font-bold text-[#0F766E] dark:text-cyan-400 rounded-xl px-3 py-2 uppercase focus:outline-none cursor-pointer"
          >
            <option value="python" className="bg-white dark:bg-[#070B20] text-[#172B3A] dark:text-white">Python</option>
            <option value="java" className="bg-white dark:bg-[#070B20] text-[#172B3A] dark:text-white">Java</option>
            <option value="javascript" className="bg-white dark:bg-[#070B20] text-[#172B3A] dark:text-white">JavaScript</option>
            <option value="c" className="bg-white dark:bg-[#070B20] text-[#172B3A] dark:text-white">C</option>
            <option value="cpp" className="bg-white dark:bg-[#070B20] text-[#172B3A] dark:text-white">C++</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          {/* Prev / Next navigation inside topic */}
          {currentTopic?.problems && (
            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleNavigateTopicProblem(-1)}
                className="text-xs px-2.5 py-1 text-[#64748B] dark:text-slate-400 border-[#DCE8E8] dark:border-white/10 hover:bg-[#F5FAFA] dark:hover:bg-white/5"
                title="Previous problem in this topic"
              >
                &larr; Prev
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleNavigateTopicProblem(1)}
                className="text-xs px-2.5 py-1 text-[#64748B] dark:text-slate-400 border-[#DCE8E8] dark:border-white/10 hover:bg-[#F5FAFA] dark:hover:bg-white/5"
                title="Next problem in this topic"
              >
                Next &rarr;
              </Button>
            </div>
          )}

          <Button
            size="sm"
            variant="outline"
            onClick={handleResetCode}
            leftIcon={<RotateCcw className="w-3.5 h-3.5 text-[#64748B] dark:text-slate-400" />}
            className="text-xs text-[#64748B] dark:text-slate-400 border-[#DCE8E8] dark:border-white/10 hover:text-[#172B3A] dark:hover:text-white hover:bg-[#F5FAFA] dark:hover:bg-white/5"
          >
            Reset Starter
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={handleGenerateAIQuestion}
            isLoading={isGeneratingAI}
            leftIcon={<Sparkles className="w-3.5 h-3.5 text-[#0F766E] dark:text-cyan-400" />}
            className="border-[#A7F3D0] dark:border-cyan-500/30 text-[#0F766E] dark:text-cyan-400 bg-[#ECFDF5] dark:bg-cyan-500/10 hover:bg-[#D1FAE5] dark:hover:bg-cyan-500/20 text-xs font-semibold"
          >
            AI Challenge
          </Button>
        </div>
      </div>

      {/* Two-Column Competitive Programming Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 min-h-[720px]">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Problem Statement & Constraints (5 cols) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 flex flex-col bg-white dark:bg-[#070B20]/90 border border-[#DCE8E8] dark:border-white/10 rounded-2xl p-5 overflow-y-auto max-h-[860px] space-y-5 shadow-xs">
          {currentQuestion ? (
            <>
              {/* Problem Title & Header Badges */}
              <div className="space-y-2 border-b border-[#DCE8E8]/60 dark:border-white/10 pb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant={currentQuestion.difficulty || 'easy'}>
                    {currentQuestion.difficulty}
                  </Badge>

                  {isCurrentSolved && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#065F46] dark:text-emerald-400 bg-[#ECFDF5] dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-[#A7F3D0] dark:border-emerald-500/30">
                      <Check className="w-3 h-3 stroke-[3]" /> Solved
                    </span>
                  )}

                  <span className="text-[11px] font-semibold text-[#64748B] dark:text-slate-400 bg-[#F5FAFA] dark:bg-[#030617]/70 border border-[#DCE8E8] dark:border-white/10 px-2.5 py-0.5 rounded-full">
                    {currentTopic?.title || currentQuestion.topicId}
                  </span>

                  <span className="text-xs font-semibold text-[#0F766E] dark:text-cyan-400 flex items-center gap-1 ml-auto bg-[#ECFDF5] dark:bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-[#A7F3D0] dark:border-cyan-500/30">
                    <Zap className="w-3.5 h-3.5 fill-[#0F766E] dark:fill-cyan-400" /> +25 XP
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#172B3A] dark:text-white tracking-tight">
                  {currentQuestion.title}
                </h1>
              </div>

              {/* Problem Statement */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] dark:text-slate-400 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#0F766E] dark:text-cyan-400" /> Problem Statement
                </h3>
                <p className="text-sm text-[#172B3A] dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {currentQuestion.problemStatement}
                </p>
              </div>

              {/* Input & Output Format */}
              {(currentQuestion.inputFormat || currentQuestion.outputFormat) && (
                <div className="space-y-3 p-4 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10 text-xs">
                  {currentQuestion.inputFormat && (
                    <div>
                      <span className="font-bold text-[#172B3A] dark:text-white block mb-0.5">Input Format:</span>
                      <p className="text-[#64748B] dark:text-slate-400 leading-relaxed font-mono text-[11px]">{currentQuestion.inputFormat}</p>
                    </div>
                  )}
                  {currentQuestion.outputFormat && (
                    <div>
                      <span className="font-bold text-[#172B3A] dark:text-white block mb-0.5">Output Format:</span>
                      <p className="text-[#64748B] dark:text-slate-400 leading-relaxed font-mono text-[11px]">{currentQuestion.outputFormat}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Constraints */}
              {currentQuestion.constraints && currentQuestion.constraints.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] dark:text-slate-400">Constraints</h3>
                  <div className="p-3 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10 font-mono text-xs text-[#172B3A] dark:text-slate-300 space-y-1">
                    {currentQuestion.constraints.map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[#0F766E] dark:text-cyan-400">•</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Examples */}
              {currentQuestion.examples && currentQuestion.examples.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] dark:text-slate-400">Examples</h3>
                  {currentQuestion.examples.map((ex, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10 space-y-2 text-xs font-mono">
                      <div className="text-[11px] font-sans font-bold text-[#172B3A] dark:text-white">Example {idx + 1}</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0B0F24] border border-[#DCE8E8] dark:border-white/10">
                          <span className="text-[10px] font-sans font-semibold text-[#64748B] dark:text-slate-400 block mb-0.5">Input:</span>
                          <pre className="text-[#172B3A] dark:text-slate-200 whitespace-pre-wrap">{ex.input || '(Empty)'}</pre>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0B0F24] border border-[#DCE8E8] dark:border-white/10">
                          <span className="text-[10px] font-sans font-semibold text-[#64748B] dark:text-slate-400 block mb-0.5">Output:</span>
                          <pre className="text-[#10B981] dark:text-emerald-400 font-semibold whitespace-pre-wrap">{ex.output}</pre>
                        </div>
                      </div>
                      {ex.explanation && (
                        <p className="text-[11px] font-sans text-[#64748B] dark:text-slate-400 italic">
                          <span className="font-semibold text-[#172B3A] dark:text-white not-italic">Explanation:</span> {ex.explanation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Progressive Hints Accordion */}
              {currentQuestion.hints && currentQuestion.hints.length > 0 && (
                <div className="rounded-xl border border-[#A7F3D0] dark:border-cyan-500/30 bg-[#ECFDF5]/60 dark:bg-cyan-950/20 overflow-hidden">
                  <button
                    onClick={() => setShowHints(!showHints)}
                    className="w-full p-3.5 flex items-center justify-between text-xs font-semibold text-[#0F766E] dark:text-cyan-400 hover:text-[#064E52] dark:hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-[#0F766E] dark:text-cyan-400" /> Need a Conceptual Hint?
                    </span>
                    {showHints ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {showHints && (
                    <div className="p-3.5 pt-0 space-y-2 border-t border-[#A7F3D0] dark:border-cyan-500/30 text-xs text-[#172B3A] dark:text-slate-200">
                      {currentQuestion.hints.map((h, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-white dark:bg-[#070B20] border border-[#A7F3D0]/60 dark:border-cyan-500/20">
                          <span className="font-bold text-[#0F766E] dark:text-cyan-400 mr-1.5">Hint {i + 1}:</span>
                          {h}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-[#64748B] dark:text-slate-400 text-xs">
              Loading practice challenge...
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: Monaco Editor + Sample Tests + Run/Submit Panels (7 cols) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Top: Monaco Code Editor */}
          <div className="h-[440px]">
            <CodeEditor
              code={code}
              onChange={setCode}
              language={selectedLanguage}
              starterCode={currentQuestion?.starterCodes?.[selectedLanguage] || currentQuestion?.starterCode || ''}
              onRun={handleRun}
              onSubmit={handleSubmit}
              isRunning={isRunning}
              isSubmitting={isSubmitting}
            />
          </div>

          {/* Action Bar: Run (3 Samples) & Submit (10 Tests) */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-[#070B20]/90 p-3 rounded-2xl border border-[#DCE8E8] dark:border-white/10 shadow-xs">
            <div className="flex items-center gap-2 text-xs text-[#64748B] dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10 px-2.5 py-1 rounded-lg text-[#0F766E] dark:text-cyan-400">
                <CheckCircle className="w-3.5 h-3.5 text-[#10B981] dark:text-emerald-400" /> 3 Sample Tests Visible
              </span>
              <span className="flex items-center gap-1.5 bg-[#F5FAFA] dark:bg-[#030617]/60 border border-[#DCE8E8] dark:border-white/10 px-2.5 py-1 rounded-lg">
                <EyeOff className="w-3.5 h-3.5 text-[#64748B] dark:text-slate-400" /> 7 Hidden Tests on Submit
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRequestReview}
                isLoading={isReviewing}
                leftIcon={<Sparkles className="w-3.5 h-3.5 text-[#0F766E] dark:text-cyan-400" />}
                className="font-semibold text-xs border-[#A7F3D0] dark:border-cyan-500/30 bg-[#ECFDF5] dark:bg-cyan-500/10 text-[#0F766E] dark:text-cyan-400 hover:bg-[#D1FAE5] dark:hover:bg-cyan-500/20"
              >
                Review Code
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleRun}
                isLoading={isRunning}
                leftIcon={<Play className="w-3.5 h-3.5 fill-[#64748B] dark:fill-slate-400 text-[#64748B] dark:text-slate-400" />}
                className="font-semibold text-xs border-[#DCE8E8] dark:border-white/10 hover:bg-[#F5FAFA] dark:hover:bg-white/5 text-[#172B3A] dark:text-white"
              >
                Run Sample Tests
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={handleSubmit}
                isLoading={isSubmitting}
                leftIcon={<Send className="w-3.5 h-3.5" />}
                className="font-bold text-xs bg-[#10B981] hover:bg-[#059669] text-white shadow-xs"
              >
                Submit Solution
              </Button>
            </div>
          </div>

          {/* Bottom Tabs: Sample Cases | Run Results | Submit Results | AI Review */}
          <div className="flex-1 flex flex-col space-y-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => setActiveTab('samples')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'samples'
                    ? 'bg-white dark:bg-[#10152E] text-[#172B3A] dark:text-white border border-[#DCE8E8] dark:border-white/10 shadow-xs font-bold'
                    : 'text-[#64748B] dark:text-slate-400 hover:text-[#172B3A] dark:hover:text-white bg-[#F5FAFA] dark:bg-[#030617]/60'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-[#0F766E] dark:text-cyan-400" /> Sample Test Cases (3)
              </button>

              <button
                onClick={() => setActiveTab('run')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'run'
                    ? 'bg-white dark:bg-[#10152E] text-[#0F766E] dark:text-cyan-400 border border-[#DCE8E8] dark:border-white/10 shadow-xs font-bold'
                    : 'text-[#64748B] dark:text-slate-400 hover:text-[#172B3A] dark:hover:text-white bg-[#F5FAFA] dark:bg-[#030617]/60'
                }`}
              >
                <Play className="w-3 h-3 fill-current text-[#0F766E] dark:text-cyan-400" /> Run Output
                {runResults && (
                  <span className={`w-2 h-2 rounded-full ${runResults.allPassed ? 'bg-[#10B981]' : 'bg-rose-500'}`} />
                )}
              </button>

              <button
                onClick={() => setActiveTab('submit')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'submit'
                    ? 'bg-white dark:bg-[#10152E] text-[#10B981] dark:text-emerald-400 border border-[#DCE8E8] dark:border-white/10 shadow-xs font-bold'
                    : 'text-[#64748B] dark:text-slate-400 hover:text-[#172B3A] dark:hover:text-white bg-[#F5FAFA] dark:bg-[#030617]/60'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] dark:text-emerald-400" />
                Submission Results (10 Tests)
                {submissionResults && (
                  <span className={`w-2 h-2 rounded-full ${submissionResults.allPassed ? 'bg-[#10B981]' : 'bg-rose-500'}`} />
                )}
              </button>

              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'ai'
                    ? 'bg-[#ECFDF5] dark:bg-cyan-500/10 text-[#0F766E] dark:text-cyan-400 border border-[#A7F3D0] dark:border-cyan-500/30 shadow-xs font-bold'
                    : 'text-[#0F766E] dark:text-cyan-400 hover:text-[#064E52] dark:hover:text-cyan-300 bg-[#ECFDF5]/50 dark:bg-cyan-500/5 hover:bg-[#ECFDF5] dark:hover:bg-cyan-500/10'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0F766E] dark:text-cyan-400" /> AI Code Review
                {aiFeedback && (
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                )}
              </button>
            </div>

            {/* TAB CONTENTS */}
            <div className="min-h-[220px]">
              {/* 1. Sample Test Cases Display */}
              {activeTab === 'samples' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {sampleTestCases.slice(0, 3).map((tc, idx) => (
                    <div key={tc.id || idx} className="bg-white dark:bg-[#070B20]/90 border border-slate-200 dark:border-white/10 rounded-xl p-3 space-y-2 shadow-2xs font-mono text-xs">
                      <div className="flex items-center justify-between font-sans text-[11px] font-bold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-white/10 pb-1">
                        <span>Test Case {idx + 1}</span>
                        <span className="text-[10px] text-blue-600 dark:text-cyan-400 font-semibold bg-blue-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded">Sample</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-sans block">Input</span>
                        <pre className="p-2 rounded bg-slate-50 dark:bg-[#030617] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 whitespace-pre-wrap max-h-20 overflow-y-auto">
                          {tc.input || '(Empty)'}
                        </pre>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-sans block">Expected Output</span>
                        <pre className="p-2 rounded bg-slate-50 dark:bg-[#030617] border border-slate-200 dark:border-white/10 text-emerald-700 dark:text-emerald-400 font-bold whitespace-pre-wrap max-h-20 overflow-y-auto">
                          {tc.expectedOutput}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 2. Run Results Display */}
              {activeTab === 'run' && (
                runResults ? (
                  <div className="bg-white dark:bg-[#070B20]/90 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-xs space-y-3 p-4">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        {runResults.allPassed ? (
                          <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span>All 3 Sample Test Cases Passed!</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-rose-700 dark:text-rose-400 font-bold text-sm">
                            <X className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                            <span>Sample Tests: {runResults.passedTests} / {runResults.totalTests} Passed</span>
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        Execution Time: {Number(runResults.executionTime || 0).toFixed(2)}s
                      </div>
                    </div>

                    {/* Results per sample test */}
                    <div className="space-y-2.5">
                      {runResults.testResults?.map((r, i) => (
                        <div key={i} className={`p-3 rounded-xl border text-xs font-mono space-y-2 ${
                          r.passed ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-500/30' : 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-500/30'
                        }`}>
                          <div className="flex items-center justify-between font-sans text-xs font-bold">
                            <span className="flex items-center gap-1.5 dark:text-white">
                              {r.passed ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                              ) : (
                                <X className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                              )}
                              Test Case {r.testCaseIndex || i + 1}
                            </span>
                            <Badge variant={r.passed ? 'emerald' : 'rose'}>
                              {r.passed ? 'Passed' : 'Failed'}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px]">
                            <div className="p-2 rounded bg-white dark:bg-[#030617] border border-slate-200 dark:border-white/10">
                              <span className="text-[10px] font-sans text-slate-400 dark:text-slate-500 block">Input:</span>
                              <pre className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap">{r.input || '(Empty)'}</pre>
                            </div>
                            <div className="p-2 rounded bg-white dark:bg-[#030617] border border-slate-200 dark:border-white/10">
                              <span className="text-[10px] font-sans text-slate-400 dark:text-slate-500 block">Expected:</span>
                              <pre className="text-emerald-700 dark:text-emerald-400 font-semibold whitespace-pre-wrap">{r.expectedOutput}</pre>
                            </div>
                            <div className="p-2 rounded bg-white dark:bg-[#030617] border border-slate-200 dark:border-white/10">
                              <span className="text-[10px] font-sans text-slate-400 dark:text-slate-500 block">Your Output:</span>
                              <pre className={r.passed ? 'text-slate-800 dark:text-slate-200 whitespace-pre-wrap' : 'text-rose-700 dark:text-rose-400 font-semibold whitespace-pre-wrap'}>
                                {r.actualOutput || '(No output)'}
                              </pre>
                            </div>
                          </div>

                          {r.error && (
                            <div className="p-2 rounded bg-rose-100/60 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-300 text-[11px] font-sans">
                              <span className="font-bold">Error:</span> {r.error}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-8 rounded-2xl bg-white dark:bg-[#070B20]/90 border border-slate-200 dark:border-white/10 text-center text-slate-500 dark:text-slate-400 text-xs shadow-2xs">
                    Click "Run Sample Tests" to test your solution against the 3 sample test cases.
                  </div>
                )
              )}

              {/* 3. Submission Results Display (10 Test Cases) */}
              {activeTab === 'submit' && (
                submissionResults ? (
                  <div className="space-y-4">
                    {/* Verdict Banner */}
                    <div className={`p-4 rounded-2xl border flex items-center justify-between flex-wrap gap-3 ${
                      submissionResults.allPassed
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${submissionResults.allPassed ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}`}>
                          {submissionResults.allPassed ? <CheckCircle2 className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
                        </div>
                        <div>
                          <div className="text-base font-bold">
                            {submissionResults.allPassed ? '🎉 Accepted' : 'Wrong Answer'}
                          </div>
                          <div className="text-xs opacity-90">
                            {submissionResults.passedTestCases} / {submissionResults.totalTestCases} Test Cases Passed
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs font-mono">
                        <div>
                          <span className="text-slate-500 block text-[10px] font-sans">Execution Time</span>
                          <span>{((submissionResults.executionTimeMs || 0) / 1000).toFixed(2)}s</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px] font-sans">Points Earned</span>
                          <span className="text-emerald-700 font-bold">+{submissionResults.xpGained || 0} XP</span>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Test Case List with Hidden Test Case Masking */}
                    <TestResults
                      results={submissionResults.testResults}
                      allPassed={submissionResults.allPassed}
                      passedCount={submissionResults.passedTestCases}
                      totalCount={submissionResults.totalTestCases}
                    />
                  </div>
                ) : (
                  <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center text-slate-500 text-xs shadow-2xs">
                    Click "Submit Solution" to run all 10 test cases (3 visible sample cases + 7 hidden cases).
                  </div>
                )
              )}

              {/* 4. AI Feedback Tab */}
              {activeTab === 'ai' && (
                aiFeedback ? (
                  <AIFeedback
                    feedback={aiFeedback}
                    onRetry={() => setActiveTab('run')}
                    problemTitle={currentQuestion?.title}
                    problemStatement={currentQuestion?.problemStatement || currentQuestion?.description}
                    language={selectedLanguage}
                    code={code}
                  />
                ) : (
                  <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
                    <Sparkles className="w-8 h-8 text-amber-500 mx-auto" />
                    <h4 className="font-bold text-slate-800 text-sm">No Active Code Review</h4>
                    <p className="text-slate-500 text-xs max-w-sm mx-auto">
                      Submit your solution or click "Review Code" above to generate a 10-point educational diagnostic with complexity analysis and interactive doubt assistance.
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleRequestReview}
                      isLoading={isReviewing}
                      leftIcon={<Sparkles className="w-3.5 h-3.5" />}
                      className="text-xs bg-amber-600 hover:bg-amber-700 text-white font-semibold mx-auto"
                    >
                      Request AI Code Review
                    </Button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
