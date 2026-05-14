import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://batumiboutique.com';

const pages = [
  '',
  '/about',
  '/rooms',
  '/restaurant',
  '/restaurant/breakfast',
  '/restaurant/lunch-dinner',
  '/bar',
  '/meetings',
  '/wellness',
  '/wellness/spa',
  '/offers',
  '/experiences',
  '/gallery',
  '/contact',
  '/location',
  '/booking',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : page === '/rooms' ? 0.9 : 0.8,
      });
    }
  }

  return entries;
}
