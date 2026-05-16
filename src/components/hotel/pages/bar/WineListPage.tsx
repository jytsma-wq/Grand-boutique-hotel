import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';
import {
  barMenuFallbackSections,
  formatGelPrice,
  formatUsdPrice,
  selectMenuSections,
  wineSectionKeys,
} from '@/lib/menu-content';
import { type SanityMenuItem, type SanityMenuSection } from '@/types/sanity';

interface WineListPageProps {
  locale: Locale;
  menuSections?: SanityMenuSection[];
}

function WinePrice({ item }: { item: SanityMenuItem }) {
  const usd = formatUsdPrice(item.priceUsd);
  const gel = formatGelPrice(item.priceGel);

  return (
    <>
      {usd && <span className="text-forest-900 font-bold">{usd}</span>}
      {gel && <span className="text-forest-500 text-sm ml-2">{gel}</span>}
    </>
  );
}

function WineTable({ section, framed = false }: { section?: SanityMenuSection; framed?: boolean }) {
  return (
    <section className={`py-24 ${framed ? 'bg-forest-50' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
            {section?.title}
          </h2>
          {section?.subtitle && (
            <p className="text-forest-600 max-w-2xl mx-auto font-light">{section.subtitle}</p>
          )}
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className={`w-full ${framed ? 'bg-white border-2 border-forest-900' : ''}`}>
            <thead>
              <tr className={`border-b-2 border-forest-900 ${framed ? 'bg-forest-900 text-cream-50' : ''}`}>
                <th className={`text-left py-5 font-bold uppercase tracking-wider text-sm ${framed ? 'px-6' : 'text-forest-900'}`}>Region</th>
                <th className={`text-left py-5 font-bold uppercase tracking-wider text-sm ${framed ? 'px-6' : 'text-forest-900'}`}>Wine</th>
                <th className={`text-left py-5 font-bold uppercase tracking-wider text-sm ${framed ? 'px-6' : 'text-forest-900'}`}>Year</th>
                <th className={`text-right py-5 font-bold uppercase tracking-wider text-sm ${framed ? 'px-6' : 'text-forest-900'}`}>Price</th>
              </tr>
            </thead>
            <tbody>
              {section?.items?.map((wineItem) => (
                <tr key={wineItem._key ?? `${wineItem.region}-${wineItem.name}`} className="border-b border-forest-200 hover:bg-forest-50 transition-colors">
                  <td className={`py-5 text-forest-600 font-light ${framed ? 'px-6' : ''}`}>{wineItem.region}</td>
                  <td className={`py-5 ${framed ? 'px-6' : ''}`}>
                    <div className="font-bold text-forest-900 uppercase tracking-wide text-sm">{wineItem.name}</div>
                    {wineItem.description && (
                      <div className="text-xs text-forest-500 mt-1">{wineItem.description}</div>
                    )}
                  </td>
                  <td className={`py-5 text-forest-600 font-light ${framed ? 'px-6' : ''}`}>{wineItem.year}</td>
                  <td className={`py-5 text-right ${framed ? 'px-6' : ''}`}>
                    <WinePrice item={wineItem} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function WineListPage({ locale, menuSections }: WineListPageProps) {
  const [georgianWines, internationalWines, sparklingWines] = selectMenuSections(
    menuSections,
    wineSectionKeys,
    barMenuFallbackSections,
  );

  return (
    <main className="min-h-screen pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920&q=80"
            alt="Wine Collection"
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
              <span className="uppercase tracking-wider text-sm">Back to Bar</span>
            </Link>
            <Wine className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 leading-none">
              Wine List
            </h1>
            <p className="text-xl text-cream-50/70 max-w-2xl font-light">
              8,000 years of Georgian winemaking tradition meets world-class selections
            </p>
          </div>
        </div>
      </section>

      <WineTable section={georgianWines} />
      <WineTable section={internationalWines} framed />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
              {sparklingWines?.title}
            </h2>
            {sparklingWines?.subtitle && (
              <p className="text-forest-600 max-w-2xl mx-auto font-light">{sparklingWines.subtitle}</p>
            )}
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {sparklingWines?.items?.map((wineItem) => (
              <div key={wineItem._key ?? wineItem.name} className="bg-forest-50 border-2 border-forest-900 p-8">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="font-bold text-forest-900 uppercase tracking-wide text-lg">{wineItem.name}</h3>
                  <div className="text-right">
                    <WinePrice item={wineItem} />
                  </div>
                </div>
                {wineItem.origin && <p className="text-sm text-forest-600 mb-2 font-light">{wineItem.origin}</p>}
                {wineItem.description && <p className="text-sm text-forest-500 font-light italic">{wineItem.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
            Wine Tasting Experience
          </h2>
          <p className="text-cream-50/70 text-lg mb-12 max-w-2xl mx-auto font-light">
            Join us for a guided wine tasting journey through Georgian and international selections
          </p>
          <Link href={`/${locale}/booking`}>
            <Button className="btn-boutique rounded-none px-14 py-6 text-base">
              Reserve Your Table
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
