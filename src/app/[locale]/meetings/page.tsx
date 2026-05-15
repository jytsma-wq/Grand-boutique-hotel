import { type Locale } from '@/i18n/config';
import MeetingsPage from '@/components/hotel/pages/MeetingsPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/meetings',
    titleKey: 'meetings.title',
    descriptionKey: 'meetings.description',
  });
}

export default async function Meetings({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <MeetingsPage locale={locale} />;
}
