'use client';

import Link from 'next/link';
import { type Locale } from '@/i18n/config';
import { hotel } from '@/lib/site';
import { MobileLanguageSwitcher } from './LanguageSwitcher';
import { type NavLink } from './types';

interface MobileMenuProps {
  locale: Locale;
  hotelName: string;
  navLinks: NavLink[];
  isOpen: boolean;
  bookNowLabel: string;
  contactLabel: string;
  onClose: () => void;
  onSwitchLocale: (locale: Locale) => void;
}

export default function MobileMenu({
  locale,
  hotelName,
  navLinks,
  isOpen,
  bookNowLabel,
  contactLabel,
  onClose,
  onSwitchLocale,
}: MobileMenuProps) {
  if (!isOpen) return null;

  const switchAndClose = (newLocale: Locale) => {
    onSwitchLocale(newLocale);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-40 overflow-y-auto bg-charcoal-950 px-6 pb-10 pt-28 text-white xl:hidden"
      id="mobile-navigation"
    >
      <div className="luxury-container">
        <div className="mb-8 border-b border-white/12 pb-6">
          <p className="font-serif text-4xl">{hotelName}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/50">{hotel.address.locality}, {hotel.address.countryName}</p>
        </div>

        {navLinks.map((link) => (
          <div key={link.href} className="border-b border-white/10">
            <Link
              href={`/${locale}${link.href}`}
              onClick={onClose}
              className="block py-4 font-serif text-3xl text-white transition-colors hover:text-brass-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
            >
              {link.label}
            </Link>
            {link.children?.map((child) => (
              <Link
                key={child.href}
                href={`/${locale}${child.href}`}
                onClick={onClose}
                className="ml-1 block pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
              >
                {child.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href="https://mediator.com.ge/"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button"
          >
            <span>{bookNowLabel}</span>
          </a>
          <Link
            href={`/${locale}/contact`}
            onClick={onClose}
            className="luxury-button-outline luxury-button-outline-light border-white/30 text-white"
          >
            <span>{contactLabel}</span>
          </Link>
        </div>

        <MobileLanguageSwitcher locale={locale} onSwitchLocale={switchAndClose} />
      </div>
    </div>
  );
}
