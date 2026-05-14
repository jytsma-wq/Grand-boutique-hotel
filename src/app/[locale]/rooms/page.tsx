import { type Locale } from '@/i18n/config';
import RoomsPage from '@/components/hotel/pages/RoomsPage';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default function Rooms({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => (
    <>
      <RoomsPage locale={locale} />
      <WhatsAppButton />
    </>
  ));
}
