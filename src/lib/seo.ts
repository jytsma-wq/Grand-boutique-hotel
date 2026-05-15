import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { defaultLocale, isValidLocale, locales, type Locale } from '@/i18n/config';
import {
  absoluteUrl,
  hotel,
  languageAlternates,
  localizedUrl,
  ogLocales,
  roomMetadataKeys,
} from '@/lib/site';
import { getRoomBySlug } from '@/lib/sanity';

interface LocalizedMetadataInput {
  locale: string;
  path?: string;
  title?: string;
  titleKey?: string;
  description?: string;
  descriptionKey?: string;
}

function resolveLocale(locale: string): Locale {
  return isValidLocale(locale) ? locale : defaultLocale;
}

function fallbackTitleFromSlug(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

async function translate(locale: Locale, key?: string): Promise<string | undefined> {
  if (!key) return undefined;

  const t = await getTranslations({ locale });
  return t(key);
}

export async function createLocalizedMetadata({
  locale,
  path = '',
  title,
  titleKey,
  description,
  descriptionKey,
}: LocalizedMetadataInput): Promise<Metadata> {
  const metadataLocale = resolveLocale(locale);
  const siteT = await getTranslations({ locale: metadataLocale, namespace: 'site' });
  const siteName = siteT('name');
  const siteDescription = siteT('description');
  const pageTitle = title ?? (await translate(metadataLocale, titleKey)) ?? siteName;
  const pageDescription =
    description ?? (await translate(metadataLocale, descriptionKey)) ?? siteDescription;
  const isHome = path === '' || path === '/';
  const canonical = localizedUrl(metadataLocale, path);
  const fullTitle = isHome || pageTitle === siteName ? siteName : `${pageTitle} | ${siteName}`;
  const alternateOgLocales = locales
    .filter((candidate) => candidate !== metadataLocale)
    .map((candidate) => ogLocales[candidate]);

  return {
    metadataBase: new URL(absoluteUrl()),
    title: isHome ? { absolute: siteName } : pageTitle,
    description: pageDescription,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url: canonical,
      siteName,
      images: [
        {
          url: absoluteUrl('/og-image.svg'),
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
      locale: ogLocales[metadataLocale],
      alternateLocale: alternateOgLocales,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: pageDescription,
      images: [absoluteUrl('/og-image.svg')],
    },
  };
}

export async function createRoomMetadata(
  locale: string,
  slug: string
): Promise<Metadata> {
  const metadataLocale = resolveLocale(locale);
  let title: string | undefined;
  let description: string | undefined;

  try {
    const room = (await getRoomBySlug(slug, metadataLocale)) as {
      name?: string;
      shortDescription?: string;
    } | null;
    title = room?.name;
    description = room?.shortDescription;
  } catch {
    title = undefined;
    description = undefined;
  }

  const staticMetadata = roomMetadataKeys[slug];

  return createLocalizedMetadata({
    locale: metadataLocale,
    path: `/rooms/${slug}`,
    title: title ?? (staticMetadata ? undefined : fallbackTitleFromSlug(slug)),
    titleKey: staticMetadata?.titleKey,
    description,
    descriptionKey: staticMetadata?.descriptionKey,
  });
}

export { hotel };
