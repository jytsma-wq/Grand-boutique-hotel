import { type Locale } from '@/i18n/config';
import SpiritsPage from '@/components/hotel/pages/bar/SpiritsPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/bar/spirits',
    title: 'Spirits',
    descriptionKey: 'bar.description',
  });
}

export default async function Spirits({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <SpiritsPage locale={locale} />;
}
