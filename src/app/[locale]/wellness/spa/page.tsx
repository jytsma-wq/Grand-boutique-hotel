import { type Locale } from '@/i18n/config';
import SpaPage from '@/components/hotel/pages/SpaPage';
import { StickyBookBanner } from '@/components/hotel/shared';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/wellness/spa',
    titleKey: 'spa.title',
    descriptionKey: 'wellness.description',
  });
}

export default async function Spa({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <SpaPage locale={locale} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
