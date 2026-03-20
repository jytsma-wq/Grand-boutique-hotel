'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Wifi, Coffee, Tv, Wind, Users, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { type Locale } from '@/i18n/config';

interface RoomsPageProps {
  locale: Locale;
}

interface Room {
  id: string;
  name: string;
  nameKey: string;
  slug: string;
  shortDescription: string;
  description: string;
  size: number;
  maxGuests: number;
  priceUsd: number;
  priceGel: number;
  otaPrice: number;
  images: string[];
  amenities: string[];
  features: string[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function RoomsPage({ locale }: RoomsPageProps) {
  const t = useTranslations();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const rooms: Room[] = [
    {
      id: 'standard',
      nameKey: 'standard',
      name: 'Standard Room',
      slug: 'standard-room',
      shortDescription: 'A cozy retreat with modern amenities and elegant design, perfect for solo travelers or couples.',
      description: 'Experience comfort in our Standard Room featuring contemporary design, premium bedding, and all essential amenities for a restful stay. The room offers a peaceful atmosphere with views of the city or courtyard.',
      size: 28,
      maxGuests: 2,
      priceUsd: 120,
      priceGel: 330,
      otaPrice: 150,
      images: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      ],
      amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe', 'coffee'],
      features: ['Queen Bed', 'City View', 'Work Desk', 'Rain Shower']
    },
    {
      id: 'superior',
      nameKey: 'superior',
      name: 'Superior Room',
      slug: 'superior-room',
      shortDescription: 'Spacious accommodations with enhanced amenities and partial sea views, offering comfort and style.',
      description: 'Our Superior Rooms provide extra space and comfort with partial Black Sea views. Enjoy upgraded amenities including a seating area, premium bath products, and a private balcony.',
      size: 35,
      maxGuests: 2,
      priceUsd: 160,
      priceGel: 440,
      otaPrice: 200,
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      ],
      amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe', 'coffee', 'balcony'],
      features: ['King Bed', 'Partial Sea View', 'Private Balcony', 'Seating Area']
    },
    {
      id: 'deluxe',
      nameKey: 'deluxe',
      name: 'Deluxe Room',
      slug: 'deluxe-room',
      shortDescription: 'Generously appointed rooms with panoramic Black Sea views, premium furnishings, and exclusive amenities.',
      description: 'Indulge in our Deluxe Room featuring stunning panoramic views of the Black Sea. This spacious accommodation includes a separate seating area, luxurious bathroom with both rain shower and bathtub, and exclusive bath amenities.',
      size: 42,
      maxGuests: 3,
      priceUsd: 200,
      priceGel: 550,
      otaPrice: 250,
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
      ],
      amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe', 'coffee', 'balcony', 'bathtub'],
      features: ['King Bed', 'Full Sea View', 'Private Balcony', 'Bathtub', 'Seating Area']
    },
    {
      id: 'junior-suite',
      nameKey: 'juniorSuite',
      name: 'Junior Suite',
      slug: 'junior-suite',
      shortDescription: 'An expansive suite with separate living area, offering stunning views and luxurious touches.',
      description: 'Our Junior Suite offers a generous living space with a separate seating area, perfect for extended stays or those seeking extra comfort. Features include a workspace, dining area for two, and panoramic sea views.',
      size: 55,
      maxGuests: 2,
      priceUsd: 280,
      priceGel: 770,
      otaPrice: 350,
      images: [
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      ],
      amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe', 'coffee', 'balcony', 'bathtub', 'robes'],
      features: ['King Bed', 'Full Sea View', 'Living Area', 'Dining Space', 'Premium Amenities']
    },
    {
      id: 'executive-suite',
      nameKey: 'executiveSuite',
      name: 'Executive Suite',
      slug: 'executive-suite',
      shortDescription: 'The epitome of luxury with spacious bedroom, separate living and dining areas, and exclusive butler service.',
      description: 'Experience unparalleled luxury in our Executive Suite. This expansive accommodation features a separate bedroom, living room, and dining area. Enjoy exclusive butler service, premium amenities, and breathtaking sea views from your private terrace.',
      size: 75,
      maxGuests: 3,
      priceUsd: 420,
      priceGel: 1155,
      otaPrice: 520,
      images: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      ],
      amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe', 'coffee', 'balcony', 'bathtub', 'robes', 'butler'],
      features: ['King Bed', 'Full Sea View', 'Private Terrace', 'Living Room', 'Dining Area', 'Butler Service']
    },
    {
      id: 'presidential-suite',
      nameKey: 'presidentialSuite',
      name: 'Presidential Suite',
      slug: 'presidential-suite',
      shortDescription: 'Our crown jewel - a palatial residence with 360° views, private terrace, personal butler, and finest amenities.',
      description: 'The ultimate in luxury, our Presidential Suite spans 120 square meters of pure elegance. Features include a private terrace with 360° views, separate bedroom and living spaces, private bar, butler pantry, and exclusive access to the Executive Lounge.',
      size: 120,
      maxGuests: 4,
      priceUsd: 800,
      priceGel: 2200,
      otaPrice: 1000,
      images: [
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      ],
      amenities: ['wifi', 'ac', 'tv', 'minibar', 'safe', 'coffee', 'balcony', 'bathtub', 'robes', 'butler', 'lounge'],
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
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80"
            alt="Rooms & Suites"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <span className="text-brass-400 text-sm tracking-widest uppercase">Accommodations</span>
            <h1 className="text-5xl md:text-7xl font-light mt-4 mb-4">
              Rooms & Suites
            </h1>
            <div className="brass-line" />
            <p className="text-xl text-white/80 max-w-2xl">
              Each room a sanctuary of modern elegance, designed for the discerning traveler
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
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden card-hover">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 image-overlay" />
                    
                    {/* Size & Guests */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="glass-card px-3 py-1 rounded-full text-sm text-white">
                        {room.size} m²
                      </span>
                      <span className="glass-card px-3 py-1 rounded-full text-sm text-white">
                        {room.maxGuests} guests
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">{room.name}</h3>
                    <p className="text-forest-600 text-sm mb-4 line-clamp-2">{room.shortDescription}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs bg-forest-50 text-forest-700 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price Comparison */}
                    <div className="border-t border-forest-100 pt-4 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-forest-500">OTA Price:</span>
                        <span className="text-sm line-through text-forest-400">${room.otaPrice}</span>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-forest-700">Direct Price:</span>
                        <div>
                          <span className="text-xl font-bold text-brass-600">${room.priceUsd}</span>
                          <span className="text-sm text-forest-500 ml-1">/ {room.priceGel} ₾</span>
                        </div>
                      </div>
                      <div className="bg-forest-100 text-forest-700 text-center text-sm py-2 rounded-lg">
                        💰 Save ${room.otaPrice - room.priceUsd} by booking direct!
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 mt-4">
                      <Link href={`/${locale}/rooms/${room.slug}`} className="flex-1">
                        <Button variant="outline" className="w-full border-forest-200 text-forest-700 hover:bg-forest-50">
                          View Details
                        </Button>
                      </Link>
                      <Link href={`/${locale}/booking?room=${room.slug}`} className="flex-1">
                        <Button className="w-full btn-telegraph py-2">
                          <span>Book Now</span>
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
            <span className="text-brass-600 text-sm tracking-widest uppercase">In Every Room</span>
            <h2 className="section-title mt-4">Room Amenities</h2>
            <div className="brass-line" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: <Wifi />, label: 'High-Speed WiFi' },
              { icon: <Wind />, label: 'Climate Control' },
              { icon: <Tv />, label: 'Smart TV' },
              { icon: <Coffee />, label: 'Nespresso Machine' },
              { icon: <Maximize2 />, label: 'In-Room Safe' },
              { icon: <Users />, label: '24/7 Room Service' },
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
              Book Direct, <span className="text-brass-400">Save More</span>
            </h2>
            <p className="text-forest-200 text-lg mb-10">
              When you book directly through our website, you enjoy exclusive benefits not available anywhere else.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Best Price', desc: 'Guaranteed lowest rate' },
                { title: 'Free Breakfast', desc: 'For all direct bookings' },
                { title: 'Room Upgrade', desc: 'When available at check-in' },
                { title: 'Early Check-in', desc: 'Subject to availability' },
                { title: 'Late Check-out', desc: 'Until 2 PM on request' },
                { title: 'Spa Discount', desc: '20% off all treatments' },
              ].map((benefit, i) => (
                <div key={i} className="bg-forest-800/50 rounded-xl p-6">
                  <h4 className="text-brass-400 font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-forest-200">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <Link href={`/${locale}/booking`}>
              <Button className="btn-telegraph mt-10 px-12 py-6 text-lg">
                <span>Book Your Stay</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
