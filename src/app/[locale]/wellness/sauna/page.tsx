import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import SaunaPage from '@/components/hotel/pages/wellness/SaunaPage';

export default async function Sauna({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} siteSettings={undefined} />
      <SaunaPage locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
