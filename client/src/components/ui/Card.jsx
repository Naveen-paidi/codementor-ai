import React from 'react';
import { cn } from '../../utils/cn.js';

export const Card = ({ children, className, hoverEffect = true, variant = 'default', ...props }) => {
  return (
    <div
      className={cn(
        'rounded-3xl p-6 transition-all duration-300 relative',
        variant === 'clay' ? 'clay-card-3d' :
        'bg-white dark:bg-[#070B20]/85 border border-[#D8D1EE] dark:border-white/10 text-[#1E1B4B] dark:text-[#F8FAFC] shadow-[0_12px_30px_rgba(139,92,246,0.08)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.5)] backdrop-blur-xl',
        hoverEffect && 'hover:-translate-y-1 hover:border-purple-300/80 dark:hover:border-cyan-500/40 hover:shadow-[0_18px_40px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
