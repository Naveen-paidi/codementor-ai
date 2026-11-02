import React from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function DecorativeVideoCard({
  filename = 'codementor_hub.mp4',
  badgeText = 'Interactive Engine',
  footerTag = 'Active Track',
  footerBadge = 'Adaptive AI Learning'
}) {
  const { isDark } = useTheme();

  return (
    <div className="relative pointer-events-none select-none w-full">
      <div
        className={`p-2.5 rounded-3xl transition-all duration-300 shadow-xl ${
          isDark
            ? 'bg-[#030617] border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.25)]'
            : 'bg-gradient-to-tr from-[#F7F5FC] to-white border border-[#D8D1EE] shadow-[0_12px_30px_rgba(139,92,246,0.15)]'
        }`}
      >
        {/* Video Header Strip */}
        <div className="px-3 py-2 flex items-center justify-between text-xs font-bold text-[#64748B] dark:text-slate-400 mb-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span className="font-mono text-[11px] text-indigo-600 dark:text-cyan-400">
              {filename}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/20">
              <Sparkles className="w-2.5 h-2.5" />
              {badgeText}
            </span>
          </div>
        </div>

        {/* Video Player Frame (Pure Visual Display) */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner pointer-events-none">
          <video
            src="/Video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover pointer-events-none select-none"
          />

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white font-semibold pointer-events-none">
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>{footerBadge}</span>
            </div>
            <span className="text-cyan-300 font-mono text-[10px]">{footerTag}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

