'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { X, Gift, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface StickyBookBannerProps {
  locale: Locale;
}

export default function StickyBookBanner({ locale }: StickyBookBannerProps) {
  const tNav = useTranslations('nav');
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling past 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const benefits = [
    { icon: Gift, text: 'Free Breakfast' },
    { icon: Clock, text: 'Late Checkout' },
    { icon: Shield, text: 'Best Price' },
  ];

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-forest-900 text-cream-50 px-4 py-3 shadow-2xl border-t border-forest-700">
            <div className="flex items-center justify-between gap-4">
              {/* Benefits - scrollable on mobile */}
              <div className="flex-1 overflow-x-auto scrollbar-hide">
                <div className="flex items-center gap-4 min-w-max">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-forest-200">
                      <benefit.icon size={14} className="text-brass-400 flex-shrink-0" />
                      <span>{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link href={`/${locale}/booking`}>
                <Button className="btn-boutique px-6 py-2 text-sm whitespace-nowrap">
                  {tNav('bookNow')}
                </Button>
              </Link>

              {/* Dismiss Button */}
              <button
                type="button"
                aria-label="Dismiss booking banner"
                onClick={handleDismiss}
                className="p-1 text-forest-400 hover:text-cream-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}








