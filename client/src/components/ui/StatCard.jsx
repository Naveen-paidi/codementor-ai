import React from 'react';
import { cn } from '../../utils/cn.js';
import Card from './Card.jsx';

export const StatCard = ({
  icon: Icon,
  label,
  value,
  subtitle,
  trend,
  trendPositive = true,
  color = 'blue',
  className
}) => {
  const colorSchemes = {
    purple: {
      bg: 'bg-purple-100/70 dark:bg-purple-950/40',
      text: 'text-purple-600 dark:text-purple-300',
      border: 'border-purple-200 dark:border-purple-500/30'
    },
    cyan: {
      bg: 'bg-cyan-100/70 dark:bg-cyan-950/40',
      text: 'text-cyan-600 dark:text-cyan-300',
      border: 'border-cyan-200 dark:border-cyan-500/30'
    },
    teal: {
      bg: 'bg-emerald-100/70 dark:bg-emerald-950/40',
      text: 'text-emerald-700 dark:text-emerald-300',
      border: 'border-emerald-200 dark:border-emerald-500/30'
    },
    emerald: {
      bg: 'bg-emerald-100/70 dark:bg-emerald-950/40',
      text: 'text-emerald-700 dark:text-emerald-300',
      border: 'border-emerald-200 dark:border-emerald-500/30'
    },
    sky: {
      bg: 'bg-sky-100/70 dark:bg-sky-950/40',
      text: 'text-sky-600 dark:text-sky-300',
      border: 'border-sky-200 dark:border-sky-500/30'
    },
    mint: {
      bg: 'bg-teal-100/70 dark:bg-teal-950/40',
      text: 'text-teal-700 dark:text-teal-300',
      border: 'border-teal-200 dark:border-teal-500/30'
    },
    amber: {
      bg: 'bg-amber-100/70 dark:bg-amber-950/40',
      text: 'text-amber-700 dark:text-amber-300',
      border: 'border-amber-200 dark:border-amber-500/30'
    },
    rose: {
      bg: 'bg-rose-100/70 dark:bg-rose-950/40',
      text: 'text-rose-600 dark:text-rose-300',
      border: 'border-rose-200 dark:border-rose-500/30'
    },
    blue: {
      bg: 'bg-indigo-100/70 dark:bg-indigo-950/40',
      text: 'text-indigo-600 dark:text-cyan-300',
      border: 'border-indigo-200 dark:border-indigo-500/30'
    }
  };

  const scheme = colorSchemes[color] || colorSchemes.blue;

  return (
    <Card className={cn('p-5 flex flex-col justify-between', className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">{label}</p>
          <p className="text-2xl font-black text-[#1E1B4B] dark:text-white tracking-tight">{value}</p>
        </div>
        {Icon && (
          <div className={cn('p-2.5 rounded-2xl border flex items-center justify-center shadow-xs transition-transform duration-300 hover:scale-110', scheme.bg, scheme.text, scheme.border)}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      {(subtitle || trend) && (
        <div className="mt-3 pt-3 border-t border-[#D8D1EE]/70 dark:border-white/10 flex items-center justify-between text-xs">
          {subtitle && <span className="text-[#64748B] dark:text-slate-400">{subtitle}</span>}
          {trend && (
            <span className={cn('font-semibold inline-flex items-center gap-1', trendPositive ? 'text-emerald-600 dark:text-cyan-400' : 'text-rose-600 dark:text-rose-400')}>
              {trend}
            </span>
          )}
        </div>
      )}
    </Card>
  );
};

export default StatCard;
