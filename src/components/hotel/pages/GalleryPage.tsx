'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface GalleryPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

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

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', category: 'hotel', alt: 'Hotel Exterior' },
    { id: 2, src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', category: 'rooms', alt: 'Deluxe Room' },
    { id: 3, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', category: 'dining', alt: 'Restaurant' },
    { id: 4, src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', category: 'spa', alt: 'Spa Treatment' },
    { id: 5, src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80', category: 'events', alt: 'Event Space' },
    { id: 6, src: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80', category: 'batumi', alt: 'Batumi Boulevard' },
    { id: 7, src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', category: 'rooms', alt: 'Suite' },
    { id: 8, src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80', category: 'dining', alt: 'Bar' },
    { id: 9, src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80', category: 'hotel', alt: 'Pool' },
    { id: 10, src: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80', category: 'batumi', alt: 'Old Batumi' },
    { id: 11, src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80', category: 'rooms', alt: 'Room View' },
    { id: 12, src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', category: 'dining', alt: 'Georgian Cuisine' },
    { id: 13, src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', category: 'hotel', alt: 'Hotel Lobby' },
    { id: 14, src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80', category: 'rooms', alt: 'Junior Suite' },
    { id: 15, src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80', category: 'events', alt: 'Conference Room' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImage(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    } else {
      setCurrentImage(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <span className="text-gold-400 text-sm tracking-widest uppercase">Visual Journey</span>
            <h1 className="text-5xl md:text-7xl font-light mt-4 mb-4">{t('gallery.title')}</h1>
            <div className="gold-line" />
            <p className="text-xl text-white/80 max-w-2xl mt-4">{t('gallery.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-charcoal-100 sticky top-20 z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                className={`rounded-full px-6 ${
                  activeCategory === category.id 
                    ? 'btn-luxury' 
                    : 'border-charcoal-200 text-charcoal-700 hover:bg-charcoal-50'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-charcoal-50">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                    index % 5 === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/30 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              className="absolute left-6 text-white hover:text-gold-400 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              className="absolute right-6 text-white hover:text-gold-400 transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image */}
            <motion.img
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[currentImage]?.src}
              alt={filteredImages[currentImage]?.alt}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentImage + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
