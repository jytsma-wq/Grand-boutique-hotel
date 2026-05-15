import { type Locale } from '@/i18n/config';
import RestaurantMenuPage from '@/components/hotel/pages/RestaurantMenuPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/restaurant/menu',
    titleKey: 'nav.menu',
    descriptionKey: 'restaurant.description',
  });
}

export default async function RestaurantMenu({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <RestaurantMenuPage locale={locale} />;
}
