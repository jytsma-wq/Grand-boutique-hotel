import { type Locale } from '@/i18n/config';
import SpiritsPage from '@/components/hotel/pages/bar/SpiritsPage';

export default async function Spirits({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <SpiritsPage locale={locale} />;
}
