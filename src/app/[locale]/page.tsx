import { type Locale } from '@/i18n/config';
import HomePage from '@/components/hotel/HomePage';
import { getHomePage, getSiteSettings } from '@/lib/sanity';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  // Fetch content from Sanity CMS
  const [homePageData, siteSettings] = await Promise.all([
    getHomePage(locale),
    getSiteSettings(locale),
  ]);

  return (
    <>
      <HomePage locale={locale} data={homePageData} />
    </>
  );
}
