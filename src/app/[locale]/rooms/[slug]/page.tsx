import { type Locale } from '@/i18n/config';
import RoomDetailPage from '@/components/hotel/pages/RoomDetailPage';
import { StickyBookBanner } from '@/components/hotel/shared';
import { getRoomBySlug, getRooms } from '@/lib/sanity';
import { normalizeRooms, resolveRoom } from '@/lib/rooms';
import { type SanityRoom } from '@/types/sanity';
import { createRoomMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;

  return createRoomMetadata(locale, slug);
}

export default async function RoomDetail({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const [sanityRoom, sanityRooms] = await Promise.all([
    getRoomBySlug(slug, locale),
    getRooms(locale),
  ]);
  const room = resolveRoom(sanityRoom as SanityRoom | null, slug);
  const rooms = normalizeRooms(sanityRooms as SanityRoom[]);

  return (
    <>
      <RoomDetailPage locale={locale} slug={slug} room={room} otherRooms={rooms} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
