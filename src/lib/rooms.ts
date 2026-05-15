import { getImageUrl } from '@/lib/sanity';
import { type PortableTextBlock, type SanityRoom } from '@/types/sanity';

export interface HotelRoom {
  id: string;
  slug: string;
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
  order: number;
}

export const fallbackRooms: HotelRoom[] = [
  {
    id: 'standard-room',
    slug: 'standard-room',
    name: 'Standard Room',
    description: 'A cozy retreat featuring modern amenities and elegant design.',
    longDescription:
      'Our Standard Rooms offer a perfect blend of comfort and functionality. Thoughtfully designed with modern aesthetics, these rooms provide a peaceful sanctuary for travelers. The neutral color palette and natural materials create a soothing atmosphere, while the smart room technology ensures convenience at your fingertips.',
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
    views: 'City View',
    order: 1,
  },
  {
    id: 'superior-room',
    slug: 'superior-room',
    name: 'Superior Room',
    description: 'Spacious accommodations with partial sea views and enhanced amenities.',
    longDescription:
      'Step into comfort with our Superior Rooms, where space meets style. These elegantly appointed rooms feature partial views of the Black Sea, premium bedding, and a seating area perfect for relaxation. The marble bathroom features a rainfall shower and luxury toiletries.',
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
    views: 'Partial Sea View',
    order: 2,
  },
  {
    id: 'deluxe-room',
    slug: 'deluxe-room',
    name: 'Deluxe Room',
    description: 'Panoramic Black Sea views with premium furnishings and exclusive amenities.',
    longDescription:
      'Experience the best of Batumi in our Deluxe Rooms, where floor-to-ceiling windows frame breathtaking Black Sea panoramas. These spacious retreats feature a separate seating area, premium king-size bed, and a luxurious marble bathroom with both bathtub and rainfall shower.',
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
    views: 'Full Sea View',
    order: 3,
  },
  {
    id: 'junior-suite',
    slug: 'junior-suite',
    name: 'Junior Suite',
    description: 'Expansive suite with separate living area and stunning sea views.',
    longDescription:
      'Our Junior Suites offer an elevated experience with a spacious layout that includes a separate living area. Perfect for extended stays or those who appreciate extra space, these suites feature premium amenities, a dining area for two, and breathtaking views of the Black Sea.',
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
    views: 'Sea View',
    order: 4,
  },
  {
    id: 'executive-suite',
    slug: 'executive-suite',
    name: 'Executive Suite',
    description: 'Ultimate luxury with separate living, dining areas and butler service.',
    longDescription:
      'The Executive Suite represents the pinnacle of luxury accommodation. With a spacious bedroom, separate living and dining areas, and a private study, this suite is designed for the most discerning guests. Enjoy personalized butler service, premium amenities, and panoramic views that stretch across the Black Sea.',
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
    views: 'Panoramic Sea View',
    order: 5,
  },
  {
    id: 'presidential-suite',
    slug: 'presidential-suite',
    name: 'Presidential Suite',
    description: 'Our crown jewel with 360° views, private terrace and the finest amenities.',
    longDescription:
      "Experience unparalleled luxury in our Presidential Suite, a 120m² masterpiece occupying the hotel's premier corner position. With 360-degree views, a private terrace, two bedrooms, and a dedicated butler, this suite offers an unforgettable stay for those who expect nothing but the best.",
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
    views: '360° Panoramic View',
    order: 6,
  },
];

export function getFallbackRoomBySlug(slug: string): HotelRoom | undefined {
  return fallbackRooms.find((room) => room.slug === slug);
}

function getRoomSlug(room: SanityRoom): string | undefined {
  if (typeof room.slug === 'string') return room.slug;
  return room.slug?.current;
}

function portableTextToPlainText(value: SanityRoom['fullDescription']): string | undefined {
  if (typeof value === 'string') return value;
  if (!Array.isArray(value)) return undefined;

  const text = value
    .map((block: PortableTextBlock) => block.children?.map((child) => child.text).filter(Boolean).join('') || '')
    .filter(Boolean)
    .join('\n\n');

  return text || undefined;
}

function getFallbackForRoom(room: SanityRoom, index = 0): HotelRoom {
  const slug = getRoomSlug(room);
  return (slug && getFallbackRoomBySlug(slug)) || fallbackRooms[index] || fallbackRooms[0];
}

export function normalizeSanityRoom(room: SanityRoom, index = 0): HotelRoom {
  const fallback = getFallbackForRoom(room, index);
  const slug = getRoomSlug(room) || fallback.slug;
  const images = room.images
    ?.map((image) => getImageUrl(image, 1200))
    .filter((image) => image !== '/placeholder.jpg');
  const price = room.priceUsd ?? fallback.price;

  return {
    id: room._id || slug,
    slug,
    name: room.name || fallback.name,
    description: room.shortDescription || fallback.description,
    longDescription: portableTextToPlainText(room.fullDescription) || fallback.longDescription,
    images: images && images.length > 0 ? images : fallback.images,
    price,
    otaPrice: fallback.otaPrice || Math.round(price * 1.25),
    size: typeof room.size === 'number' ? `${room.size} m²` : room.size || fallback.size,
    guests: room.maxGuests ?? fallback.guests,
    bed: fallback.bed,
    amenities: room.amenities && room.amenities.length > 0 ? room.amenities : fallback.amenities,
    features: fallback.features,
    views: fallback.views,
    order: room.order ?? fallback.order,
  };
}

export function normalizeRooms(rooms: SanityRoom[] | null | undefined): HotelRoom[] {
  if (!rooms?.length) return fallbackRooms;

  return rooms
    .map((room, index) => normalizeSanityRoom(room, index))
    .sort((a, b) => a.order - b.order);
}

export function resolveRoom(room: SanityRoom | null | undefined, slug: string): HotelRoom | undefined {
  if (room) return normalizeSanityRoom(room);
  return getFallbackRoomBySlug(slug);
}
