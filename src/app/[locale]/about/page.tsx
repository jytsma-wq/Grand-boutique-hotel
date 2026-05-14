import { type Locale } from '@/i18n/config';
import AboutPage from '@/components/hotel/pages/AboutPage';
import { StickyBookBanner } from '@/components/hotel/shared';

export default async function About({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <AboutPage locale={locale} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
