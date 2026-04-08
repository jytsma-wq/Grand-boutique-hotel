'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';
import { urlFor } from '@/lib/sanity';

interface HeroSectionProps {
  locale: Locale;
  data?: any;
}

export default function HeroSection({ locale, data }: HeroSectionProps) {
  const t = useTranslations('hero');
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

  return (
    <section className="relative h-screen min-h-200 overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2500ms] ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
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

      {/* Overlay - Subtle Dark like Telegraph */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content - Telegraph Style Centered Layout */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        <div className="max-w-4xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {/* Title - Elegant Typography with refined tracking */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-[0.05em] uppercase mb-6 leading-[1.1]">
            <span className="block">{slides[currentSlide].title}</span>
          </h1>

          {/* Subtitle - Refined with wider tracking */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 tracking-[0.15em] font-light uppercase animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons - Telegraph Style */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href={`/${locale}/booking`}>
              <Button className="btn-telegraph px-12 py-4 text-xs uppercase tracking-[0.2em] h-auto">
                <span>{t('cta')}</span>
              </Button>
            </Link>
            <Link href={`/${locale}/rooms`}>
              <Button 
                variant="outline" 
                className="px-12 py-4 text-xs border border-white bg-transparent text-white hover:bg-white hover:text-forest-900 transition-all uppercase tracking-[0.2em] rounded-none h-auto"
              >
                {t('explore')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator - Minimal Telegraph Style */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1500ms' }}>
          <div className="flex flex-col items-center gap-3 cursor-pointer animate-bounce-slow" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 font-light">SCROLL</span>
            <ChevronDown size={18} className="text-white/50" strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* Slide Navigation - Telegraph Style Minimal Lines */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`w-10 h-px transition-all duration-500 ${
              currentSlide === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}







