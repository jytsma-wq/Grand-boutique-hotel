import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, Wifi, Coffee, Tv, Wind, Users, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';
import { fallbackRooms, type HotelRoom } from '@/lib/rooms';

interface RoomsPageProps {
  locale: Locale;
  rooms?: HotelRoom[];
}

const fallbackTypeKeys: Record<string, string> = {
  'standard-room': 'standard',
  'superior-room': 'superior',
  'deluxe-room': 'deluxe',
  'junior-suite': 'juniorSuite',
  'executive-suite': 'executiveSuite',
  'presidential-suite': 'presidentialSuite',
};

const amenityKeys: Record<string, string> = {
  wifi: 'wifi',
  ac: 'ac',
  minibar: 'minibar',
  safe: 'safe',
  tv: 'tv',
  bath: 'bathtub',
  balcony: 'balcony',
  robes: 'robes',
  coffee: 'coffee',
  living: 'living',
  dining: 'diningArea',
  butler: 'butler',
  jacuzzi: 'jacuzzi',
};

export default function RoomsPage({ locale, rooms: providedRooms }: RoomsPageProps) {
  const t = useTranslations('rooms');
  const rooms = providedRooms?.length ? providedRooms : fallbackRooms;

  return (
    <main className="luxury-page min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[72dvh] items-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80"
            alt={t('title')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,13,11,0.75),rgba(16,13,11,0.36),rgba(16,13,11,0.16))]" />
        </div>
        
        <div className="luxury-container relative z-10 text-white">
          <div className="max-w-4xl">
            <span className="luxury-kicker text-brass-300">{t('accommodations')}</span>
            <h1 className="luxury-display mt-6">
              {t('title')}
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-light leading-9 text-white/75">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* OTA Killer Banner */}
      <section className="bg-charcoal-950 py-5 text-cream-50">
        <div className="luxury-container">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <span className="text-brass-300">{t('bestPrice')}:</span>{' '}
            {t('bookDirectDescription')}
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => {
              const typeKey = fallbackTypeKeys[room.slug];
              const isFallback = fallbackRooms.includes(room) && Boolean(typeKey);
              const roomName = isFallback ? t(`types.${typeKey}.name`) : room.name;
              const roomDescription = isFallback ? t(`types.${typeKey}.description`) : room.description;
              const highlights = locale === 'en'
                ? room.features.slice(0, 3)
                : room.amenities.slice(0, 3).map((amenity) => t(`amenities.${amenityKeys[amenity] ?? amenity}`));

              return (
              <div
                key={room.id} className="group"
              >
                <div className="luxury-card flex h-full flex-col overflow-hidden">
                  {/* Image */}
                  <div className="luxury-image relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={room.images[0]}
                      alt={roomName}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal-950/75 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-serif text-3xl text-forest-950 mb-3">{roomName}</h3>
                    <p className="text-forest-800/70 text-sm leading-7 mb-5 line-clamp-3">{roomDescription}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {highlights.map((feature, i) => (
                        <span key={i} className="border border-forest-200 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-forest-700">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="border-t border-forest-200 pt-5 mt-auto">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-600">{t('priceLabel')}</span>
                        <div>
                          <span className="font-serif text-3xl text-brass-700">${room.price}</span>
                          <span className="text-sm text-forest-500 ml-1">/ {t('night')}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 mt-4">
                      <Link href={`/${locale}/rooms/${room.slug}`} className="flex-1">
                        <Button variant="outline" className="w-full rounded-none border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-cream-50">
                          {t('viewDetails')}
                        </Button>
                      </Link>
                      <Link href={`/${locale}/booking?room=${room.slug}`} className="flex-1">
                        <Button className="w-full rounded-none bg-forest-950 text-cream-50 hover:bg-brass-600 hover:text-charcoal-950">
                          <span>{t('bookNow')}</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="luxury-section bg-[#efe4d4]">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <span className="luxury-kicker justify-center">{t('inEveryRoom')}</span>
            <h2 className="luxury-title mt-5 text-5xl text-forest-950 md:text-7xl">{t('roomAmenities')}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: <Wifi />, label: t('highSpeedWifi') },
              { icon: <Wind />, label: t('climateControl') },
              { icon: <Tv />, label: t('smartTv') },
              { icon: <Coffee />, label: t('nespressoMachine') },
              { icon: <Maximize2 />, label: t('inRoomSafe') },
              { icon: <Users />, label: t('roomService') },
            ].map((amenity, i) => (
              <div
                key={i}
                className="border border-forest-200 bg-cream-50 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-forest-950 text-cream-50">
                  {amenity.icon}
                </div>
                <span className="text-sm text-forest-700">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Direct Benefits */}
      <section className="bg-charcoal-950 py-24 text-white">
        <div className="luxury-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="luxury-title text-5xl md:text-7xl mb-6">
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
              <Button className="btn-boutique mt-10 px-12 py-6 text-lg">
                <span>{t('bookYourStay')}</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}







