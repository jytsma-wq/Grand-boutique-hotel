'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
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
import { getImageUrl } from '@/lib/sanity';

interface HomePageProps {
  locale: Locale;
  data?: any;
}

export default function HomePage({ locale, data }: HomePageProps) {
  const t = useTranslations();
  const tHome = useTranslations('home');

  // Use CMS data if available, otherwise use translations as fallback
  const heroTitle = data?.heroTitleLocalized || tHome('hero.title');
  const heroSubtitle = data?.heroSubtitleLocalized || tHome('hero.subtitle');
  const welcomeTitle = data?.welcomeSection?.title || tHome('welcome.title');
  const welcomeDescription = data?.welcomeSection?.description || tHome('welcome.description');
  
  // Get amenities from CMS or use defaults
  const amenities = data?.amenities?.length > 0 
    ? data.amenities.map((a: any) => ({
        icon: a.icon || 'Wifi',
        label: a[`label_${locale}`] || a.label || 'Amenity'
      }))
    : [
        { icon: Wifi, label: tHome('amenities.wifi') },
        { icon: Car, label: tHome('amenities.parking') },
        { icon: Utensils, label: tHome('amenities.dining') },
        { icon: Waves, label: tHome('amenities.pool') },
        { icon: Dumbbell, label: tHome('amenities.fitness') },
        { icon: Sparkles, label: tHome('amenities.spa') },
      ];

  // Get rooms from CMS data or use empty array
  const cmsRooms = data?.rooms || [];
  const rooms = cmsRooms.length > 0 
    ? cmsRooms.map((room: any) => ({
        name: room[`name_${locale}`] || room.name || 'Room',
        image: getImageUrl(room.image, 800),
        price: room.price || 0,
        description: room[`description_${locale}`] || room.description || '',
      }))
    : [];

  const experiences = [
    {
      name: 'Batumi Boulevard',
      image: getImageUrl('https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=400&auto=format&fit=crop', 400),
      distance: '0.5 km',
    },
    {
      name: 'Old Batumi',
      image: getImageUrl('https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=400&auto=format&fit=crop', 400),
      distance: '1.2 km',
    },
    {
      name: 'Batumi Botanical Garden',
      image: getImageUrl('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400&auto=format&fit=crop', 400),
      distance: '8 km',
    },
  ];

  // Map icon names to Lucide components
  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = { Wifi, Car, Utensils, Waves, Dumbbell, Sparkles, MapPin, Clock };
    return icons[iconName] || Wifi;
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection locale={locale} data={data} />

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <span className="text-brass-600 text-sm tracking-widest uppercase">Welcome</span>
            <h2 className="section-title mt-4">{welcomeTitle}</h2>
            <div className="brass-line" />
            <p className="section-subtitle">{welcomeDescription}</p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 animate-fade-in-up">
            {amenities.map((amenity: { icon: string; label: string }, index: number) => {
              const IconComponent = typeof amenity.icon === 'string' ? getIconComponent(amenity.icon) : amenity.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-forest-50/50 hover:bg-forest-100/50 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full gradient-forest flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-forest-900 text-center">{amenity.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-brass-600 text-sm tracking-widest uppercase">Accommodations</span>
            <h2 className="section-title mt-4">{tHome('rooms.title')}</h2>
            <div className="brass-line" />
            <p className="section-subtitle">{tHome('rooms.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room: { slug: string; name: string; price: number; images: string[]; image: string; size: string; guests: number }, index: number) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={`/${locale}/rooms/${room.name.toLowerCase().replace(' ', '-')}`}>
                  <div className="glass-card rounded-2xl overflow-hidden card-hover">
                    {/* Image */}
                    <div className="relative aspect-4/3 overflow-hidden">
                      <Image
                        src={room.image}
                        alt={room.name}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
                      <h3 className="text-xl font-semibold text-forest-900 mb-2">{room.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-forest-600">
                        <span>{room.size}</span>
                        <span>•</span>
                        <span>{room.guests} guests</span>
                      </div>
                      
                      {/* OTA Comparison */}
                      <div className="mt-4 pt-4 border-t border-forest-100">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-forest-600">OTA Price:</span>
                          <span className="line-through text-forest-400">${room.price + 30}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-forest-600">Direct Price:</span>
                          <span className="text-brass-600 font-semibold">${room.price}</span>
                        </div>
                        <div className="mt-2 text-xs text-center text-forest-500 bg-forest-100 rounded-full py-1">
                          Save $30 by booking direct!
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${locale}/rooms`}>
              <Button className="btn-telegraph">
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
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-brass-600 text-sm tracking-widest uppercase">Culinary</span>
            <h2 className="section-title mt-4">{tHome('dining.title')}</h2>
            <div className="brass-line" />
            <p className="section-subtitle">{tHome('dining.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Restaurant */}
            <div
              className="relative group overflow-hidden rounded-3xl animate-fade-in-up"
            >
              <div className="aspect-16/10">
                <Image
                  src={getImageUrl('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop', 800)}
                  alt="Azure Restaurant"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-forest-950/90 via-forest-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-brass-400 fill-brass-400" />
                  <Star className="w-5 h-5 text-brass-400 fill-brass-400" />
                  <Star className="w-5 h-5 text-brass-400 fill-brass-400" />
                  <Star className="w-5 h-5 text-brass-400 fill-brass-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {tHome('dining.restaurant.name')}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {tHome('dining.restaurant.description')}
                </p>
                <Link href={`/${locale}/restaurant`}>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-forest-900">
                    View Restaurant
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Bar */}
            <div
              className="relative group overflow-hidden rounded-3xl animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              <div className="aspect-16/10">
                <Image
                  src={getImageUrl('https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop', 800)}
                  alt="Lounge Bar"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-forest-950/90 via-forest-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {tHome('dining.bar.name')}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {tHome('dining.bar.description')}
                </p>
                <Link href={`/${locale}/bar`}>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-forest-900">
                    View Bar
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="py-24 bg-forest-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brass-400 text-sm tracking-widest uppercase">Relaxation</span>
              <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">
                {tHome('wellness.title')}
              </h2>
              <div className="brass-line" />
              <p className="text-white/70 text-lg mb-8">
                {tHome('wellness.description')}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {['Infinity Pool', 'Finnish Sauna', 'Turkish Hammam', 'Fitness Center'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brass-400 rounded-full" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Link href={`/${locale}/wellness`}>
                  <Button className="btn-telegraph">
                    <span>Explore Wellness</span>
                  </Button>
                </Link>
                <Link href={`/${locale}/wellness/spa`}>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-forest-900">
                    Book Spa Treatment
                  </Button>
                </Link>
              </div>
            </div>

            <div
              className="relative animate-scale-in"
            >
              <Image
                src={getImageUrl('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop', 800)}
                alt="Spa"
                width={800}
                height={600}
                className="rounded-3xl w-full aspect-4/3 object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full gradient-brass flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-forest-900" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-forest-900">50+</div>
                    <div className="text-sm text-forest-600">Spa Treatments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-brass-600 text-sm tracking-widest uppercase">Explore</span>
            <h2 className="section-title mt-4">{tHome('experiences.title')}</h2>
            <div className="brass-line" />
            <p className="section-subtitle">{tHome('experiences.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-3/4">
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-brass-400 text-sm mb-2">
                    <MapPin size={14} />
                    <span>{exp.distance}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{exp.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${locale}/experiences`}>
              <Button className="btn-telegraph">
                <span>View All Experiences</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-forest-800 to-forest-950 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-700/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brass-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready to Experience <span className="text-brass-400">True Luxury</span>?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Book direct and enjoy exclusive benefits: complimentary breakfast, 
              room upgrades, and best price guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/booking`}>
                <Button className="btn-telegraph px-12 py-6 text-lg">
                  <span>Book Your Stay</span>
                </Button>
              </Link>
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-12 py-6 text-lg border-white/30 text-white hover:bg-white hover:text-forest-900">
                  <span>Call Us: +995 422 00 00 00</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h3 className="text-2xl font-semibold text-forest-900 mb-4">
              Follow Us <span className="text-brass-600">@batumiboutique</span>
            </h3>
            <p className="text-forest-600 mb-8">Share your moments with #BatumiBoutique</p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <a
                  key={i}
                  href="https://instagram.com/batumiboutique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square overflow-hidden group"
                >
                  <Image
                    src={getImageUrl(`https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=200&h=200&auto=format&fit=crop`, 200)}
                    alt="Instagram"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}







