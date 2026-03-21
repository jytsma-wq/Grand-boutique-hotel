'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Wifi, Coffee, Tv, Wind, Users, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';
import { Room } from '@/types/sanity';

interface RoomsPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function RoomsPage({ locale }: RoomsPageProps) {
  const t = useTranslations('Rooms');
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const rooms: Room[] = [
    {
      _id: 'standard',
      name: 'Standard Room',
      description: 'A cozy retreat with modern amenities and elegant design, perfect for solo travelers or couples.',
      price: 120,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      slug: { current: 'standard-room' },
      features: ['Queen Bed', 'City View', 'Work Desk', 'Rain Shower']
    },
    {
      _id: 'superior',
      name: 'Superior Room',
      description: 'Spacious accommodations with enhanced amenities and partial sea views, offering comfort and style.',
      price: 160,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      slug: { current: 'superior-room' },
      features: ['King Bed', 'Partial Sea View', 'Private Balcony', 'Seating Area']
    },
    {
      _id: 'deluxe',
      name: 'Deluxe Room',
      description: 'Generously appointed rooms with panoramic Black Sea views, premium furnishings, and exclusive amenities.',
      price: 200,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      slug: { current: 'deluxe-room' },
      features: ['King Bed', 'Full Sea View', 'Private Balcony', 'Bathtub', 'Seating Area']
    },
    {
      _id: 'junior-suite',
      name: 'Junior Suite',
      description: 'An expansive suite with separate living area, offering stunning views and luxurious touches.',
      price: 280,
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
      slug: { current: 'junior-suite' },
      features: ['King Bed', 'Full Sea View', 'Living Area', 'Dining Space', 'Premium Amenities']
    },
    {
      _id: 'executive-suite',
      name: 'Executive Suite',
      description: 'The epitome of luxury with spacious bedroom, separate living and dining areas, and exclusive butler service.',
      price: 420,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      slug: { current: 'executive-suite' },
      features: ['King Bed', 'Full Sea View', 'Private Terrace', 'Living Room', 'Dining Area', 'Butler Service']
    },
    {
      _id: 'presidential-suite',
      name: 'Presidential Suite',
      description: 'Our crown jewel - a palatial residence with 360° views, private terrace, personal butler, and finest amenities.',
      price: 800,
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
      slug: { current: 'presidential-suite' },
      features: ['King Bed', '360° Views', 'Private Terrace', 'Living Room', 'Dining Area', 'Private Bar', 'Butler Service', 'Executive Lounge Access']
    },
  ];

  const amenityIcons: Record<string, React.ReactNode> = {
    wifi: <Wifi className="w-5 h-5" />,
    ac: <Wind className="w-5 h-5" />,
    tv: <Tv className="w-5 h-5" />,
    coffee: <Coffee className="w-5 h-5" />,
    guests: <Users className="w-5 h-5" />,
    size: <Maximize2 className="w-5 h-5" />,
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80"
            alt="Rooms & Suites"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <span className="text-brass-400 text-sm tracking-widest uppercase">{t('accommodations')}</span>
            <h1 className="text-5xl md:text-7xl font-light mt-4 mb-4">
              {t('title')}
            </h1>
            <div className="brass-line" />
            <p className="text-xl text-white/80 max-w-2xl">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* OTA Killer Banner */}
      <section className="bg-forest-900 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            <span className="text-brass-400 font-semibold">BEST PRICE GUARANTEE:</span>{' '}
            Book direct and save up to 20% compared to OTAs. Plus enjoy exclusive benefits!
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden card-hover">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 image-overlay" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">{room.name}</h3>
                    <p className="text-forest-600 text-sm mb-4 line-clamp-2">{room.description}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs bg-forest-50 text-forest-700 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="border-t border-forest-100 pt-4 mt-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-forest-700">{t('priceLabel')}:</span>
                        <div>
                          <span className="text-xl font-bold text-brass-600">${room.price}</span>
                          <span className="text-sm text-forest-500 ml-1">/ {t('night')}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 mt-4">
                      <Link href={`/${locale}/rooms/${room.slug.current}`} className="flex-1">
                        <Button variant="outline" className="w-full border-forest-200 text-forest-700 hover:bg-forest-50">
                          {t('viewDetails')}
                        </Button>
                      </Link>
                      <Link href={`/${locale}/booking?room=${room.slug.current}`} className="flex-1">
                        <Button className="w-full btn-telegraph py-2">
                          <span>{t('bookNow')}</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-brass-600 text-sm tracking-widest uppercase">{t('inEveryRoom')}</span>
            <h2 className="section-title mt-4">{t('roomAmenities')}</h2>
            <div className="brass-line" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: <Wifi />, label: t('highSpeedWifi') },
              { icon: <Wind />, label: t('climateControl') },
              { icon: <Tv />, label: t('smartTv') },
              { icon: <Coffee />, label: t('nespressoMachine') },
              { icon: <Maximize2 />, label: t('inRoomSafe') },
              { icon: <Users />, label: t('roomService') },
            ].map((amenity, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.05 }}
                className="text-center p-6 bg-white rounded-2xl"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center text-white">
                  {amenity.icon}
                </div>
                <span className="text-sm text-forest-700">{amenity.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Direct Benefits */}
      <section className="py-24 bg-forest-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              {t('bookDirectTitle')} <span className="text-brass-400">{t('saveMore')}</span>
            </h2>
            <p className="text-forest-200 text-lg mb-10">
              {t('bookDirectDescription')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: t('bestPrice'), desc: t('bestPriceDesc') },
                { title: t('freeBreakfast'), desc: t('freeBreakfastDesc') },
                { title: t('roomUpgrade'), desc: t('roomUpgradeDesc') },
                { title: t('earlyCheckIn'), desc: t('earlyCheckInDesc') },
                { title: t('lateCheckOut'), desc: t('lateCheckOutDesc') },
                { title: t('spaDiscount'), desc: t('spaDiscountDesc') },
              ].map((benefit, i) => (
                <div key={i} className="bg-forest-800/50 rounded-xl p-6">
                  <h4 className="text-brass-400 font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-forest-200">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <Link href={`/${locale}/booking`}>
              <Button className="btn-telegraph mt-10 px-12 py-6 text-lg">
                <span>{t('bookYourStay')}</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
