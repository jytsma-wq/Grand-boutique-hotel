import { type Locale } from '@/i18n/config';
import LunchDinnerPage from '@/components/hotel/pages/LunchDinnerPage';

export default function LunchDinner({ params }: { params: Promise<{ locale: Locale }> }) {
  return params.then(({ locale }) => <LunchDinnerPage locale={locale} />);
}
