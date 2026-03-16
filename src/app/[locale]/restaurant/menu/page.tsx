import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import RestaurantMenuPage from '@/components/hotel/pages/RestaurantMenuPage';
import MariamChatbot from '@/components/hotel/MariamChatbot';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default async function RestaurantMenu({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} />
      <RestaurantMenuPage locale={locale} />
      <Footer locale={locale} />
      <MariamChatbot locale={locale} />
      <WhatsAppButton />
    </>
  );
}
