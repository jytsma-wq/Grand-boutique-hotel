import { type Locale } from '@/i18n/config';
import PoolPage from '@/components/hotel/pages/wellness/PoolPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/wellness/pool',
    titleKey: 'pool.title',
    descriptionKey: 'pool.description',
  });
}

export default async function Pool({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <PoolPage locale={locale} />
    </>
  );
}
