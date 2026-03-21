import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import RoomDetailPage from '@/components/hotel/pages/RoomDetailPage';
import { StickyBookBanner } from '@/components/hotel/shared';

export default async function RoomDetail({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;

  return (
    <>
      <Navigation locale={locale} siteSettings={undefined} />
      <RoomDetailPage locale={locale} slug={slug} />
      <Footer locale={locale} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
