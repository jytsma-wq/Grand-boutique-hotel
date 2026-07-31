'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Clock, Utensils, Wine, ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface LunchDinnerPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function LunchDinnerPage({ locale }: LunchDinnerPageProps) {
  const t = useTranslations();
  const [currentMeal, setCurrentMeal] = useState<'lunch' | 'dinner' | 'closed'>('closed');

  useEffect(() => {
    const checkMealTime = () => {
      const now = new Date();
      const hours = now.getHours();
      if (hours >= 12 && hours < 15) {
        setCurrentMeal('lunch');
      } else if (hours >= 18 && hours < 23) {
        setCurrentMeal('dinner');
      } else {
        setCurrentMeal('closed');
      }
    };
    checkMealTime();
    const interval = setInterval(checkMealTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const menuSections = [
    {
      title: t('restaurant.lunchMenuTitle'),
      time: '12:00–15:00',
      description: t('restaurant.lunchDinner.lunchDescription'),
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
      highlights: [
        t('restaurant.lunchDinner.lunch1'),
        t('restaurant.lunchDinner.lunch2'),
        t('restaurant.lunchDinner.lunch3'),
        t('restaurant.lunchDinner.lunch4'),
      ],
      cmsLink: `/${locale}/restaurant/menu`,
      active: currentMeal === 'lunch',
    },
    {
      title: t('restaurant.dinnerMenuTitle'),
      time: '18:00–23:00',
      description: t('restaurant.lunchDinner.dinnerDescription'),
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      highlights: [
        t('restaurant.lunchDinner.dinner1'),
        t('restaurant.lunchDinner.dinner2'),
        t('restaurant.lunchDinner.dinner3'),
        t('restaurant.lunchDinner.dinner4'),
      ],
      cmsLink: `/${locale}/restaurant/menu`,
      active: currentMeal === 'dinner',
    },
  ];

  const featuredDishes = [
    {
      name: t('restaurant.lunchDinner.seaBass'),
      category: t('restaurant.lunchDinner.seafood'),
      price: '$32',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80',
    },
    {
      name: t('restaurant.lunchDinner.beef'),
      category: t('restaurant.lunchDinner.grill'),
      price: '$45',
      image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80',
    },
    {
      name: t('restaurant.lunchDinner.khachapuri'),
      category: t('restaurant.lunchDinner.georgian'),
      price: '$18',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    },
    {
      name: t('restaurant.lunchDinner.risotto'),
      category: t('restaurant.lunchDinner.italian'),
      price: '$38',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt={t('restaurant.page.lunchDinnerTitle')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <div>
            <span className="text-cream-50/60 text-sm tracking-[0.3em] uppercase font-light">{t('restaurant.title')}</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mt-6 mb-6 leading-none">
              {t('restaurant.page.lunchDinnerTitle')}
            </h1>
            <p className="text-xl text-cream-50/70 max-w-2xl mb-8 font-light">
              {t('restaurant.lunchDinner.heroDescription')}
            </p>
            
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 border-2 ${
              currentMeal !== 'closed' ? 'border-white text-cream-50' : 'border-white/50 text-cream-50/50'
            }`}>
              <div className={`w-2 h-2 ${currentMeal !== 'closed' ? 'bg-white' : 'bg-white/50'}`} />
              <span className="uppercase tracking-wider text-sm font-medium">
                {currentMeal === 'lunch' && t('restaurant.lunchDinner.nowServingLunch')}
                {currentMeal === 'dinner' && t('restaurant.lunchDinner.nowServingDinner')}
                {currentMeal === 'closed' && t('restaurant.lunchDinner.closed')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours Banner */}
      <section className="bg-forest-900 text-cream-50 py-10 border-t-2 border-forest-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <Utensils className="text-cream-50/70" size={28} />
              <div>
                <div className="text-xs text-cream-50/50 uppercase tracking-wider font-light mb-1">{t('restaurant.hours.lunch')}</div>
                <div className="text-2xl font-bold tracking-wide">12:00–15:00</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20" />
            <div className="flex items-center gap-4">
              <Wine className="text-cream-50/70" size={28} />
              <div>
                <div className="text-xs text-cream-50/50 uppercase tracking-wider font-light mb-1">{t('restaurant.hours.dinner')}</div>
                <div className="text-2xl font-bold tracking-wide">18:00–23:00</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20" />
            <Link href={`/${locale}/booking`}>
              <Button className="btn-boutique">
                {t('restaurant.reserve')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('restaurant.lunchDinner.ourMenus')}</span>
            <h2 className="section-title mt-4">{t('restaurant.lunchDinner.culinaryExcellence')}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {menuSections.map((section, index) => (
              <div
                key={section.title} className={`border-2 ${section.active ? 'border-forest-900' : 'border-forest-300'} overflow-hidden group`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={16} className="text-cream-50/70" />
                      <span className="text-cream-50/70 text-sm">{section.time}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-cream-50 uppercase tracking-wide">
                      {section.title}
                    </h3>
                    {section.active && (
                      <span className="inline-block mt-2 px-3 py-1 bg-white text-forest-900 text-xs uppercase tracking-wider font-bold">
                        {t('restaurant.lunchDinner.nowServing')}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-forest-600 font-light mb-6">{section.description}</p>
                  <ul className="space-y-3 mb-8">
                    {section.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-forest-900" />
                        <span className="text-forest-700 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={section.cmsLink}
                    className="inline-flex items-center gap-2 text-forest-900 font-medium uppercase tracking-wider text-sm hover:opacity-70 transition-opacity"
                  >
                    {t('restaurant.downloadMenu')}
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('restaurant.lunchDinner.signature')}</span>
            <h2 className="section-title mt-4">{t('restaurant.lunchDinner.featuredDishes')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, index) => (
              <div
                key={dish.name} className="bg-white border-2 border-forest-900 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 text-forest-900 font-bold text-sm">
                    {dish.price}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-forest-500 uppercase tracking-wider mb-1">{dish.category}</div>
                  <h3 className="font-bold text-forest-900 uppercase tracking-wide">{dish.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Pairing Section */}
      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cream-50/50 text-xs tracking-[0.3em] uppercase font-light">{t('restaurant.lunchDinner.sommelierSelection')}</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 uppercase tracking-tight">{t('restaurant.lunchDinner.winePairings')}</h2>
              <p className="text-cream-50/70 text-lg mb-8 font-light leading-relaxed">
                {t('restaurant.lunchDinner.wineDescription')}
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white" />
                  <span className="text-cream-50/80">{t('restaurant.page.wineCount')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white" />
                  <span className="text-cream-50/80">{t('restaurant.lunchDinner.qvevriWines')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white" />
                  <span className="text-cream-50/80">{t('restaurant.lunchDinner.sommelierService')}</span>
                </div>
              </div>
              <Link href={`/${locale}/bar/wine-list`}>
                <Button className="btn-boutique">
                  {t('bar.page.viewWineList')}
                </Button>
              </Link>
            </div>
            <div >
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80"
                alt={t('restaurant.lunchDinner.winePairings')}
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight text-forest-900">
              {t('restaurant.reserve')}
            </h2>
            <p className="text-forest-600 text-lg mb-10 max-w-2xl mx-auto font-light">
              {t('restaurant.lunchDinner.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/booking`}>
                <Button className="btn-boutique px-12 py-5">
                  {t('restaurant.lunchDinner.makeReservation')}
                </Button>
              </Link>
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-12 py-5 border-2 border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-cream-50 uppercase tracking-wider">
                  <Phone className="mr-2 w-4 h-4" />
                  +995 422 00 00 00
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}






