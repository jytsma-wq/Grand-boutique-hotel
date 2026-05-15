import { type Locale } from '@/i18n/config';
import RoomsPage from '@/components/hotel/pages/RoomsPage';
import { getRooms } from '@/lib/sanity';
import { normalizeRooms } from '@/lib/rooms';
import { type SanityRoom } from '@/types/sanity';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/rooms',
    titleKey: 'rooms.title',
    descriptionKey: 'rooms.description',
  });
}

export default async function Rooms({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const rooms = normalizeRooms((await getRooms(locale)) as SanityRoom[]);

  return <RoomsPage locale={locale} rooms={rooms} />;
}
