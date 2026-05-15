'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CalendarDays, ChevronDown, MapPin } from 'lucide-react';
import { type Locale } from '@/i18n/config';
import { urlFor } from '@/lib/sanity';
import { hotel } from '@/lib/site';
import { type SanityHomePage } from '@/types/sanity';

interface HeroSectionProps {
  locale: Locale;
  data?: SanityHomePage | null;
}

export default function HeroSection({ locale, data }: HeroSectionProps) {
  const t = useTranslations('hero');
  const tBooking = useTranslations('booking');
  const tNav = useTranslations('nav');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Use CMS slides if available, otherwise use defaults
  const slides = data?.heroImage 
    ? [{
        image: urlFor(data.heroImage).url(),
        title: data.heroTitleLocalized || t('title'),
        subtitle: data.heroSubtitleLocalized || t('subtitle'),
      }]
    : [
        {
          image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop',
          title: t('title'),
          subtitle: t('subtitle'),
        },
        {
          image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1920&auto=format&fit=crop',
          title: t('slide2Title'),
          subtitle: t('slide2Subtitle'),
        },
        {
          image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1920&auto=format&fit=crop',
          title: t('slide3Title'),
          subtitle: t('slide3Subtitle'),
        },
      ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-charcoal-950 text-white luxury-grain">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2500ms] ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)', transition: 'opacity 2.5s ease, transform 2.5s ease' }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,13,11,0.78)_0%,rgba(16,13,11,0.42)_48%,rgba(16,13,11,0.2)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

      <div className="relative z-10 flex min-h-[100dvh] items-center px-6 pb-36 pt-32 md:px-10 lg:px-16">
        <div className="luxury-container">
          <div className="max-w-5xl animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            <div className="luxury-kicker mb-8 text-brass-300">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>{hotel.address.locality}, {hotel.address.countryName}</span>
            </div>
            <h1 className="luxury-display max-w-5xl">
              {slides[currentSlide].title}
          </h1>

            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/80 md:text-2xl md:leading-10">
            {slides[currentSlide].subtitle}
          </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={`/${locale}/booking`} className="luxury-button">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                <span>{t('cta')}</span>
            </Link>
              <Link href={`/${locale}/rooms`} className="luxury-button-outline luxury-button-outline-light border-white/70 text-white">
                <span>{t('explore')}</span>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 right-6 z-20 hidden md:block">
        <div className="luxury-container">
          <div className="grid max-w-5xl grid-cols-4 border border-white/18 bg-white/10 text-white shadow-2xl backdrop-blur-md">
            {[
              { label: tBooking('checkIn'), value: 'Flexible' },
              { label: tBooking('checkOut'), value: 'Flexible' },
              { label: tBooking('guests'), value: '2' },
            ].map((item) => (
              <div key={item.label} className="border-r border-white/15 px-6 py-5">
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/50">{item.label}</div>
                <div className="mt-2 font-serif text-2xl text-white">{item.value}</div>
              </div>
            ))}
            <Link href={`/${locale}/booking`} className="flex items-center justify-center bg-brass-400 px-6 py-5 text-center text-xs font-bold uppercase tracking-[0.2em] text-charcoal-950 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              {tNav('bookNow')}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 z-20 hidden animate-fade-in lg:block" style={{ animationDelay: '1500ms' }}>
          <button
            type="button"
            aria-label="Scroll to next section"
            onClick={scrollToNextSection}
            className="flex flex-col items-center gap-3 text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase font-light">SCROLL</span>
            <ChevronDown size={18} strokeWidth={1} />
          </button>
      </div>

      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={currentSlide === index ? 'true' : undefined}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`h-12 w-px transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
              currentSlide === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}







