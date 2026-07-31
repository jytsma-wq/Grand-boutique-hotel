'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Coffee, Croissant, Egg, Apple, Milk, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { type Locale } from '@/i18n/config';
import {
  breakfastSectionKeys,
  restaurantMenuFallbackSections,
  selectMenuSections,
} from '@/lib/menu-content';
import { getImageUrl } from '@/lib/sanity';
import { type SanityMenuSection } from '@/types/sanity';

interface BreakfastPageProps {
  locale: Locale;
  menuSections?: SanityMenuSection[];
}

const categoryIcons: Record<string, LucideIcon> = {
  'breakfast-georgian': Egg,
  'breakfast-hot-dishes': Coffee,
  'breakfast-continental': Croissant,
  'breakfast-fresh-healthy': Apple,
  'breakfast-beverages': Milk,
};

export default function BreakfastPage({ locale, menuSections }: BreakfastPageProps) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const dietaryTags = [
    t('restaurant.breakfastPage.vegetarian'),
    t('restaurant.breakfastPage.vegan'),
    t('restaurant.breakfastPage.glutenFree'),
    t('restaurant.breakfastPage.halal'),
    t('restaurant.breakfastPage.dairyFree'),
    t('restaurant.breakfastPage.nutFree'),
  ];

  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      const hours = now.getHours();
      setIsOpen(hours >= 7 && hours < 11);
    };
    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const breakfastCategories = selectMenuSections(
    menuSections,
    breakfastSectionKeys,
    restaurantMenuFallbackSections,
    locale,
  );

  return (
    <main className="min-h-screen pt-20">
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1920&q=80"
            alt={t('restaurant.page.breakfastTitle')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <div>
            <span className="text-white/60 text-sm tracking-[0.3em] uppercase font-light">{t('restaurant.title')}</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mt-6 mb-6 leading-none">
              {t('restaurant.page.breakfastTitle')}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-8 font-light">
              {t('restaurant.breakfastPage.heroDescription')}
            </p>

            <div className={`inline-flex items-center gap-3 px-6 py-3 border-2 ${
              isOpen ? 'border-white text-white' : 'border-white/50 text-white/50'
            }`}>
              <div className={`w-2 h-2 ${isOpen ? 'bg-white' : 'bg-white/50'}`} />
              <span className="uppercase tracking-wider text-sm font-medium">
                {isOpen ? t('restaurant.breakfastPage.nowServing') : t('restaurant.breakfastPage.hours')}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-900 text-white py-10 border-t-2 border-forest-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <Clock className="text-white/70" size={28} />
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-light mb-1">{t('restaurant.breakfastPage.opening')}</div>
                <div className="text-2xl font-bold tracking-wide">07:00</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20" />
            <div className="flex items-center gap-4">
              <Clock className="text-white/70" size={28} />
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-light mb-1">{t('restaurant.breakfastPage.closing')}</div>
                <div className="text-2xl font-bold tracking-wide">11:00</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20" />
            <div className="text-center md:text-left">
              <div className="text-xs text-white/50 uppercase tracking-wider font-light mb-1">{t('restaurant.breakfastPage.location')}</div>
              <div className="text-lg font-medium tracking-wide">{t('restaurant.breakfastPage.locationValue')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('restaurant.breakfastPage.complimentary')}</span>
            <h2 className="section-title mt-4">{t('restaurant.breakfastPage.included')}</h2>
            <p className="text-lg text-forest-600 font-light leading-relaxed">
              {t('restaurant.breakfastPage.includedDescription')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('restaurant.breakfastPage.selection')}</span>
            <h2 className="section-title mt-4">{t('restaurant.breakfastPage.menu')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {breakfastCategories.map((category) => {
              const Icon = categoryIcons[category.sectionKey] ?? Coffee;

              return (
                <div key={category.sectionKey} className="bg-white border-2 border-forest-900 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getImageUrl(category.image, 600)}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-white flex items-center justify-center">
                        <Icon className="w-5 h-5 text-forest-900" />
                      </div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {category.items?.map((item) => (
                        <li key={item._key ?? item.name} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-forest-900 mt-2 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-forest-900 text-sm uppercase tracking-wide">{item.name}</div>
                            {item.description && (
                              <div className="text-xs text-forest-500 font-light">{item.description}</div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('restaurant.breakfastPage.dietaryOptions')}</span>
            <h2 className="section-title mt-4">{t('restaurant.breakfastPage.requirements')}</h2>
            <p className="text-forest-600 font-light leading-relaxed mb-8">
              {t('restaurant.breakfastPage.dietaryDescription')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {dietaryTags.map((diet) => (
                <span key={diet} className="px-4 py-2 border-2 border-forest-200 text-forest-700 text-sm uppercase tracking-wider">
                  {diet}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-forest-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
            {t('restaurant.breakfastPage.bookStay')}
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-light">
            {t('restaurant.breakfastPage.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/booking`}>
              <Button className="btn-boutique px-12 py-5">
                {t('nav.bookNow')}
              </Button>
            </Link>
            <Link href={`/${locale}/restaurant`}>
              <Button variant="outline" className="px-12 py-5 border-2 border-white bg-transparent text-white hover:bg-white hover:text-forest-900 uppercase tracking-wider">
                {t('restaurant.downloadMenu')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
