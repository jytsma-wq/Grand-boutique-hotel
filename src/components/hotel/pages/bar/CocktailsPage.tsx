import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Martini } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface CocktailsPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function CocktailsPage({ locale }: CocktailsPageProps) {
  const signatureCocktails = [
    {
      name: 'Black Sea Sunset',
      price: '$14',
      priceGel: '39₾',
      desc: 'Premium vodka, blackberry liqueur, fresh citrus, and champagne',
      ingredients: 'Vodka, Blackberry Liqueur, Lemon, Champagne',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80'
    },
    {
      name: 'Georgian Gold',
      price: '$16',
      priceGel: '44₾',
      desc: 'Chacha (Georgian grape vodka), honey, saffron, and local herbs',
      ingredients: 'Chacha, Honey, Saffron, Herbs',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80'
    },
    {
      name: 'Batumi Breeze',
      price: '$15',
      priceGel: '41₾',
      desc: 'Premium gin, cucumber, fresh mint, and elderflower tonic',
      ingredients: 'Gin, Cucumber, Mint, Elderflower Tonic',
      image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?w=400&q=80'
    },
    {
      name: 'Midnight Hour',
      price: '$18',
      priceGel: '50₾',
      desc: 'Aged whiskey, green tea liqueur, fresh lime, and honey syrup',
      ingredients: 'Whiskey, Green Tea Liqueur, Lime, Honey',
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80'
    },
    {
      name: 'Adjara Mule',
      price: '$13',
      priceGel: '36₾',
      desc: 'Vodka, ginger beer, lime, and fresh mint',
      ingredients: 'Vodka, Ginger Beer, Lime, Mint',
      image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80'
    },
    {
      name: 'Tbilisi Sour',
      price: '$14',
      priceGel: '39₾',
      desc: 'Bourbon, lemon juice, egg white, and Georgian cherry syrup',
      ingredients: 'Bourbon, Lemon, Egg White, Cherry Syrup',
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&q=80'
    },
  ];

  const classicCocktails = [
    { name: 'Mojito', price: '$12', priceGel: '33₾', desc: 'White rum, mint, lime, sugar, soda water' },
    { name: 'Margarita', price: '$13', priceGel: '36₾', desc: 'Tequila, triple sec, lime juice, salt rim' },
    { name: 'Old Fashioned', price: '$15', priceGel: '41₾', desc: 'Bourbon, sugar, bitters, orange peel' },
    { name: 'Negroni', price: '$14', priceGel: '39₾', desc: 'Gin, Campari, sweet vermouth' },
    { name: 'Espresso Martini', price: '$14', priceGel: '39₾', desc: 'Vodka, coffee liqueur, fresh espresso' },
    { name: 'Cosmopolitan', price: '$13', priceGel: '36₾', desc: 'Vodka, triple sec, cranberry, lime' },
    { name: 'Aperol Spritz', price: '$12', priceGel: '33₾', desc: 'Aperol, prosecco, soda water, orange' },
    { name: 'Manhattan', price: '$15', priceGel: '41₾', desc: 'Rye whiskey, sweet vermouth, bitters' },
  ];

  const nonAlcoholic = [
    { name: 'Virgin Mojito', price: '$8', priceGel: '22₾', desc: 'Fresh mint, lime, sugar, soda water' },
    { name: 'Tropical Punch', price: '$9', priceGel: '25₾', desc: 'Pineapple, mango, passion fruit, coconut' },
    { name: 'Berry Lemonade', price: '$8', priceGel: '22₾', desc: 'Mixed berries, fresh lemon, honey' },
    { name: 'Cucumber Cooler', price: '$7', priceGel: '19₾', desc: 'Cucumber, mint, lime, tonic water' },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80"
            alt="Cocktails"
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
            <Martini className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 leading-none">
              Cocktail Menu
            </h1>
            <p className="text-xl text-cream-50/70 max-w-2xl font-light">
              Handcrafted cocktails blending Georgian traditions with modern mixology
            </p>
          </div>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Signature Cocktails
            </h2>
            <p className="text-cream-50/70 max-w-2xl mx-auto font-light">
              Exclusive creations by our master mixologists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureCocktails.map((cocktail, index) => (
              <div
                key={cocktail.name} className="bg-forest-800 overflow-hidden border-2 border-white/20 group"
              >
                <div className="relative h-56">
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex justify-between items-end">
                      <h3 className="text-xl font-bold uppercase tracking-wide">{cocktail.name}</h3>
                      <div className="text-right">
                        <div className="font-bold text-lg">{cocktail.price}</div>
                        <div className="text-xs text-cream-50/60">{cocktail.priceGel}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-cream-50/80 mb-3 font-light leading-relaxed">{cocktail.desc}</p>
                  <p className="text-xs text-cream-50/50 uppercase tracking-wider font-light">{cocktail.ingredients}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classic Cocktails */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
              Classic Cocktails
            </h2>
            <p className="text-forest-600 max-w-2xl mx-auto font-light">
              Timeless favorites, expertly crafted
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {classicCocktails.map((cocktail, index) => (
              <div
                key={cocktail.name} className="border-2 border-forest-900 p-6 bg-forest-50"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-bold text-forest-900 uppercase tracking-wide text-base">
                    {cocktail.name}
                  </h3>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-forest-900">{cocktail.price}</div>
                    <div className="text-xs text-forest-500">{cocktail.priceGel}</div>
                  </div>
                </div>
                <p className="text-sm text-forest-600 font-light">{cocktail.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Alcoholic */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
              Non-Alcoholic Cocktails
            </h2>
            <p className="text-forest-600 max-w-2xl mx-auto font-light">
              Sophisticated mocktails for every occasion
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {nonAlcoholic.map((drink, index) => (
              <div
                key={drink.name} className="bg-white border-2 border-forest-900 p-6"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-bold text-forest-900 uppercase tracking-wide text-base">
                    {drink.name}
                  </h3>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-forest-900">{drink.price}</div>
                    <div className="text-xs text-forest-500">{drink.priceGel}</div>
                  </div>
                </div>
                <p className="text-sm text-forest-600 font-light">{drink.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
              Happy Hour Special
            </h2>
            <p className="text-cream-50/70 text-lg mb-12 max-w-2xl mx-auto font-light">
              Join us daily from 5:00 PM to 7:00 PM for 50% off all cocktails
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








