import { type Locale } from '@/i18n/config';
import RestaurantPage from '@/components/hotel/pages/RestaurantPage';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default function Restaurant({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => (
    <>
      <RestaurantPage locale={locale} />
      <WhatsAppButton />
    </>
  ));
}
