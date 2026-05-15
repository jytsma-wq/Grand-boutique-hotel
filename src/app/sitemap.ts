import { MetadataRoute } from 'next';
import { defaultLocale, locales } from '@/i18n/config';
import {
  fallbackRoomSlugs,
  languageAlternates,
  localizedUrl,
  staticSitePages,
} from '@/lib/site';
import { getRooms } from '@/lib/sanity';

type RoomWithSlug = {
  slug?: string | { current?: string };
};

function getSlugValue(slug: RoomWithSlug['slug']): string | undefined {
  if (typeof slug === 'string') return slug;
  return slug?.current;
}

async function getSitemapRoomSlugs(): Promise<string[]> {
  try {
    const rooms = await getRooms(defaultLocale);
    const sanitySlugs = (rooms as RoomWithSlug[])
      .map((room) => getSlugValue(room.slug))
      .filter((slug): slug is string => Boolean(slug));

    return Array.from(new Set([...fallbackRoomSlugs, ...sanitySlugs])).sort();
  } catch {
    return [...fallbackRoomSlugs];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();
  const roomSlugs = await getSitemapRoomSlugs();

  for (const page of staticSitePages) {
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(locale, page),
        lastModified: now,
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : page === '/rooms' ? 0.9 : 0.8,
        alternates: {
          languages: languageAlternates(page),
        },
      });
    }
  }

  for (const slug of roomSlugs) {
    const page = `/rooms/${slug}`;

    for (const locale of locales) {
      entries.push({
        url: localizedUrl(locale, page),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: languageAlternates(page),
        },
      });
    }
  }

  return entries;
}
