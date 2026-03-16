import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import SteamRoomPage from '@/components/hotel/pages/wellness/SteamRoomPage';

export default async function SteamRoom({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} />
      <SteamRoomPage locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
