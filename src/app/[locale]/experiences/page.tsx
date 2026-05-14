import { type Locale } from '@/i18n/config';
import ExperiencesPage from '@/components/hotel/pages/ExperiencesPage';

export default async function Experiences({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <ExperiencesPage locale={locale} />;
}
