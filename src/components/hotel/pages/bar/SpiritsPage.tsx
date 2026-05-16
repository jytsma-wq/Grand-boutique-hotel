import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';
import {
  barMenuFallbackSections,
  formatGelPrice,
  formatUsdPrice,
  selectMenuSections,
  spiritSectionKeys,
} from '@/lib/menu-content';
import { type SanityMenuItem, type SanityMenuSection } from '@/types/sanity';

interface SpiritsPageProps {
  locale: Locale;
  menuSections?: SanityMenuSection[];
}

function PriceBlock({ item, tone = 'dark' }: { item: SanityMenuItem; tone?: 'dark' | 'light' }) {
  const usd = formatUsdPrice(item.priceUsd);
  const gel = formatGelPrice(item.priceGel);
  const secondaryClass = tone === 'light' ? 'text-cream-50/60' : 'text-forest-500';

  return (
    <div className="text-right flex-shrink-0">
      {usd && <div className="font-bold">{usd}</div>}
      {gel && <div className={`text-xs ${secondaryClass}`}>{gel}</div>}
    </div>
  );
}

function CardGridSection({ section, className }: { section?: SanityMenuSection; className: string }) {
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {section?.items?.map((spirit) => (
            <div key={spirit._key ?? spirit.name} className="border-2 border-forest-900 p-6 bg-white">
              <div className="flex justify-between items-start gap-4 mb-2">
                <div>
                  <h3 className="font-bold text-forest-900 uppercase tracking-wide text-base mb-1">
                    {spirit.name}
                  </h3>
                  {spirit.origin && (
                    <p className="text-xs text-forest-500 uppercase tracking-wider">{spirit.origin}</p>
                  )}
                </div>
                <PriceBlock item={spirit} />
              </div>
              {spirit.description && (
                <p className="text-sm text-forest-600 font-light">{spirit.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompactList({ section }: { section?: SanityMenuSection }) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold uppercase tracking-tight text-forest-900 mb-2">{section?.title}</h2>
        {section?.subtitle && <p className="text-forest-600 text-sm font-light">{section.subtitle}</p>}
      </div>
      <div className="space-y-4">
        {section?.items?.map((spirit) => (
          <div key={spirit._key ?? spirit.name} className="border-b-2 border-forest-200 pb-4">
            <div className="flex justify-between items-start gap-2 mb-1">
              <h3 className="font-bold text-forest-900 text-sm uppercase tracking-wide">{spirit.name}</h3>
              <PriceBlock item={spirit} />
            </div>
            {spirit.origin && <p className="text-xs text-forest-500 mb-1">{spirit.origin}</p>}
            {spirit.description && <p className="text-xs text-forest-600 font-light">{spirit.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

function DarkList({ section }: { section?: SanityMenuSection }) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">{section?.title}</h2>
        {section?.subtitle && <p className="text-cream-50/70 text-sm font-light">{section.subtitle}</p>}
      </div>
      <div className="space-y-4">
        {section?.items?.map((spirit) => (
          <div key={spirit._key ?? spirit.name} className="bg-forest-800 border-2 border-white/20 p-5">
            <div className="flex justify-between items-start gap-4 mb-2">
              <div>
                <h3 className="font-bold uppercase tracking-wide text-base mb-1">{spirit.name}</h3>
                {spirit.origin && (
                  <p className="text-xs text-cream-50/60 uppercase tracking-wider">{spirit.origin}</p>
                )}
              </div>
              <PriceBlock item={spirit} tone="light" />
            </div>
            {spirit.description && (
              <p className="text-sm text-cream-50/80 font-light">{spirit.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SpiritsPage({ locale, menuSections }: SpiritsPageProps) {
  const [whiskey, vodka, gin, rum, tequila, cognac, specialSpirits] = selectMenuSections(
    menuSections,
    spiritSectionKeys,
    barMenuFallbackSections,
  );

  return (
    <main className="min-h-screen pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1920&q=80"
            alt="Premium Spirits"
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
            <Sparkles className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 leading-none">
              Premium Spirits
            </h1>
            <p className="text-xl text-cream-50/70 max-w-2xl font-light">
              A curated selection of the world's finest spirits and liqueurs
            </p>
          </div>
        </div>
      </section>

      <CardGridSection section={whiskey} className="py-24 bg-white" />
      <CardGridSection section={vodka} className="py-24 bg-forest-50" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <CompactList section={gin} />
            <CompactList section={rum} />
            <CompactList section={tequila} />
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <DarkList section={cognac} />
            <DarkList section={specialSpirits} />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight text-forest-900">
            Explore Our Collection
          </h2>
          <p className="text-forest-600 text-lg mb-12 max-w-2xl mx-auto font-light">
            Visit our bar to discover our full selection of premium spirits and expert recommendations
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
