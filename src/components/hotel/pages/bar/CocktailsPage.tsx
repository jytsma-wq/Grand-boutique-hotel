import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Martini } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';
import { getImageUrl } from '@/lib/sanity';
import {
  barMenuFallbackSections,
  cocktailSectionKeys,
  formatGelPrice,
  formatUsdPrice,
  selectMenuSections,
} from '@/lib/menu-content';
import { type SanityMenuItem, type SanityMenuSection } from '@/types/sanity';
import { useTranslations } from 'next-intl';

interface CocktailsPageProps {
  locale: Locale;
  menuSections?: SanityMenuSection[];
}

function PriceBlock({ item, light = false }: { item: SanityMenuItem; light?: boolean }) {
  const usd = formatUsdPrice(item.priceUsd);
  const gel = formatGelPrice(item.priceGel);

  return (
    <div className="text-right flex-shrink-0">
      {usd && <div className={`font-bold ${light ? 'text-lg' : 'text-forest-900'}`}>{usd}</div>}
      {gel && <div className={`text-xs ${light ? 'text-cream-50/60' : 'text-forest-500'}`}>{gel}</div>}
    </div>
  );
}

function SimpleCocktailGrid({ section, className }: { section?: SanityMenuSection; className: string }) {
  if (!section) return null;

  return (
    <section className={className}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
            {section?.title}
          </h2>
          {section?.subtitle && (
            <p className="text-forest-600 max-w-2xl mx-auto font-light">{section.subtitle}</p>
          )}
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {section?.items?.map((cocktail) => (
            <div key={cocktail._key ?? cocktail.name} className="border-2 border-forest-900 p-6 bg-white">
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="font-bold text-forest-900 uppercase tracking-wide text-base">
                  {cocktail.name}
                </h3>
                <PriceBlock item={cocktail} />
              </div>
              {cocktail.description && (
                <p className="text-sm text-forest-600 font-light">{cocktail.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CocktailsPage({ locale, menuSections }: CocktailsPageProps) {
  const t = useTranslations();
  const sections = selectMenuSections(
    menuSections,
    cocktailSectionKeys,
    barMenuFallbackSections,
    locale,
  );
  const [signatureCocktails, classicCocktails, nonAlcoholic] = sections;

  return (
    <main className="min-h-screen pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80"
            alt={t('bar.menus.cocktailsTitle')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <div>
            <Link href={`/${locale}/bar`} className="inline-flex items-center gap-2 text-cream-50/70 hover:text-cream-50 mb-6 transition-colors">
              <ChevronLeft size={20} />
              <span className="uppercase tracking-wider text-sm">{t('common.backTo', { destination: t('bar.name') })}</span>
            </Link>
            <Martini className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 leading-none">
              {t('bar.menus.cocktailsTitle')}
            </h1>
            <p className="text-xl text-cream-50/70 max-w-2xl font-light">
              {t('bar.menus.cocktailsSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {sections.length === 0 && <section className="bg-white py-20"><p className="container mx-auto max-w-2xl px-6 text-center text-forest-700">{t('common.menuUnavailable')}</p></section>}

      <section className={sections.length ? 'py-24 bg-forest-900 text-cream-50' : 'hidden'}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              {signatureCocktails?.title}
            </h2>
            {signatureCocktails?.subtitle && (
              <p className="text-cream-50/70 max-w-2xl mx-auto font-light">{signatureCocktails.subtitle}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureCocktails?.items?.map((cocktail) => (
              <div key={cocktail._key ?? cocktail.name} className="bg-forest-800 overflow-hidden border-2 border-white/20 group">
                <div className="relative h-56">
                  <img
                    src={getImageUrl(cocktail.image, 400)}
                    alt={cocktail.name}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex justify-between items-end gap-4">
                      <h3 className="text-xl font-bold uppercase tracking-wide">{cocktail.name}</h3>
                      <PriceBlock item={cocktail} light />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {cocktail.description && (
                    <p className="text-sm text-cream-50/80 mb-3 font-light leading-relaxed">{cocktail.description}</p>
                  )}
                  {cocktail.ingredients && (
                    <p className="text-xs text-cream-50/50 uppercase tracking-wider font-light">{cocktail.ingredients}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SimpleCocktailGrid section={classicCocktails} className={sections.length ? 'py-24 bg-white' : 'hidden'} />
      <SimpleCocktailGrid section={nonAlcoholic} className={sections.length ? 'py-24 bg-forest-50' : 'hidden'} />

      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
            {t('bar.menus.happyHourTitle')}
          </h2>
          <p className="text-cream-50/70 text-lg mb-12 max-w-2xl mx-auto font-light">
            {t('bar.menus.happyHourDescription')}
          </p>
          <Link href={`/${locale}/booking`}>
            <Button className="btn-boutique rounded-none px-14 py-6 text-base">
              {t('bar.reserve')}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
