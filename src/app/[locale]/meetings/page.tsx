import { type Locale } from '@/i18n/config';
import MeetingsPage from '@/components/hotel/pages/MeetingsPage';

export default async function Meetings({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <MeetingsPage locale={locale} />;
}
