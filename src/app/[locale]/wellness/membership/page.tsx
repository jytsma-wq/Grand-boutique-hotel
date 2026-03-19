import { type Locale } from '@/i18n/config';
import Navigation from '@/components/hotel/Navigation';
import Footer from '@/components/hotel/Footer';
import MembershipPage from '@/components/hotel/pages/MembershipPage';
import { StickyBookBanner } from '@/components/hotel/shared';

export default async function Membership({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <Navigation locale={locale} siteSettings={undefined} />
      <MembershipPage locale={locale} />
      <Footer locale={locale} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
