/**
 * Full GfG-style topic renderer — renders every section of a topic object.
 * Location: client/src/components/curriculum/TopicViewer.jsx
 */
import React from 'react';
import {
    Target,
    BookOpen,
    Code2,
    Cog,
    Lightbulb,
    AlertTriangle,
    CheckCircle2,
    Circle,
    ListChecks,
    Dumbbell,
    Link2,
    Terminal,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import SectionBlock from './SectionBlock.jsx';
import CodeBlock from './CodeBlock.jsx';
import QuickCheckQuiz from './QuickCheckQuiz.jsx';
import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';

export const TopicViewer = ({
    topic,
    language = 'code',
    isCompleted = false,
    onToggleComplete,
    completionLoading = false,
    onStartPractice
}) => {
    if (!topic) return null;

    const difficultyVariant =
        topic.difficulty === 'advanced'
            ? 'hard'
            : topic.difficulty === 'intermediate'
                ? 'medium'
                : 'easy';

    return (
        <div className="space-y-5">
            {/* ---------- Header Card ---------- */}
            <div className="relative overflow-hidden rounded-3xl border border-[#DCE8E8] dark:border-white/10 bg-gradient-to-br from-[#ECFDF5] via-white to-[#F5FAFA] dark:from-[#070B20] dark:via-[#0c1427] dark:to-[#10152E] p-6 sm:p-8 shadow-xs">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ECFDF5] dark:bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="relative">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                            <Badge variant="teal">Topic</Badge>
                            <Badge variant={difficultyVariant}>
                                {topic.difficulty?.toUpperCase()}
                            </Badge>
                            <span className="text-xs text-[#64748B] dark:text-slate-400 font-medium">
                                ⏱ ~{topic.estimatedMinutes || 15} min read
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            {onToggleComplete && (
                                <button
                                    onClick={isCompleted ? undefined : onToggleComplete}
                                    disabled={isCompleted || completionLoading}
                                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                                        isCompleted
                                            ? 'bg-emerald-600 text-white cursor-default'
                                            : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 cursor-pointer'
                                    }`}
                                >
                                    {isCompleted ? (
                                        <>
                                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                            <span>Completed ✓</span>
                                        </>
                                    ) : (
                                        <>
                                            <Circle className="w-3.5 h-3.5 text-slate-400" />
                                            <span>Mark as Completed (+1 XP)</span>
                                        </>
                                    )}
                                </button>
                            )}

                            {onStartPractice && (
                                <button
                                    onClick={onStartPractice}
                                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#10B981] hover:bg-emerald-600 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                                >
                                    <Dumbbell className="w-3.5 h-3.5" />
                                    Practice {topic.title}
                                </button>
                            )}
                        </div>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                        {topic.title}
                    </h1>
                    {topic.description && (
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 max-w-3xl leading-relaxed">
                            {topic.description}
                        </p>
                    )}
                </div>
            </div>

            {/* ---------- Learning Objectives ---------- */}
            {topic.learningObjectives?.length > 0 && (
                <SectionBlock
                    icon={Target}
                    iconColor="blue"
                    title="Learning Objectives"
                    subtitle="What you'll master in this topic"
                >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {topic.learningObjectives.map((obj, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
                            >
                                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                <span>{obj}</span>
                            </li>
                        ))}
                    </ul>
                </SectionBlock>
            )}

            {/* ---------- Prerequisites ---------- */}
            {topic.prerequisites?.length > 0 && (
                <SectionBlock
                    icon={Link2}
                    iconColor="amber"
                    title="Prerequisites"
                    subtitle="Recommended prior topics"
                >
                    <div className="flex flex-wrap gap-2">
                        {topic.prerequisites.map((p, i) => (
                            <span
                                key={i}
                                className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold"
                            >
                                📌 {p}
                            </span>
                        ))}
                    </div>
                </SectionBlock>
            )}

            {/* ---------- Concept Summary ---------- */}
            {topic.conceptSummary && (
                <SectionBlock
                    icon={BookOpen}
                    iconColor="teal"
                    title="Core Concept"
                    subtitle="The big picture in 2-3 sentences"
                >
                    <div className="p-4 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#064E52] font-medium text-sm sm:text-base leading-relaxed">
                        {topic.conceptSummary}
                    </div>
                </SectionBlock>
            )}

            {/* ---------- Detailed Explanation ---------- */}
            {topic.detailedExplanation && (
                <SectionBlock
                    icon={BookOpen}
                    iconColor="blue"
                    title="Detailed Explanation"
                    subtitle="Deep dive into theory and mechanics"
                >
                    <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                        {topic.detailedExplanation}
                    </div>
                </SectionBlock>
            )}

            {/* ---------- Syntax & Grammar ---------- */}
            {topic.syntaxExplanation && (
                <SectionBlock
                    icon={Code2}
                    iconColor="purple"
                    title="Syntax & Grammar"
                    subtitle="How to write it correctly"
                    variant="purple"
                >
                    <CodeBlock code={topic.syntaxExplanation} language={language} />
                </SectionBlock>
            )}

            {/* ---------- How It Works (Step by Step) ---------- */}
            {topic.howItWorks?.length > 0 && (
                <SectionBlock
                    icon={Cog}
                    iconColor="emerald"
                    title="How It Works"
                    subtitle="Step-by-step runtime execution flow"
                    variant="emerald"
                >
                    <ol className="space-y-2.5">
                        {topic.howItWorks.map((step, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/40 border border-emerald-100 text-xs sm:text-sm text-slate-700"
                            >
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs shrink-0 mt-0.5">
                                    {i + 1}
                                </span>
                                <span className="pt-0.5">{step}</span>
                            </li>
                        ))}
                    </ol>
                </SectionBlock>
            )}

            {/* ---------- Code Examples ---------- */}
            {topic.examples?.length > 0 && (
                <SectionBlock
                    icon={Code2}
                    iconColor="blue"
                    title="Code Examples"
                    subtitle="Real-world demonstrations with step-by-step walkthroughs"
                >
                    <div className="space-y-4">
                        {topic.examples.map((ex, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900/5"
                            >
                                {ex.title && (
                                    <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                                        <span className="font-bold text-xs text-slate-800">
                                            {ex.title}
                                        </span>
                                        {ex.runnable !== false && (
                                            <Badge variant="blue">Runnable</Badge>
                                        )}
                                    </div>
                                )}
                                <CodeBlock code={ex.code} language={language} />
                                {ex.output && (
                                    <div className="p-3 bg-slate-950 text-slate-200 font-mono text-xs border-t border-slate-800">
                                        <div className="text-[10px] text-slate-400 font-bold mb-1">
                                            OUTPUT:
                                        </div>
                                        <pre className="whitespace-pre-wrap">{ex.output}</pre>
                                    </div>
                                )}
                                {ex.explanation && (
                                    <div className="p-3 bg-white text-xs text-slate-600 border-t border-slate-200">
                                        <span className="font-semibold text-slate-800">
                                            Walkthrough:
                                        </span>{' '}
                                        {ex.explanation}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </SectionBlock>
            )}

            {/* ---------- Common Pitfalls & Mistakes ---------- */}
            {topic.commonMistakes?.length > 0 && (
                <SectionBlock
                    icon={AlertTriangle}
                    iconColor="amber"
                    title="Common Pitfalls & Anti-Patterns"
                    subtitle="Mistakes beginners frequently make and how to avoid them"
                    variant="amber"
                >
                    <div className="space-y-3">
                        {topic.commonMistakes.map((m, i) => (
                            <div
                                key={i}
                                className="p-4 rounded-xl bg-white border border-amber-200 space-y-2 text-xs sm:text-sm"
                            >
                                <div className="font-bold text-amber-950 flex items-center gap-2">
                                    <span>⚠️</span> {m.mistake}
                                </div>
                                <div className="text-slate-600 pl-6">
                                    <span className="font-semibold text-slate-800">Why it happens:</span>{' '}
                                    {m.why}
                                </div>
                                <div className="text-emerald-800 pl-6 font-medium">
                                    <span className="font-semibold text-emerald-900">Fix:</span>{' '}
                                    {m.fix}
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionBlock>
            )}

            {/* ---------- Quick Checks (Self-Assessment) ---------- */}
            {topic.quickChecks?.length > 0 && (
                <SectionBlock
                    icon={ListChecks}
                    iconColor="teal"
                    title="Quick Checks"
                    subtitle="Test your understanding"
                >
                    <div className="space-y-4">
                        {topic.quickChecks.map((qc, i) => (
                            <QuickCheckQuiz key={i} quiz={qc} index={i} />
                        ))}
                    </div>
                </SectionBlock>
            )}

            {/* ---------- Topic Completion & Call To Practice Banner ---------- */}
            <div className="relative overflow-hidden rounded-3xl border border-[#10B981]/30 bg-gradient-to-r from-[#043639] via-[#064E52] to-[#0F766E] p-6 sm:p-8 text-white shadow-lg">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div className="space-y-1.5 text-center sm:text-left">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#34D399]/30 text-xs font-bold text-[#34D399] tracking-wide">
                            <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Topic Completed
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                            Ready to practise {topic.title}?
                        </h3>
                        <p className="text-xs sm:text-sm text-[#ECFDF5]/80 max-w-xl">
                            Reinforce what you just learned with hands-on coding challenges and instant automated test verification.
                        </p>
                    </div>

                    {onStartPractice && (
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={onStartPractice}
                            leftIcon={<Dumbbell className="w-4 h-4 text-white" />}
                            rightIcon={<ArrowRight className="w-4 h-4" />}
                            className="bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm shadow-md shrink-0 cursor-pointer"
                        >
                            Practice This Topic
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopicViewer;