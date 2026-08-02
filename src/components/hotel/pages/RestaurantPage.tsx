'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Calendar,
  ChevronRight,
  Clock,
  Phone,
  Star,
  Utensils,
  Wine,
} from 'lucide-react';
import { type Locale } from '@/i18n/config';
import { hotel } from '@/lib/site';

interface RestaurantPageProps {
  locale: Locale;
}

const menuCategories = [
  {
    name: 'Georgian Classics',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80',
    items: [
      { name: 'Khachapuri Adjarian', price: '$12', priceGel: '33 GEL', descKey: 'khachapuri' },
      { name: 'Khinkali', price: '$10', priceGel: '28 GEL', descKey: 'khinkali' },
      { name: 'Badrijani', price: '$9', priceGel: '25 GEL', descKey: 'badrijani' },
      { name: 'Chakapuli', price: '$18', priceGel: '50 GEL', descKey: 'chakapuli' },
    ],
  },
  {
    name: 'Black Sea Specialties',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=900&q=80',
    items: [
      { name: 'Grilled Sea Bass', price: '$24', priceGel: '66 GEL', descKey: 'seaBass' },
      { name: 'Stuffed Mussels', price: '$14', priceGel: '39 GEL', descKey: 'mussels' },
      { name: 'Crisp Anchovies', price: '$11', priceGel: '30 GEL', descKey: 'anchovies' },
      { name: 'Trout Walnut', price: '$22', priceGel: '61 GEL', descKey: 'trout' },
    ],
  },
  {
    name: 'International Cuisine',
    image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=900&q=80',
    items: [
      { name: 'Beef Tenderloin', price: '$32', priceGel: '88 GEL', descKey: 'beef' },
      { name: 'Duck Breast', price: '$28', priceGel: '77 GEL', descKey: 'duck' },
      { name: 'Truffle Risotto', price: '$22', priceGel: '61 GEL', descKey: 'risotto' },
      { name: 'Caesar Salad', price: '$14', priceGel: '39 GEL', descKey: 'caesar' },
    ],
  },
];

const chefSpecials = [
  {
    name: "Chef's Tasting Menu",
    price: '$75',
    priceGel: '207 GEL',
    coursesKey: 'tastingCourses',
    descKey: 'tastingDescription',
  },
  {
    name: 'Wine Pairing Dinner',
    price: '$120',
    priceGel: '330 GEL',
    coursesKey: 'pairingCourses',
    descKey: 'pairingDescription',
  },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80' },
  { src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&q=80' },
];

export default function RestaurantPage({ locale }: RestaurantPageProps) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <main className="luxury-page min-h-screen pt-20">
      <section className="relative min-h-[72dvh] overflow-hidden text-cream-50">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt={t('restaurant.title')}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/45 to-charcoal-950/15" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-950/80 to-transparent" />

        <div className="luxury-container relative z-10 flex min-h-[72dvh] items-end pb-14 md:pb-20">
          <div className="max-w-4xl">
            <p className="luxury-kicker text-brass-300">{t('restaurant.subtitle')}</p>
            <h1 className="luxury-display mt-6 text-cream-50">{t('restaurant.title')}</h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/75 md:text-xl">
              {t('restaurant.description')}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={`/${locale}/booking`} className="luxury-button border-brass-400 bg-brass-400 text-charcoal-950">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span>{t('restaurant.reserve')}</span>
              </Link>
              <Link href={`/${locale}/restaurant/menu`} className="luxury-button-outline luxury-button-outline-light text-cream-50">
                <span>{t('restaurant.downloadMenu')}</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 text-cream-50">
        <div className="luxury-container grid gap-6 py-7 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center">
          {[
            [t('restaurant.page.breakfastTitle'), t('restaurant.page.breakfastTime')],
            [t('restaurant.hours.lunch'), '12:00–15:00'],
            [t('restaurant.hours.dinner'), '18:00–23:00'],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center gap-4 border-white/10 md:border-r md:last:border-r-0">
              <Clock className="h-5 w-5 text-brass-300" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">{label}</p>
                <p className="mt-1 text-sm font-medium tracking-wide text-white/85">{value}</p>
              </div>
            </div>
          ))}
          <div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/75">
            <span className={`h-2 w-2 ${isOpen ? 'bg-brass-300' : 'bg-white/40'}`} aria-hidden="true" />
            {isOpen ? t('common.open') : t('common.closed')}
          </div>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="luxury-kicker">{t('restaurant.page.philosophy')}</p>
            <h2 className="luxury-title mt-5 text-5xl md:text-7xl">{t('restaurant.page.farmToTable')}</h2>
            <p className="luxury-lede mt-8">
              {t('restaurant.page.philosophyDescription')}
            </p>
            <div className="mt-9 grid gap-4 text-sm uppercase tracking-[0.18em] text-forest-700 sm:grid-cols-3">
              {[
                [Star, t('restaurant.page.fineDining')],
                [Utensils, t('restaurant.page.georgianInternational')],
                [Wine, t('restaurant.page.wineCount')],
              ].map(([Icon, label]) => (
                <div key={label as string} className="flex items-center gap-3 border-t border-brass-400/35 pt-4">
                  <Icon className="h-5 w-5 text-brass-600" aria-hidden="true" />
                  <span>{label as string}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`luxury-image relative aspect-[4/5] ${index === 1 ? 'mt-10' : ''} ${index === 2 ? '-mt-10' : ''}`}
              >
                <Image
                  src={image.src}
                  alt={t('restaurant.page.galleryAlt', { number: index + 1 })}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-section bg-cream-100">
        <div className="luxury-container">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="luxury-kicker">{t('restaurant.page.explore')}</p>
              <h2 className="luxury-title mt-5 text-5xl md:text-7xl">{t('restaurant.page.diningExperiences')}</h2>
            </div>
            <p className="max-w-xl text-sm font-light leading-7 text-forest-700">
              {t('restaurant.page.diningDescription')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                href: '/restaurant/breakfast',
                title: t('restaurant.page.breakfastTitle'),
                time: t('restaurant.page.breakfastTime'),
                desc: t('restaurant.page.breakfastDescription'),
                image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
              },
              {
                href: '/restaurant/lunch-dinner',
                title: t('restaurant.page.lunchDinnerTitle'),
                time: t('restaurant.page.lunchDinnerTime'),
                desc: t('restaurant.page.lunchDinnerDescription'),
                image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
              },
            ].map((experience) => (
              <Link key={experience.href} href={`/${locale}${experience.href}`} className="group luxury-image relative block min-h-[420px] overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/88 via-charcoal-950/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-cream-50 md:p-10">
                  <p className="text-xs uppercase tracking-[0.24em] text-brass-300">{experience.time}</p>
                  <h3 className="luxury-title mt-3 text-4xl">{experience.title}</h3>
                  <p className="mt-4 max-w-lg text-sm font-light leading-7 text-white/75">{experience.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all group-hover:gap-4">
                    {t('restaurant.page.viewExperience')} <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {locale === 'en' && <section className="luxury-section">
        <div className="luxury-container">
          <div className="mb-14 text-center">
            <p className="luxury-kicker justify-center">Our menu</p>
            <h2 className="luxury-title mt-5 text-5xl md:text-7xl">Culinary offerings</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {menuCategories.map((category) => (
              <article key={category.name} className="luxury-card overflow-hidden">
                <div className="luxury-image relative h-64">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/75 to-transparent" />
                  <h3 className="luxury-title absolute bottom-6 left-6 max-w-[75%] text-3xl text-cream-50">
                    {category.name}
                  </h3>
                </div>
                <div className="p-7">
                  <ul className="space-y-6">
                    {category.items.map((item) => (
                      <li key={item.name} className="border-b border-brass-400/20 pb-5 last:border-b-0 last:pb-0">
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-900">{item.name}</h4>
                            <p className="mt-2 text-sm font-light leading-6 text-forest-700">
                              {t(`restaurant.page.menuDescriptions.${item.descKey}`)}
                            </p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-sm font-semibold text-forest-900">{item.price}</p>
                            <p className="mt-1 text-xs text-forest-500">{item.priceGel}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>}

      {locale === 'en' && <section className="luxury-section bg-charcoal-950 text-cream-50 luxury-grain">
        <div className="luxury-container">
          <div className="mb-14 text-center">
            <p className="luxury-kicker justify-center text-brass-300">Exclusive</p>
            <h2 className="luxury-title mt-5 text-5xl md:text-7xl">Chef&apos;s specials</h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {chefSpecials.map((special) => (
              <article key={special.name} className="border border-white/12 bg-white/[0.04] p-8 md:p-10">
                <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-7">
                  <h3 className="luxury-title text-3xl text-cream-50">{special.name}</h3>
                  <div className="shrink-0 text-right">
                    <p className="text-2xl text-brass-300">{special.price}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">{special.priceGel}</p>
                  </div>
                </div>
                <p className="mt-7 text-xs uppercase tracking-[0.24em] text-brass-300">
                  {t(`restaurant.page.chefSpecials.${special.coursesKey}`)}
                </p>
                <p className="mt-4 font-light leading-7 text-white/70">
                  {t(`restaurant.page.chefSpecials.${special.descKey}`)}
                </p>
                <Link href={`/${locale}/booking`} className="luxury-button mt-8 w-full border-brass-400 bg-brass-400 text-charcoal-950">
                  <span>Reserve this experience</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>}

      <section className="luxury-section">
        <div className="luxury-container text-center">
          <p className="luxury-kicker justify-center">{t('restaurant.page.reservations')}</p>
          <h2 className="luxury-title mx-auto mt-5 max-w-3xl text-5xl md:text-7xl">{t('restaurant.page.reserveTitle')}</h2>
          <p className="luxury-lede mx-auto mt-7">
            {t('restaurant.page.reserveDescription')}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={`/${locale}/booking`} className="luxury-button">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>{t('restaurant.reserve')}</span>
            </Link>
            <a href={`tel:${hotel.phone.href}`} className="luxury-button-outline text-forest-900">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{hotel.phone.display}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
