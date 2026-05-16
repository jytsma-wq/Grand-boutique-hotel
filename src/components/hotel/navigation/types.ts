import { type Locale } from '@/i18n/config';

export interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

export const flagImages: Record<Locale, string> = {
  en: '/flags/gb.svg',
  ka: '/flags/ge.svg',
  ru: '/flags/ru.svg',
  tr: '/flags/tr.svg',
  he: '/flags/il.svg',
  ar: '/flags/sa.svg',
};
