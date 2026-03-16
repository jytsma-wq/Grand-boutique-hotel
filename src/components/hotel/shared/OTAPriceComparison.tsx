'use client';

import { motion } from 'framer-motion';
import { TrendingDown, CheckCircle } from 'lucide-react';
import CurrencyDisplay from './CurrencyDisplay';

interface OTAPriceComparisonProps {
  directPrice: number;
  otaPrice: number;
  className?: string;
}

export default function OTAPriceComparison({ 
  directPrice, 
  otaPrice,
  className = '' 
}: OTAPriceComparisonProps) {
  const savings = otaPrice - directPrice;
  const savingsPercent = Math.round((savings / otaPrice) * 100);

  if (savings <= 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-r from-charcoal-50 to-gold-50 rounded-xl p-4 border border-charcoal-100 ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <TrendingDown className="w-5 h-5 text-charcoal-600" />
        <span className="text-sm font-semibold text-charcoal-700">Book Direct & Save</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-3">
        <div className="text-center">
          <div className="text-xs text-charcoal-500 uppercase tracking-wide mb-1">OTA Price</div>
          <div className="text-lg text-charcoal-400 line-through">
            ${otaPrice.toLocaleString()}
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gold-600 uppercase tracking-wide mb-1">Direct Price</div>
          <CurrencyDisplay usdAmount={directPrice} showBoth={false} size="lg" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 bg-charcoal-100 rounded-full py-2 px-4">
        <CheckCircle className="w-4 h-4 text-charcoal-600" />
        <span className="text-sm font-medium text-charcoal-700">
          Save ${savings} ({savingsPercent}%)
        </span>
      </div>

      <div className="mt-3 text-xs text-center text-charcoal-500">
        Best price guaranteed when booking direct
      </div>
    </motion.div>
  );
}
