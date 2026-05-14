import { type Locale } from '@/i18n/config';
import SpaPage from '@/components/hotel/pages/SpaPage';
import { StickyBookBanner } from '@/components/hotel/shared';

export default async function Spa({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <SpaPage locale={locale} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
