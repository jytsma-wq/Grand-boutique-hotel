export const locales = ['en', 'ka', 'ru', 'tr', 'he', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ka: 'ქართული',
  ru: 'Русский',
  tr: 'Türkçe',
  he: 'עברית',
  ar: 'العربية',
};

export const rtlLocales: Locale[] = ['he', 'ar'];

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  ka: '🇬🇪',
  ru: '🇷🇺',
  tr: '🇹🇷',
  he: '🇮🇱',
  ar: '🇸🇦',
};

export const localeCurrency: Record<Locale, { code: string; symbol: string }> = {
  en: { code: 'USD', symbol: '$' },
  ka: { code: 'GEL', symbol: '₾' },
  ru: { code: 'RUB', symbol: '₽' },
  tr: { code: 'TRY', symbol: '₺' },
  he: { code: 'ILS', symbol: '₪' },
  ar: { code: 'SAR', symbol: '﷼' },
};

export function isRtlLocale(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
