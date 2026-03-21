import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import GymPage from '@/components/hotel/pages/wellness/GymPage';

export default async function Gym({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} siteSettings={undefined} />
      <GymPage locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
