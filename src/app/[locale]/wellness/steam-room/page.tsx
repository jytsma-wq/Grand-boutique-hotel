import { type Locale } from '@/i18n/config';
import SteamRoomPage from '@/components/hotel/pages/wellness/SteamRoomPage';

export default async function SteamRoom({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <SteamRoomPage locale={locale} />
    </>
  );
}
