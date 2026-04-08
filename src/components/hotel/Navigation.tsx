'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
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
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${currentPath}`);
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
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-450 mx-auto px-6 lg:px-12">
          {/* Top Row: Language Switcher - Left */}
          <div className="hidden lg:flex items-center justify-start py-3 border-b border-gray-100">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-sm uppercase tracking-wider text-forest-900/70 hover:text-forest-900 transition-colors px-3 py-1.5"
              >
                <img 
                  src={flagImages[locale]} 
                  alt={`${locale} flag`} 
                  className="w-5 h-4 object-cover"
                />
                <span>{locale.toUpperCase()}</span>
                <ChevronDown size={12} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <div>
                {langOpen && (
                  <div className="absolute left-0 top-full mt-1 bg-white border border-gray-100 shadow-xl min-w-40 z-120"
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => { switchLocale(loc); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-5 py-3 text-sm uppercase tracking-wider hover:bg-forest-50 transition-colors ${
                          loc === locale ? 'text-forest-900 bg-forest-50' : 'text-forest-900/70'
                        }`}
                      >
                        <img 
                          src={flagImages[loc]} 
                          alt={`${loc} flag`} 
                          className="w-5 h-4 object-cover"
                        />
                        <span>{loc.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Row: Logo Centered + Menu Below */}
          <div className="py-4">
            {/* Logo - Centered */}
            <div className="text-center mb-4">
              <Link href={`/${locale}`} className="inline-block">
                <div className="font-normal text-2xl lg:text-3xl tracking-[0.3em] uppercase text-forest-900">
                  Batumi Boutique
                </div>
              </Link>
            </div>

            {/* Navigation Menu - Below Logo */}
            <nav className="hidden lg:flex items-center justify-center gap-1 flex-wrap">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && handleDropdownEnter(link.href)}
                  onMouseLeave={() => link.children && handleDropdownLeave()}
                >
                  <Link
                    href={`/${locale}${link.href}`}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                      pathname.includes(link.href)
                        ? 'text-forest-900'
                        : 'text-forest-900/70 hover:text-forest-900'
                    }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={12} className="ml-0.5" />}
                  </Link>

                  {/* Dropdown submenu */}
                  <div>
                    {link.children && openDropdown === link.href && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-white border border-gray-100 shadow-xl min-w-48 z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={`/${locale}${child.href}`}
                            className="block px-6 py-3 text-sm text-forest-900/70 hover:text-forest-900 hover:bg-forest-50 uppercase tracking-wider transition-colors text-center"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Book Now Button */}
              <a
                href="https://mediator.com.ge/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
              >
                <Button className="btn-telegraph px-6 py-2 text-sm uppercase tracking-wider">
                  <span>{t('bookNow')}</span>
                </Button>
              </a>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-between py-3">
            <div></div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-forest-900"
            >
              {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div>
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100 lg:hidden overflow-hidden"
            style={{ marginTop: '80px' }}
          >
            <div className="px-6 py-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-base text-forest-900 border-b border-gray-100 hover:opacity-70 transition-opacity uppercase tracking-wider font-medium"
                  >
                    {link.label}
                  </Link>
                  {link.children && link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={`/${locale}${child.href}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 pl-4 text-sm text-forest-900/70 border-b border-gray-100 hover:text-forest-900 transition-colors uppercase tracking-wider"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <a
                href="https://mediator.com.ge/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 text-center"
              >
                <Button className="btn-telegraph px-8 py-3 text-sm uppercase tracking-wider">
                  {t('bookNow')}
                </Button>
              </a>
            </div>

            {/* Mobile Language Switcher */}
            <div className="px-6 pb-6 border-t border-gray-100 pt-4">
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="flex items-center gap-3 text-sm text-forest-900/70 uppercase tracking-wider w-full justify-center"
              >
                <img 
                  src={flagImages[locale]} 
                  alt={`${locale} flag`} 
                  className="w-5 h-4 object-cover"
                />
                <span>{locale.toUpperCase()}</span>
                <ChevronDown size={16} className={`transition-transform ${mobileLangOpen ? 'rotate-180' : ''}`} />
              </button>
              <div>
                {mobileLangOpen && (
                  <div className="overflow-hidden mt-3"
                  >
                    <div className="flex flex-wrap gap-3 justify-center">
                      {locales.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => {
                            switchLocale(loc);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`px-4 py-2 transition-opacity flex items-center gap-2 text-sm uppercase tracking-wider ${
                            loc === locale ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                          }`}
                        >
                          <img 
                            src={flagImages[loc]} 
                            alt={`${loc} flag`} 
                            className="w-5 h-4 object-cover"
                          />
                          <span>{loc.toUpperCase()}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}








