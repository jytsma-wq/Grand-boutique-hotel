import { type Locale } from '@/i18n/config';
import BookingPage from '@/components/hotel/pages/BookingPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/booking',
    titleKey: 'booking.title',
  });
}

export default async function Booking({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <BookingPage locale={locale} />;
}
