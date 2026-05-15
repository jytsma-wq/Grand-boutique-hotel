import { type Locale } from '@/i18n/config';
import AboutPage from '@/components/hotel/pages/AboutPage';
import { StickyBookBanner } from '@/components/hotel/shared';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/about',
    titleKey: 'nav.about',
  });
}

export default async function About({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <AboutPage locale={locale} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
