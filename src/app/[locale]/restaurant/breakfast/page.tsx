import { type Locale } from '@/i18n/config';
import BreakfastPage from '@/components/hotel/pages/BreakfastPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/restaurant/breakfast',
    title: 'Breakfast',
    descriptionKey: 'restaurant.description',
  });
}

export default function Breakfast({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => <BreakfastPage locale={locale} />);
}
