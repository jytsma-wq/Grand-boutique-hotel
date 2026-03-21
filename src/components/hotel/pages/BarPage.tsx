'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Wine, 
  Martini, 
  Sparkles,
  Calendar,
  Phone,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface BarPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function BarPage({ locale }: BarPageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Bar hours: 16:00 - 01:00
  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      const hours = now.getHours();
      setIsOpen(hours >= 16 || hours < 1);
    };
    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const signatureCocktails = [
    {
      name: 'Black Sea Sunset',
      price: '$14',
      priceGel: '39₾',
      desc: 'Premium vodka, blackberry liqueur, citrus, and champagne',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80'
    },
    {
      name: 'Georgian Gold',
      price: '$16',
      priceGel: '44₾',
      desc: 'Chacha, honey, saffron, and local herbs',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80'
    },
    {
      name: 'Batumi Breeze',
      price: '$15',
      priceGel: '41₾',
      desc: 'Gin, cucumber, mint, and elderflower tonic',
      image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?w=400&q=80'
    },
    {
      name: 'Midnight Hour',
      price: '$18',
      priceGel: '50₾',
      desc: 'Whiskey, green tea liqueur, lime, and honey syrup',
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80'
    },
  ];

  const wineSelection = [
    { region: 'Kakheti', type: 'Saperavi', year: '2021', price: '$28', priceGel: '77₾' },
    { region: 'Kakheti', type: 'Rkatsiteli', year: '2022', price: '$24', priceGel: '66₾' },
    { region: 'Imereti', type: 'Tsitska', year: '2022', price: '$26', priceGel: '72₾' },
    { region: 'Adjara', type: 'Chkhaveri', year: '2021', price: '$30', priceGel: '83₾' },
    { region: 'Qvevri Aged', type: 'Amber Blend', year: '2019', price: '$45', priceGel: '124₾' },
    { region: 'Qvevri Aged', type: 'Saperavi Reserve', year: '2018', price: '$55', priceGel: '152₾' },
  ];

  const spirits = [
    { category: 'Whiskey', brands: 'Macallan, Glenfiddich, Jameson, Jack Daniels' },
    { category: 'Vodka', brands: 'Belvedere, Grey Goose, Stolichnaya, Tito\'s' },
    { category: 'Gin', brands: 'Hendrick\'s, Tanqueray, Bombay Sapphire, Gordon\'s' },
    { category: 'Rum', brands: 'Ron Zacapa, Diplomatico, Bacardi, Havana Club' },
    { category: 'Tequila', brands: 'Don Julio, Patrón, Herradura, José Cuervo' },
    { category: 'Cognac', brands: 'Hennessy, Remy Martin, Courvoisier, Martell' },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80"
            alt="Lounge Bar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <span className="text-white/60 text-sm tracking-[0.3em] uppercase font-light">Lounge & Bar</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mt-6 mb-6 leading-none">
              Lounge Bar
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-8 font-light">
              Sophistication in every sip, where the Black Sea horizon meets refined luxury
            </p>
            
            {/* Status Badge - Brutalist */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 border-2 ${
              isOpen ? 'border-white text-white' : 'border-white/50 text-white/50'
            }`}>
              <div className={`w-2 h-2 ${isOpen ? 'bg-white' : 'bg-white/50'}`} />
              <span className="uppercase tracking-wider text-sm font-medium">{isOpen ? 'Open Now' : 'Opens at 4:00 PM'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opening Hours Bar - Brutalist */}
      <section className="bg-forest-900 text-white py-8 border-t-2 border-forest-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <Clock className="text-white/70" size={20} />
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-light">Opening Hours</div>
                <div className="font-medium tracking-wide">Daily: 4:00 PM - 1:00 AM</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20" />
            <div className="flex items-center gap-3">
              <Martini className="text-white/70" size={20} />
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-light">Happy Hour</div>
                <div className="font-medium tracking-wide">5:00 PM - 7:00 PM (50% off cocktails)</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20" />
            <Link href={`/${locale}/booking`}>
              <Button className="btn-telegraph rounded-none">
                Reserve Table
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Bar */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">The Experience</span>
              <h2 className="section-title mt-4">An Intimate Haven</h2>
              <p className="text-lg text-forest-700 mb-6 font-light leading-relaxed">
                The Lounge Bar is where sophistication meets relaxation. Our expert 
                mixologists craft each cocktail as a work of art, using premium spirits, 
                fresh ingredients, and techniques honed over decades of experience.
              </p>
              <p className="text-forest-600 mb-8 font-light leading-relaxed">
                Watch the sunset over the Black Sea through our floor-to-ceiling windows, 
                or settle into one of our intimate alcoves for a private evening. Our extensive 
                wine list features Georgia's finest vintages, including rare qvevri-aged selections.
              </p>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-forest-700">
                  <Wine className="text-forest-900" size={18} />
                  <span className="uppercase tracking-wide text-sm font-medium">200+ Wine Selection</span>
                </div>
                <div className="flex items-center gap-3 text-forest-700">
                  <Martini className="text-forest-900" size={18} />
                  <span className="uppercase tracking-wide text-sm font-medium">Signature Cocktails</span>
                </div>
                <div className="flex items-center gap-3 text-forest-700">
                  <Sparkles className="text-forest-900" size={18} />
                  <span className="uppercase tracking-wide text-sm font-medium">Premium Spirits</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80"
                alt="Cocktails at Charcoal Bar"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-forest-900 p-6 max-w-xs border-l-4 border-white">
                <div className="flex items-center gap-3">
                  <Wine className="w-6 h-6 text-white" />
                  <div>
                    <div className="text-xs text-white/70 uppercase tracking-wider font-light">Live Music</div>
                    <div className="font-bold text-white uppercase tracking-wide">Thu - Sat, 8 PM</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Cocktails - Brutalist */}
      <section className="py-24 bg-forest-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-white/50 text-xs tracking-[0.3em] uppercase font-light">Crafted Exclusively</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 uppercase tracking-tight">Signature Cocktails</h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-6 font-light">
              Each cocktail tells a story of Georgia's rich heritage and modern creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureCocktails.map((cocktail, index) => (
              <motion.div
                key={cocktail.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-forest-800 overflow-hidden border-2 border-white/20 group"
              >
                <div className="relative h-56">
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex justify-between items-end">
                      <h3 className="text-lg font-bold uppercase tracking-wide">{cocktail.name}</h3>
                      <div className="text-right">
                        <div className="font-bold">{cocktail.price}</div>
                        <div className="text-xs text-white/60">{cocktail.priceGel}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-white/70 font-light">{cocktail.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Georgian Wine Selection */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Ancient Traditions</span>
            <h2 className="section-title mt-4">Georgian Wine Selection</h2>
            <p className="text-forest-600 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              Georgia is the cradle of wine, with 8,000 years of winemaking heritage. 
              Explore our curated selection of traditional and modern Georgian wines.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
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
                  {wineSelection.map((wine, i) => (
                    <tr key={i} className="border-b border-forest-200 hover:bg-forest-50 transition-colors">
                      <td className="py-5 text-forest-600 font-light">{wine.region}</td>
                      <td className="py-5 font-bold text-forest-900 uppercase tracking-wide text-sm">{wine.type}</td>
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

          <div className="text-center mt-16">
            <a href="/menus/bar-menu.pdf" target="_blank" rel="noopener noreferrer" className="link-architectural text-base">
              View Full Wine List
            </a>
          </div>
        </div>
      </section>

      {/* Premium Spirits */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Premium Selection</span>
            <h2 className="section-title mt-4">Spirits & Liquors</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {spirits.map((spirit, i) => (
              <motion.div
                key={spirit.category}
                {...fadeInUp}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 border-2 border-forest-900"
              >
                <h3 className="text-lg font-bold text-forest-900 mb-3 uppercase tracking-wide">{spirit.category}</h3>
                <p className="text-sm text-forest-600 font-light">{spirit.brands}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Gallery</span>
            <h2 className="section-title mt-4">Lounge Bar in Pictures</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <img
                  src={`https://images.unsplash.com/photo-${1514362545857 + i * 12345678}?w=400&q=80`}
                  alt={`Bar ${i}`}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA - Brutalist */}
      <section className="py-24 bg-forest-900 text-white border-t-4 border-forest-950">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight">
              Reserve Your Evening
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-light">
              Book your table for sunset cocktails, wine tastings, or private events. 
              VIP lounge available for special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/booking`}>
                <Button className="btn-telegraph rounded-none px-14 py-6 text-base">
                  Reserve Table
                </Button>
              </Link>
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-14 py-6 text-base border-2 border-white bg-transparent text-white hover:bg-white hover:text-forest-900 transition-all uppercase tracking-wider">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +995 422 00 00 00
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
