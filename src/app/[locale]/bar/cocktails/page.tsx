import { type Locale } from '@/i18n/config';
import CocktailsPage from '@/components/hotel/pages/bar/CocktailsPage';
import { createLocalizedMetadata } from '@/lib/seo';
import { getBarPage } from '@/lib/sanity';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/bar/cocktails',
    titleKey: 'bar.menus.cocktailsTitle',
    descriptionKey: 'bar.description',
  });
}

export default async function Cocktails({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const barPage = await getBarPage(locale);

  return <CocktailsPage locale={locale} menuSections={barPage?.menuSections} />;
}
