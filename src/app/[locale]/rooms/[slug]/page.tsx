import { type Locale } from '@/i18n/config';
import RoomDetailPage from '@/components/hotel/pages/RoomDetailPage';
import { StickyBookBanner } from '@/components/hotel/shared';

export default async function RoomDetail({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;

  return (
    <>
      <RoomDetailPage locale={locale} slug={slug} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
