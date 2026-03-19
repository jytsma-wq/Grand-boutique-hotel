'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Pause } from 'lucide-react';
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
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80',
          title: t('title'),
          subtitle: t('subtitle'),
        },
        {
          image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80',
          title: 'Refined Luxury',
          subtitle: 'By The Black Sea',
        },
        {
          image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80',
          title: 'Modern Luxury',
          subtitle: 'Timeless Comfort',
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
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1,
          }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Overlay - Brutalist Dark */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content - Brutalist Cinematic */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl"
        >
          {/* Title - Massive Architectural Typography */}
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter uppercase mb-6 leading-none">
            <span className="block">{slides[currentSlide].title}</span>
          </h1>

          {/* Subtitle - Clean */}
          <motion.p
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl text-white/80 mb-6 uppercase tracking-wider font-light"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
            {t('description')}
          </p>

          {/* CTA Buttons - Brutalist */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href={`/${locale}/booking`}>
              <Button className="btn-luxury px-12 py-6 text-base">
                <span>{t('cta')}</span>
              </Button>
            </Link>
            <Link href={`/${locale}/rooms`}>
              <Button 
                variant="outline" 
                className="px-12 py-6 text-base border-2 border-white bg-transparent text-white hover:bg-white hover:text-charcoal-900 transition-all uppercase tracking-wider"
              >
                {t('explore')}
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator - Minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-light">Scroll</span>
            <ChevronDown size={24} className="text-white/50" />
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Navigation - Brutalist */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`w-12 h-1 transition-all ${
              currentSlide === index ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="ml-4 w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>
      </div>

      {/* Best Price Badge - Brutalist */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block"
      >
        <div className="bg-charcoal-900 px-8 py-6 border-l-4 border-white">
          <div className="text-left">
            <div className="text-white text-xs tracking-[0.3em] uppercase mb-2 font-light">Guaranteed</div>
            <div className="text-white font-bold text-lg uppercase tracking-tight">Best Price</div>
            <div className="text-white/70 text-xs mt-2 uppercase tracking-wider">Book Direct</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
