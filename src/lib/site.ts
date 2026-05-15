import { defaultLocale, locales, type Locale } from '@/i18n/config';

export const siteUrlFallback = 'https://batumiboutique.com';

export const hotel = {
  name: 'Batumi Boutique Hotel',
  shortName: 'Batumi Boutique',
  description:
    "Experience 2026 modern architecture at Batumi's premier boutique hotel. Refined luxury meets Georgian hospitality on the stunning Black Sea coast.",
  address: {
    streetAddress: 'Rustaveli Avenue 123',
    locality: 'Batumi',
    region: 'Adjara',
    postalCode: '6000',
    countryCode: 'GE',
    countryName: 'Georgia',
    formatted: 'Rustaveli Avenue 123, Batumi, Adjara, Georgia 6000',
  },
  geo: {
    latitude: 41.6507,
    longitude: 41.6356,
  },
  phone: {
    display: '+995 422 00 00 00',
    href: '+995422000000',
  },
  email: 'info@batumiboutique.com',
  privacyEmail: 'privacy@batumiboutique.com',
  reservationsEmail: 'reservations@batumiboutique.com',
  priceRange: '$120-$800',
  social: {
    instagram: 'https://instagram.com/batumiboutique',
    facebook: 'https://facebook.com',
  },
} as const;

export const staticSitePages = [
  '',
  '/about',
  '/rooms',
  '/restaurant',
  '/restaurant/breakfast',
  '/restaurant/lunch-dinner',
  '/restaurant/menu',
  '/bar',
  '/bar/cocktails',
  '/bar/spirits',
  '/bar/wine-list',
  '/meetings',
  '/wellness',
  '/wellness/gym',
  '/wellness/jacuzzi',
  '/wellness/membership',
  '/wellness/pool',
  '/wellness/relaxation-lounge',
  '/wellness/sauna',
  '/wellness/spa',
  '/wellness/steam-room',
  '/offers',
  '/experiences',
  '/gallery',
  '/contact',
  '/location',
  '/booking',
  '/privacy',
  '/terms',
] as const;

export const fallbackRoomSlugs = [
  'standard-room',
  'superior-room',
  'deluxe-room',
  'junior-suite',
  'executive-suite',
  'presidential-suite',
] as const;

export const roomMetadataKeys: Record<
  string,
  { titleKey: string; descriptionKey: string }
> = {
  'standard-room': {
    titleKey: 'rooms.types.standard.name',
    descriptionKey: 'rooms.types.standard.description',
  },
  'superior-room': {
    titleKey: 'rooms.types.superior.name',
    descriptionKey: 'rooms.types.superior.description',
  },
  'deluxe-room': {
    titleKey: 'rooms.types.deluxe.name',
    descriptionKey: 'rooms.types.deluxe.description',
  },
  'junior-suite': {
    titleKey: 'rooms.types.juniorSuite.name',
    descriptionKey: 'rooms.types.juniorSuite.description',
  },
  'executive-suite': {
    titleKey: 'rooms.types.executiveSuite.name',
    descriptionKey: 'rooms.types.executiveSuite.description',
  },
  'presidential-suite': {
    titleKey: 'rooms.types.presidentialSuite.name',
    descriptionKey: 'rooms.types.presidentialSuite.description',
  },
};

export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  ka: 'ka_GE',
  ru: 'ru_RU',
  tr: 'tr_TR',
  he: 'he_IL',
  ar: 'ar',
};

function normalizePath(path = ''): string {
  if (!path || path === '/') return '';

  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return withLeadingSlash.replace(/\/+$/, '');
}

export function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const rawUrl = configuredUrl || siteUrlFallback;

  try {
    const url = new URL(rawUrl);
    return url.origin.replace(/\/+$/, '');
  } catch {
    return siteUrlFallback;
  }
}

export function localizedPath(locale: Locale, path = ''): string {
  return `/${locale}${normalizePath(path)}`;
}

export function absoluteUrl(path = ''): string {
  return `${getSiteUrl()}${normalizePath(path)}`;
}

export function localizedUrl(locale: Locale, path = ''): string {
  return absoluteUrl(localizedPath(locale, path));
}

export function languageAlternates(path = ''): Record<string, string> {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, localizedUrl(locale, path)])
    ),
    'x-default': localizedUrl(defaultLocale, path),
  };
}
