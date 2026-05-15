import { type Locale } from '@/i18n/config';
import LocationPage from '@/components/hotel/pages/LocationPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/location',
    titleKey: 'location.title',
    descriptionKey: 'location.subtitle',
  });
}

export default async function Location({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <LocationPage locale={locale} />;
}
