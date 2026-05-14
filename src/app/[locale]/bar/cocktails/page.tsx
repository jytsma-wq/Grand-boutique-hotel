import { type Locale } from '@/i18n/config';
import CocktailsPage from '@/components/hotel/pages/bar/CocktailsPage';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';

export default async function Cocktails({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <CocktailsPage locale={locale} />
      <WhatsAppButton />
    </>
  );
}
