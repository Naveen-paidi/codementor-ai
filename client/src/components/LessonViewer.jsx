import React, { useState, useEffect } from 'react';
import {
  BookOpen, Lightbulb, AlertTriangle, CheckCircle, Code, Play,
  ArrowRight, HelpCircle, Award, Compass, ShieldCheck, Sparkles, Copy, Check
} from 'lucide-react';
import Button from './ui/Button.jsx';
import Badge from './ui/Badge.jsx';
import Card from './ui/Card.jsx';

export const LessonViewer = ({
  topic,
  lesson: propLesson,
  onStartPractice,
  onRunInteractiveCode,
  isRunning = false
}) => {
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState({});
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);

  const lesson = propLesson || topic?.lesson || {};

  const [interactiveCode, setInteractiveCode] = useState(
    lesson.interactiveStarterCode || lesson.syntaxExplanation || ''
  );

  useEffect(() => {
    setInteractiveCode(lesson.interactiveStarterCode || lesson.syntaxExplanation || '');
    setSelectedQuizAnswer({});
    setQuizSubmitted({});
  }, [lesson]);

  if (!topic && !propLesson) return null;

  const displayTitle = lesson.title || topic?.title || 'Lesson';
  const displayDifficulty = topic?.difficulty || lesson.difficulty || 'Beginner';

  const handleCopyCode = (codeText, idx) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const handleSelectOption = (qIdx, optIdx) => {
    if (quizSubmitted[qIdx]) return;
    setSelectedQuizAnswer(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmitQuiz = (qIdx) => {
    setQuizSubmitted(prev => ({ ...prev, [qIdx]: true }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-2">
      {/* Topic Header Banner */}
      <div className="bg-white rounded-2xl border border-[#DCE8E8] p-6 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="teal">Lesson Guide</Badge>
          <Badge variant="emerald">{displayDifficulty.toUpperCase()}</Badge>
          {topic?.estimatedMinutes && (
            <span className="text-xs text-[#64748B] font-medium">⏱ ~{topic.estimatedMinutes} mins</span>
          )}
          {lesson.model && (
            <span className="text-xs text-[#10B981] font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> {lesson.model}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172B3A] tracking-tight">
          {displayTitle}
        </h1>

        {topic?.learningObjectives && topic.learningObjectives.length > 0 && (
          <div className="pt-2 border-t border-[#DCE8E8]">
            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-2">
              Key Learning Objectives:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#172B3A]">
              {topic.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 bg-[#F5FAFA] p-2 rounded-lg border border-[#DCE8E8]">
                  <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 1. Concept Definition & Summary */}
      <section className="bg-white rounded-2xl border border-[#DCE8E8] p-6 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5 text-base font-bold text-[#172B3A]">
          <div className="p-2 rounded-xl bg-[#ECFDF5] text-[#0F766E] border border-[#A7F3D0]">
            <BookOpen className="w-4 h-4" />
          </div>
          <h2>Concept Definition</h2>
        </div>
        <p className="text-sm text-[#172B3A] leading-relaxed whitespace-pre-line">
          {lesson.conceptSummary || topic?.summary || 'Concept explanation generated on-demand by AI.'}
        </p>
      </section>

      {/* 2. Why It Matters */}
      {lesson.whyItMatters && (
        <section className="bg-white rounded-2xl border border-[#DCE8E8] p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2.5 text-base font-bold text-[#172B3A]">
            <div className="p-2 rounded-xl bg-[#ECFDF5] text-[#0F766E] border border-[#A7F3D0]">
              <Compass className="w-4 h-4" />
            </div>
            <h2>Why It Matters in Software Engineering</h2>
          </div>
          <p className="text-sm text-[#64748B] leading-relaxed whitespace-pre-line">
            {lesson.whyItMatters}
          </p>
        </section>
      )}

      {/* 3. Syntax & Formal Grammar */}
      {lesson.syntaxExplanation && (
        <section className="bg-white rounded-2xl border border-[#DCE8E8] p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2.5 text-base font-bold text-[#172B3A]">
            <div className="p-2 rounded-xl bg-[#ECFDF5] text-[#0F766E] border border-[#A7F3D0]">
              <Code className="w-4 h-4" />
            </div>
            <h2>Syntax Rules & Structure</h2>
          </div>
          <div className="p-4 rounded-xl bg-[#F5FAFA] border border-[#DCE8E8] font-mono text-xs text-[#172B3A] whitespace-pre-line leading-relaxed">
            {lesson.syntaxExplanation}
          </div>
        </section>
      )}

      {/* 4. Worked Code Examples */}
      {Array.isArray(lesson.examples) && lesson.examples.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-base font-bold text-[#172B3A] px-1">
            <div className="p-2 rounded-xl bg-[#ECFDF5] text-[#0F766E] border border-[#A7F3D0]">
              <Code className="w-4 h-4" />
            </div>
            <h2>Worked Code Examples</h2>
          </div>

          <div className="space-y-4">
            {lesson.examples.map((ex, idx) => (
              <div key={idx} className="rounded-2xl border border-[#DCE8E8] bg-white overflow-hidden shadow-xs">
                <div className="px-4 py-2.5 bg-[#F5FAFA] border-b border-[#DCE8E8] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#172B3A]">
                    Example {idx + 1}: {ex.title}
                  </span>
                  <button
                    onClick={() => handleCopyCode(ex.code, idx)}
                    className="flex items-center gap-1 text-[#64748B] hover:text-[#172B3A] text-xs transition-colors cursor-pointer"
                  >
                    {copiedCodeIdx === idx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                        <span className="text-[#10B981] font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 bg-[#041F20] border-y border-[#064E52]">
                  <pre className="font-mono text-xs text-[#ECFDF5] whitespace-pre-wrap overflow-x-auto leading-relaxed selection:bg-[#0F766E]">
                    {ex.code}
                  </pre>
                </div>

                {ex.explanation && (
                  <div className="p-4 bg-[#F5FAFA] border-t border-[#DCE8E8] text-xs text-[#172B3A] leading-relaxed">
                    <span className="font-semibold text-[#0F766E] block mb-1">Walkthrough:</span>
                    {ex.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Interactive Sandbox Snippet */}
      {interactiveCode && (
        <section className="space-y-4 rounded-2xl p-6 bg-white border border-[#DCE8E8] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-base font-bold text-[#172B3A]">
              <div className="p-2 rounded-xl bg-[#ECFDF5] text-[#10B981] border border-[#A7F3D0]">
                <Play className="w-4 h-4 fill-[#10B981] text-[#10B981]" />
              </div>
              <h2>Interactive Code Sandbox</h2>
            </div>
            <Button
              size="sm"
              variant="primary"
              onClick={() => onRunInteractiveCode(interactiveCode)}
              isLoading={isRunning}
              leftIcon={<Play className="w-3.5 h-3.5 fill-white text-white" />}
              className="bg-[#10B981] hover:bg-[#059669] text-white shadow-xs font-semibold"
            >
              Run Code Snippet
            </Button>
          </div>

          <p className="text-xs text-[#64748B]">
            Modify the snippet below and click 'Run Code Snippet' to test output immediately.
          </p>

          <div className="rounded-xl overflow-hidden border border-[#064E52] bg-[#041F20]">
            <textarea
              value={interactiveCode}
              onChange={(e) => setInteractiveCode(e.target.value)}
              className="w-full p-4 font-mono text-xs text-[#ECFDF5] bg-transparent resize-y min-h-[160px] focus:outline-none selection:bg-[#0F766E]"
              spellCheck="false"
            />
          </div>
        </section>
      )}

      {/* 6. How It Works Internally */}
      {lesson.howItWorks && (
        <section className="bg-white rounded-2xl border border-[#DCE8E8] p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2.5 text-base font-bold text-[#172B3A]">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
              <Lightbulb className="w-4 h-4" />
            </div>
            <h2>Under the Hood: Execution & Memory</h2>
          </div>
          <p className="text-sm text-[#64748B] leading-relaxed whitespace-pre-line">
            {lesson.howItWorks}
          </p>
        </section>
      )}

      {/* 7. Common Mistakes & Anti-Patterns */}
      {Array.isArray(lesson.commonMistakes) && lesson.commonMistakes.length > 0 && (
        <section className="space-y-4 rounded-2xl p-6 bg-rose-50/50 border border-rose-200">
          <div className="flex items-center gap-2.5 text-base font-bold text-rose-900">
            <div className="p-2 rounded-xl bg-rose-100 text-rose-600">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h2>Common Beginner Traps & How to Avoid Them</h2>
          </div>
          <div className="space-y-3">
            {lesson.commonMistakes.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-rose-200/80 text-xs shadow-xs">
                <span className="font-bold text-rose-700 block mb-1">⚠ {m.mistake}</span>
                <p className="text-[#172B3A] leading-relaxed">{m.explanation}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. Industry Best Practices */}
      {Array.isArray(lesson.bestPractices) && lesson.bestPractices.length > 0 && (
        <section className="space-y-3 rounded-2xl p-6 bg-[#ECFDF5]/60 border border-[#A7F3D0]">
          <div className="flex items-center gap-2.5 text-base font-bold text-[#064E52]">
            <div className="p-2 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#10B981]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2>Industry Best Practices</h2>
          </div>
          <ul className="space-y-2 text-xs text-[#172B3A]">
            {lesson.bestPractices.map((bp, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#A7F3D0]">
                <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                <span>{bp}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 9. Technical Interview Insights */}
      {Array.isArray(lesson.interviewPoints) && lesson.interviewPoints.length > 0 && (
        <section className="space-y-3 rounded-2xl p-6 bg-purple-50/50 border border-purple-200">
          <div className="flex items-center gap-2.5 text-base font-bold text-purple-900">
            <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
              <Award className="w-4 h-4" />
            </div>
            <h2>Technical Interview Insights</h2>
          </div>
          <ul className="space-y-2 text-xs text-[#172B3A]">
            {lesson.interviewPoints.map((ip, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-purple-100">
                <span className="text-purple-600 font-bold shrink-0">★</span>
                <span>{ip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 10. Quick Concept Check Quiz */}
      {Array.isArray(lesson.quickChecks) && lesson.quickChecks.length > 0 && (
        <section className="space-y-5 rounded-2xl p-6 bg-white border border-[#DCE8E8] shadow-xs">
          <div className="flex items-center gap-2.5 text-base font-bold text-[#172B3A]">
            <div className="p-2 rounded-xl bg-[#ECFDF5] text-[#0F766E] border border-[#A7F3D0]">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h2>Quick Concept Check</h2>
          </div>

          <div className="space-y-6">
            {lesson.quickChecks.map((q, qIdx) => {
              const selectedIdx = selectedQuizAnswer[qIdx];
              const isSubmitted = quizSubmitted[qIdx];

              return (
                <div key={qIdx} className="space-y-3 pb-5 border-b border-[#DCE8E8] last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-[#172B3A]">
                    {qIdx + 1}. {q.question}
                  </p>

                  <div className="space-y-2">
                    {q.options?.map((opt, optIdx) => {
                      const isSelected = selectedIdx === optIdx;
                      const isCorrect = optIdx === q.correctAnswer;

                      let optClasses = 'border-[#DCE8E8] bg-[#F5FAFA] hover:bg-[#ECFDF5]/50 hover:border-[#0F766E]/40 text-[#172B3A]';

                      if (isSubmitted) {
                        if (isCorrect) {
                          optClasses = 'border-[#10B981] bg-[#ECFDF5] text-[#064E52] font-semibold';
                        } else if (isSelected && !isCorrect) {
                          optClasses = 'border-rose-300 bg-rose-50 text-rose-900';
                        } else {
                          optClasses = 'border-[#DCE8E8] opacity-60 text-[#64748B]';
                        }
                      } else if (isSelected) {
                        optClasses = 'border-[#0F766E] bg-[#ECFDF5] text-[#064E52] font-semibold ring-2 ring-[#10B981]/30';
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(qIdx, optIdx)}
                          disabled={isSubmitted}
                          className={`w-full p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between cursor-pointer ${optClasses}`}
                        >
                          <span>{opt}</span>
                          {isSubmitted && isCorrect && (
                            <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {!isSubmitted && (
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => handleSubmitQuiz(qIdx)}
                      disabled={selectedIdx === undefined}
                      className="mt-2 text-xs bg-[#10B981] hover:bg-[#059669] text-white font-semibold"
                    >
                      Check Answer
                    </Button>
                  )}

                  {isSubmitted && q.explanation && (
                    <div className="p-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs text-[#064E52] mt-2">
                      <span className="font-semibold text-[#0F766E] block mb-0.5">Explanation:</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA Bottom Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#043639] via-[#064E52] to-[#0F766E] border border-[#10B981]/30 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="relative z-10 space-y-1">
          <h3 className="text-xl font-black tracking-tight text-white">Ready to write code?</h3>
          <p className="text-xs sm:text-sm text-[#ECFDF5]/80 max-w-xl">
            Test your understanding in the interactive practice environment with real-time test cases.
          </p>
        </div>
        <Button
          size="md"
          variant="primary"
          onClick={onStartPractice}
          className="relative z-10 bg-[#10B981] hover:bg-[#059669] text-white shrink-0 font-bold shadow-md text-sm"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Start Practice Challenge
        </Button>
      </div>
    </div>
  );
};

export default LessonViewer;
