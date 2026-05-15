import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface WineListPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function WineListPage({ locale }: WineListPageProps) {
  const georgianWines = [
    { region: 'Kakheti', type: 'Saperavi', year: '2021', price: '$28', priceGel: '77₾', desc: 'Full-bodied red with dark fruit notes' },
    { region: 'Kakheti', type: 'Rkatsiteli', year: '2022', price: '$24', priceGel: '66₾', desc: 'Crisp white with citrus and floral notes' },
    { region: 'Imereti', type: 'Tsitska', year: '2022', price: '$26', priceGel: '72₾', desc: 'Light white with green apple and pear' },
    { region: 'Adjara', type: 'Chkhaveri', year: '2021', price: '$30', priceGel: '83₾', desc: 'Rare rosé with strawberry notes' },
    { region: 'Qvevri Aged', type: 'Amber Blend', year: '2019', price: '$45', priceGel: '124₾', desc: 'Traditional orange wine, complex and tannic' },
    { region: 'Qvevri Aged', type: 'Saperavi Reserve', year: '2018', price: '$55', priceGel: '152₾', desc: 'Premium aged red, oak and leather notes' },
    { region: 'Kakheti', type: 'Kisi', year: '2021', price: '$32', priceGel: '88₾', desc: 'Aromatic white with honey and quince' },
    { region: 'Kartli', type: 'Chinuri', year: '2022', price: '$27', priceGel: '74₾', desc: 'Fresh white with mineral character' },
  ];

  const internationalWines = [
    { region: 'Bordeaux, France', type: 'Château Margaux', year: '2018', price: '$180', priceGel: '496₾', desc: 'Premier Cru Classé, elegant and refined' },
    { region: 'Tuscany, Italy', type: 'Brunello di Montalcino', year: '2017', price: '$95', priceGel: '262₾', desc: 'Full-bodied Sangiovese, cherry and spice' },
    { region: 'Rioja, Spain', type: 'Gran Reserva', year: '2015', price: '$68', priceGel: '187₾', desc: 'Aged Tempranillo, vanilla and tobacco' },
    { region: 'Napa Valley, USA', type: 'Cabernet Sauvignon', year: '2019', price: '$85', priceGel: '234₾', desc: 'Bold California red, blackberry and oak' },
    { region: 'Champagne, France', type: 'Dom Pérignon', year: '2012', price: '$220', priceGel: '607₾', desc: 'Prestige cuvée, fine bubbles and complexity' },
    { region: 'Mosel, Germany', type: 'Riesling Spätlese', year: '2020', price: '$42', priceGel: '116₾', desc: 'Sweet white with peach and apricot' },
  ];

  const sparklingWines = [
    { name: 'Prosecco DOC', origin: 'Veneto, Italy', price: '$38', priceGel: '105₾', desc: 'Light and fruity, perfect aperitif' },
    { name: 'Cava Brut Reserva', origin: 'Catalonia, Spain', price: '$35', priceGel: '96₾', desc: 'Traditional method, crisp and elegant' },
    { name: 'Champagne Brut', origin: 'Champagne, France', price: '$95', priceGel: '262₾', desc: 'Classic French champagne, refined bubbles' },
    { name: 'Georgian Sparkling', origin: 'Kakheti, Georgia', price: '$32', priceGel: '88₾', desc: 'Local sparkling wine, fresh and lively' },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
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

      {/* Georgian Wines */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
              Georgian Wines
            </h2>
            <p className="text-forest-600 max-w-2xl mx-auto font-light">
              Discover the ancient winemaking heritage of Georgia, the cradle of wine
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-forest-900">
                  <th className="text-left py-5 text-forest-900 font-bold uppercase tracking-wider text-sm">Region</th>
                  <th className="text-left py-5 text-forest-900 font-bold uppercase tracking-wider text-sm">Wine</th>
                  <th className="text-left py-5 text-forest-900 font-bold uppercase tracking-wider text-sm">Year</th>
                  <th className="text-right py-5 text-forest-900 font-bold uppercase tracking-wider text-sm">Price</th>
                </tr>
              </thead>
              <tbody>
                {georgianWines.map((wine, i) => (
                  <tr
                    key={i} className="border-b border-forest-200 hover:bg-forest-50 transition-colors"
                  >
                    <td className="py-5 text-forest-600 font-light">{wine.region}</td>
                    <td className="py-5">
                      <div className="font-bold text-forest-900 uppercase tracking-wide text-sm">{wine.type}</div>
                      <div className="text-xs text-forest-500 mt-1">{wine.desc}</div>
                    </td>
                    <td className="py-5 text-forest-600 font-light">{wine.year}</td>
                    <td className="py-5 text-right">
                      <span className="text-forest-900 font-bold">{wine.price}</span>
                      <span className="text-forest-500 text-sm ml-2">{wine.priceGel}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* International Wines */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
              International Selection
            </h2>
            <p className="text-forest-600 max-w-2xl mx-auto font-light">
              Premium wines from the world's finest vineyards
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white border-2 border-forest-900">
              <thead>
                <tr className="border-b-2 border-forest-900 bg-forest-900 text-cream-50">
                  <th className="text-left py-5 px-6 font-bold uppercase tracking-wider text-sm">Region</th>
                  <th className="text-left py-5 px-6 font-bold uppercase tracking-wider text-sm">Wine</th>
                  <th className="text-left py-5 px-6 font-bold uppercase tracking-wider text-sm">Year</th>
                  <th className="text-right py-5 px-6 font-bold uppercase tracking-wider text-sm">Price</th>
                </tr>
              </thead>
              <tbody>
                {internationalWines.map((wine, i) => (
                  <tr
                    key={i} className="border-b border-forest-200 hover:bg-forest-50 transition-colors"
                  >
                    <td className="py-5 px-6 text-forest-600 font-light">{wine.region}</td>
                    <td className="py-5 px-6">
                      <div className="font-bold text-forest-900 uppercase tracking-wide text-sm">{wine.type}</div>
                      <div className="text-xs text-forest-500 mt-1">{wine.desc}</div>
                    </td>
                    <td className="py-5 px-6 text-forest-600 font-light">{wine.year}</td>
                    <td className="py-5 px-6 text-right">
                      <span className="text-forest-900 font-bold">{wine.price}</span>
                      <span className="text-forest-500 text-sm ml-2">{wine.priceGel}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sparkling Wines */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
              Sparkling & Champagne
            </h2>
            <p className="text-forest-600 max-w-2xl mx-auto font-light">
              Celebrate with our selection of fine bubbles
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {sparklingWines.map((wine, i) => (
              <div
                key={wine.name} className="bg-forest-50 border-2 border-forest-900 p-8"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-forest-900 uppercase tracking-wide text-lg">{wine.name}</h3>
                  <div className="text-right">
                    <div className="font-bold text-forest-900">{wine.price}</div>
                    <div className="text-xs text-forest-500">{wine.priceGel}</div>
                  </div>
                </div>
                <p className="text-sm text-forest-600 mb-2 font-light">{wine.origin}</p>
                <p className="text-sm text-forest-500 font-light italic">{wine.desc}</p>
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
        </div>
      </section>
    </main>
  );
}








