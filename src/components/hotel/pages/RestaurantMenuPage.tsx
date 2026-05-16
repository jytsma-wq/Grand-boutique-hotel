import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Utensils, Wine, Coffee, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';
import {
  formatGelPrice,
  formatUsdPrice,
  restaurantMenuFallbackSections,
  restaurantMenuSectionKeys,
  selectMenuSections,
} from '@/lib/menu-content';
import { type SanityMenuItem, type SanityMenuSection } from '@/types/sanity';

interface RestaurantMenuPageProps {
  locale: Locale;
  menuSections?: SanityMenuSection[];
}

const sectionIcons: Record<string, LucideIcon> = {
  starters: Utensils,
  'main-dishes': Wine,
  desserts: Coffee,
};

function PriceBlock({ item }: { item: SanityMenuItem }) {
  const usd = formatUsdPrice(item.priceUsd);
  const gel = formatGelPrice(item.priceGel);

  return (
    <div className="text-right flex-shrink-0">
      {usd && <div className="font-bold text-forest-900">{usd}</div>}
      {gel && <div className="text-xs text-forest-500">{gel}</div>}
    </div>
  );
}

function MenuSection({ section, variant }: { section: SanityMenuSection; variant: 'plain' | 'cards' }) {
  const Icon = sectionIcons[section.sectionKey] ?? Utensils;

  return (
    <section className={`py-24 ${variant === 'cards' ? 'bg-forest-50' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Icon className="w-12 h-12 mx-auto mb-4 text-forest-900" />
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="text-forest-600 max-w-2xl mx-auto font-light">{section.subtitle}</p>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {section.items?.map((item) => (
              <div
                key={item._key ?? item.name}
                className={variant === 'cards' ? 'bg-white border-2 border-forest-900 p-6' : 'border-b-2 border-forest-200 pb-6'}
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-bold text-forest-900 uppercase tracking-wide text-base">
                    {item.name}
                  </h3>
                  <PriceBlock item={item} />
                </div>
                {item.description && (
                  <p className="text-sm text-forest-600 font-light leading-relaxed">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RestaurantMenuPage({ locale, menuSections }: RestaurantMenuPageProps) {
  const sections = selectMenuSections(
    menuSections,
    restaurantMenuSectionKeys,
    restaurantMenuFallbackSections,
  );

  return (
    <main className="min-h-screen pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Restaurant Menu"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <div>
            <Link href={`/${locale}/restaurant`} className="inline-flex items-center gap-2 text-cream-50/70 hover:text-cream-50 mb-6 transition-colors">
              <ChevronLeft size={20} />
              <span className="uppercase tracking-wider text-sm">Back to Restaurant</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 leading-none">
              Our Menu
            </h1>
            <p className="text-xl text-cream-50/70 max-w-2xl font-light">
              A culinary journey through Georgian heritage and international excellence
            </p>
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <MenuSection
          key={section.sectionKey}
          section={section}
          variant={index === 1 ? 'cards' : 'plain'}
        />
      ))}

      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
            Reserve Your Table
          </h2>
          <p className="text-cream-50/70 text-lg mb-12 max-w-2xl mx-auto font-light">
            Experience our culinary excellence. Book your table today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href={`/${locale}/booking`}>
              <Button className="btn-boutique rounded-none px-14 py-6 text-base">
                Make Reservation
              </Button>
            </Link>
            <Link href={`/${locale}/restaurant`}>
              <Button variant="outline" className="px-14 py-6 text-base border-2 border-white bg-transparent text-cream-50 hover:bg-white hover:text-forest-900 transition-all uppercase tracking-wider">
                Back to Restaurant
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
