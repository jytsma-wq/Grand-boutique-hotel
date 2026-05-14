import { type Locale } from '@/i18n/config';
import GalleryPage from '@/components/hotel/pages/GalleryPage';

export default async function Gallery({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <GalleryPage locale={locale} />;
}
