'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Star, 
  Utensils, 
  Wine,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface RestaurantPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function RestaurantPage({ locale }: RestaurantPageProps) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  // Restaurant hours: 7:00 - 23:00
  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      const hours = now.getHours();
      setIsOpen(hours >= 7 && hours < 23);
    };
    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const menuCategories = [
    {
      name: 'Georgian Classics',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
      items: [
        { name: 'Khachapuri Adjarian', price: '$12', priceGel: '33₾', desc: 'Traditional cheese-filled bread boat with egg' },
        { name: 'Khinkali', price: '$10', priceGel: '28₾', desc: 'Juicy dumplings with spiced meat (8 pcs)' },
        { name: 'Badrijani', price: '$9', priceGel: '25₾', desc: 'Eggplant rolls with walnut paste' },
        { name: 'Chakapuli', price: '$18', priceGel: '50₾', desc: 'Lamb stew with tarragon and herbs' },
      ]
    },
    {
      name: 'Black Sea Specialties',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80',
      items: [
        { name: 'Grilled Sea Bass', price: '$24', priceGel: '66₾', desc: 'Fresh Black Sea bass with herb butter' },
        { name: 'Stuffed Mussels', price: '$14', priceGel: '39₾', desc: 'Mussels with rice, herbs, and spices' },
        { name: 'Anchovy Fried', price: '$11', priceGel: '30₾', desc: 'Crispy fried anchovies with tkemali sauce' },
        { name: 'Trout Walnut', price: '$22', priceGel: '61₾', desc: 'Pan-seared trout with Georgian walnut sauce' },
      ]
    },
    {
      name: 'International Cuisine',
      image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=400&q=80',
      items: [
        { name: 'Beef Tenderloin', price: '$32', priceGel: '88₾', desc: 'Premium beef with red wine reduction' },
        { name: 'Duck Breast', price: '$28', priceGel: '77₾', desc: 'Cherry glaze with roasted vegetables' },
        { name: 'Risotto Truffle', price: '$22', priceGel: '61₾', desc: 'Creamy Arborio rice with black truffle' },
        { name: 'Caesar Salad', price: '$14', priceGel: '39₾', desc: 'Classic with grilled chicken' },
      ]
    },
  ];

  const chefSpecials = [
    {
      name: 'Chef\'s Tasting Menu',
      price: '$75',
      priceGel: '207₾',
      courses: '7 Courses',
      desc: 'A culinary journey through Georgian and international flavors'
    },
    {
      name: 'Wine Pairing Dinner',
      price: '$120',
      priceGel: '330₾',
      courses: '5 Courses + 5 Wines',
      desc: 'Paired with premium Georgian wines from our cellar'
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-150 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Azure Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <span className="text-white/60 text-sm tracking-[0.3em] uppercase font-light">Fine Dining</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mt-6 mb-6 leading-none">
              Azure Restaurant
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-8 font-light">
              A gastronomic journey through Georgian heritage and international excellence
            </p>
            
            {/* Status Badge - Brutalist */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 border-2 ${
              isOpen ? 'border-white text-white' : 'border-white/50 text-white/50'
            }`}>
              <div className={`w-2 h-2 ${isOpen ? 'bg-white' : 'bg-white/50'}`} />
              <span className="uppercase tracking-wider text-sm font-medium">{isOpen ? 'Open Now' : 'Currently Closed'}</span>
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
                <div className="text-xs text-white/50 uppercase tracking-wider font-light">Breakfast</div>
                <div className="font-medium tracking-wide">7:00 AM - 11:00 AM</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20" />
            <div className="flex items-center gap-3">
              <Clock className="text-white/70" size={20} />
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-light">Lunch</div>
                <div className="font-medium tracking-wide">12:00 PM - 3:00 PM</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20" />
            <div className="flex items-center gap-3">
              <Clock className="text-white/70" size={20} />
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-light">Dinner</div>
                <div className="font-medium tracking-wide">6:00 PM - 11:00 PM</div>
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

      {/* About Restaurant */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Our Philosophy</span>
              <h2 className="section-title mt-4">Farm to Table Excellence</h2>
              <p className="text-lg text-forest-700 mb-6 font-light leading-relaxed">
                At Azure Restaurant, we celebrate Georgia's rich culinary heritage while embracing 
                modern techniques. Our chefs work closely with local farmers and fishermen to bring 
                you the freshest ingredients from the Black Sea coast and Adjara highlands.
              </p>
              <p className="text-forest-600 mb-8 font-light leading-relaxed">
                Every dish tells a story - from ancient qvevri wines to contemporary interpretations 
                of traditional recipes passed down through generations. Our dining room offers 
                panoramic views of the Black Sea, creating the perfect backdrop for an 
                unforgettable culinary experience.
              </p>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-forest-700">
                  <Star className="text-forest-900" size={18} />
                  <span className="uppercase tracking-wide text-sm font-medium">Fine Dining</span>
                </div>
                <div className="flex items-center gap-3 text-forest-700">
                  <Utensils className="text-forest-900" size={18} />
                  <span className="uppercase tracking-wide text-sm font-medium">Georgian & International</span>
                </div>
                <div className="flex items-center gap-3 text-forest-700">
                  <Wine className="text-forest-900" size={18} />
                  <span className="uppercase tracking-wide text-sm font-medium">500+ Wine Selection</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80"
                alt="Georgian Cuisine"
                className="w-full aspect-square object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80"
                alt="Seafood"
                className="w-full aspect-square object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=400&q=80"
                alt="International Dishes"
                className="w-full aspect-square object-cover -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80"
                alt="Wine Selection"
                className="w-full aspect-square object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dining Experiences - Subpage Navigation */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Explore</span>
            <h2 className="section-title mt-4">Our Dining Experiences</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <Link href={`/${locale}/restaurant/breakfast`} className="group block">
                <div className="relative h-80 overflow-hidden border-2 border-forest-900">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                    alt="Breakfast"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-xs text-white/60 uppercase tracking-[0.3em] font-light mb-2">Daily 7:00 AM — 11:00 AM</div>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-3">Breakfast</h3>
                    <p className="text-white/70 font-light mb-4">Start your morning with a lavish spread of Georgian and international breakfast favorites</p>
                    <span className="inline-flex items-center gap-2 text-white text-sm uppercase tracking-wider font-medium group-hover:gap-3 transition-all">
                      Explore Menu <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link href={`/${locale}/restaurant/lunch-dinner`} className="group block">
                <div className="relative h-80 overflow-hidden border-2 border-forest-900">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                    alt="Lunch & Dinner"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-xs text-white/60 uppercase tracking-[0.3em] font-light mb-2">Lunch 12:00 PM — 3:00 PM · Dinner 6:00 PM — 11:00 PM</div>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-3">Lunch & Dinner</h3>
                    <p className="text-white/70 font-light mb-4">Georgian heritage meets international excellence in an unforgettable fine dining experience</p>
                    <span className="inline-flex items-center gap-2 text-white text-sm uppercase tracking-wider font-medium group-hover:gap-3 transition-all">
                      Explore Menu <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Sections - Architectural Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Our Menu</span>
            <h2 className="section-title mt-4">Culinary Offerings</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {menuCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-forest-900"
              >
                <div className="relative h-56">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest-950/70 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white uppercase tracking-tight">
                    {category.name}
                  </h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-6">
                    {category.items.map((item, i) => (
                      <li key={i} className="border-b border-forest-200 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <div className="font-bold text-forest-900 uppercase tracking-wide text-sm">{item.name}</div>
                          <div className="text-right shrink-0">
                            <div className="font-bold text-forest-900">{item.price}</div>
                            <div className="text-xs text-forest-500">{item.priceGel}</div>
                          </div>
                        </div>
                        <div className="text-sm text-forest-600 font-light">{item.desc}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href={`/${locale}/restaurant/menu`} className="link-architectural text-base">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Chef's Specials - Brutalist */}
      <section className="py-24 bg-forest-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-white/50 text-xs tracking-[0.3em] uppercase font-light">Exclusive</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 uppercase tracking-tight">Chef's Specials</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {chefSpecials.map((special, index) => (
              <motion.div
                key={special.name}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-forest-800 p-10 border-2 border-white/20"
              >
                <div className="flex justify-between items-start mb-6 pb-6 border-b border-white/20">
                  <h3 className="text-xl font-bold uppercase tracking-wide">{special.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{special.price}</div>
                    <div className="text-sm text-white/60">{special.priceGel}</div>
                  </div>
                </div>
                <div className="text-sm text-white/70 mb-4 uppercase tracking-wider font-light">{special.courses}</div>
                <p className="text-white/80 mb-8 font-light leading-relaxed">{special.desc}</p>
                <Link href={`/${locale}/booking`}>
                  <Button className="btn-telegraph rounded-none w-full">
                    Reserve This Experience
                  </Button>
                </Link>
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
            <h2 className="section-title mt-4">Azure in Pictures</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <img
                  src={`https://images.unsplash.com/photo-${1544025162 + i * 12345678}?w=400&q=80`}
                  alt={`Restaurant ${i}`}
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
              Reserve Your Table
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-light">
              Secure your spot for an unforgettable dining experience. Private dining rooms 
              available for special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/booking`}>
                <Button className="btn-telegraph rounded-none px-14 py-6 text-base">
                  Make Reservation
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
