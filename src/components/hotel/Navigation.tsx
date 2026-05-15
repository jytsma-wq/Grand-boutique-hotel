'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { hotel } from '@/lib/site';
import { type SiteSettings } from '@/types/sanity';

interface NavigationProps {
  locale: Locale;
  siteSettings?: SiteSettings | null;
}

const flagImages: Record<string, string> = {
  en: '/flags/gb.svg',
  ka: '/flags/ge.svg',
  ru: '/flags/ru.svg',
  tr: '/flags/tr.svg',
  he: '/flags/il.svg',
  ar: '/flags/sa.svg',
};

export default function Navigation({ locale, siteSettings }: NavigationProps) {
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
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

  const handleDropdownEnter = (href: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(href);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
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
              aria-label={`${hotel.name} home`}
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

            <nav className="hidden items-center justify-center gap-1 xl:flex" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && handleDropdownEnter(link.href)}
                  onMouseLeave={() => link.children && handleDropdownLeave()}
                >
                  <Link
                    href={`/${locale}${link.href}`}
                    className={`flex min-h-11 items-center gap-1 px-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
                      pathname.includes(link.href) && link.href !== '/'
                        ? isTransparent ? 'text-brass-300' : 'text-brass-700'
                        : isTransparent ? 'text-white/75 hover:text-white' : 'text-forest-800/75 hover:text-forest-950'
                    }`}
                    aria-current={pathname.includes(link.href) && link.href !== '/' ? 'page' : undefined}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={12} className="ml-0.5" />}
                  </Link>

                  <div>
                    {link.children && openDropdown === link.href && (
                      <div
                        className="absolute left-1/2 top-full z-50 mt-3 min-w-56 -translate-x-1/2 border border-forest-200 bg-cream-50 p-2 text-forest-950 shadow-2xl"
                        role="menu"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={`/${locale}${child.href}`}
                            role="menuitem"
                            className="block px-5 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-forest-800 hover:bg-forest-100 hover:text-forest-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href={`/${locale}/contact`}
                className={`hidden min-h-11 items-center px-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 2xl:inline-flex ${
                  isTransparent ? 'text-white/75 hover:text-white' : 'text-forest-800/75 hover:text-forest-950'
                }`}
              >
                {t('contact')}
              </Link>
              <div className="relative" ref={langRef}>
                <button
                  type="button"
                  aria-label="Change language"
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
                        aria-label={`Switch language to ${localeNames[loc]}`}
                        onClick={() => { switchLocale(loc); setLangOpen(false); }}
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
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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

      <div>
        {isMobileMenuOpen && (
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
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 font-serif text-3xl text-white transition-colors hover:text-brass-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
                  >
                    {link.label}
                  </Link>
                  {link.children && link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={`/${locale}${child.href}`}
                      onClick={() => setIsMobileMenuOpen(false)}
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
                  <span>{t('bookNow')}</span>
                </a>
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="luxury-button-outline luxury-button-outline-light border-white/30 text-white"
                >
                  <span>{t('contact')}</span>
                </Link>
              </div>

            <div className="mt-8 border-t border-white/12 pt-6">
              <button
                type="button"
                aria-label="Change language"
                aria-expanded={mobileLangOpen}
                aria-haspopup="menu"
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="flex min-h-11 w-full items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
              >
                <span>{localeNames[locale]}</span>
                <ChevronDown size={16} className={`transition-transform ${mobileLangOpen ? 'rotate-180' : ''}`} />
              </button>
              <div>
                {mobileLangOpen && (
                  <div className="mt-4" role="menu">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {locales.map((loc) => (
                        <button
                          type="button"
                          key={loc}
                          role="menuitem"
                          aria-label={`Switch language to ${localeNames[loc]}`}
                          onClick={() => {
                            switchLocale(loc);
                            setIsMobileMenuOpen(false);
                          }}
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
            </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}








