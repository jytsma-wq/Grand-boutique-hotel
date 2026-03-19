import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import WellnessPage from '@/components/hotel/pages/WellnessPage';
import MariamChatbot from '@/components/hotel/MariamChatbot';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default async function Wellness({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} siteSettings={undefined} />
      <WellnessPage locale={locale} />
      <Footer locale={locale} />
      <MariamChatbot locale={locale} />
      <WhatsAppButton />
    </>
  );
}
