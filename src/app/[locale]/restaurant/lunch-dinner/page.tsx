import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import LunchDinnerPage from '@/components/hotel/pages/LunchDinnerPage';
import MariamChatbot from '@/components/hotel/MariamChatbot';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default function LunchDinner({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => (
    <>
      <Navigation locale={locale} />
      <LunchDinnerPage locale={locale} />
      <Footer locale={locale} />
      <MariamChatbot locale={locale} />
      <WhatsAppButton />
    </>
  ));
}
