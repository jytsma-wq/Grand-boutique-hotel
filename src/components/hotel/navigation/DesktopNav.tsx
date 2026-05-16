'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { type Locale } from '@/i18n/config';
import { type NavLink } from './types';

interface DesktopNavProps {
  locale: Locale;
  pathname: string;
  navLinks: NavLink[];
  isTransparent: boolean;
}

export default function DesktopNav({ locale, pathname, navLinks, isTransparent }: DesktopNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownEnter = (href: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(href);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav className="hidden items-center justify-center gap-1 xl:flex" aria-label="Primary navigation">
      {navLinks.map((link) => {
        const active = pathname.includes(link.href) && link.href !== '/';

        return (
          <div
            key={link.href}
            className="relative"
            onMouseEnter={() => link.children && handleDropdownEnter(link.href)}
            onMouseLeave={() => link.children && handleDropdownLeave()}
          >
            <Link
              href={`/${locale}${link.href}`}
              className={`flex min-h-11 items-center gap-1 px-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
                active
                  ? isTransparent ? 'text-brass-300' : 'text-brass-700'
                  : isTransparent ? 'text-white/75 hover:text-white' : 'text-forest-800/75 hover:text-forest-950'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              {link.label}
              {link.children && <ChevronDown size={12} className="ml-0.5" />}
            </Link>

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
        );
      })}
    </nav>
  );
}
