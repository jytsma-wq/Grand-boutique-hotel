import { type Locale } from '@/i18n/config';
import SpiritsPage from '@/components/hotel/pages/bar/SpiritsPage';
import { createLocalizedMetadata } from '@/lib/seo';
import { getBarPage } from '@/lib/sanity';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/bar/spirits',
    titleKey: 'bar.menus.spiritsTitle',
    descriptionKey: 'bar.description',
  });
}

export default async function Spirits({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const barPage = await getBarPage(locale);

  return <SpiritsPage locale={locale} menuSections={barPage?.menuSections} />;
}
