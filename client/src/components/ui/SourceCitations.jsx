import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, ExternalLink, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export const SourceCitations = ({ sources = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!Array.isArray(sources) || sources.length === 0) {
    return null;
  }

  // Deduplicate sources by title
  const uniqueSources = [];
  const seen = new Set();
  for (const s of sources) {
    const key = (s.title || s.sourceName || '').toLowerCase().trim();
    if (!seen.has(key)) {
      seen.add(key);
      uniqueSources.push(s);
    }
  }

  const hasLiveDb = uniqueSources.some(s => s.sourceType === 'LIVE_DATABASE');

  return (
    <div className="mt-2 pt-2 border-t border-[#A7F3D0]/60 text-xs">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-medium text-[#0F766E] hover:text-[#064E52] transition-colors py-1 cursor-pointer"
      >
        <span className="flex items-center gap-1.5">
          {hasLiveDb ? (
            <Database className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
          ) : (
            <BookOpen className="w-3.5 h-3.5 text-[#0F766E]" />
          )}
          <span>Sources used ({uniqueSources.length})</span>
          {hasLiveDb && (
            <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full font-mono">
              Live Verified DB
            </span>
          )}
        </span>
        {isOpen ? (
          <ChevronUp className="w-3.5 h-3.5 text-[#0F766E]" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-[#0F766E]" />
        )}
      </button>

      {isOpen && (
        <div className="mt-1.5 space-y-1.5 pl-2 pr-1 py-1.5 bg-white/70 rounded-lg border border-[#A7F3D0]/50 text-[11px]">
          {uniqueSources.map((source, index) => {
            const isLive = source.sourceType === 'LIVE_DATABASE';
            const isCurriculum = source.sourceType === 'INTERNAL_CURRICULUM';

            return (
              <div
                key={source.id || index}
                className="flex items-start justify-between gap-2 py-0.5 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <CheckCircle2
                    className={`w-3 h-3 shrink-0 ${
                      isLive ? 'text-amber-600' : isCurriculum ? 'text-indigo-600' : 'text-emerald-600'
                    }`}
                  />
                  <span className="font-medium text-[#172B3A] truncate">
                    {source.title}
                  </span>
                  {source.sourceName && (
                    <span className="text-gray-500 text-[10px] shrink-0">
                      • {source.sourceName}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-mono uppercase ${
                      isLive
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : isCurriculum
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    {isLive ? 'Live DB' : isCurriculum ? 'Curriculum' : 'Official Doc'}
                  </span>
                  {source.sourceUrl && (
                    <a
                      href={source.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F766E] hover:text-[#064E52] p-0.5"
                      title="Open reference source"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SourceCitations;

