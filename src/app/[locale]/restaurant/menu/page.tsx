import { type Locale } from '@/i18n/config';
import RestaurantMenuPage from '@/components/hotel/pages/RestaurantMenuPage';
import { createLocalizedMetadata } from '@/lib/seo';
import { getRestaurantPage } from '@/lib/sanity';

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
  const restaurantPage = await getRestaurantPage(locale);

  return <RestaurantMenuPage locale={locale} menuSections={restaurantPage?.menuSections} />;
}
