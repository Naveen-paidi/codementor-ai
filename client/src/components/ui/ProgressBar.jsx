import React from 'react';
import { cn } from '../../utils/cn.js';

export const ProgressBar = ({
  value = 0,
  max = 100,
  label,
  showPercentage = true,
  color = 'emerald',
  size = 'md',
  className
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const colorVariants = {
    emerald: 'bg-[#10B981]',
    teal: 'bg-[#0F766E]',
    sky: 'bg-[#3B82F6]',
    amber: 'bg-[#F59E0B]',
    rose: 'bg-[#EF4444]',
    gradient: 'bg-gradient-to-r from-[#064E52] via-[#0F766E] to-[#10B981]'
  };

  const sizeVariants = {
    xs: 'h-1',
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };

  return (
    <div className={cn('w-full space-y-1.5', className)}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between text-xs">
          {label && <span className="font-medium text-[#172B3A]">{label}</span>}
          {showPercentage && <span className="font-semibold text-[#64748B]">{percentage}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-[#ECFDF5] rounded-full overflow-hidden border border-[#DCE8E8]', sizeVariants[size])}>
        <div
          className={cn('h-full transition-all duration-500 ease-out rounded-full', colorVariants[color] || colorVariants.emerald)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
