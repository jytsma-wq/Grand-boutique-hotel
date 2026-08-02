'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { type Locale } from '@/i18n/config';
import { useTranslations } from 'next-intl';

interface PromotionalPopupProps {
  locale: Locale;
}

export default function PromotionalPopup({ locale }: PromotionalPopupProps) {
  const t = useTranslations('promotion');
  const [isVisible, setIsVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closePopup = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('popupShown');
    
    if (!popupShown) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return undefined;

    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsVisible(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isVisible]);

  return (
    <div>
      {isVisible && (
        <>
          {/* Backdrop */}
          <div
            aria-hidden="true"
            onClick={closePopup}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Popup */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="promotional-popup-title"
          >
            <div className="relative bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl">
              {/* Close Button */}
              <button
                ref={closeButtonRef}
                type="button"
                aria-label={t('close')}
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-900/40"
              >
                <X className="w-5 h-5 text-emerald-900" />
              </button>

              {/* Image */}
              <div className="relative h-48 sm:h-56">
                <Image
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                  alt=""
                  fill
                  sizes="(min-width: 640px) 512px, calc(100vw - 32px)"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-brass-500 text-emerald-950 px-4 py-2 rounded-full text-sm font-semibold">
                  <Gift className="w-4 h-4" />
                  {t('label')}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 id="promotional-popup-title" className="text-2xl font-semibold text-emerald-900 mb-2">
                  {t('title')}
                </h3>
                <p className="text-emerald-600 mb-6">
                  {t('description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1 btn-boutique">
                    <Link href={`/${locale}/booking`} onClick={closePopup}>
                      <span>{t('bookNow')}</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={closePopup}
                    className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  >
                    {t('maybeLater')}
                  </Button>
                </div>

                <p className="text-center text-xs text-emerald-400 mt-4">
                  *{t('terms')}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}







