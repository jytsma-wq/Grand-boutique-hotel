import { type Locale } from '@/i18n/config';
import BreakfastPage from '@/components/hotel/pages/BreakfastPage';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default function Breakfast({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => (
    <>
      <BreakfastPage locale={locale} />
      <WhatsAppButton />
    </>
  ));
}
