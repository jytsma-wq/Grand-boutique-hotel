'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { locales, type Locale } from '@/i18n/config';

interface TopBarProps {
  locale: Locale;
}

const flagImages: Record<string, string> = {
  en: '/flags/gb.svg',
  ka: '/flags/ge.svg',
  ru: '/flags/ru.svg',
  tr: '/flags/tr.svg',
  he: '/flags/il.svg',
  ar: '/flags/sa.svg',
};

export default function TopBar({ locale }: TopBarProps) {
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    window.location.assign(newPath);
  };

  return (
    <div className="bg-forest-900 text-white/80 text-[10px] uppercase tracking-[0.15em] border-b border-forest-800">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-10">
          
          {/* Left: Contact Info - Always Visible */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-brass-300 hover:text-brass-200 transition-colors">
              <MapPin size={10} strokeWidth={1.5} />
              <span className="hidden sm:inline">Rustaveli Ave 123, Batumi</span>
              <span className="sm:hidden">Batumi</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-brass-300 hover:text-brass-200 transition-colors">
              <Phone size={10} strokeWidth={1.5} />
              <a href="tel:+995422000000" className="hover:text-brass-200">+995 422 00 00 00</a>
            </div>
          </div>

          {/* Right: Email + Language */}
          <div className="flex items-center gap-4 md:gap-6">
            <a 
              href="mailto:info@batumiboutique.com" 
              className="hidden md:flex items-center gap-2 text-brass-300 hover:text-brass-200 transition-colors"
            >
              <Mail size={10} strokeWidth={1.5} />
              <span>info@batumiboutique.com</span>
            </a>

            {/* Language Switcher with Flags */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 hover:text-brass-400 transition-colors"
              >
                {locale === 'en' && (
                  <img src="/flags/gb.svg" alt="EN" className="w-4 h-3 object-cover" />
                )}
                {locale === 'ka' && (
                  <img src="/flags/ge.svg" alt="KA" className="w-4 h-3 object-cover" />
                )}
                {locale === 'ru' && (
                  <img src="/flags/ru.svg" alt="RU" className="w-4 h-3 object-cover" />
                )}
                {locale === 'tr' && (
                  <img src="/flags/tr.svg" alt="TR" className="w-4 h-3 object-cover" />
                )}
                {locale === 'he' && (
                  <img src="/flags/il.svg" alt="HE" className="w-4 h-3 object-cover" />
                )}
                {locale === 'ar' && (
                  <img src="/flags/sa.svg" alt="AR" className="w-4 h-3 object-cover" />
                )}
                <span>{locale.toUpperCase()}</span>
                <ChevronDown size={8} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 bg-forest-900 border border-forest-700 shadow-xl min-w-[140px] z-[120]"
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => { switchLocale(loc); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] hover:bg-forest-800 transition-colors ${
                          loc === locale ? 'text-brass-300 bg-forest-800' : 'text-white/80'
                        }`}
                      >
                        {loc === 'en' && (
                          <img src="/flags/gb.svg" alt="EN" className="w-4 h-3 object-cover" />
                        )}
                        {loc === 'ka' && (
                          <img src="/flags/ge.svg" alt="KA" className="w-4 h-3 object-cover" />
                        )}
                        {loc === 'ru' && (
                          <img src="/flags/ru.svg" alt="RU" className="w-4 h-3 object-cover" />
                        )}
                        {loc === 'tr' && (
                          <img src="/flags/tr.svg" alt="TR" className="w-4 h-3 object-cover" />
                        )}
                        {loc === 'he' && (
                          <img src="/flags/il.svg" alt="HE" className="w-4 h-3 object-cover" />
                        )}
                        {loc === 'ar' && (
                          <img src="/flags/sa.svg" alt="AR" className="w-4 h-3 object-cover" />
                        )}
                        <span>{loc.toUpperCase()}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
