'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next-intl/client';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    router.push(pathname, { locale: newLocale });
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
      {/* Main Navigation - Telegraph Style Layout */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1">
              {navLinks.slice(0, 4).map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && handleDropdownEnter(link.href)}
                  onMouseLeave={() => link.children && handleDropdownLeave()}
                >
                  <Link
                    href={`/${locale}${link.href}`}
                    className={`flex items-center gap-1 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-200 ${
                      pathname.includes(link.href)
                        ? 'text-forest-900'
                        : 'text-forest-900/70 hover:text-forest-900'
                    }`}
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
                        className="absolute left-0 top-full bg-white border border-gray-100 shadow-xl min-w-[220px] z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={`/${locale}${child.href}`}
                            className="block px-8 py-3.5 text-[11px] text-forest-900/70 hover:text-forest-900 hover:bg-forest-50 uppercase tracking-[0.2em] transition-colors"
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

            {/* Logo - Centered */}
            <Link href={`/${locale}`} className="z-50 flex-shrink-0 mx-8 lg:mx-12">
              <div className="font-normal text-lg lg:text-xl tracking-[0.35em] uppercase text-forest-900 text-center">
                Batumi Boutique
              </div>
            </Link>

            {/* Right Navigation + Book Now */}
            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-end">
              {navLinks.slice(4).map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && handleDropdownEnter(link.href)}
                  onMouseLeave={() => link.children && handleDropdownLeave()}
                >
                  <Link
                    href={`/${locale}${link.href}`}
                    className={`flex items-center gap-1 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-200 ${
                      pathname.includes(link.href)
                        ? 'text-forest-900'
                        : 'text-forest-900/70 hover:text-forest-900'
                    }`}
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
                        className="absolute right-0 top-full bg-white border border-gray-100 shadow-xl min-w-[220px] z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={`/${locale}${child.href}`}
                            className="block px-8 py-3.5 text-[11px] text-forest-900/70 hover:text-forest-900 hover:bg-forest-50 uppercase tracking-[0.2em] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Language Switcher */}
              <div className="relative ml-6" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-forest-900/70 hover:text-forest-900 transition-colors px-4 py-2"
                >
                  <span>{locale.toUpperCase()}</span>
                  <ChevronDown size={10} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 bg-white border border-gray-100 shadow-xl min-w-[140px] z-[120]"
                    >
                      {locales.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => { switchLocale(loc); setLangOpen(false); }}
                          className={`w-full flex items-center gap-3 px-6 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-forest-50 transition-colors ${
                            loc === locale ? 'text-forest-900 bg-forest-50' : 'text-forest-900/70'
                          }`}
                        >
                          <span>{loc.toUpperCase()}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Book Now Button */}
              <a
                href="https://mediator.com.ge/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6"
              >
                <Button className="btn-telegraph px-9 py-2.5 text-[11px] uppercase tracking-[0.2em]">
                  <span>{t('bookNow')}</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-forest-900"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
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
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-0">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-sm text-forest-900 border-b border-gray-100 hover:opacity-70 transition-opacity uppercase tracking-[0.15em] font-medium"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-6 bg-forest-50/50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={`/${locale}${child.href}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 text-xs text-forest-900/70 border-b border-gray-100 hover:text-forest-900 transition-colors uppercase tracking-[0.12em] font-light"
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
                  <Button className="btn-telegraph w-full">
                    <span>{t('bookNow')}</span>
                  </Button>
                </a>
              </div>

              {/* Mobile Language Switcher */}
              <div className="pt-4 pb-8 border-t border-gray-100">
                <button
                  onClick={() => setMobileLangOpen(!mobileLangOpen)}
                  className="flex items-center gap-3 text-sm text-forest-900/70 uppercase tracking-wider w-full justify-center"
                >
                  <span>{locale.toUpperCase()}</span>
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
                            className={`px-4 py-2 transition-opacity ${
                              loc === locale ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                            }`}
                          >
                            <span className="text-xs text-forest-900 uppercase tracking-wider">{loc.toUpperCase()}</span>
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
