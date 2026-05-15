import { type Locale } from '@/i18n/config';
import ContactPage from '@/components/hotel/pages/ContactPage';
import { createLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/contact',
    titleKey: 'contact.title',
    descriptionKey: 'contact.subtitle',
  });
}

export default async function Contact({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <ContactPage locale={locale} />;
}
