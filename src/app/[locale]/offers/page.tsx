import { type Locale } from '@/i18n/config';
import OffersPage from '@/components/hotel/pages/OffersPage';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default async function Offers({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <OffersPage locale={locale} />
      <WhatsAppButton />
    </>
  );
}
