import { type Locale } from '@/i18n/config';
import BreakfastPage from '@/components/hotel/pages/BreakfastPage';
import { createLocalizedMetadata } from '@/lib/seo';
import { getRestaurantPage } from '@/lib/sanity';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/restaurant/breakfast',
    titleKey: 'restaurant.page.breakfastTitle',
    descriptionKey: 'restaurant.description',
  });
}

export default async function Breakfast({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const restaurantPage = await getRestaurantPage(locale);

  return <BreakfastPage locale={locale} menuSections={restaurantPage?.menuSections} />;
}
