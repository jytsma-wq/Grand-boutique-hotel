import { type Locale } from '@/i18n/config';
import SaunaPage from '@/components/hotel/pages/wellness/SaunaPage';

export default async function Sauna({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <SaunaPage locale={locale} />
    </>
  );
}
