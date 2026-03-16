import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import JacuzziPage from '@/components/hotel/pages/wellness/JacuzziPage';

export default async function Jacuzzi({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} />
      <JacuzziPage locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
