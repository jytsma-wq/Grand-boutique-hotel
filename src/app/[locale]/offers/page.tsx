import { type Locale } from '@/i18n/config';
import OffersPage from '@/components/hotel/pages/OffersPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/offers',
    titleKey: 'offers.title',
    descriptionKey: 'offers.subtitle',
  });
}

export default async function Offers({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <OffersPage locale={locale} />;
}
