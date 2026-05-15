import { type Locale } from '@/i18n/config';
import CocktailsPage from '@/components/hotel/pages/bar/CocktailsPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/bar/cocktails',
    title: 'Cocktails',
    descriptionKey: 'bar.description',
  });
}

export default async function Cocktails({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <CocktailsPage locale={locale} />;
}
