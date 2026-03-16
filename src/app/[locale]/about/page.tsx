import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import AboutPage from '@/components/hotel/pages/AboutPage';
import { StickyBookBanner } from '@/components/hotel/shared';

export default async function About({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} />
      <AboutPage locale={locale} />
      <Footer locale={locale} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
