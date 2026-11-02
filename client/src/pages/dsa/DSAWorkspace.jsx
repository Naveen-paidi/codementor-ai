import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Play,
  Send,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Code2,
  FileText,
  History,
  Terminal,
  Cpu,
  Layers,
  Zap,
  Info
} from 'lucide-react';
import { api } from '../../services/api.js';
import { useTheme } from '../../context/ThemeContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export const DSAWorkspace = ({ problemId = 'dsa-1', onBack, onNavigateProblem }) => {
  const { isDark } = useTheme();
  const { user, updateXP, updateStreak } = useAuth();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const rolePrefix = location.pathname.startsWith('/faculty')
    ? '/faculty'
    : location.pathname.startsWith('/college-admin')
    ? '/college-admin'
    : location.pathname.startsWith('/admin')
    ? '/admin'
    : '/student';

  const effectiveProblemId = params?.problemId || problemId || 'dsa-1';

  const handleBack = () => {
    if (onBack) return onBack();
    navigate(`${rolePrefix}/dsa`);
  };

  const handleNavigateProblem = (newId) => {
    if (onNavigateProblem) return onNavigateProblem(newId);
    navigate(`${rolePrefix}/dsa/${newId}`);
  };

  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description'); // 'description' | 'submissions' | 'ai-review'

  // Code editor state
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [codeMap, setCodeMap] = useState({});
  const editorRef = useRef(null);

  // Execution & Judge state
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeResultTab, setActiveResultTab] = useState(0);
  const [judgeOutcome, setJudgeOutcome] = useState(null);

  // AI Review state
  const [aiReview, setAiReview] = useState(null);
  const [isReviewing, setIsReviewing] = useState(false);

  // Submissions history
  const [submissions, setSubmissions] = useState([]);

  // Fetch problem details
  const loadProblem = async (pId) => {
    try {
      setLoading(true);
      setJudgeOutcome(null);
      setAiReview(null);

      const res = await api.getDSAProblemById(pId);
      if (res?.success && res.data) {
        const prob = res.data;
        setProblem(prob);
        setSubmissions(prob.submissions || []);

        // Initialize code map with starter templates
        const initialCode = {
          python: prob.starterCode?.python || '',
          javascript: prob.starterCode?.javascript || '',
          java: prob.starterCode?.java || '',
          cpp: prob.starterCode?.cpp || '',
          c: prob.starterCode?.c || ''
        };
        setCodeMap(initialCode);
      }
    } catch (err) {
      console.error('[DSAWorkspace] Error loading problem:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (effectiveProblemId) {
      loadProblem(effectiveProblemId);
    }
  }, [effectiveProblemId]);

  const currentCode = codeMap[selectedLanguage] || '';

  const handleCodeChange = (newCode) => {
    setCodeMap((prev) => ({
      ...prev,
      [selectedLanguage]: newCode
    }));
  };

  const handleResetTemplate = () => {
    if (window.confirm('Reset code to the original starter template for ' + selectedLanguage + '?')) {
      const template = problem?.starterCode?.[selectedLanguage] || '';
      handleCodeChange(template);
    }
  };

  // Run Code against 3 public tests
  const handleRun = async () => {
    if (!problem || isRunning || isSubmitting) return;
    try {
      setIsRunning(true);
      setJudgeOutcome(null);
      setActiveResultTab(0);

      const res = await api.runDSACode({
        problemId: problem.id,
        language: selectedLanguage,
        code: currentCode
      });

      if (res?.success && res.data) {
        setJudgeOutcome(res.data);
      } else {
        setJudgeOutcome({
          status: 'Error',
          error: res?.error || 'Test run failed',
          testCases: []
        });
      }
    } catch (err) {
      setJudgeOutcome({
        status: 'Error',
        error: err.message || 'Execution request failed',
        testCases: []
      });
    } finally {
      setIsRunning(false);
    }
  };

  // Submit Code against all 10 test cases
  const handleSubmit = async () => {
    if (!problem || isRunning || isSubmitting) return;
    try {
      setIsSubmitting(true);
      setJudgeOutcome(null);
      setActiveResultTab(0);

      const res = await api.submitDSACode({
        problemId: problem.id,
        language: selectedLanguage,
        code: currentCode
      });

      if (res?.success && res.data) {
        const outcome = res.data;
        setJudgeOutcome(outcome);

        if (outcome.status === 'Accepted') {
          // Trigger celebration confetti on Accepted
          confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 }
          });

          // Immediately update streak and XP in user context and storage
          if (typeof outcome.currentXP === 'number') {
            updateXP?.(outcome.currentXP);
          }
          if (typeof outcome.streak === 'number' || typeof outcome.streakDays === 'number') {
            updateStreak?.(outcome.streak ?? outcome.streakDays);
          }

          // Refresh submissions history
          const subsRes = await api.getDSAProblemSubmissions(problem.id);
          if (subsRes?.success) setSubmissions(subsRes.data || []);
        }
      } else {
        setJudgeOutcome({
          status: 'Error',
          error: res?.error || 'Submission failed',
          testCases: []
        });
      }
    } catch (err) {
      setJudgeOutcome({
        status: 'Error',
        error: err.message || 'Submission request failed',
        testCases: []
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // AI Code Review Request
  const handleRequestAIReview = async () => {
    if (!problem || isReviewing) return;
    try {
      setIsReviewing(true);
      setActiveTab('ai-review');

      const res = await api.getDSAAIReview({
        problemId: problem.id,
        language: selectedLanguage,
        code: currentCode,
        status: judgeOutcome?.status || 'Submitted',
        errorSummary: judgeOutcome?.error || null
      });

      if (res?.success && res.data) {
        setAiReview(res.data);
      }
    } catch (err) {
      console.error('[DSAWorkspace] AI Review error:', err);
    } finally {
      setIsReviewing(false);
    }
  };

  const getDifficultyBadge = (diff) => {
    switch (diff) {
      case 'Easy':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Medium':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'Hard':
        return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
    }
  };

  const monacoLanguageMap = {
    python: 'python',
    javascript: 'javascript',
    java: 'java',
    cpp: 'cpp',
    c: 'c'
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[600px] text-slate-400 gap-3">
        <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        <span>Loading problem workspace...</span>
      </div>
    );
  }

  if (!problem) {
    return (
      <div className="text-center py-20 space-y-4">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">Problem Not Found</h3>
        <button
          onClick={handleBack}
          className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium text-sm"
        >
          Back to Catalogue
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* Top Navigation & Breadcrumb Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Catalogue
          </button>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="font-mono text-slate-400">#{problem.number}</span>
            {problem.title}
            <span
              className={`px-2 py-0.5 rounded-full text-[11px] font-semibold border ${getDifficultyBadge(
                problem.difficulty
              )}`}
            >
              {problem.difficulty}
            </span>
          </h2>
        </div>

        {/* Previous / Next Problem Controls */}
        <div className="flex items-center gap-2">
          <button
            disabled={problem.number <= 1}
            onClick={() => handleNavigateProblem(`dsa-${problem.number - 1}`)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-medium transition"
          >
            <ChevronLeft className="w-4 h-4" />
            Prev
          </button>
          <button
            disabled={problem.number >= 200}
            onClick={() => handleNavigateProblem(`dsa-${problem.number + 1}`)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-medium transition"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Split-Pane Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* ============================================================ */}
        {/* LEFT PANEL: Description / Submissions / AI Code Review       */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col h-[780px] shadow-sm overflow-hidden">
          {/* Left Panel Tabs */}
          <div className="flex items-center border-b border-slate-100 dark:border-slate-800 px-4 pt-3 bg-slate-50/50 dark:bg-slate-800/40">
            <button
              onClick={() => setActiveTab('description')}
              className={`flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold border-b-2 transition -mb-px ${
                activeTab === 'description'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              Description
            </button>
            <button
              onClick={() => setActiveTab('submissions')}
              className={`flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold border-b-2 transition -mb-px ${
                activeTab === 'submissions'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <History className="w-4 h-4" />
              Submissions ({submissions.length})
            </button>
            <button
              onClick={() => setActiveTab('ai-review')}
              className={`flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold border-b-2 transition -mb-px ${
                activeTab === 'ai-review'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-4 h-4 text-indigo-500" />
              AI Code Review
            </button>
          </div>

          {/* Left Tab Content Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {activeTab === 'description' && (
              <>
                {/* Topic & Specs */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
                    Topic: {problem.topic}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    {problem.totalTestCases} Tests (3 Public, 7 Private)
                  </span>
                </div>

                {/* Problem Statement */}
                <div className="prose dark:prose-invert max-w-none text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-3">
                  <p className="whitespace-pre-line">{problem.description}</p>
                </div>

                {/* Examples */}
                {problem.examples && problem.examples.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Examples
                    </h4>
                    {problem.examples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl p-3.5 space-y-1.5 text-xs font-mono"
                      >
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong className="text-slate-900 dark:text-white">Input: </strong>
                          {ex.input}
                        </div>
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong className="text-slate-900 dark:text-white">Output: </strong>
                          {ex.output}
                        </div>
                        {ex.explanation && (
                          <div className="text-slate-500 dark:text-slate-400 pt-1 font-sans text-[11px]">
                            <strong>Explanation: </strong>
                            {ex.explanation}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Constraints */}
                {problem.constraints && problem.constraints.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Constraints
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 dark:text-slate-400 font-mono">
                      {problem.constraints.map((c, idx) => (
                        <li key={idx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}

            {/* Submissions Tab */}
            {activeTab === 'submissions' && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Submission History ({submissions.length})
                </h4>
                {submissions.length > 0 ? (
                  <div className="space-y-2">
                    {submissions.map((sub, sIdx) => (
                      <div
                        key={sub.id || sIdx}
                        onClick={() => {
                          if (sub.code) handleCodeChange(sub.code);
                        }}
                        className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-indigo-500 cursor-pointer transition flex items-center justify-between"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {sub.status === 'Accepted' ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-500" />
                            )}
                            <span
                              className={`text-xs font-bold ${
                                sub.status === 'Accepted'
                                  ? 'text-emerald-600 dark:text-emerald-400'
                                  : 'text-rose-600 dark:text-rose-400'
                              }`}
                            >
                              {sub.status}
                            </span>
                            <span className="text-xs text-slate-400 uppercase font-mono font-semibold">
                              {sub.language}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {new Date(sub.created_at || Date.now()).toLocaleString()}
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-300">
                            {sub.execution_time ? `${sub.execution_time} ms` : ''}
                          </span>
                          <div className="text-[10px] text-indigo-500 hover:underline">
                            Load Code
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-xs text-slate-400">
                    No submissions recorded yet for this problem.
                  </div>
                )}
              </div>
            )}

            {/* AI Review Tab */}
            {activeTab === 'ai-review' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                    AI Mentor Code Review
                  </h4>
                  {aiReview?.latencyMs && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-mono font-semibold">
                      ⏱️ {aiReview.latencyMs}ms latency
                    </span>
                  )}
                </div>

                {isReviewing ? (
                  <div className="flex flex-col items-center justify-center py-16 gap-3 text-slate-400">
                    <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-medium">
                      AI Mentor is analyzing time & space complexity, edge cases, and optimizations...
                    </span>
                  </div>
                ) : aiReview ? (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    {/* Complexity Badges */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 p-3.5 rounded-xl">
                        <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                          Time Complexity
                        </div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                          {aiReview.timeComplexity || 'O(n)'}
                        </div>
                      </div>

                      <div className="bg-purple-50/60 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50 p-3.5 rounded-xl">
                        <div className="text-[11px] font-semibold text-purple-600 dark:text-purple-400">
                          Space Complexity
                        </div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                          {aiReview.spaceComplexity || 'O(1)'}
                        </div>
                      </div>
                    </div>

                    {/* Approach Analysis */}
                    <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-4 rounded-xl space-y-1">
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Algorithmic Analysis
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {aiReview.approachExplanation}
                      </p>
                    </div>

                    {/* Code Quality Points */}
                    {aiReview.codeQuality && aiReview.codeQuality.length > 0 && (
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          Code Quality & Readability
                        </div>
                        <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                          {aiReview.codeQuality.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-indigo-500 font-bold">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Optimizations */}
                    <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl space-y-1">
                      <div className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        Optimization Recommendation
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {aiReview.optimizations}
                      </p>
                    </div>

                    {/* Key Learning */}
                    <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl space-y-1">
                      <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        Core Pattern Takeaway
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {aiReview.keyLearning}
                      </p>
                    </div>

                    <button
                      onClick={handleRequestAIReview}
                      className="w-full py-2.5 rounded-xl border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-xs font-semibold transition"
                    >
                      Re-Analyze Current Code
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-12 space-y-3">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Submit your solution or click below to receive instant AI feedback on time
                      complexity, code quality, and optimization hints.
                    </p>
                    <button
                      onClick={handleRequestAIReview}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md transition"
                    >
                      <Sparkles className="w-4 h-4" />
                      Get AI Code Review
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT PANEL: Language Selector, Monaco Editor, Run & Submit  */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col h-[780px] shadow-sm overflow-hidden">
          {/* Top Editor Toolbar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Language:
              </span>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="python">Python 3</option>
                <option value="javascript">JavaScript (Node.js)</option>
                <option value="java">Java 25</option>
                <option value="cpp">C++ (G++ 16)</option>
                <option value="c">C (GCC 16)</option>
              </select>
            </div>

            {/* Secondary Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleResetTemplate}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-xs flex items-center gap-1"
                title="Reset code to original starter template"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Monaco Code Editor */}
          <div className="flex-1 min-h-[340px]">
            <Editor
              height="100%"
              language={monacoLanguageMap[selectedLanguage] || 'python'}
              value={currentCode}
              onChange={(val) => handleCodeChange(val || '')}
              theme={isDark ? 'vs-dark' : 'vs'}
              options={{
                fontSize: 13,
                fontFamily: 'JetBrains Mono, Fira Code, Menlo, monospace',
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                automaticLayout: true,
                tabSize: 4,
                lineNumbersMinChars: 3
              }}
            />
          </div>

          {/* Bottom Execution Action Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-50/80 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800">
            <div className="text-[11px] text-slate-400 font-medium hidden sm:inline">
              Ctrl+Enter to Run • 10 Total Test Cases
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleRun}
                disabled={isRunning || isSubmitting}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                {isRunning ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Run Code (3 Tests)
                  </>
                )}
              </button>

              <button
                onClick={handleSubmit}
                disabled={isRunning || isSubmitting}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Judging...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Submit (10 Tests)
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Test Results Output Console Panel */}
          <div className="h-[230px] border-t border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 flex flex-col overflow-hidden">
            {/* Results Header Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>Test Results</span>
                {judgeOutcome && (
                  <span
                    className={`ml-2 px-2 py-0.5 rounded-full text-[11px] font-bold ${
                      judgeOutcome.status === 'Accepted'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : judgeOutcome.status === 'Wrong Answer'
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {judgeOutcome.status}
                  </span>
                )}
              </div>

              {judgeOutcome?.executionTime && (
                <span className="font-mono text-slate-400 text-[11px]">
                  ⚡ {judgeOutcome.executionTime} ms
                </span>
              )}
            </div>

            {/* Test Case Selection Tabs & Output */}
            {judgeOutcome ? (
              <div className="flex flex-col flex-1 overflow-hidden">
                {/* Tabs */}
                <div className="flex items-center gap-1 px-3 py-1.5 bg-slate-900/60 border-b border-slate-800/80 overflow-x-auto text-[11px]">
                  {judgeOutcome.testCases && judgeOutcome.testCases.map((tc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveResultTab(idx)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-mono transition ${
                        activeResultTab === idx
                          ? 'bg-slate-800 text-white font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tc.status === 'PASSED' ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      ) : (
                        <XCircle className="w-3 h-3 text-rose-400 shrink-0" />
                      )}
                      <span>
                        {tc.isHidden ? `Case ${idx + 1} (Private)` : `Case ${idx + 1}`}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Selected Test Case Output */}
                <div className="p-4 overflow-y-auto flex-1 font-mono text-xs space-y-2.5">
                  {judgeOutcome.testCases && judgeOutcome.testCases[activeResultTab] ? (
                    (() => {
                      const activeTc = judgeOutcome.testCases[activeResultTab];
                      if (activeTc.isHidden) {
                        return (
                          <div className="space-y-2 py-3 text-center text-slate-400">
                            <div className="text-sm font-semibold">
                              🔒 Hidden Private Test Case #{activeTc.caseNumber}
                            </div>
                            <p className="text-[11px] text-slate-500 max-w-sm mx-auto">
                              Private test case inputs and expected outputs are strictly kept server-side to maintain evaluation integrity.
                            </p>
                            <div className="inline-block mt-2">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-bold ${
                                  activeTc.status === 'PASSED'
                                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                    : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                                }`}
                              >
                                {activeTc.status === 'PASSED' ? 'Passed' : 'Failed'}
                              </span>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <>
                          <div>
                            <span className="text-slate-400">Input: </span>
                            <span className="text-slate-200">
                              {JSON.stringify(activeTc.input)}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-400">Expected Output: </span>
                            <span className="text-emerald-400">
                              {JSON.stringify(activeTc.expectedOutput)}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-400">Actual Output: </span>
                            <span
                              className={
                                activeTc.status === 'PASSED' ? 'text-slate-200' : 'text-rose-400'
                              }
                            >
                              {activeTc.actualOutput !== undefined && activeTc.actualOutput !== null
                                ? JSON.stringify(activeTc.actualOutput)
                                : 'null'}
                            </span>
                          </div>
                          {activeTc.error && (
                            <div className="p-2 rounded bg-rose-950/40 border border-rose-800 text-rose-300 text-[11px]">
                              <strong>Error: </strong> {activeTc.error}
                            </div>
                          )}
                        </>
                      );
                    })()
                  ) : (
                    <div className="text-slate-400 text-xs">
                      {judgeOutcome.error || 'Execution completed with status: ' + judgeOutcome.status}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center flex-1 text-slate-500 text-xs gap-1.5">
                <Play className="w-5 h-5 opacity-40" />
                <span>Run or Submit your solution to view test case execution outputs</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSAWorkspace;
