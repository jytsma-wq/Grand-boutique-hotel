import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import HomePage from '@/components/hotel/HomePage';
import MariamChatbot from '@/components/hotel/MariamChatbot';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';
import { getHomePage, getSiteSettings } from '@/lib/sanity';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  // Fetch content from Sanity CMS
  const [homePageData, siteSettings] = await Promise.all([
    getHomePage(locale),
    getSiteSettings(locale),
  ]);

  return (
    <>
      <Navigation locale={locale} siteSettings={siteSettings} />
      <HomePage locale={locale} data={homePageData} />
      <Footer locale={locale} siteSettings={siteSettings} />
      <MariamChatbot locale={locale} />
      <WhatsAppButton />
    </>
  );
}
