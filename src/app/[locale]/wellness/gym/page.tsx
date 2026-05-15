import { type Locale } from '@/i18n/config';
import GymPage from '@/components/hotel/pages/wellness/GymPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/wellness/gym',
    titleKey: 'gym.title',
    descriptionKey: 'gym.subtitle',
  });
}

export default async function Gym({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <GymPage locale={locale} />
    </>
  );
}
