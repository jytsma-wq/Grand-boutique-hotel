import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface SpiritsPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function SpiritsPage({ locale }: SpiritsPageProps) {
  const whiskey = [
    { name: 'Macallan 12 Year', origin: 'Scotland', price: '$18', priceGel: '50₾', desc: 'Smooth single malt with sherry notes' },
    { name: 'Glenfiddich 18 Year', origin: 'Scotland', price: '$22', priceGel: '61₾', desc: 'Rich and complex Highland whisky' },
    { name: 'Jameson Irish Whiskey', origin: 'Ireland', price: '$12', priceGel: '33₾', desc: 'Triple-distilled, smooth and balanced' },
    { name: 'Jack Daniel\'s', origin: 'USA', price: '$14', priceGel: '39₾', desc: 'Classic Tennessee whiskey' },
    { name: 'Johnnie Walker Blue', origin: 'Scotland', price: '$35', priceGel: '97₾', desc: 'Premium blended Scotch whisky' },
    { name: 'Yamazaki 12 Year', origin: 'Japan', price: '$28', priceGel: '77₾', desc: 'Japanese single malt, elegant and refined' },
  ];

  const vodka = [
    { name: 'Belvedere', origin: 'Poland', price: '$14', priceGel: '39₾', desc: 'Premium rye vodka, smooth and pure' },
    { name: 'Grey Goose', origin: 'France', price: '$15', priceGel: '41₾', desc: 'French wheat vodka, exceptionally smooth' },
    { name: 'Stolichnaya', origin: 'Russia', price: '$11', priceGel: '30₾', desc: 'Classic Russian vodka' },
    { name: 'Tito\'s Handmade', origin: 'USA', price: '$13', priceGel: '36₾', desc: 'American craft vodka, corn-based' },
    { name: 'Ketel One', origin: 'Netherlands', price: '$14', priceGel: '39₾', desc: 'Dutch vodka, crisp and clean' },
  ];

  const gin = [
    { name: 'Hendrick\'s', origin: 'Scotland', price: '$14', priceGel: '39₾', desc: 'Infused with cucumber and rose' },
    { name: 'Tanqueray No. Ten', origin: 'England', price: '$15', priceGel: '41₾', desc: 'Premium London dry gin with citrus' },
    { name: 'Bombay Sapphire', origin: 'England', price: '$13', priceGel: '36₾', desc: 'Classic gin with 10 botanicals' },
    { name: 'Gordon\'s', origin: 'England', price: '$11', priceGel: '30₾', desc: 'Traditional London dry gin' },
    { name: 'Monkey 47', origin: 'Germany', price: '$18', priceGel: '50₾', desc: 'Complex Black Forest gin with 47 botanicals' },
  ];

  const rum = [
    { name: 'Ron Zacapa 23', origin: 'Guatemala', price: '$16', priceGel: '44₾', desc: 'Premium aged rum, rich and smooth' },
    { name: 'Diplomatico Reserva', origin: 'Venezuela', price: '$15', priceGel: '41₾', desc: 'Sweet and complex aged rum' },
    { name: 'Bacardi Superior', origin: 'Puerto Rico', price: '$11', priceGel: '30₾', desc: 'Classic white rum' },
    { name: 'Havana Club 7 Year', origin: 'Cuba', price: '$14', priceGel: '39₾', desc: 'Aged Cuban rum, smooth and balanced' },
    { name: 'Mount Gay XO', origin: 'Barbados', price: '$17', priceGel: '47₾', desc: 'Premium Barbadian rum' },
  ];

  const tequila = [
    { name: 'Don Julio 1942', origin: 'Mexico', price: '$28', priceGel: '77₾', desc: 'Premium añejo tequila, smooth and complex' },
    { name: 'Patrón Silver', origin: 'Mexico', price: '$16', priceGel: '44₾', desc: 'Ultra-premium silver tequila' },
    { name: 'Herradura Reposado', origin: 'Mexico', price: '$14', priceGel: '39₾', desc: 'Aged tequila with oak notes' },
    { name: 'José Cuervo Tradicional', origin: 'Mexico', price: '$12', priceGel: '33₾', desc: 'Classic Mexican tequila' },
    { name: 'Casamigos Añejo', origin: 'Mexico', price: '$18', priceGel: '50₾', desc: 'Smooth aged tequila' },
  ];

  const cognac = [
    { name: 'Hennessy VS', origin: 'France', price: '$15', priceGel: '41₾', desc: 'Classic French cognac' },
    { name: 'Rémy Martin VSOP', origin: 'France', price: '$18', priceGel: '50₾', desc: 'Smooth and balanced cognac' },
    { name: 'Courvoisier XO', origin: 'France', price: '$35', priceGel: '97₾', desc: 'Premium extra old cognac' },
    { name: 'Martell Cordon Bleu', origin: 'France', price: '$32', priceGel: '88₾', desc: 'Rich and complex XO cognac' },
  ];

  const specialSpirits = [
    { name: 'Chacha (Georgian Grappa)', origin: 'Georgia', price: '$10', priceGel: '28₾', desc: 'Traditional Georgian grape spirit' },
    { name: 'Absinthe', origin: 'Switzerland', price: '$16', priceGel: '44₾', desc: 'Classic green fairy spirit' },
    { name: 'Jägermeister', origin: 'Germany', price: '$12', priceGel: '33₾', desc: 'Herbal liqueur with 56 botanicals' },
    { name: 'Baileys Irish Cream', origin: 'Ireland', price: '$13', priceGel: '36₾', desc: 'Creamy whiskey liqueur' },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
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

      {/* Whiskey Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
              Whiskey & Bourbon
            </h2>
            <p className="text-forest-600 max-w-2xl mx-auto font-light">
              From Scottish Highlands to American bourbon country
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {whiskey.map((spirit, index) => (
              <div
                key={spirit.name} className="border-2 border-forest-900 p-6 bg-forest-50"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h3 className="font-bold text-forest-900 uppercase tracking-wide text-base mb-1">
                      {spirit.name}
                    </h3>
                    <p className="text-xs text-forest-500 uppercase tracking-wider">{spirit.origin}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-forest-900">{spirit.price}</div>
                    <div className="text-xs text-forest-500">{spirit.priceGel}</div>
                  </div>
                </div>
                <p className="text-sm text-forest-600 font-light">{spirit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vodka Section */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
              Vodka
            </h2>
            <p className="text-forest-600 max-w-2xl mx-auto font-light">
              Premium vodkas from around the world
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {vodka.map((spirit, index) => (
              <div
                key={spirit.name} className="bg-white border-2 border-forest-900 p-6"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h3 className="font-bold text-forest-900 uppercase tracking-wide text-base mb-1">
                      {spirit.name}
                    </h3>
                    <p className="text-xs text-forest-500 uppercase tracking-wider">{spirit.origin}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-forest-900">{spirit.price}</div>
                    <div className="text-xs text-forest-500">{spirit.priceGel}</div>
                  </div>
                </div>
                <p className="text-sm text-forest-600 font-light">{spirit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gin, Rum, Tequila Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Gin */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-forest-900 mb-2">Gin</h2>
                <p className="text-forest-600 text-sm font-light">Botanical excellence</p>
              </div>
              <div className="space-y-4">
                {gin.map((spirit, index) => (
                  <div
                    key={spirit.name} className="border-b-2 border-forest-200 pb-4"
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="font-bold text-forest-900 text-sm uppercase tracking-wide">{spirit.name}</h3>
                      <div className="text-right flex-shrink-0">
                        <div className="font-bold text-forest-900 text-sm">{spirit.price}</div>
                      </div>
                    </div>
                    <p className="text-xs text-forest-500 mb-1">{spirit.origin}</p>
                    <p className="text-xs text-forest-600 font-light">{spirit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rum */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-forest-900 mb-2">Rum</h2>
                <p className="text-forest-600 text-sm font-light">Caribbean treasures</p>
              </div>
              <div className="space-y-4">
                {rum.map((spirit, index) => (
                  <div
                    key={spirit.name} className="border-b-2 border-forest-200 pb-4"
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="font-bold text-forest-900 text-sm uppercase tracking-wide">{spirit.name}</h3>
                      <div className="text-right flex-shrink-0">
                        <div className="font-bold text-forest-900 text-sm">{spirit.price}</div>
                      </div>
                    </div>
                    <p className="text-xs text-forest-500 mb-1">{spirit.origin}</p>
                    <p className="text-xs text-forest-600 font-light">{spirit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tequila */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-forest-900 mb-2">Tequila</h2>
                <p className="text-forest-600 text-sm font-light">Mexican heritage</p>
              </div>
              <div className="space-y-4">
                {tequila.map((spirit, index) => (
                  <div
                    key={spirit.name} className="border-b-2 border-forest-200 pb-4"
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="font-bold text-forest-900 text-sm uppercase tracking-wide">{spirit.name}</h3>
                      <div className="text-right flex-shrink-0">
                        <div className="font-bold text-forest-900 text-sm">{spirit.price}</div>
                      </div>
                    </div>
                    <p className="text-xs text-forest-500 mb-1">{spirit.origin}</p>
                    <p className="text-xs text-forest-600 font-light">{spirit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cognac & Special Spirits */}
      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Cognac */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">Cognac & Brandy</h2>
                <p className="text-cream-50/70 text-sm font-light">French elegance</p>
              </div>
              <div className="space-y-4">
                {cognac.map((spirit, index) => (
                  <div
                    key={spirit.name} className="bg-forest-800 border-2 border-white/20 p-5"
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div>
                        <h3 className="font-bold uppercase tracking-wide text-base mb-1">{spirit.name}</h3>
                        <p className="text-xs text-cream-50/60 uppercase tracking-wider">{spirit.origin}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-bold">{spirit.price}</div>
                        <div className="text-xs text-cream-50/60">{spirit.priceGel}</div>
                      </div>
                    </div>
                    <p className="text-sm text-cream-50/80 font-light">{spirit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Spirits */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">Special Spirits</h2>
                <p className="text-cream-50/70 text-sm font-light">Unique selections</p>
              </div>
              <div className="space-y-4">
                {specialSpirits.map((spirit, index) => (
                  <div
                    key={spirit.name} className="bg-forest-800 border-2 border-white/20 p-5"
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div>
                        <h3 className="font-bold uppercase tracking-wide text-base mb-1">{spirit.name}</h3>
                        <p className="text-xs text-cream-50/60 uppercase tracking-wider">{spirit.origin}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-bold">{spirit.price}</div>
                        <div className="text-xs text-cream-50/60">{spirit.priceGel}</div>
                      </div>
                    </div>
                    <p className="text-sm text-cream-50/80 font-light">{spirit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div>
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
        </div>
      </section>
    </main>
  );
}








