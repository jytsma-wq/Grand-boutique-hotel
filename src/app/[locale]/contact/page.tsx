import { type Locale } from '@/i18n/config';
import ContactPage from '@/components/hotel/pages/ContactPage';

export default async function Contact({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <ContactPage locale={locale} />;
}
