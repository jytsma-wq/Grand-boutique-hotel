'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';

interface TopBarProps {
  locale: 'tr' | 'en' | 'ka' | 'ru' | 'he' | 'ar';
}

const localeFlags: Record<Locale, string> = {
  en: '/flags/gb.svg',
  ka: '/flags/ge.svg',
  ru: '/flags/ru.svg',
  tr: '/flags/tr.svg',
  he: '/flags/il.svg',
  ar: '/flags/sa.svg',
};

export default function TopBar({ locale }: TopBarProps) {
  const t = useTranslations('common');
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    const localePrefix = `/${locale}`;
    const currentPath = pathname.startsWith(localePrefix)
      ? pathname.slice(localePrefix.length) || '/'
      : pathname;
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <div className="bg-charcoal-950 text-cream-100 py-2 text-xs border-b border-brass-600/30">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        
        {/* Left: Location Link */}
        <Link 
          href={`/${locale}/location`} 
          className="flex items-center gap-2 hover:text-brass-400 transition-colors duration-300"
        >
          <MapPin size={14} className="text-brass-500" />
          <span>Batumi, Georgia</span>
        </Link>

        {/* Center: Language Bar */}
        <div className="flex items-center gap-1">
          {locales.map((loc) => (
            <button
              key={loc}
              type="button"
              aria-label={`Switch language to ${localeNames[loc]}`}
              aria-pressed={loc === locale}
              onClick={() => switchLocale(loc)}
              className={`flex items-center gap-1.5 px-2 py-1 rounded transition-all duration-200 ${
                loc === locale 
                  ? 'bg-brass-500/20 text-brass-400' 
                  : 'text-cream-100/60 hover:text-cream-100 hover:bg-white/5'
              }`}
            >
              <img 
                src={localeFlags[loc]} 
                alt="" 
                width={16}
                height={12}
                className="w-4 h-3 object-cover rounded-sm"
              />
              <span className="text-[10px] uppercase tracking-wider">{loc}</span>
            </button>
          ))}
        </div>

        {/* Center Divider */}
        <div className="hidden md:block text-brass-500/50">|</div>

        {/* Right: Contact Links */}
        <div className="flex items-center gap-4">
          <Link 
            href={`/${locale}/contact`} 
            className="flex items-center gap-2 hover:text-brass-400 transition-colors duration-300"
          >
            <Mail size={14} className="text-brass-500" />
            <span>{t('contact') || 'Contact'}</span>
          </Link>
          
          <a 
            href="tel:+995422000000" 
            className="flex items-center gap-2 hover:text-brass-400 transition-colors duration-300"
          >
            <Phone size={14} className="text-brass-500" />
            <span>+995 422 00 00 00</span>
          </a>
        </div>
      </div>
    </div>
  );
}






