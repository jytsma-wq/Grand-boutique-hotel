import { type Locale } from '@/i18n/config';
import BarPage from '@/components/hotel/pages/BarPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/bar',
    titleKey: 'bar.name',
    descriptionKey: 'bar.description',
  });
}

export default function Bar({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => <BarPage locale={locale} />);
}
