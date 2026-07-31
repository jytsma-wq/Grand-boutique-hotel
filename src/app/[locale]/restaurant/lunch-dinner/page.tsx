import { type Locale } from '@/i18n/config';
import LunchDinnerPage from '@/components/hotel/pages/LunchDinnerPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/restaurant/lunch-dinner',
    titleKey: 'restaurant.page.lunchDinnerTitle',
    descriptionKey: 'restaurant.description',
  });
}

export default function LunchDinner({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => <LunchDinnerPage locale={locale} />);
}
