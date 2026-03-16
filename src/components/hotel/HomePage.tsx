'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Wifi, 
  Car, 
  Utensils, 
  Waves, 
  Dumbbell, 
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';
import HeroSection from './HeroSection';

interface HomePageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function HomePage({ locale }: HomePageProps) {
  const t = useTranslations();
  const tHome = useTranslations('home');

  const rooms = [
    {
      name: 'Standard Room',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
      price: 120,
      size: '28 m²',
      guests: 2,
    },
    {
      name: 'Superior Room',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
      price: 160,
      size: '35 m²',
      guests: 2,
    },
    {
      name: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
      price: 200,
      size: '42 m²',
      guests: 3,
    },
    {
      name: 'Junior Suite',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&q=80',
      price: 280,
      size: '55 m²',
      guests: 2,
    },
  ];

  const amenities = [
    { icon: Wifi, label: 'High-Speed WiFi' },
    { icon: Car, label: 'Free Parking' },
    { icon: Utensils, label: 'Fine Dining' },
    { icon: Waves, label: 'Infinity Pool' },
    { icon: Dumbbell, label: 'Fitness Center' },
    { icon: Sparkles, label: 'Spa & Wellness' },
  ];

  const experiences = [
    {
      name: 'Batumi Boulevard',
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&q=80',
      distance: '0.5 km',
    },
    {
      name: 'Old Batumi',
      image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=400&q=80',
      distance: '1.2 km',
    },
    {
      name: 'Batumi Botanical Garden',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80',
      distance: '8 km',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection locale={locale} />

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-600 text-sm tracking-widest uppercase">Welcome</span>
            <h2 className="section-title mt-4">{tHome('welcome.title')}</h2>
            <div className="gold-line" />
            <p className="section-subtitle">{tHome('welcome.description')}</p>
          </motion.div>

          {/* Amenities Grid */}
          <motion.div 
            {...fadeInUp}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-charcoal-50/50 hover:bg-charcoal-100/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <amenity.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-charcoal-900 text-center">{amenity.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-24 bg-charcoal-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-gold-600 text-sm tracking-widest uppercase">Accommodations</span>
            <h2 className="section-title mt-4">{tHome('rooms.title')}</h2>
            <div className="gold-line" />
            <p className="section-subtitle">{tHome('rooms.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/${locale}/rooms/${room.name.toLowerCase().replace(' ', '-')}`}>
                  <div className="glass-card rounded-2xl overflow-hidden card-hover">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 image-overlay" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 glass-card px-4 py-2 rounded-full">
                        <span className="text-white font-semibold">${room.price}</span>
                        <span className="text-white/70 text-sm">/night</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-charcoal-900 mb-2">{room.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-charcoal-600">
                        <span>{room.size}</span>
                        <span>•</span>
                        <span>{room.guests} guests</span>
                      </div>
                      
                      {/* OTA Comparison */}
                      <div className="mt-4 pt-4 border-t border-charcoal-100">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-charcoal-600">OTA Price:</span>
                          <span className="line-through text-charcoal-400">${room.price + 30}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-charcoal-600">Direct Price:</span>
                          <span className="text-gold-600 font-semibold">${room.price}</span>
                        </div>
                        <div className="mt-2 text-xs text-center text-charcoal-500 bg-charcoal-100 rounded-full py-1">
                          Save $30 by booking direct!
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${locale}/rooms`}>
              <Button className="btn-luxury">
                <span>{tHome('rooms.viewAll')}</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-gold-600 text-sm tracking-widest uppercase">Culinary</span>
            <h2 className="section-title mt-4">{tHome('dining.title')}</h2>
            <div className="gold-line" />
            <p className="section-subtitle">{tHome('dining.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Restaurant */}
            <motion.div
              {...fadeInUp}
              className="relative group overflow-hidden rounded-3xl"
            >
              <div className="aspect-[16/10]">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Azure Restaurant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
                  <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
                  <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
                  <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {tHome('dining.restaurant.name')}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {tHome('dining.restaurant.description')}
                </p>
                <Link href={`/${locale}/restaurant`}>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-charcoal-900">
                    View Restaurant
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Bar */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <div className="aspect-[16/10]">
                <img
                  src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80"
                  alt="Lounge Bar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {tHome('dining.bar.name')}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {tHome('dining.bar.description')}
                </p>
                <Link href={`/${locale}/bar`}>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-charcoal-900">
                    View Bar
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="py-24 bg-charcoal-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-gold-400 text-sm tracking-widest uppercase">Relaxation</span>
              <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">
                {tHome('wellness.title')}
              </h2>
              <div className="gold-line" />
              <p className="text-white/70 text-lg mb-8">
                {tHome('wellness.description')}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {['Infinity Pool', 'Finnish Sauna', 'Turkish Hammam', 'Fitness Center'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Link href={`/${locale}/wellness`}>
                  <Button className="btn-luxury">
                    <span>Explore Wellness</span>
                  </Button>
                </Link>
                <Link href={`/${locale}/wellness/spa`}>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-charcoal-900">
                    Book Spa Treatment
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
                alt="Spa"
                className="rounded-3xl w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-charcoal-900">50+</div>
                    <div className="text-sm text-charcoal-600">Spa Treatments</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-gold-600 text-sm tracking-widest uppercase">Explore</span>
            <h2 className="section-title mt-4">{tHome('experiences.title')}</h2>
            <div className="gold-line" />
            <p className="section-subtitle">{tHome('experiences.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="aspect-[3/4]">
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-gold-400 text-sm mb-2">
                    <MapPin size={14} />
                    <span>{exp.distance}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{exp.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${locale}/experiences`}>
              <Button className="btn-luxury">
                <span>View All Experiences</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-charcoal-800 to-charcoal-950 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-charcoal-700/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready to Experience <span className="text-gold-400">True Luxury</span>?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Book direct and enjoy exclusive benefits: complimentary breakfast, 
              room upgrades, and best price guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/booking`}>
                <Button className="btn-luxury px-12 py-6 text-lg">
                  <span>Book Your Stay</span>
                </Button>
              </Link>
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-12 py-6 text-lg border-white/30 text-white hover:bg-white hover:text-charcoal-900">
                  <span>Call Us: +995 422 00 00 00</span>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-semibold text-charcoal-900 mb-4">
              Follow Us <span className="text-gold-600">@batumiboutique</span>
            </h3>
            <p className="text-charcoal-600 mb-8">Share your moments with #BatumiBoutique</p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <a
                  key={i}
                  href="https://instagram.com/batumiboutique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square overflow-hidden group"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 12345678}?w=200&h=200&fit=crop`}
                    alt="Instagram"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
