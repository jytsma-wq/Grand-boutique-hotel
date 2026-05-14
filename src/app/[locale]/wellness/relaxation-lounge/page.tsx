import { type Locale } from '@/i18n/config';
import RelaxationLoungePage from '@/components/hotel/pages/wellness/RelaxationLoungePage';

export default async function RelaxationLounge({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <RelaxationLoungePage locale={locale} />
    </>
  );
}
