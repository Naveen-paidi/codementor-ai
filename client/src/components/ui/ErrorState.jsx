import React from 'react';
import { cn } from '../../utils/cn.js';
import Button from './Button.jsx';
import { AlertCircle, RefreshCw } from 'lucide-react';

export const ErrorState = ({
  title = 'Something went wrong',
  message = 'We encountered an error loading this content. Please try again.',
  onRetry,
  className
}) => {
  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center bg-rose-50/50 rounded-2xl border border-rose-200', className)}>
      <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 mb-4">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-600 max-w-sm mb-5 leading-relaxed">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" size="sm" leftIcon={<RefreshCw className="w-3.5 h-3.5" />}>
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
