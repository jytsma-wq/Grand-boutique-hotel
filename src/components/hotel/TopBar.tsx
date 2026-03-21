import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/config';

interface TopBarProps {
  locale: Locale;
}

export default function TopBar({ locale }: TopBarProps) {
  const t = useTranslations('common');

  return (
    <div className="bg-charcoal-900 text-cream-100 py-2 text-xs border-b border-brass-600/30">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        
        {/* Left: Location Link */}
        <Link 
          href="/location" 
          className="flex items-center gap-2 hover:text-brass-400 transition-colors duration-300"
        >
          <MapPin size={14} className="text-brass-500" />
          <span>Batumi, Georgia</span>
        </Link>

        {/* Center Divider */}
        <div className="hidden md:block text-brass-500/50">|</div>

        {/* Right: Contact Links */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
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
