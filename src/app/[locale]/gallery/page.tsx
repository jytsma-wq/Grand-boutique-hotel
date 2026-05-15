import { type Locale } from '@/i18n/config';
import GalleryPage from '@/components/hotel/pages/GalleryPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/gallery',
    titleKey: 'gallery.title',
    descriptionKey: 'gallery.subtitle',
  });
}

export default async function Gallery({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <GalleryPage locale={locale} />;
}
