import { type Locale } from '@/i18n/config';
import WellnessPage from '@/components/hotel/pages/WellnessPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/wellness',
    titleKey: 'wellness.title',
    descriptionKey: 'wellness.description',
  });
}

export default async function Wellness({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <WellnessPage locale={locale} />;
}
