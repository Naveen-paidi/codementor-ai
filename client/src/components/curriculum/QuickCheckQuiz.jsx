/**
 * Interactive MCQ quiz with instant feedback and explanations.
 * Location: client/src/components/curriculum/QuickCheckQuiz.jsx
 */
import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from 'lucide-react';

export const QuickCheckQuiz = ({ quiz, index = 0 }) => {
    const [selected, setSelected] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const isCorrect = submitted && selected === quiz.correctAnswer;

    const handleSelect = (i) => {
        if (submitted) return;
        setSelected(i);
    };

    const handleReset = () => {
        setSelected(null);
        setSubmitted(false);
    };

    return (
        <div className="rounded-2xl border border-[#DCE8E8] bg-gradient-to-br from-[#ECFDF5]/60 via-white to-[#F5FAFA] p-5 sm:p-6 shadow-xs">
            <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#0F766E] shrink-0">
                    <HelpCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                    <p className="text-[11px] font-bold text-[#0F766E] uppercase tracking-wider mb-1">
                        Quick Check {index + 1}
                    </p>
                    <p className="text-sm font-semibold text-[#172B3A] leading-relaxed">
                        {quiz.question}
                    </p>
                </div>
            </div>

            <div className="space-y-2 mt-3">
                {quiz.options?.map((opt, i) => {
                    const isSelected = selected === i;
                    const isAnswer = i === quiz.correctAnswer;

                    let cls =
                        'border-[#DCE8E8] bg-white hover:border-[#0F766E]/40 hover:bg-[#ECFDF5]/30 text-[#172B3A]';

                    if (submitted) {
                        if (isAnswer) {
                            cls =
                                'border-[#10B981] bg-[#ECFDF5] text-[#064E52] font-semibold shadow-xs';
                        } else if (isSelected && !isAnswer) {
                            cls = 'border-rose-400 bg-rose-50 text-rose-900';
                        } else {
                            cls = 'border-[#DCE8E8] bg-white text-[#64748B] opacity-60';
                        }
                    } else if (isSelected) {
                        cls = 'border-[#0F766E] bg-[#ECFDF5] text-[#064E52] font-semibold ring-2 ring-[#10B981]/30';
                    }

                    return (
                        <button
                            key={i}
                            onClick={() => handleSelect(i)}
                            disabled={submitted}
                            className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${cls}`}
                        >
                            <span className="flex items-center gap-3">
                                <span
                                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] shrink-0 ${submitted && isAnswer
                                            ? 'bg-[#10B981] text-white'
                                            : submitted && isSelected
                                                ? 'bg-rose-500 text-white'
                                                : isSelected
                                                    ? 'bg-[#0F766E] text-white'
                                                    : 'bg-slate-100 text-[#64748B]'
                                        }`}
                                >
                                    {String.fromCharCode(65 + i)}
                                </span>
                                <span>{opt}</span>
                            </span>
                            {submitted && isAnswer && (
                                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                            )}
                            {submitted && isSelected && !isAnswer && (
                                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="flex items-center gap-2 mt-4">
                {!submitted ? (
                    <button
                        onClick={() => setSubmitted(true)}
                        disabled={selected === null}
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#10B981] hover:bg-[#059669] disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white transition-colors cursor-pointer shadow-xs"
                    >
                        Check Answer
                    </button>
                ) : (
                    <>
                        <div
                            className={`flex-1 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 ${isCorrect
                                    ? 'bg-[#ECFDF5] text-[#064E52] border border-[#A7F3D0]'
                                    : 'bg-rose-100 text-rose-800 border border-rose-200'
                                }`}
                        >
                            {isCorrect ? (
                                <>
                                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                                    Correct! Well done.
                                </>
                            ) : (
                                <>
                                    <XCircle className="w-4 h-4 text-rose-500" />
                                    Not quite. Review the explanation below.
                                </>
                            )}
                        </div>
                        <button
                            onClick={handleReset}
                            className="px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-[#DCE8E8] text-[#172B3A] hover:bg-[#F5FAFA] transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                            <RotateCcw className="w-3.5 h-3.5 text-[#64748B]" />
                            Retry
                        </button>
                    </>
                )}
            </div>

            {submitted && quiz.explanation && (
                <div className="mt-3 p-3.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs text-[#064E52] leading-relaxed">
                    <span className="font-bold block mb-1 text-[#0F766E]">💡 Explanation:</span>
                    {quiz.explanation}
                </div>
            )}
        </div>
    );
};

export default QuickCheckQuiz;
