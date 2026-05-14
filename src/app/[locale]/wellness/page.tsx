import { type Locale } from '@/i18n/config';
import WellnessPage from '@/components/hotel/pages/WellnessPage';

export default async function Wellness({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <WellnessPage locale={locale} />;
}
