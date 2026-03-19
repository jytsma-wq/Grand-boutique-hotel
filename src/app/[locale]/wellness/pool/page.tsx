import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import PoolPage from '@/components/hotel/pages/wellness/PoolPage';

export default async function Pool({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} siteSettings={undefined} />
      <PoolPage locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
