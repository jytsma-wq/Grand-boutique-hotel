import { type Locale } from '@/i18n/config';
import JacuzziPage from '@/components/hotel/pages/wellness/JacuzziPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/wellness/jacuzzi',
    titleKey: 'jacuzzi.title',
    descriptionKey: 'jacuzzi.subtitle',
  });
}

export default async function Jacuzzi({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <JacuzziPage locale={locale} />
    </>
  );
}
