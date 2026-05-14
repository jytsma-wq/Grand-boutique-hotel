import { type Locale } from '@/i18n/config';
import MeetingsPage from '@/components/hotel/pages/MeetingsPage';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default async function Meetings({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <MeetingsPage locale={locale} />
      <WhatsAppButton />
    </>
  );
}
