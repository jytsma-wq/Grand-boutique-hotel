import { type Locale } from '@/i18n/config';
import GalleryPage from '@/components/hotel/pages/GalleryPage';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default async function Gallery({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <GalleryPage locale={locale} />
      <WhatsAppButton />
    </>
  );
}
