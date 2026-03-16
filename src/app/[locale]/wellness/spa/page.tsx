import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import SpaPage from '@/components/hotel/pages/SpaPage';
import { StickyBookBanner } from '@/components/hotel/shared';

export default async function Spa({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} />
      <SpaPage locale={locale} />
      <Footer locale={locale} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
