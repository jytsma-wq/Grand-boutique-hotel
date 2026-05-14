import { type Locale } from '@/i18n/config';
import MembershipPage from '@/components/hotel/pages/MembershipPage';
import { StickyBookBanner } from '@/components/hotel/shared';

export default async function Membership({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <MembershipPage locale={locale} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
