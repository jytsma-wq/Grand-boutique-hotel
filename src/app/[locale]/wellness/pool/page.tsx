import { type Locale } from '@/i18n/config';
import PoolPage from '@/components/hotel/pages/wellness/PoolPage';

export default async function Pool({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <PoolPage locale={locale} />
    </>
  );
}
