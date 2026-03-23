import { type Locale } from '@/i18n/config';
import HomePage from '@/components/hotel/HomePage';
import { sanityFetch } from '@/sanity/lib/live';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  // Fetch content from Sanity CMS using sanityFetch for live updates
  const homePageData = await sanityFetch({
    query: `*[_type == "homePage"][0] {
      heroTitle,
      heroSubtitle,
      "heroTitleLocalized": heroTitle_${locale},
      "heroSubtitleLocalized": heroSubtitle_${locale},
      heroImage,
      sections
    }`,
  });

  return (
    <>
      <HomePage locale={locale} data={homePageData?.data} />
    </>
  );
}
