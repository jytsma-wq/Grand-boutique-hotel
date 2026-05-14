import { type Locale } from '@/i18n/config';
import BarPage from '@/components/hotel/pages/BarPage';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default function Bar({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => (
    <>
      <BarPage locale={locale} />
      <WhatsAppButton />
    </>
  ));
}
