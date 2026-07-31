'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { type Locale } from '@/i18n/config';

interface GalleryPageProps {
  locale: Locale;
}

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=80', category: 'hotel' },
  { id: 2, src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80', category: 'rooms' },
  { id: 3, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80', category: 'dining' },
  { id: 4, src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=80', category: 'spa' },
  { id: 5, src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&q=80', category: 'events' },
  { id: 6, src: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1000&q=80', category: 'batumi' },
  { id: 7, src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80', category: 'rooms' },
  { id: 8, src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1000&q=80', category: 'dining' },
  { id: 9, src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1000&q=80', category: 'hotel' },
  { id: 10, src: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=1000&q=80', category: 'batumi' },
  { id: 11, src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1000&q=80', category: 'rooms' },
  { id: 12, src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&q=80', category: 'dining' },
  { id: 13, src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&q=80', category: 'hotel' },
  { id: 14, src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1000&q=80', category: 'rooms' },
  { id: 15, src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1000&q=80', category: 'events' },
];

export default function GalleryPage({ locale }: GalleryPageProps) {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const categories = [
    { id: 'all', label: t('gallery.categories.all') },
    { id: 'hotel', label: t('gallery.categories.hotel') },
    { id: 'rooms', label: t('gallery.categories.rooms') },
    { id: 'dining', label: t('gallery.categories.dining') },
    { id: 'spa', label: t('gallery.categories.spa') },
    { id: 'events', label: t('gallery.categories.events') },
    { id: 'batumi', label: t('gallery.categories.batumi') },
  ];

  const filteredImages =
    activeCategory === 'all'
      ? images
      : images.filter((image) => image.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImage((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
      return;
    }

    setCurrentImage((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxOpen(false);
      if (event.key === 'ArrowLeft') {
        setCurrentImage((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
      }
      if (event.key === 'ArrowRight') {
        setCurrentImage((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredImages.length]);

  return (
    <main className="luxury-page min-h-screen pt-20">
      <section className="relative min-h-[62dvh] overflow-hidden text-cream-50">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
          alt={t('gallery.title')}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/45 to-charcoal-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-950/75 to-transparent" />
        <div className="luxury-container relative z-10 flex min-h-[62dvh] items-end pb-14 md:pb-20">
          <div className="max-w-4xl">
            <p className="luxury-kicker text-brass-300">{t('gallery.visualJourney')}</p>
            <h1 className="luxury-display mt-6 text-cream-50">{t('gallery.title')}</h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/75 md:text-xl">
              {t('gallery.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-brass-400/20 bg-cream-50/95 py-5 backdrop-blur-md">
        <div className="luxury-container">
          <div className="flex gap-3 overflow-x-auto pb-1 md:flex-wrap md:justify-center">
            {categories.map((category) => {
              const active = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCategory(category.id)}
                  className={`min-h-11 shrink-0 border px-5 text-xs font-bold uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 ${
                    active
                      ? 'border-charcoal-950 bg-charcoal-950 text-cream-50'
                      : 'border-brass-400/35 bg-transparent text-forest-700 hover:border-brass-500 hover:text-charcoal-950'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-container">
          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 lg:gap-5">
            {filteredImages.map((image, index) => (
              <button
                type="button"
                key={image.id}
                aria-label={t('gallery.imageAlt', { number: image.id })}
                className={`luxury-image group relative overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 ${
                  index % 7 === 0 ? 'col-span-2 row-span-2' : ''
                } ${index % 5 === 2 ? 'row-span-2' : ''}`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={t('gallery.imageAlt', { number: image.id })}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/0 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-light leading-6 text-cream-50">{t('gallery.imageAlt', { number: image.id })}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 py-14 text-cream-50">
        <div className="luxury-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="luxury-kicker text-brass-300">{t('gallery.stayKicker')}</p>
            <h2 className="luxury-title mt-4 text-4xl md:text-5xl">{t('gallery.stayTitle')}</h2>
          </div>
          <Link href={`/${locale}/booking`} className="luxury-button border-brass-400 bg-brass-400 text-charcoal-950">
            <span>{t('booking.title')}</span>
          </Link>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/96 p-4 text-cream-50 overscroll-contain"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t('accessibility.imageGallery')}
        >
          <button
            type="button"
            aria-label={t('accessibility.closeGallery')}
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center border border-white/15 text-cream-50 transition-colors hover:border-brass-300 hover:text-brass-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 md:right-8 md:top-8"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label={t('accessibility.previousImage')}
            onClick={(event) => {
              event.stopPropagation();
              navigateLightbox('prev');
            }}
            className="absolute left-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 text-cream-50 transition-colors hover:border-brass-300 hover:text-brass-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 md:left-8"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            aria-label={t('accessibility.nextImage')}
            onClick={(event) => {
              event.stopPropagation();
              navigateLightbox('next');
            }}
            className="absolute right-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 text-cream-50 transition-colors hover:border-brass-300 hover:text-brass-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 md:right-8"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="relative h-[82vh] w-[86vw]" onClick={(event) => event.stopPropagation()}>
            <Image
              key={filteredImages[currentImage]?.id}
              src={filteredImages[currentImage]?.src}
              alt={t('gallery.imageAlt', { number: filteredImages[currentImage]?.id })}
              fill
              sizes="86vw"
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.22em] text-white/55">
            {currentImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </main>
  );
}
