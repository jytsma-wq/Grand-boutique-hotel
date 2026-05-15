import { type Locale } from '@/i18n/config';
import HomePage from '@/components/hotel/HomePage';
import { getHomePage, getSiteSettings } from '@/lib/sanity';
import { createLocalizedMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return createLocalizedMetadata({ locale });
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
