import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  ArrowRight,
  Car,
  Clock,
  Dumbbell,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Utensils,
  Waves,
  Wifi,
} from 'lucide-react';
import { type Locale } from '@/i18n/config';
import HeroSection from './HeroSection';
import { getImageUrl } from '@/lib/sanity';
import { fallbackRooms as hotelFallbackRooms } from '@/lib/rooms';
import { hotel } from '@/lib/site';
import { type SanityHomePage, type SanityRoom } from '@/types/sanity';

interface HomePageProps {
  locale: Locale;
  data?: SanityHomePage | null;
}

type FeaturedRoom = {
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  meta: string;
};

export default function HomePage({ locale, data }: HomePageProps) {
  const tSite = useTranslations('site');
  const tHome = useTranslations('home');
  const tRooms = useTranslations('rooms');
  const tNav = useTranslations('nav');
  const tBooking = useTranslations('booking');
  const tCommon = useTranslations('common');
  const tLocation = useTranslations('location');

  const welcomeTitle = data?.welcomeSection?.title || tHome('welcome.title');
  const welcomeDescription = data?.welcomeSection?.description || tHome('welcome.description');

  const amenityFallbacks = [
    { icon: Wifi, label: tHome('amenities.wifi') },
    { icon: Car, label: tHome('amenities.parking') },
    { icon: Utensils, label: tHome('amenities.dining') },
    { icon: Waves, label: tHome('amenities.pool') },
    { icon: Dumbbell, label: tHome('amenities.fitness') },
    { icon: Sparkles, label: tHome('amenities.spa') },
  ];

  const cmsSourceRooms = data?.rooms || data?.featuredRooms || [];
  const cmsRooms: FeaturedRoom[] = Array.isArray(cmsSourceRooms)
    ? cmsSourceRooms.slice(0, 3).map((room: SanityRoom) => ({
        slug: typeof room.slug === 'string' ? room.slug : room.slug?.current || 'rooms',
        name: room.name || tRooms('types.deluxe.name'),
        description: room.shortDescription || tRooms('types.deluxe.description'),
        price: room.priceUsd || 0,
        image: getImageUrl(room.images?.[0], 1100),
        meta: [room.size, room.maxGuests ? `${room.maxGuests} ${tBooking('guests')}` : null]
          .filter(Boolean)
          .join(' / '),
      }))
    : [];

  const featuredFallbackCopy: Record<string, Pick<FeaturedRoom, 'name' | 'description'>> = {
    'deluxe-room': {
      name: tRooms('types.deluxe.name'),
      description: tRooms('types.deluxe.description'),
    },
    'junior-suite': {
      name: tRooms('types.juniorSuite.name'),
      description: tRooms('types.juniorSuite.description'),
    },
    'presidential-suite': {
      name: tRooms('types.presidentialSuite.name'),
      description: tRooms('types.presidentialSuite.description'),
    },
  };

  const fallbackRooms: FeaturedRoom[] = hotelFallbackRooms
    .filter((room) => room.slug in featuredFallbackCopy)
    .map((room) => ({
      slug: room.slug,
      name: featuredFallbackCopy[room.slug].name,
      description: featuredFallbackCopy[room.slug].description,
      price: room.price,
      image: room.images[0],
      meta: `${room.size} / ${room.guests} ${tBooking('guests')}`,
    }));

  const rooms = cmsRooms.length > 0 ? cmsRooms : fallbackRooms;

  const experiences = [
    {
      title: tHome('dining.restaurant.name'),
      description: tHome('dining.restaurant.description'),
      href: `/${locale}/restaurant`,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1100&q=80',
      cta: tCommon('learnMore'),
    },
    {
      title: tHome('wellness.title'),
      description: tHome('wellness.description'),
      href: `/${locale}/wellness`,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1100&q=80',
      cta: tCommon('learnMore'),
    },
    {
      title: tHome('experiences.title'),
      description: tHome('experiences.subtitle'),
      href: `/${locale}/experiences`,
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1100&q=80',
      cta: tCommon('viewMore'),
    },
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=80',
      alt: hotel.name,
      className: 'md:col-span-2 md:row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700&q=80',
      alt: tRooms('types.superior.name'),
      className: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80',
      alt: tHome('dining.bar.name'),
      className: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&q=80',
      alt: tHome('amenities.pool'),
      className: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80',
      alt: tRooms('title'),
      className: '',
    },
  ];

  return (
    <main className="luxury-page min-h-screen">
      <HeroSection locale={locale} data={data} />

      <section className="luxury-section">
        <div className="luxury-container">
          <div className="grid items-end gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <span className="luxury-kicker">{tHome('welcome.subtitle')}</span>
              <h2 className="luxury-title mt-6 max-w-4xl text-5xl text-forest-950 md:text-7xl lg:text-8xl">
                {welcomeTitle}
              </h2>
            </div>
            <div className="space-y-8">
              <p className="luxury-lede">{welcomeDescription}</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {amenityFallbacks.map((amenity) => (
                  <div key={amenity.label} className="border border-forest-200/80 bg-cream-50/70 px-4 py-5">
                    <amenity.icon className="mb-5 h-5 w-5 text-brass-700" strokeWidth={1.5} aria-hidden="true" />
                    <p className="text-sm font-medium text-forest-900">{amenity.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="luxury-image relative min-h-[28rem]">
              <Image
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80"
                alt={hotel.name}
                fill
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="object-cover"
              />
            </div>
            <div className="flex min-h-[28rem] flex-col justify-between bg-charcoal-950 p-8 text-cream-50 md:p-10">
              <div>
                <p className="luxury-kicker text-brass-300">{tSite('tagline')}</p>
                <p className="mt-8 font-serif text-4xl leading-tight md:text-5xl">
                  {tSite('description')}
                </p>
              </div>
              <Link href={`/${locale}/about`} className="luxury-button-outline luxury-button-outline-light mt-10 w-fit border-white/35 text-white">
                <span>{tCommon('learnMore')}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section bg-[#efe4d4]">
        <div className="luxury-container">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="luxury-kicker">{tRooms('accommodations')}</span>
              <h2 className="luxury-title mt-5 max-w-4xl text-5xl text-forest-950 md:text-7xl">
                {tHome('rooms.title')}
              </h2>
            </div>
            <p className="luxury-lede md:max-w-md">{tHome('rooms.subtitle')}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <article key={room.slug} className={`luxury-card group flex min-h-full flex-col overflow-hidden ${index === 1 ? 'lg:translate-y-10' : ''}`}>
                <Link href={`/${locale}/rooms/${room.slug}`} className="flex min-h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500">
                  <div className="luxury-image relative aspect-[4/5]">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal-950/70 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 text-cream-50">
                      <span className="text-xs uppercase tracking-[0.22em] text-white/70">{room.meta}</span>
                      <span className="font-serif text-2xl">${room.price}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-serif text-3xl text-forest-950">{room.name}</h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-forest-800/70">{room.description}</p>
                    <div className="mt-auto pt-7">
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brass-700">
                        {tRooms('viewDetails')}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-20 flex flex-col gap-4 sm:flex-row">
            <Link href={`/${locale}/rooms`} className="luxury-button">
              <span>{tHome('rooms.viewAll')}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href={`/${locale}/booking`} className="luxury-button-outline text-forest-950">
              <span>{tBooking('search')}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-container">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <span className="luxury-kicker">{tNav('restaurantBar')}</span>
              <h2 className="luxury-title mt-5 text-5xl text-forest-950 md:text-7xl">
                {tHome('dining.title')}
              </h2>
              <p className="luxury-lede mt-7">{tHome('dining.subtitle')}</p>
            </div>
            <div className="grid gap-6 lg:col-span-2 md:grid-cols-3">
              {experiences.map((experience, index) => (
                <Link
                  key={experience.href}
                  href={experience.href}
                  className={`group relative min-h-[30rem] overflow-hidden bg-charcoal-950 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 ${
                    index === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    sizes={index === 0 ? '(max-width: 768px) 100vw, 44vw' : '(max-width: 768px) 100vw, 22vw'}
                    className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-brass-300">{experience.cta}</p>
                    <h3 className="mt-3 font-serif text-4xl leading-none">{experience.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">{experience.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section bg-charcoal-950 text-cream-50">
        <div className="luxury-container">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="luxury-kicker text-brass-300">{tNav('gallery')}</span>
              <h2 className="luxury-title mt-5 text-5xl md:text-7xl">{tHome('experiences.title')}</h2>
            </div>
            <Link href={`/${locale}/gallery`} className="luxury-button-outline luxury-button-outline-light w-fit border-white/35 text-white">
              <span>{tCommon('viewMore')}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid auto-rows-[12rem] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[14rem]">
            {galleryImages.map((image) => (
              <Link
                key={image.src}
                href={`/${locale}/gallery`}
                className={`luxury-image relative block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-container">
          <div className="grid overflow-hidden border border-forest-200 bg-cream-50 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 md:p-12 lg:p-16">
              <span className="luxury-kicker">{tLocation('title')}</span>
              <h2 className="luxury-title mt-5 text-5xl text-forest-950 md:text-7xl">
                {tLocation('subtitle')}
              </h2>
              <div className="mt-10 space-y-6 text-forest-900/75">
                <p className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-brass-700" aria-hidden="true" />
                  <span>{hotel.address.formatted}</span>
                </p>
                <p className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-brass-700" aria-hidden="true" />
                  <a href={`tel:${hotel.phone.href}`} className="hover:text-brass-700">{hotel.phone.display}</a>
                </p>
                <p className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-brass-700" aria-hidden="true" />
                  <a href={`mailto:${hotel.email}`} className="hover:text-brass-700">{hotel.email}</a>
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href={`/${locale}/location`} className="luxury-button">
                  <span>{tLocation('directions')}</span>
                </Link>
                <Link href={`/${locale}/contact`} className="luxury-button-outline text-forest-950">
                  <span>{tCommon('contact')}</span>
                </Link>
              </div>
            </div>
            <div className="relative min-h-[28rem] bg-charcoal-950">
              <Image
                src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=1500&q=80"
                alt={tLocation('nearby.title')}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/65 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 grid gap-3 text-cream-50 sm:grid-cols-3">
                {[tLocation('nearby.beach'), tLocation('nearby.center'), tLocation('nearby.airport')].map((item) => (
                  <div key={item} className="border border-white/18 bg-white/10 p-4 backdrop-blur">
                    <Clock className="mb-3 h-4 w-4 text-brass-300" aria-hidden="true" />
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2a211b] py-20 text-cream-50">
        <div className="luxury-container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="luxury-kicker text-brass-300">{tNav('bookNow')}</span>
              <h2 className="luxury-title mt-5 text-5xl md:text-7xl">
                {tRooms('bookDirectTitle')} {tRooms('saveMore')}
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/70">
                {tRooms('bookDirectDescription')}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link href={`/${locale}/booking`} className="luxury-button bg-brass-400 text-charcoal-950 hover:bg-cream-50">
                <span>{tRooms('bookYourStay')}</span>
              </Link>
              <a href={`tel:${hotel.phone.href}`} className="luxury-button-outline luxury-button-outline-light border-white/35 text-white">
                <span>{hotel.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
