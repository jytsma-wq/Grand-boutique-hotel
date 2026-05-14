import { type Locale } from '@/i18n/config';
import BreakfastPage from '@/components/hotel/pages/BreakfastPage';

export default function Breakfast({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => <BreakfastPage locale={locale} />);
}
