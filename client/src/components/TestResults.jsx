import React, { useState } from 'react';
import { CheckCircle2, XCircle, EyeOff, Check, X, ShieldAlert } from 'lucide-react';
import Badge from './ui/Badge.jsx';

export const TestResults = ({ results = [], allPassed, passedCount, totalCount }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  if (!results || results.length === 0) return null;

  const currentResult = results[selectedIdx] || results[0];

  return (
    <div className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Header Summary */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          {allPassed ? (
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>All Test Cases Passed!</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
              <XCircle className="w-5 h-5 text-rose-600" />
              <span>Submission Incomplete ({passedCount}/{totalCount} Passed)</span>
            </div>
          )}
        </div>

        <Badge variant={allPassed ? 'emerald' : 'rose'}>
          {passedCount} / {totalCount} Passed
        </Badge>
      </div>

      {/* Test Case Selectors */}
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-100/60 border-b border-slate-200 overflow-x-auto">
        {results.map((r, idx) => (
          <button
            key={r.testCaseId || idx}
            onClick={() => setSelectedIdx(idx)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedIdx === idx
                ? 'bg-white text-slate-900 border border-slate-300 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            {r.passed ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <X className="w-3.5 h-3.5 text-rose-600" />
            )}
            <span>Case {idx + 1}</span>
            {r.isHidden && <EyeOff className="w-3 h-3 text-slate-400" />}
          </button>
        ))}
      </div>

      {/* Selected Test Case Details */}
      <div className="p-4 space-y-3 font-mono text-xs bg-white">
        {currentResult.isHidden ? (
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
            <EyeOff className="w-6 h-6 text-slate-400 mx-auto" />
            <p className="text-slate-800 font-semibold text-xs">Hidden Academic Test Case</p>
            <p className="text-slate-500 text-[11px] max-w-sm mx-auto">
              This test case evaluates boundary conditions, extreme numerical values, or memory limits.
            </p>
            <div className="mt-2">
              <Badge variant={currentResult.passed ? 'emerald' : 'rose'}>
                {currentResult.passed ? 'Passed Hidden Case' : 'Failed Hidden Case'}
              </Badge>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Expected Output */}
            <div>
              <span className="text-[11px] text-slate-600 font-sans font-medium block mb-1">Expected Output:</span>
              <pre className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 overflow-x-auto">
                {currentResult.expectedOutput}
              </pre>
            </div>

            {/* Actual Output */}
            <div>
              <span className="text-[11px] text-slate-600 font-sans font-medium block mb-1">Your Output:</span>
              <pre
                className={`p-3 rounded-xl border overflow-x-auto ${
                  currentResult.passed
                    ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50/60 border-rose-200 text-rose-900'
                }`}
              >
                {currentResult.actualOutput || '(No output produced)'}
              </pre>
            </div>
          </div>
        )}

        {currentResult.error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-sans">
            <span className="font-bold">Execution Error:</span> {currentResult.error}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestResults;
