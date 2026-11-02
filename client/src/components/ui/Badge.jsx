import React from 'react';
import { cn } from '../../utils/cn.js';

export const Badge = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'bg-[#F7F5FC] dark:bg-[#10152E] text-[#1E1B4B] dark:text-slate-200 border-[#D8D1EE] dark:border-white/10',
    clay: 'bg-gradient-to-b from-white to-purple-50 text-purple-900 border-purple-200 shadow-[0_2px_6px_rgba(139,92,246,0.1),inset_0_-1px_2px_rgba(139,92,246,0.1)] dark:from-[#10152E] dark:to-[#070B20] dark:text-cyan-300 dark:border-cyan-500/30',
    neon: 'bg-[#070B20] text-cyan-300 border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.35)]',
    teal: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30 font-semibold',
    emerald: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30 font-semibold',
    sky: 'bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-500/30 font-semibold',
    mint: 'bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-500/30 font-semibold',
    amber: 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-500/30 font-semibold',
    rose: 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-500/30 font-semibold',
    purple: 'bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-500/30 font-semibold',
    indigo: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30 font-semibold',
    easy: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30 font-bold',
    medium: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/30 font-bold',
    hard: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-500/30 font-bold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border tracking-wide uppercase shadow-xs transition-colors',
        variants[variant] || variants.default,
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
