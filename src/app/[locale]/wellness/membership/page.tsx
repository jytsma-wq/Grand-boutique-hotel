import { type Locale } from '@/i18n/config';
import MembershipPage from '@/components/hotel/pages/MembershipPage';
import { StickyBookBanner } from '@/components/hotel/shared';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/wellness/membership',
    titleKey: 'wellness.membership.title',
    descriptionKey: 'wellness.membership.subtitle',
  });
}

export default async function Membership({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <MembershipPage locale={locale} />
      <StickyBookBanner locale={locale} />
    </>
  );
}
