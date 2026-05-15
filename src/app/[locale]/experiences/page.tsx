import { type Locale } from '@/i18n/config';
import ExperiencesPage from '@/components/hotel/pages/ExperiencesPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/experiences',
    titleKey: 'experiences.title',
    descriptionKey: 'experiences.subtitle',
  });
}

export default async function Experiences({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <ExperiencesPage locale={locale} />;
}
