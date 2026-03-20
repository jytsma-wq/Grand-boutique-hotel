'use client';

import { useState, useEffect } from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { type Locale } from '@/i18n/config';

interface PromotionalPopupProps {
  locale: Locale;
}

export default function PromotionalPopup({ locale }: PromotionalPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

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

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="relative bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-emerald-900" />
              </button>

              {/* Image */}
              <div className="relative h-48 sm:h-56">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                  alt="Special Offer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-brass-500 text-emerald-950 px-4 py-2 rounded-full text-sm font-semibold">
                  <Gift className="w-4 h-4" />
                  Special Offer
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-emerald-900 mb-2">
                  Book Direct & Save 20%
                </h3>
                <p className="text-emerald-600 mb-6">
                  Reserve your stay directly through our website and enjoy exclusive benefits:
                  complimentary breakfast, free room upgrade (subject to availability), 
                  and late checkout on request.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/${locale}/booking`} onClick={closePopup} className="flex-1">
                    <Button className="w-full btn-telegraph">
                      <span>Book Now</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    onClick={closePopup}
                    className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  >
                    Maybe Later
                  </Button>
                </div>

                <p className="text-center text-xs text-emerald-400 mt-4">
                  *Valid for new bookings only. Terms apply.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
