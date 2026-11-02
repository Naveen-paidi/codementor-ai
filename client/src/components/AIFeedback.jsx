import React, { useState } from 'react';
import {
  AlertCircle,
  Lightbulb,
  BookOpen,
  Sparkles,
  RefreshCw,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Cpu,
  Send,
  ChevronDown,
  ChevronUp,
  Code2,
  HelpCircle,
  CornerDownRight,
  Loader2
} from 'lucide-react';
import Badge from './ui/Badge.jsx';
import Button from './ui/Button.jsx';
import { MarkdownRenderer } from './ui/MarkdownRenderer.jsx';
import { useLearning } from '../context/LearningContext.jsx';
import { api } from '../services/api.js';

export const AIFeedback = ({
  feedback,
  onRetry,
  problemTitle = '',
  problemStatement = '',
  language = 'python',
  code = ''
}) => {
  const { openChatWithContext } = useLearning();

  // State for Problem-Specific Doubt Bar
  const [doubtInput, setDoubtInput] = useState('');
  const [doubts, setDoubts] = useState([]);
  const [isLoadingDoubt, setIsLoadingDoubt] = useState(false);
  const [doubtError, setDoubtError] = useState(null);
  const [showCodeFix, setShowCodeFix] = useState(false);

  if (!feedback) return null;

  const {
    errorType = 'logical_error',
    overallAssessment,
    whatIsCorrect,
    problemsBugs = [],
    whyItOccurred,
    howToFix,
    correctedCode = '',
    timeComplexity,
    spaceComplexity,
    edgeCases = [],
    learningTip,
    summary,
    whatWentWrong,
    whyItHappened,
    hint,
    conceptToReview,
    attemptNumber = 1
  } = feedback;

  const errorTypeMap = {
    passed: { label: 'Working - Solution Verified', badge: 'emerald' },
    syntax_error: { label: 'Syntax / Compilation Error', badge: 'rose' },
    runtime_error: { label: 'Runtime Exception', badge: 'rose' },
    logical_error: { label: 'Logical / Boundary Error', badge: 'amber' },
    conceptual_error: { label: 'Conceptual Misunderstanding', badge: 'purple' },
  };

  const currentType = errorTypeMap[errorType] || errorTypeMap.logical_error;

  // Normalise problems/bugs list
  const normalizedProblems = Array.isArray(problemsBugs) && problemsBugs.length > 0
    ? problemsBugs
    : (whatWentWrong ? [whatWentWrong] : []);

  // Normalise edge cases list
  const normalizedEdgeCases = Array.isArray(edgeCases) && edgeCases.length > 0
    ? edgeCases
    : ['Empty or boundary input', 'Single-element input', 'Extreme constraint values'];

  // Quick prompt chips
  const quickChips = [
    'Why is this line wrong?',
    'Give me a hint instead of the full fix',
    'What is the optimal approach?',
    'Explain time complexity in simpler terms',
    'How does an edge case fail?'
  ];

  const handleAskDoubt = async (questionText) => {
    const textToAsk = (questionText || doubtInput).trim();
    if (!textToAsk || isLoadingDoubt) return;

    setDoubtError(null);
    setIsLoadingDoubt(true);

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: textToAsk
    };

    setDoubts(prev => [...prev, userMessage]);
    setDoubtInput('');

    try {
      const res = await api.askProblemDoubt({
        question: textToAsk,
        problemTitle,
        problemStatement,
        language,
        userCode: code,
        reviewResult: feedback,
        history: doubts
      });

      if (res && res.success && res.answer) {
        setDoubts(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            role: 'assistant',
            content: res.answer
          }
        ]);
      } else {
        setDoubtError(res?.error || 'Unable to generate an explanation. Please try again.');
      }
    } catch (err) {
      setDoubtError(err.message || 'Error communicating with AI assistant.');
    } finally {
      setIsLoadingDoubt(false);
    }
  };

  const handleAskAIMentor = () => {
    openChatWithContext({
      currentError: summary || overallAssessment || whatWentWrong,
      topicTitle: conceptToReview || learningTip || problemTitle || 'Code Review',
      currentCode: code,
      language
    });
  };

  return (
    <div className="rounded-2xl bg-white border border-slate-200/90 p-5 shadow-xs space-y-6">
      {/* 1. Header: Error category & attempt count */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm">AI Educational Code Review</h3>
            <p className="text-2xs text-slate-500">10-Point Comprehensive Diagnostic</p>
          </div>
          <Badge variant={currentType.badge}>{currentType.label}</Badge>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xs font-mono px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
            Attempt #{attemptNumber}
          </span>
        </div>
      </div>

      {/* 2. Overall Assessment */}
      {(overallAssessment || summary) && (
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-50 to-amber-50/40 border border-amber-200/70">
          <span className="text-2xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Overall Assessment
          </span>
          <p className="text-xs font-semibold text-slate-900 leading-relaxed">
            {overallAssessment || summary}
          </p>
        </div>
      )}

      {/* 3. What is Correct & Problems/Bugs Found */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
        {whatIsCorrect && (
          <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1.5">
            <span className="font-bold text-emerald-950 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              What Is Correct:
            </span>
            <p className="text-emerald-900/90 leading-relaxed text-xs">{whatIsCorrect}</p>
          </div>
        )}

        {normalizedProblems.length > 0 && (
          <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200/80 space-y-1.5">
            <span className="font-bold text-rose-950 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              Specific Problems & Bugs Found:
            </span>
            <ul className="space-y-1 list-disc list-inside text-rose-900/90 text-xs leading-relaxed">
              {normalizedProblems.map((bug, i) => (
                <li key={i}>{bug}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 4. Why It Occurred & How to Fix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
        {(whyItOccurred || whyItHappened) && (
          <div className="p-3.5 rounded-xl bg-[#F5FAFA] border border-[#DCE8E8] space-y-1.5">
            <span className="font-bold text-[#172B3A] flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#0F766E] shrink-0" />
              Why It Occurred:
            </span>
            <p className="text-[#64748B] leading-relaxed">{whyItOccurred || whyItHappened}</p>
          </div>
        )}

        {(howToFix || hint) && (
          <div className="p-3.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] space-y-1.5">
            <span className="font-bold text-[#0F766E] flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-[#0F766E] shrink-0" />
              How To Fix (Pedagogical Guidance):
            </span>
            <p className="text-[#172B3A] leading-relaxed">{howToFix || hint}</p>
          </div>
        )}
      </div>

      {/* 5. Complexity Analysis: Time & Space */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F5FAFA] border border-[#DCE8E8]">
          <Clock className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#172B3A] block">Time Complexity Analysis</span>
            <span className="text-[#64748B] text-2xs leading-relaxed">
              {timeComplexity || 'O(N) time complexity based on input size.'}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F5FAFA] border border-[#DCE8E8]">
          <Cpu className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#172B3A] block">Space Complexity Analysis</span>
            <span className="text-[#64748B] text-2xs leading-relaxed">
              {spaceComplexity || 'O(1) auxiliary space.'}
            </span>
          </div>
        </div>
      </div>

      {/* 6. Edge Cases & Learning Tip */}
      <div className="space-y-3 text-xs">
        {normalizedEdgeCases.length > 0 && (
          <div className="p-3 rounded-xl bg-amber-50/40 border border-amber-200/60 space-y-1.5">
            <span className="font-bold text-amber-950 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              Crucial Edge Cases to Consider:
            </span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {normalizedEdgeCases.map((ec, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md bg-white border border-amber-200 text-amber-900 text-2xs font-medium shadow-2xs"
                >
                  {ec}
                </span>
              ))}
            </div>
          </div>
        )}

        {(learningTip || conceptToReview) && (
          <div className="p-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-[#0F766E] block">Key Learning Tip & Best Practice:</span>
              <p className="text-[#172B3A] text-2xs leading-relaxed">
                {learningTip || conceptToReview}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 7. Corrected Code Accordion (Optional / Expandable) */}
      {correctedCode && (
        <div className="border border-[#DCE8E8] rounded-xl overflow-hidden">
          <button
            onClick={() => setShowCodeFix(prev => !prev)}
            className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#F5FAFA] hover:bg-[#ECFDF5] transition-colors text-xs font-semibold text-[#172B3A] cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#0F766E]" />
              {showCodeFix ? 'Hide Corrected Code Snippet' : 'View Guided Code Fix / Reference'}
            </span>
            {showCodeFix ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showCodeFix && (
            <div className="p-3 bg-[#041F20] text-[#34D399] text-xs font-mono overflow-x-auto border-t border-[#064E52]">
              <pre className="p-2 whitespace-pre leading-relaxed">
                <code>{correctedCode}</code>
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Action Toolbar for Review */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#DCE8E8] text-xs">
        <div className="text-2xs text-[#64748B]">
          Powered by OpenRouter REST AI Engine
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleAskAIMentor}
            leftIcon={<MessageSquare className="w-3.5 h-3.5 text-[#0F766E]" />}
            className="text-xs text-[#0F766E] bg-[#ECFDF5] border-[#A7F3D0] hover:bg-[#A7F3D0]/30"
          >
            Open in AI Tutor Chat
          </Button>

          {onRetry && (
            <Button
              size="sm"
              variant="secondary"
              onClick={onRetry}
              leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
              className="text-xs"
            >
              Retry Code
            </Button>
          )}
        </div>
      </div>

      {/* =====================================================================
          8. PROBLEM-SPECIFIC DOUBT / SEARCH BAR (NEW FEATURE)
          ===================================================================== */}
      <div className="pt-4 border-t-2 border-[#DCE8E8] space-y-3.5">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[#172B3A] text-xs flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#0F766E]" />
              Ask a Doubt About This Problem
            </h4>
            <p className="text-2xs text-[#64748B]">
              Ask follow-up questions about this problem statement, your code, edge cases, or complexity.
            </p>
          </div>
        </div>

        {/* Quick prompt chips */}
        <div className="flex flex-wrap gap-1.5">
          {quickChips.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              disabled={isLoadingDoubt}
              onClick={() => handleAskDoubt(chip)}
              className="px-2.5 py-1 rounded-full text-2xs font-medium bg-[#F5FAFA] hover:bg-[#ECFDF5] text-[#172B3A] hover:text-[#0F766E] border border-[#DCE8E8] hover:border-[#A7F3D0] transition-all cursor-pointer disabled:opacity-50"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Conversation Thread for this problem */}
        {doubts.length > 0 && (
          <div className="space-y-3 max-h-72 overflow-y-auto p-3 bg-[#F5FAFA] rounded-xl border border-[#DCE8E8]">
            {doubts.map(msg => (
              <div
                key={msg.id}
                className={`p-3 rounded-xl text-xs ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-[#064E52] to-[#0F766E] text-white ml-8 shadow-xs font-medium'
                    : 'bg-[#ECFDF5] text-[#172B3A] mr-4 border border-[#A7F3D0] shadow-xs'
                }`}
              >
                <div className="flex items-center gap-1 mb-1 text-2xs font-bold opacity-80">
                  {msg.role === 'user' ? (
                    <span>Your Question</span>
                  ) : (
                    <span className="flex items-center gap-1 text-[#0F766E]">
                      <Sparkles className="w-3 h-3 text-[#10B981]" /> Problem Mentor
                    </span>
                  )}
                </div>

                {msg.role === 'user' ? (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  <MarkdownRenderer content={msg.content} className="text-xs" />
                )}
              </div>
            ))}

            {isLoadingDoubt && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs text-[#0F766E] animate-pulse shadow-xs mr-4">
                <Loader2 className="w-4 h-4 animate-spin text-[#10B981]" />
                <span className="font-medium">Finding the best explanation...</span>
              </div>
            )}
          </div>
        )}

        {/* Doubt Error notice */}
        {doubtError && (
          <p className="text-2xs text-[#EF4444] bg-rose-50 border border-rose-200 p-2.5 rounded-lg">
            {doubtError}
          </p>
        )}

        {/* Search / Doubt Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAskDoubt();
          }}
          className="flex items-center gap-2"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={doubtInput}
              onChange={(e) => setDoubtInput(e.target.value)}
              placeholder="🔍 Ask a doubt about this problem (e.g., Why is line 5 wrong?)..."
              disabled={isLoadingDoubt}
              className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-[#DCE8E8] bg-white text-xs text-[#172B3A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] disabled:opacity-60 transition-all shadow-xs"
            />
          </div>

          <Button
            type="submit"
            size="sm"
            variant="primary"
            disabled={!doubtInput.trim() || isLoadingDoubt}
            isLoading={isLoadingDoubt}
            leftIcon={!isLoadingDoubt && <Send className="w-3.5 h-3.5" />}
            className="text-xs font-semibold px-4 py-2.5 rounded-xl"
          >
            Ask
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AIFeedback;
