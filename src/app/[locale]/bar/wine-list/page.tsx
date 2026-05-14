import { type Locale } from '@/i18n/config';
import WineListPage from '@/components/hotel/pages/bar/WineListPage';

export default async function WineList({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <WineListPage locale={locale} />;
}
