import { type Locale } from '@/i18n/config';
import LocationPage from '@/components/hotel/pages/LocationPage';

export default async function Location({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <LocationPage locale={locale} />;
}
