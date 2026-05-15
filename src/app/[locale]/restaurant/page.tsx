import { type Locale } from '@/i18n/config';
import RestaurantPage from '@/components/hotel/pages/RestaurantPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/restaurant',
    titleKey: 'restaurant.title',
    descriptionKey: 'restaurant.description',
  });
}

export default function Restaurant({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => <RestaurantPage locale={locale} />);
}
