import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import OffersPage from '@/components/hotel/pages/OffersPage';
import MariamChatbot from '@/components/hotel/MariamChatbot';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default async function Offers({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} siteSettings={undefined} />
      <OffersPage locale={locale} />
      <Footer locale={locale} />
      <MariamChatbot locale={locale} />
      <WhatsAppButton />
    </>
  );
}
