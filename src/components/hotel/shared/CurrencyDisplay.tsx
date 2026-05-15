'use client';

import { useState } from 'react';

interface CurrencyDisplayProps {
  usdAmount: number;
  showBoth?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Approximate exchange rate (in production, this should come from an API)
const USD_TO_GEL_RATE = 2.7;

export default function CurrencyDisplay({ 
  usdAmount, 
  showBoth = true, 
  className = '',
  size = 'md'
}: CurrencyDisplayProps) {
  const [showGel, setShowGel] = useState(false);

  const gelAmount = Math.round(usdAmount * USD_TO_GEL_RATE);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  if (!showBoth) {
    return (
      <span className={`font-semibold ${sizeClasses[size]} ${className}`}>
        ${usdAmount.toLocaleString()}
      </span>
    );
  }

  return (
    <div 
      className={`inline-flex items-center gap-2 ${className}`} >
      <span className={`font-semibold text-brass-600 ${sizeClasses[size]}`}>
        ${usdAmount.toLocaleString()}
      </span>
      <button
        type="button"
        aria-label={showGel ? 'Hide GEL price' : 'Show GEL price'}
        aria-pressed={showGel}
        onClick={() => setShowGel(!showGel)}
        className="text-xs text-forest-500 hover:text-brass-500 transition-colors underline decoration-dotted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
      >
        {showGel ? `₾${gelAmount.toLocaleString()}` : '+ GEL'}
      </button>
    </div>
  );
}

// Hook for currency conversion
export function useCurrency() {
  const convertToGel = (usd: number): number => {
    return Math.round(usd * USD_TO_GEL_RATE);
  };

  const formatPrice = (usd: number, showGel: boolean = false): string => {
    if (showGel) {
      return `₾${Math.round(usd * USD_TO_GEL_RATE).toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
  };

  return { convertToGel, formatPrice };
}








