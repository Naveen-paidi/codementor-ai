import React from 'react';
import { cn } from '../../utils/cn.js';
import { Loader2 } from 'lucide-react';

export const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98] cursor-pointer';

  const variants = {
    primary: `
      bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 text-white
      shadow-[0_8px_20px_rgba(99,102,241,0.25)] border border-indigo-400/30 focus:ring-indigo-500
      dark:from-cyan-500 dark:via-indigo-500 dark:to-purple-600 dark:hover:from-cyan-400 dark:hover:to-purple-500
      dark:shadow-[0_0_22px_rgba(6,182,212,0.45)] dark:border-cyan-300/40 dark:focus:ring-cyan-400
    `,
    clay: `
      bg-gradient-to-b from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white
      shadow-[0_10px_22px_rgba(139,92,246,0.35),inset_0_-3px_4px_rgba(0,0,0,0.2),inset_0_2px_3px_rgba(255,255,255,0.4)]
      border border-purple-400/40 rounded-2xl
      dark:bg-gradient-to-r dark:from-cyan-500 dark:to-indigo-600 dark:shadow-[0_0_25px_rgba(6,182,212,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)]
    `,
    neon: `
      bg-[#070B20] text-cyan-300 border border-cyan-400/60 hover:bg-cyan-950/40 hover:text-white
      shadow-[0_0_20px_rgba(6,182,212,0.35)] focus:ring-cyan-400
      dark:shadow-[0_0_30px_rgba(6,182,212,0.5)]
    `,
    teal: `
      bg-[#0F766E] hover:bg-[#064E52] text-white shadow-md shadow-teal-700/20 border border-teal-600 focus:ring-[#0F766E]
      dark:bg-teal-600 dark:hover:bg-teal-500 dark:shadow-[0_0_20px_rgba(20,184,166,0.4)]
    `,
    sky: `
      bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-md shadow-sky-600/25 border border-sky-400/40 focus:ring-sky-500
      dark:bg-sky-500 dark:hover:bg-sky-400 dark:shadow-[0_0_20px_rgba(14,165,233,0.4)]
    `,
    secondary: `
      bg-purple-100/70 hover:bg-purple-200/80 text-purple-900 border border-purple-200/90 focus:ring-purple-400
      dark:bg-[#10152E] dark:hover:bg-[#151C3E] dark:text-cyan-300 dark:border-cyan-500/30 dark:focus:ring-cyan-400
    `,
    outline: `
      bg-white/90 hover:bg-[#F7F5FC] text-[#1E1B4B] border border-[#D8D1EE] hover:border-purple-400/60
      shadow-[0_2px_8px_rgba(139,92,246,0.06)] focus:ring-indigo-400
      dark:bg-[#070B20]/90 dark:hover:bg-[#10152E] dark:text-slate-100 dark:border-white/10 dark:hover:border-cyan-400/60
      dark:shadow-[0_0_15px_rgba(6,182,212,0.15)]
    `,
    ghost: `
      bg-transparent hover:bg-purple-100/50 text-[#1E1B4B] hover:text-purple-900 focus:ring-purple-400
      dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-cyan-300
    `,
    success: `
      bg-[#10B981] hover:bg-[#059669] text-white shadow-md shadow-emerald-600/20 border border-emerald-500/40 focus:ring-emerald-500
      dark:shadow-[0_0_20px_rgba(16,185,129,0.35)]
    `,
    danger: `
      bg-[#EF4444] hover:bg-[#DC2626] text-white shadow-md shadow-red-500/20 border border-red-500 focus:ring-red-500
      dark:shadow-[0_0_20px_rgba(239,68,68,0.35)]
    `,
    glow: `
      bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white
      shadow-[0_8px_25px_rgba(139,92,246,0.35)] border border-purple-400/40
      dark:shadow-[0_0_30px_rgba(139,92,246,0.6)]
    `
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-4.5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
    icon: 'p-2.5'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        leftIcon && <span className="flex-shrink-0">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;
