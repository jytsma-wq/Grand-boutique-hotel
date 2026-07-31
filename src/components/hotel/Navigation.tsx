'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { type Locale } from '@/i18n/config';
import { hotel } from '@/lib/site';
import { type SiteSettings } from '@/types/sanity';
import DesktopNav from './navigation/DesktopNav';
import { LanguageSwitcher } from './navigation/LanguageSwitcher';
import MobileMenu from './navigation/MobileMenu';
import { type NavLink } from './navigation/types';

interface NavigationProps {
  locale: Locale;
  siteSettings?: SiteSettings | null;
}

export default function Navigation({ locale, siteSettings }: NavigationProps) {
  const t = useTranslations('nav');
  const tAccessibility = useTranslations('accessibility');
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { href: '/about', label: t('about') },
    { href: '/rooms', label: t('rooms') },
    {
      href: '/restaurant',
      label: t('restaurantBar'),
      children: [
        { href: '/restaurant', label: t('restaurant') },
        { href: '/restaurant/menu', label: t('menu') },
        { href: '/bar', label: t('bar') },
      ],
    },
    { href: '/meetings', label: t('meetings') },
    {
      href: '/wellness',
      label: t('wellnessFitness'),
      children: [
        { href: '/wellness', label: t('wellness') },
        { href: '/wellness/spa', label: t('spa') },
      ],
    },
    { href: '/offers', label: t('offers') },
    { href: '/experiences', label: t('experiences') },
    { href: '/gallery', label: t('gallery') },
  ];

  const switchLocale = (newLocale: Locale) => {
    const localePrefix = `/${locale}`;
    const currentPath = pathname.startsWith(localePrefix)
      ? pathname.slice(localePrefix.length) || '/'
      : pathname;
    router.push(`/${newLocale}${currentPath}`);
  };

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;
  const hotelName = siteSettings?.hotelNameLocalized || siteSettings?.hotelName || hotel.shortName;

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-500 ${
          isTransparent
            ? 'border-white/12 bg-transparent text-white'
            : 'border-b border-forest-200/70 bg-cream-50/95 text-forest-950 shadow-[0_18px_60px_rgba(33,27,23,0.08)] backdrop-blur-xl'
        }`}
      >
        <div className="luxury-container">
          <div className="flex h-20 items-center justify-between gap-6 lg:h-24">
            <Link
              href={`/${locale}`}
              className="group flex min-w-0 items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
              aria-label={tAccessibility('home', { hotel: hotel.name })}
            >
              <span className={`hidden h-px w-12 transition-colors sm:block ${isTransparent ? 'bg-white/60' : 'bg-brass-500'}`} />
              <span className="min-w-0">
                <span className="block font-serif text-2xl leading-none tracking-[0.02em] lg:text-3xl">
                  {hotelName}
                </span>
                <span className={`mt-1 hidden text-[0.62rem] font-semibold uppercase tracking-[0.28em] sm:block ${isTransparent ? 'text-white/60' : 'text-forest-700'}`}>
                  {hotel.address.locality}
                </span>
              </span>
            </Link>

            <DesktopNav
              locale={locale}
              pathname={pathname}
              navLinks={navLinks}
              isTransparent={isTransparent}
            />

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href={`/${locale}/contact`}
                className={`hidden min-h-11 items-center px-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 2xl:inline-flex ${
                  isTransparent ? 'text-white/75 hover:text-white' : 'text-forest-800/75 hover:text-forest-950'
                }`}
              >
                {t('contact')}
              </Link>
              <LanguageSwitcher
                locale={locale}
                isTransparent={isTransparent}
                onSwitchLocale={switchLocale}
              />
              <a
                href="https://mediator.com.ge/"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-button min-h-11 px-5 py-0"
              >
                <span>{t('bookNow')}</span>
              </a>
            </div>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? tAccessibility('closeNavigation') : tAccessibility('openNavigation')}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex h-12 w-12 items-center justify-center border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 xl:hidden ${
                isTransparent ? 'border-white/25 text-white' : 'border-forest-200 text-forest-950'
              }`}
            >
              {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        locale={locale}
        hotelName={hotelName}
        navLinks={navLinks}
        isOpen={isMobileMenuOpen}
        bookNowLabel={t('bookNow')}
        contactLabel={t('contact')}
        onClose={() => setIsMobileMenuOpen(false)}
        onSwitchLocale={switchLocale}
      />
    </>
  );
}
