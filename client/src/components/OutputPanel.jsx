import React, { useState } from 'react';
import { Terminal, Clock, CheckCircle2, AlertTriangle, CornerDownLeft } from 'lucide-react';
import Badge from './ui/Badge.jsx';

export const OutputPanel = ({ output, executionTime, exitCode, isRunning, error, stdin, onStdinChange }) => {
  const [activeTab, setActiveTab] = useState('stdout'); // 'stdout' | 'stdin'

  return (
    <div className="flex flex-col bg-white border border-[#DCE8E8] rounded-2xl overflow-hidden h-full min-h-[220px] shadow-xs">
      {/* Header with Tabs & Meta */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#F5FAFA] border-b border-[#DCE8E8] text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('stdout')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
              activeTab === 'stdout'
                ? 'bg-white text-[#0F766E] border border-[#DCE8E8] shadow-2xs font-bold'
                : 'text-[#64748B] hover:text-[#172B3A]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-[#0F766E]" />
            Console Output
          </button>
          <button
            onClick={() => setActiveTab('stdin')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
              activeTab === 'stdin'
                ? 'bg-white text-[#0F766E] border border-[#DCE8E8] shadow-2xs font-bold'
                : 'text-[#64748B] hover:text-[#172B3A]'
            }`}
          >
            <CornerDownLeft className="w-3.5 h-3.5 text-[#0F766E]" />
            Custom Input (stdin)
            {stdin && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />}
          </button>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center gap-2">
          {executionTime !== undefined && (
            <div className="flex items-center gap-1 text-[11px] text-[#64748B] font-mono">
              <Clock className="w-3 h-3 text-[#64748B]" />
              <span>{executionTime}ms</span>
            </div>
          )}

          {exitCode !== undefined && (
            <Badge variant={exitCode === 0 ? 'emerald' : 'rose'}>
              {exitCode === 0 ? 'Exit 0' : `Exit ${exitCode}`}
            </Badge>
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="flex-1 p-4 font-mono text-xs overflow-auto bg-[#041F20] text-[#E2E8F0] selection:bg-[#0F766E]">
        {activeTab === 'stdin' ? (
          <div className="h-full flex flex-col font-sans">
            <label className="text-[11px] text-[#A7F3D0] mb-1.5 block font-medium">
              Pass standard input (stdin) arguments to your program:
            </label>
            <textarea
              value={stdin}
              onChange={(e) => onStdinChange(e.target.value)}
              placeholder="e.g. 10 20 or multiline input"
              className="w-full flex-1 min-h-[120px] bg-[#031516] border border-[#064E52] rounded-xl p-3 text-[#E2E8F0] focus:outline-none focus:border-[#10B981] font-mono text-xs resize-none"
            />
          </div>
        ) : (
          <div>
            {isRunning ? (
              <div className="flex items-center gap-2 text-[#A7F3D0] animate-pulse font-sans">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                Executing code in sandboxed runtime...
              </div>
            ) : error ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#EF4444] font-semibold font-sans">
                  <AlertTriangle className="w-4 h-4 text-[#EF4444] shrink-0" />
                  Execution / Compilation Error:
                </div>
                <pre className="text-rose-300 bg-rose-950/40 border border-rose-900/50 p-3 rounded-xl whitespace-pre-wrap leading-relaxed">
                  {error}
                </pre>
              </div>
            ) : output ? (
              <pre className="text-[#34D399] whitespace-pre-wrap leading-relaxed">
                {output}
              </pre>
            ) : (
              <div className="text-[#64748B] italic font-sans text-xs">
                Press "Run" to test execution or "Submit" to validate hidden test cases.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputPanel;
