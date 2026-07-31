'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { localeNames, locales, type Locale } from '@/i18n/config';
import { flagImages } from './types';

interface LanguageSwitcherProps {
  locale: Locale;
  isTransparent: boolean;
  onSwitchLocale: (locale: Locale) => void;
}

interface MobileLanguageSwitcherProps {
  locale: Locale;
  onSwitchLocale: (locale: Locale) => void;
}

export function LanguageSwitcher({ locale, isTransparent, onSwitchLocale }: LanguageSwitcherProps) {
  const tAccessibility = useTranslations('accessibility');
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={langRef}>
      <button
        type="button"
        aria-label={tAccessibility('changeLanguage')}
        aria-expanded={langOpen}
        aria-haspopup="menu"
        onClick={() => setLangOpen(!langOpen)}
        className={`flex min-h-11 items-center gap-2 px-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
          isTransparent ? 'text-white/75 hover:text-white' : 'text-forest-800/75 hover:text-forest-950'
        }`}
      >
        <img src={flagImages[locale]} alt="" width={20} height={16} className="h-4 w-5 object-cover" />
        <span>{locale.toUpperCase()}</span>
        <ChevronDown size={12} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
      </button>
      {langOpen && (
        <div className="absolute right-0 top-full z-50 mt-3 min-w-44 border border-forest-200 bg-cream-50 p-2 text-forest-950 shadow-2xl" role="menu">
          {locales.map((loc) => (
            <button
              type="button"
              key={loc}
              role="menuitem"
              aria-label={tAccessibility('switchLanguageTo', { language: localeNames[loc] })}
              onClick={() => {
                onSwitchLocale(loc);
                setLangOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-forest-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
                loc === locale ? 'text-brass-700' : 'text-forest-800'
              }`}
            >
              <img src={flagImages[loc]} alt="" width={20} height={16} className="h-4 w-5 object-cover" />
              <span>{localeNames[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileLanguageSwitcher({ locale, onSwitchLocale }: MobileLanguageSwitcherProps) {
  const tAccessibility = useTranslations('accessibility');
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  return (
    <div className="mt-8 border-t border-white/12 pt-6">
      <button
        type="button"
        aria-label={tAccessibility('changeLanguage')}
        aria-expanded={mobileLangOpen}
        aria-haspopup="menu"
        onClick={() => setMobileLangOpen(!mobileLangOpen)}
        className="flex min-h-11 w-full items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
      >
        <span>{localeNames[locale]}</span>
        <ChevronDown size={16} className={`transition-transform ${mobileLangOpen ? 'rotate-180' : ''}`} />
      </button>
      {mobileLangOpen && (
        <div className="mt-4" role="menu">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {locales.map((loc) => (
              <button
                type="button"
                key={loc}
                role="menuitem"
                aria-label={tAccessibility('switchLanguageTo', { language: localeNames[loc] })}
                onClick={() => onSwitchLocale(loc)}
                className={`flex items-center gap-3 border border-white/10 px-4 py-3 text-left text-xs uppercase tracking-[0.16em] transition-colors hover:border-brass-400 hover:text-brass-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
                  loc === locale ? 'text-brass-300' : 'text-white/60'
                }`}
              >
                <img src={flagImages[loc]} alt="" width={20} height={16} className="h-4 w-5 object-cover" />
                <span>{loc.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
