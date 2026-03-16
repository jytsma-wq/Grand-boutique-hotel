import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import RelaxationLoungePage from '@/components/hotel/pages/wellness/RelaxationLoungePage';

export default async function RelaxationLounge({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} />
      <RelaxationLoungePage locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
