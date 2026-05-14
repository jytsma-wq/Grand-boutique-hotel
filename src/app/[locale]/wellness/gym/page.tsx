import { type Locale } from '@/i18n/config';
import GymPage from '@/components/hotel/pages/wellness/GymPage';

export default async function Gym({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <GymPage locale={locale} />
    </>
  );
}
