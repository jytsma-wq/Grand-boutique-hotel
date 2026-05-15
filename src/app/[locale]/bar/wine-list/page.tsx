import { type Locale } from '@/i18n/config';
import WineListPage from '@/components/hotel/pages/bar/WineListPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/bar/wine-list',
    title: 'Wine List',
    descriptionKey: 'bar.description',
  });
}

export default async function WineList({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <WineListPage locale={locale} />;
}
