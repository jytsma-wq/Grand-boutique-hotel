import { type Locale } from '@/i18n/config';
import SteamRoomPage from '@/components/hotel/pages/wellness/SteamRoomPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/wellness/steam-room',
    titleKey: 'steamRoom.title',
    descriptionKey: 'steamRoom.subtitle',
  });
}

export default async function SteamRoom({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <SteamRoomPage locale={locale} />
    </>
  );
}
