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
];

const roomSlugs = [
  'standard-room',
  'superior-room',
  'deluxe-room',
  'junior-suite',
  'executive-suite',
  'presidential-suite',
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

  for (const slug of roomSlugs) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/rooms/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return entries;
}
