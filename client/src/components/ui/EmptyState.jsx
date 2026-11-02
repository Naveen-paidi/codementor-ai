import React from 'react';
import { cn } from '../../utils/cn.js';
import Button from './Button.jsx';
import { Inbox } from 'lucide-react';

export const EmptyState = ({
  icon: Icon = Inbox,
  title = 'No items found',
  description = 'There are no items to display right now.',
  actionLabel,
  onAction,
  className
}) => {
  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center bg-white rounded-2xl border border-dashed border-slate-300', className)}>
      <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 max-w-sm mb-5 leading-relaxed">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary" size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
