import { type Locale } from '@/i18n/config';
import JacuzziPage from '@/components/hotel/pages/wellness/JacuzziPage';

export default async function Jacuzzi({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <JacuzziPage locale={locale} />
    </>
  );
}
