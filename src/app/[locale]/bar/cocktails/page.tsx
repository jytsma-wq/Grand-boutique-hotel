import { type Locale } from '@/i18n/config';
import CocktailsPage from '@/components/hotel/pages/bar/CocktailsPage';

export default async function Cocktails({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <CocktailsPage locale={locale} />;
}
