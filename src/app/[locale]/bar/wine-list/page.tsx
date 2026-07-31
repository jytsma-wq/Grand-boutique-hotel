import { type Locale } from '@/i18n/config';
import WineListPage from '@/components/hotel/pages/bar/WineListPage';
import { createLocalizedMetadata } from '@/lib/seo';
import { getBarPage } from '@/lib/sanity';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/bar/wine-list',
    titleKey: 'bar.menus.wineTitle',
    descriptionKey: 'bar.description',
  });
}

export default async function WineList({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const barPage = await getBarPage(locale);

  return <WineListPage locale={locale} menuSections={barPage?.menuSections} />;
}
