'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
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
          title: 'Refined Luxury',
          subtitle: 'By The Black Sea',
        },
        {
          image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1920&auto=format&fit=crop',
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
    <section className="relative h-screen min-h-[800px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1.05 : 1,
          }}
          transition={{ duration: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            priority={index === 0}
            unoptimized
          />
        </motion.div>
      ))}

      {/* Overlay - Subtle Dark like Telegraph */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content - Telegraph Style Centered Layout */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Title - Elegant Typography with refined tracking */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-[0.05em] uppercase mb-6 leading-[1.1]">
            <span className="block">{slides[currentSlide].title}</span>
          </h1>

          {/* Subtitle - Refined with wider tracking */}
          <motion.p
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 tracking-[0.15em] font-light uppercase"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

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
        </motion.div>

        {/* Scroll Indicator - Minimal Telegraph Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 font-light">SCROLL</span>
            <ChevronDown size={18} className="text-white/50" strokeWidth={1} />
          </motion.div>
        </motion.div>
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
