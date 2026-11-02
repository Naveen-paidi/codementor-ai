import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext.jsx';

export const ThemeToggle = ({
  className = '',
  size = 'md',
  showLabel = false,
  variant = 'pill'
}) => {
  const { theme, isDark, toggleTheme } = useTheme();

  if (variant === 'button') {
    return (
      <button
        onClick={toggleTheme}
        className={`relative p-2 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
          isDark
            ? 'bg-[#10152E]/90 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
            : 'bg-white/90 text-amber-500 hover:text-amber-600 border border-purple-200/80 hover:border-purple-300 shadow-[0_4px_12px_rgba(139,92,246,0.12)]'
        } ${className}`}
        title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
        aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <Moon className="w-4 h-4 fill-cyan-400/20 text-cyan-400" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <Sun className="w-4 h-4 fill-amber-400/30 text-amber-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    );
  }

  // Dual-mode 3D interactive toggle pill
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center gap-2 p-1 rounded-full transition-all duration-300 cursor-pointer focus:outline-none select-none ${
        isDark
          ? 'bg-[#0A0F26] border border-cyan-500/30 hover:border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
          : 'bg-[#EAE5F6] border border-purple-300/60 hover:border-purple-400 shadow-[0_4px_14px_rgba(139,92,246,0.15),inset_0_-2px_4px_rgba(139,92,246,0.1)]'
      } ${className}`}
      aria-label={`Toggle theme (currently ${theme})`}
      title={`Switch to ${isDark ? 'Light 3D Clay' : 'Dark Neon Cinematic'} Mode`}
    >
      {/* Background track indicator */}
      <div className="relative flex items-center h-7 px-1 w-16 justify-between text-xs font-bold">
        {/* Sun side */}
        <span
          className={`z-10 flex items-center justify-center w-6 h-6 transition-colors duration-200 ${
            !isDark ? 'text-amber-500 font-extrabold' : 'text-slate-500'
          }`}
        >
          <Sun className="w-3.5 h-3.5" />
        </span>

        {/* Moon side */}
        <span
          className={`z-10 flex items-center justify-center w-6 h-6 transition-colors duration-200 ${
            isDark ? 'text-cyan-300 font-extrabold' : 'text-purple-400'
          }`}
        >
          <Moon className="w-3.5 h-3.5" />
        </span>

        {/* Floating 3D animated knob */}
        <motion.div
          className={`absolute top-0.5 bottom-0.5 w-7 rounded-full flex items-center justify-center shadow-md ${
            isDark
              ? 'bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.7)]'
              : 'bg-white text-amber-500 shadow-[0_2px_8px_rgba(139,92,246,0.25),inset_0_1px_2px_rgba(255,255,255,0.9)]'
          }`}
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          style={{
            left: isDark ? 'calc(100% - 1.85rem)' : '0.15rem'
          }}
        >
          {isDark ? (
            <Sparkles className="w-3 h-3 text-cyan-100" />
          ) : (
            <Sun className="w-3 h-3 fill-amber-400 text-amber-500" />
          )}
        </motion.div>
      </div>

      {showLabel && (
        <span
          className={`text-[11px] font-bold tracking-wider uppercase pr-2 transition-colors ${
            isDark ? 'text-cyan-300' : 'text-purple-900'
          }`}
        >
          {isDark ? 'Neon 3D' : 'Clay 3D'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;

