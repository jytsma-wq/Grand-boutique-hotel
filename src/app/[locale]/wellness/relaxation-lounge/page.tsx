import { type Locale } from '@/i18n/config';
import RelaxationLoungePage from '@/components/hotel/pages/wellness/RelaxationLoungePage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/wellness/relaxation-lounge',
    titleKey: 'relaxationLounge.title',
    descriptionKey: 'relaxationLounge.subtitle',
  });
}

export default async function RelaxationLounge({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <RelaxationLoungePage locale={locale} />
    </>
  );
}
