import Link from 'next/link';
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
import { useTranslations } from 'next-intl';
import { OTAPriceComparison, CurrencyDisplay } from '@/components/hotel/shared';
import { fallbackRooms, getFallbackRoomBySlug, type HotelRoom } from '@/lib/rooms';

interface RoomDetailPageProps {
  locale: Locale;
  slug: string;
  room?: HotelRoom | null;
  otherRooms?: HotelRoom[];
}

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

const fallbackTypeKeys: Record<string, string> = {
  'standard-room': 'standard',
  'superior-room': 'superior',
  'deluxe-room': 'deluxe',
  'junior-suite': 'juniorSuite',
  'executive-suite': 'executiveSuite',
  'presidential-suite': 'presidentialSuite',
};

const bedKeys: Record<string, string> = {
  'standard-room': 'queen',
  'superior-room': 'king',
  'deluxe-room': 'kingSofa',
  'junior-suite': 'king',
  'executive-suite': 'king',
  'presidential-suite': 'king',
};

const viewKeys: Record<string, string> = {
  'standard-room': 'city',
  'superior-room': 'partialSea',
  'deluxe-room': 'fullSea',
  'junior-suite': 'sea',
  'executive-suite': 'panoramicSea',
  'presidential-suite': 'panoramic360',
};

const amenityKeys: Record<string, string> = {
  wifi: 'wifi', ac: 'ac', minibar: 'minibar', safe: 'safe', tv: 'tv', bath: 'bathtub',
  balcony: 'balcony', robes: 'robes', coffee: 'coffee', living: 'living',
  dining: 'diningArea', butler: 'butler', jacuzzi: 'jacuzzi',
};

export default function RoomDetailPage({ locale, slug, room: providedRoom, otherRooms }: RoomDetailPageProps) {
  const t = useTranslations('rooms');
  const room = providedRoom || getFallbackRoomBySlug(slug);
  const rooms = otherRooms?.length ? otherRooms : fallbackRooms;

  if (!room) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-forest-900 mb-4">{t('detail.notFound')}</h1>
          <Link href={`/${locale}/rooms`}>
            <Button className="btn-boutique">{t('detail.backToRooms')}</Button>
          </Link>
        </div>
      </main>
    );
  }

  const typeKey = fallbackTypeKeys[room.slug];
  const isFallback = fallbackRooms.includes(room) && Boolean(typeKey);
  const roomName = isFallback ? t(`types.${typeKey}.name`) : room.name;
  const roomDescription = isFallback ? t(`types.${typeKey}.description`) : room.description;
  const roomLongDescription = isFallback && locale !== 'en' ? roomDescription : room.longDescription;
  const roomBed = locale !== 'en' && bedKeys[room.slug] ? t(`detail.beds.${bedKeys[room.slug]}`) : room.bed;
  const roomView = locale !== 'en' && viewKeys[room.slug] ? t(`detail.views.${viewKeys[room.slug]}`) : room.views;

  return (
    <main className="min-h-screen">
      {/* Hero Gallery */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={room.images[0]}
            alt={roomName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
        </div>
        
        <div className="absolute top-6 left-6 z-10">
          <Link href={`/${locale}/rooms`}>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-forest-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('detail.allRooms')}
            </Button>
          </Link>
        </div>

        <div className="absolute top-6 right-6 z-10 flex gap-2">
          <Button aria-label={t('detail.saveRoom')} variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-forest-900">
            <Heart className="w-4 h-4" />
          </Button>
          <Button aria-label={t('detail.shareRoom')} variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-forest-900">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div >
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-brass-500 text-forest-950">{roomView}</Badge>
                <Badge variant="outline" className="border-white/30 text-white">{room.size}</Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-light mb-4">{roomName}</h1>
              <p className="text-xl text-forest-200 max-w-2xl">{roomDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-forest-900 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-brass-400" />
                <span>{t('detail.guestCount', { count: room.guests })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize size={20} className="text-brass-400" />
                <span>{room.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <BedDouble size={20} className="text-brass-400" />
                <span>{roomBed}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold">
                <CurrencyDisplay usdAmount={room.price} size="lg" />
                <span className="text-forest-300 text-sm font-normal ml-2">/ {t('night')}</span>
              </div>
              <Link href={`/${locale}/booking?room=${room.id}`}>
                <Button className="btn-boutique">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('bookNow')}
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
              <div>
                <h2 className="text-2xl font-semibold text-forest-900 mb-4">{t('detail.about')}</h2>
                <p className="text-forest-700 leading-relaxed">{roomLongDescription}</p>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-semibold text-forest-900 mb-4">{t('detail.gallery')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.images.map((img, index) => (
                    <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        src={img}
                        alt={t('detail.galleryImage', { name: roomName, number: index + 1 })}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-semibold text-forest-900 mb-4">{t('amenities.title')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity];
                    const label = t(`amenities.${amenityKeys[amenity] ?? amenity}`);
                    return (
                      <div key={amenity} className="flex items-center gap-3 p-3 bg-forest-50 rounded-lg">
                        {Icon && <Icon size={20} className="text-forest-600" />}
                        <span className="text-forest-700">{label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Features */}
              {locale === 'en' ? <div>
                <h2 className="text-2xl font-semibold text-forest-900 mb-4">{t('detail.specialFeatures')}</h2>
                <ul className="space-y-3">
                  {room.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-forest-700">
                      <div className="w-2 h-2 bg-brass-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div> : null}
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
                  <h3 className="text-xl font-semibold text-forest-900 mb-4">{t('detail.bookThisRoom')}</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-forest-600">{t('detail.roomSize')}:</span>
                      <span className="font-medium text-forest-900">{room.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-forest-600">{t('detail.maxGuests')}:</span>
                      <span className="font-medium text-forest-900">{room.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-forest-600">{t('detail.bedType')}:</span>
                      <span className="font-medium text-forest-900">{roomBed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-forest-600">{t('detail.view')}:</span>
                      <span className="font-medium text-forest-900">{roomView}</span>
                    </div>
                  </div>
                  
                  <Link href={`/${locale}/booking?room=${room.id}`} className="block">
                    <Button className="btn-boutique w-full">
                      {t('detail.checkAvailability')}
                    </Button>
                  </Link>
                </div>

                {/* Direct Booking Benefits */}
                <div className="bg-gradient-to-br from-forest-800 to-forest-950 rounded-2xl p-6 text-white">
                  <h4 className="font-semibold text-brass-400 mb-3">{t('detail.directBenefits')}</h4>
                  <ul className="space-y-2 text-sm text-forest-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brass-400 rounded-full" />
                      {t('freeBreakfast')}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brass-400 rounded-full" />
                      {t('detail.earlyLate')}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brass-400 rounded-full" />
                      {t('detail.freeUpgrade')}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brass-400 rounded-full" />
                      {t('detail.spaDiscount10')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Rooms */}
      <section className="py-16 bg-forest-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-forest-900 mb-8">{t('detail.exploreOtherRooms')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rooms
              .filter(r => r.id !== room.id)
              .slice(0, 3)
              .map((otherRoom) => {
                const otherTypeKey = fallbackTypeKeys[otherRoom.slug];
                const otherName = fallbackRooms.includes(otherRoom) && otherTypeKey
                  ? t(`types.${otherTypeKey}.name`)
                  : otherRoom.name;
                return (
                <Link key={otherRoom.id} href={`/${locale}/rooms/${otherRoom.id}`}>
                  <div className="glass-card rounded-xl overflow-hidden card-hover">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={otherRoom.images[0]}
                        alt={otherName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-forest-900">{otherName}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-forest-600">{otherRoom.size}</span>
                        <span className="text-brass-600 font-semibold">${otherRoom.price}/{t('night')}</span>
                      </div>
                    </div>
                  </div>
                </Link>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
}







