import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import RoomsPage from '@/components/hotel/pages/RoomsPage';
import MariamChatbot from '@/components/hotel/MariamChatbot';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default function Rooms({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => (
    <>
      <Navigation locale={locale} siteSettings={undefined} />
      <RoomsPage locale={locale} />
      <Footer locale={locale} />
      <MariamChatbot locale={locale} />
      <WhatsAppButton />
    </>
  ));
}
