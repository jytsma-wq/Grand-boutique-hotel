'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  Users, 
  Maximize, 
  BedDouble, 
  Wifi, 
  Coffee, 
  Bath, 
  Tv, 
  Shield, 
  Wind,
  Eye,
  Heart,
  Share2,
  Calendar
} from 'lucide-react';
import { type Locale } from '@/i18n/config';
import { OTAPriceComparison, CurrencyDisplay } from '@/components/hotel/shared';

interface RoomDetailPageProps {
  locale: Locale;
  slug: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Room data - in production this would come from a database
const roomsData: Record<string, {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  images: string[];
  price: number;
  otaPrice: number;
  size: string;
  guests: number;
  bed: string;
  amenities: string[];
  features: string[];
  views: string;
}> = {
  'standard-room': {
    id: 'standard-room',
    name: 'Standard Room',
    description: 'A cozy retreat featuring modern amenities and elegant design.',
    longDescription: 'Our Standard Rooms offer a perfect blend of comfort and functionality. Thoughtfully designed with modern aesthetics, these rooms provide a peaceful sanctuary for travelers. The neutral color palette and natural materials create a soothing atmosphere, while the smart room technology ensures convenience at your fingertips.',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    ],
    price: 120,
    otaPrice: 150,
    size: '28 m²',
    guests: 2,
    bed: 'Queen Bed',
    amenities: ['wifi', 'ac', 'minibar', 'safe', 'tv', 'coffee'],
    features: ['Work desk', 'Iron & ironing board', 'Hair dryer', 'Air purifier'],
    views: 'City View'
  },
  'superior-room': {
    id: 'superior-room',
    name: 'Superior Room',
    description: 'Spacious accommodations with partial sea views and enhanced amenities.',
    longDescription: 'Step into comfort with our Superior Rooms, where space meets style. These elegantly appointed rooms feature partial views of the Black Sea, premium bedding, and a seating area perfect for relaxation. The marble bathroom features a rainfall shower and luxury toiletries.',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    ],
    price: 160,
    otaPrice: 200,
    size: '35 m²',
    guests: 2,
    bed: 'King Bed',
    amenities: ['wifi', 'ac', 'minibar', 'safe', 'tv', 'bath', 'balcony', 'coffee'],
    features: ['Private balcony', 'Seating area', 'Bathrobe & slippers', 'Turndown service'],
    views: 'Partial Sea View'
  },
  'deluxe-room': {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    description: 'Panoramic Black Sea views with premium furnishings and exclusive amenities.',
    longDescription: 'Experience the best of Batumi in our Deluxe Rooms, where floor-to-ceiling windows frame breathtaking Black Sea panoramas. These spacious retreats feature a separate seating area, premium king-size bed, and a luxurious marble bathroom with both bathtub and rainfall shower.',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    ],
    price: 200,
    otaPrice: 250,
    size: '42 m²',
    guests: 3,
    bed: 'King Bed + Sofa',
    amenities: ['wifi', 'ac', 'minibar', 'safe', 'tv', 'bath', 'balcony', 'robes', 'coffee'],
    features: ['Floor-to-ceiling windows', 'Separate seating area', 'Bathtub & shower', 'Nespresso machine'],
    views: 'Full Sea View'
  },
  'junior-suite': {
    id: 'junior-suite',
    name: 'Junior Suite',
    description: 'Expansive suite with separate living area and stunning sea views.',
    longDescription: 'Our Junior Suites offer an elevated experience with a spacious layout that includes a separate living area. Perfect for extended stays or those who appreciate extra space, these suites feature premium amenities, a dining area for two, and breathtaking views of the Black Sea.',
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    ],
    price: 280,
    otaPrice: 350,
    size: '55 m²',
    guests: 2,
    bed: 'King Bed',
    amenities: ['wifi', 'ac', 'minibar', 'safe', 'tv', 'bath', 'balcony', 'robes', 'coffee', 'living'],
    features: ['Living room', 'Dining area', 'Guest powder room', 'Walk-in closet'],
    views: 'Sea View'
  },
  'executive-suite': {
    id: 'executive-suite',
    name: 'Executive Suite',
    description: 'Ultimate luxury with separate living, dining areas and butler service.',
    longDescription: 'The Executive Suite represents the pinnacle of luxury accommodation. With a spacious bedroom, separate living and dining areas, and a private study, this suite is designed for the most discerning guests. Enjoy personalized butler service, premium amenities, and panoramic views that stretch across the Black Sea.',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    ],
    price: 450,
    otaPrice: 550,
    size: '75 m²',
    guests: 2,
    bed: 'King Bed',
    amenities: ['wifi', 'ac', 'minibar', 'safe', 'tv', 'bath', 'balcony', 'robes', 'coffee', 'living', 'dining', 'butler'],
    features: ['Personal butler', 'Private dining', 'Study room', 'Jacuzzi bathtub'],
    views: 'Panoramic Sea View'
  },
  'presidential-suite': {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    description: 'Our crown jewel with 360° views, private terrace and the finest amenities.',
    longDescription: 'Experience unparalleled luxury in our Presidential Suite, a 120m² masterpiece occupying the hotel\'s premier corner position. With 360-degree views, a private terrace, two bedrooms, and a dedicated butler, this suite offers an unforgettable stay for those who expect nothing but the best.',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
    ],
    price: 800,
    otaPrice: 1000,
    size: '120 m²',
    guests: 4,
    bed: 'King Bed',
    amenities: ['wifi', 'ac', 'minibar', 'safe', 'tv', 'bath', 'balcony', 'robes', 'coffee', 'living', 'dining', 'butler', 'jacuzzi'],
    features: ['Private terrace', 'Two bedrooms', 'Private kitchen', 'Steam room'],
    views: '360° Panoramic View'
  }
};

const amenityIcons: Record<string, React.ElementType> = {
  wifi: Wifi,
  ac: Wind,
  minibar: Coffee,
  safe: Shield,
  tv: Tv,
  bath: Bath,
  balcony: Eye,
  robes: Heart,
  coffee: Coffee,
};

export default function RoomDetailPage({ locale, slug }: RoomDetailPageProps) {
  const t = useTranslations('rooms');
  const tNav = useTranslations('nav');

  const room = roomsData[slug];

  if (!room) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-charcoal-900 mb-4">Room Not Found</h1>
          <Link href={`/${locale}/rooms`}>
            <Button className="btn-luxury">Back to Rooms</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Gallery */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={room.images[0]}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />
        </div>
        
        <div className="absolute top-6 left-6 z-10">
          <Link href={`/${locale}/rooms`}>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-charcoal-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Rooms
            </Button>
          </Link>
        </div>

        <div className="absolute top-6 right-6 z-10 flex gap-2">
          <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-charcoal-900">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-charcoal-900">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-gold-500 text-charcoal-950">{room.views}</Badge>
                <Badge variant="outline" className="border-white/30 text-white">{room.size}</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-light mb-4">{room.name}</h1>
              <p className="text-xl text-charcoal-200 max-w-2xl">{room.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-charcoal-900 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-gold-400" />
                <span>{room.guests} Guests</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize size={20} className="text-gold-400" />
                <span>{room.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <BedDouble size={20} className="text-gold-400" />
                <span>{room.bed}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold">
                <CurrencyDisplay usdAmount={room.price} size="lg" />
                <span className="text-charcoal-300 text-sm font-normal ml-2">/night</span>
              </div>
              <Link href={`/${locale}/booking?room=${room.id}`}>
                <Button className="btn-luxury">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-semibold text-charcoal-900 mb-4">About This Room</h2>
                <p className="text-charcoal-700 leading-relaxed">{room.longDescription}</p>
              </motion.div>

              {/* Gallery */}
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-semibold text-charcoal-900 mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.images.map((img, index) => (
                    <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        src={img}
                        alt={`${room.name} - ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-semibold text-charcoal-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity];
                    const labels: Record<string, string> = {
                      wifi: 'High-Speed WiFi',
                      ac: 'Climate Control',
                      minibar: 'Premium Minibar',
                      safe: 'In-Room Safe',
                      tv: 'Smart TV',
                      bath: 'Rain Shower & Bathtub',
                      balcony: 'Private Balcony',
                      robes: 'Luxury Robes & Slippers',
                      coffee: 'Nespresso Machine',
                      living: 'Living Area',
                      dining: 'Dining Area',
                      butler: 'Butler Service',
                      jacuzzi: 'Private Jacuzzi'
                    };
                    return (
                      <div key={amenity} className="flex items-center gap-3 p-3 bg-charcoal-50 rounded-lg">
                        {Icon && <Icon size={20} className="text-charcoal-600" />}
                        <span className="text-charcoal-700">{labels[amenity] || amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-semibold text-charcoal-900 mb-4">Special Features</h2>
                <ul className="space-y-3">
                  {room.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-charcoal-700">
                      <div className="w-2 h-2 bg-gold-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price Comparison */}
                <OTAPriceComparison 
                  directPrice={room.price} 
                  otaPrice={room.otaPrice} 
                />

                {/* Booking Card */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-4">Book This Room</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Room Size:</span>
                      <span className="font-medium text-charcoal-900">{room.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Max Guests:</span>
                      <span className="font-medium text-charcoal-900">{room.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Bed Type:</span>
                      <span className="font-medium text-charcoal-900">{room.bed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">View:</span>
                      <span className="font-medium text-charcoal-900">{room.views}</span>
                    </div>
                  </div>
                  
                  <Link href={`/${locale}/booking?room=${room.id}`} className="block">
                    <Button className="btn-luxury w-full">
                      Check Availability
                    </Button>
                  </Link>
                </div>

                {/* Direct Booking Benefits */}
                <div className="bg-gradient-to-br from-charcoal-800 to-charcoal-950 rounded-2xl p-6 text-white">
                  <h4 className="font-semibold text-gold-400 mb-3">Book Direct Benefits</h4>
                  <ul className="space-y-2 text-sm text-charcoal-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                      Complimentary breakfast
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                      Early check-in & late check-out
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                      Free room upgrade (when available)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                      10% spa discount
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Rooms */}
      <section className="py-16 bg-charcoal-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-charcoal-900 mb-8">Explore Other Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(roomsData)
              .filter(r => r.id !== room.id)
              .slice(0, 3)
              .map((otherRoom) => (
                <Link key={otherRoom.id} href={`/${locale}/rooms/${otherRoom.id}`}>
                  <div className="glass-card rounded-xl overflow-hidden card-hover">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={otherRoom.images[0]}
                        alt={otherRoom.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-charcoal-900">{otherRoom.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-charcoal-600">{otherRoom.size}</span>
                        <span className="text-gold-600 font-semibold">${otherRoom.price}/night</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
