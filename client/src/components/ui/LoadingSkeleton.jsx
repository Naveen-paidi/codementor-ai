import React from 'react';
import { cn } from '../../utils/cn.js';

export const LoadingSkeleton = ({ className, variant = 'text', count = 1 }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full w-10 h-10';
      case 'card':
        return 'rounded-2xl h-40 w-full';
      case 'button':
        return 'rounded-xl h-10 w-28';
      case 'title':
        return 'rounded-md h-6 w-3/4';
      case 'text':
      default:
        return 'rounded-md h-4 w-full';
    }
  };

  const skeletons = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className={cn(
        'skeleton',
        getVariantStyles(),
        className
      )}
    />
  ));

  if (count === 1) return skeletons[0];

  return <div className="space-y-2.5 w-full">{skeletons}</div>;
};

export default LoadingSkeleton;
