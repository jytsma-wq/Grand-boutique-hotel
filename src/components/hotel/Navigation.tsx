'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config';

interface NavigationProps {
  locale: Locale;
  siteSettings?: any;
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
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    window.location.assign(newPath);
  };

  const handleDropdownEnter = (href: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(href);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      {/* Top Utility Bar - Contact + Location (Telegraph style) */}
      <div className="hidden lg:block bg-charcoal-950 text-white/70 text-xs uppercase tracking-[0.15em] z-[70] relative">
        <div className="container mx-auto px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/contact`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={12} />
              <span>{t('contact')}</span>
            </Link>
            <Link href={`/${locale}/location`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin size={12} />
              <span>{t('location')}</span>
            </Link>
            <a href="tel:+995422000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} />
              <span>+995 422 00 00 00</span>
            </a>
          </div>

          {/* Desktop Language Switcher - Rectangle flags dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <img src={flagImages[locale]} alt="" className="w-7 h-5 object-cover border border-white/20" />
              <span>{localeNames[locale]}</span>
              <ChevronDown size={12} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 bg-charcoal-900 border border-white/10 shadow-xl min-w-[160px] z-[120]"
                >
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => { switchLocale(loc); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] hover:bg-white/10 transition-colors ${
                        loc === locale ? 'text-white bg-white/5' : 'text-white/60'
                      }`}
                    >
                      <img src={flagImages[loc]} alt="" className="w-7 h-5 object-cover border border-white/20" />
                      <span>{localeNames[loc]}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'top-0 bg-white/95 backdrop-blur-sm shadow-lg border-b-2 border-charcoal-900'
            : 'lg:top-9 top-0 bg-charcoal-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center">
              <div className={`font-bold text-2xl tracking-[0.2em] uppercase ${
                isScrolled ? 'text-charcoal-900' : 'text-white'
              }`}>
                BOUTIQUE HOTEL
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && handleDropdownEnter(link.href)}
                  onMouseLeave={() => link.children && handleDropdownLeave()}
                >
                  <Link
                    href={`/${locale}${link.href}`}
                    className={`flex items-center gap-1 px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-200 ${
                      pathname.includes(link.href)
                        ? 'opacity-100'
                        : 'opacity-70 hover:opacity-100'
                    } ${isScrolled ? 'text-charcoal-900' : 'text-white'}`}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={10} className="ml-0.5" />}
                  </Link>

                  {/* Dropdown submenu */}
                  <AnimatePresence>
                    {link.children && openDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full bg-charcoal-900 border border-white/10 shadow-xl min-w-[180px] z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={`/${locale}${child.href}`}
                            className="block px-5 py-3 text-[11px] text-white/70 hover:text-white hover:bg-white/10 uppercase tracking-[0.15em] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Book Now - Opens external booking in new tab */}
              <a
                href="https://mediator.com.ge/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-architectural hidden sm:flex px-6 py-2 text-sm uppercase tracking-[0.15em]">
                  <span>{t('bookNow')}</span>
                </Button>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`xl:hidden p-2 transition-colors ${isScrolled ? 'text-charcoal-900' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-charcoal-900 pt-16 px-6 xl:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-0">
              {/* Contact + Location at top of mobile menu */}
              <div className="flex items-center gap-4 py-4 border-b border-white/10">
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white uppercase tracking-wider"
                >
                  <Mail size={14} />
                  {t('contact')}
                </Link>
                <Link
                  href={`/${locale}/location`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white uppercase tracking-wider"
                >
                  <MapPin size={14} />
                  {t('location')}
                </Link>
              </div>

              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-base text-white border-b border-white/10 hover:opacity-70 transition-opacity uppercase tracking-[0.15em] font-light"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-6 bg-charcoal-950/50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={`/${locale}${child.href}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 text-sm text-white/60 border-b border-white/5 hover:text-white transition-colors uppercase tracking-[0.12em] font-light"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-8 pb-4">
                <a
                  href="https://mediator.com.ge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="btn-architectural w-full">
                    <span>{t('bookNow')}</span>
                  </Button>
                </a>
              </div>

              {/* Mobile Language Switcher - Round flags dropdown */}
              <div className="pt-4 pb-8 border-t border-white/10">
                <button
                  onClick={() => setMobileLangOpen(!mobileLangOpen)}
                  className="flex items-center gap-3 text-sm text-white/70 uppercase tracking-wider w-full justify-center"
                >
                  <img src={flagImages[locale]} alt="" className="w-8 h-8 rounded-full object-cover border border-white/20" />
                  <span>{localeNames[locale]}</span>
                  <ChevronDown size={14} className={`transition-transform ${mobileLangOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileLangOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-3"
                    >
                      <div className="flex flex-wrap gap-3 justify-center">
                        {locales.map((loc) => (
                          <button
                            key={loc}
                            onClick={() => {
                              switchLocale(loc);
                              setIsMobileMenuOpen(false);
                            }}
                            className={`flex items-center gap-2 px-3 py-2 transition-opacity ${
                              loc === locale ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                            }`}
                          >
                            <img src={flagImages[loc]} alt="" className="w-9 h-9 rounded-full object-cover border-2 border-white/30" />
                            <span className="text-xs text-white uppercase tracking-wider">{loc.toUpperCase()}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
