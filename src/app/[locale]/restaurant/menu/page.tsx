import { type Locale } from '@/i18n/config';
import RestaurantMenuPage from '@/components/hotel/pages/RestaurantMenuPage';

export default async function RestaurantMenu({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <RestaurantMenuPage locale={locale} />;
}
