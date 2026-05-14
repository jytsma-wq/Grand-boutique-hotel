import { type Locale } from '@/i18n/config';
import BookingPage from '@/components/hotel/pages/BookingPage';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default async function Booking({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <BookingPage locale={locale} />
      <WhatsAppButton />
    </>
  );
}
