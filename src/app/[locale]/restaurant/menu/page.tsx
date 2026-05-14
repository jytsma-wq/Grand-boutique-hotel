import { type Locale } from '@/i18n/config';
import RestaurantMenuPage from '@/components/hotel/pages/RestaurantMenuPage';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default async function RestaurantMenu({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <RestaurantMenuPage locale={locale} />
      <WhatsAppButton />
    </>
  );
}
