import { type Locale } from '@/i18n/config';
import SaunaPage from '@/components/hotel/pages/wellness/SaunaPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/wellness/sauna',
    titleKey: 'sauna.title',
    descriptionKey: 'sauna.subtitle',
  });
}

export default async function Sauna({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <SaunaPage locale={locale} />
    </>
  );
}
