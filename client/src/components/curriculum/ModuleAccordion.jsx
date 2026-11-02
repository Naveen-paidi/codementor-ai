/**
 * Collapsible accordion listing topics within a module.
 * Location: client/src/components/curriculum/ModuleAccordion.jsx
 */
import React, { useState } from 'react';
import {
    ChevronDown,
    BookOpen,
    Clock,
    Layers,
    CheckCircle2,
    Circle,
} from 'lucide-react';
import Badge from '../ui/Badge.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';

export const ModuleAccordion = ({
    module,
    language = 'code',
    completedTopics = [],
    onSelectTopic,
    onCompleteTopic,
    defaultOpen = false,
}) => {
    const { isDark } = useTheme();
    const [open, setOpen] = useState(defaultOpen);

    const completedCount = (module.topics || []).filter((t) =>
        completedTopics.includes(t.id) || completedTopics.includes(t.slug)
    ).length;
    const totalTopics = (module.topics || []).length;
    const progressPct = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

    return (
        <div className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
            isDark
                ? 'bg-[#070B20]/90 border-white/10 hover:border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                : 'bg-white border-[#D8D1EE] hover:border-purple-300 shadow-xs'
        }`}>
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className={`w-full p-5 flex items-start justify-between gap-4 text-left cursor-pointer transition-colors ${
                    isDark ? 'hover:bg-[#10152E]/60' : 'hover:bg-[#F7F5FC]'
                }`}
            >
                <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-indigo-600 text-white shrink-0 shadow-xs">
                        <Layers className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-cyan-300 bg-purple-100/70 dark:bg-cyan-950/50 px-2.5 py-0.5 rounded-full border border-purple-200 dark:border-cyan-500/30">
                                Module {module.order || ''}
                            </span>
                            <Badge variant="purple" className="text-[10px]">
                                {totalTopics} topics
                            </Badge>
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-[#1E1B4B] dark:text-white leading-tight truncate">
                            {module.title}
                        </h3>
                        {module.description && (
                            <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1 line-clamp-2">
                                {module.description}
                            </p>
                        )}

                        {/* Progress bar */}
                        <div className="mt-3 flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-[#EAE5F6] dark:bg-black/50 border border-[#D8D1EE] dark:border-white/10 rounded-full overflow-hidden max-w-xs">
                                <div
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-cyan-400 dark:to-indigo-400 rounded-full transition-all"
                                    style={{ width: `${progressPct}%` }}
                                />
                            </div>
                            <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-400 whitespace-nowrap">
                                {completedCount}/{totalTopics}
                            </span>
                        </div>
                    </div>
                </div>

                <ChevronDown
                    className={`w-5 h-5 text-[#64748B] dark:text-slate-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Body */}
            {open && (
                <div className={`border-t ${
                    isDark ? 'border-white/10 bg-[#030617]/50' : 'border-[#D8D1EE] bg-[#F7F5FC]/60'
                }`}>
                    <ul className={`divide-y ${isDark ? 'divide-white/5' : 'divide-[#D8D1EE]'}`}>
                        {(module.topics || []).map((topic, idx) => {
                            const isDone =
                                completedTopics.includes(topic.id) ||
                                completedTopics.includes(topic.slug);

                            return (
                                <li key={topic.id || idx}>
                                    <div
                                        onClick={() => onSelectTopic?.(topic, module)}
                                        className={`w-full p-4 flex items-center gap-3 text-left transition-colors cursor-pointer group ${
                                            isDark ? 'hover:bg-[#10152E]' : 'hover:bg-white'
                                        }`}
                                    >
                                        <button
                                            type="button"
                                            disabled={isDone}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (!isDone) {
                                                    onCompleteTopic?.(topic, module);
                                                }
                                            }}
                                            title={isDone ? 'Completed' : 'Mark as Completed (+1 XP)'}
                                            aria-label={isDone ? `${topic.title} completed` : `Mark ${topic.title} as completed`}
                                            className={`shrink-0 p-1 -m-1 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                                                isDone
                                                    ? 'cursor-default text-emerald-500 dark:text-emerald-400'
                                                    : 'cursor-pointer hover:scale-110 active:scale-95 text-[#D8D1EE] dark:text-slate-600 hover:text-emerald-500 dark:hover:text-emerald-400'
                                            }`}
                                        >
                                            {isDone ? (
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.35)] animate-in zoom-in-75 duration-300" />
                                            ) : (
                                                <Circle className="w-5 h-5 transition-colors" />
                                            )}
                                        </button>

                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-[#1E1B4B] dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                                                {idx + 1}. {topic.title}
                                            </p>
                                            {topic.description && (
                                                <p className="text-[11px] text-[#64748B] dark:text-slate-400 mt-0.5 line-clamp-1">
                                                    {topic.description}
                                                </p>
                                            )}
                                        </div>

                                        <div className="hidden sm:flex items-center gap-2 shrink-0">
                                            {topic.estimatedMinutes && (
                                                <span className="text-[10px] text-[#64748B] dark:text-slate-400 flex items-center gap-1 font-semibold">
                                                    <Clock className="w-3 h-3" />
                                                    {topic.estimatedMinutes}m
                                                </span>
                                            )}
                                            <Badge
                                                variant={
                                                    topic.difficulty === 'advanced'
                                                        ? 'hard'
                                                        : topic.difficulty === 'intermediate'
                                                            ? 'medium'
                                                            : 'easy'
                                                }
                                            >
                                                {topic.difficulty}
                                            </Badge>
                                        </div>

                                        <BookOpen className="w-4 h-4 text-[#64748B] dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 shrink-0 transition-colors" />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ModuleAccordion;
