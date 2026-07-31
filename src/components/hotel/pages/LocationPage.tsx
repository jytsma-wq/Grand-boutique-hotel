import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { 
  MapPin, 
  Plane, 
  Car, 
  Train,
  Navigation,
  Clock,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface LocationPageProps {
  locale: Locale;
}

export default function LocationPage({ locale }: LocationPageProps) {
  const t = useTranslations();

  const nearbyAttractions = [
    {
      name: t('location.page.attractions.beach.name'),
      distance: '0.1 km',
      time: t('location.page.attractions.beach.time'),
      image: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=400&q=80',
      desc: t('location.page.attractions.beach.description')
    },
    {
      name: t('location.page.attractions.boulevard.name'),
      distance: '0.5 km',
      time: t('location.page.attractions.boulevard.time'),
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&q=80',
      desc: t('location.page.attractions.boulevard.description')
    },
    {
      name: t('location.page.attractions.oldBatumi.name'),
      distance: '1.2 km',
      time: t('location.page.attractions.oldBatumi.time'),
      image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=400&q=80',
      desc: t('location.page.attractions.oldBatumi.description')
    },
    {
      name: t('location.page.attractions.piazza.name'),
      distance: '1.5 km',
      time: t('location.page.attractions.piazza.time'),
      image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=400&q=80',
      desc: t('location.page.attractions.piazza.description')
    },
    {
      name: t('location.page.attractions.botanical.name'),
      distance: '8 km',
      time: t('location.page.attractions.botanical.time'),
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80',
      desc: t('location.page.attractions.botanical.description')
    },
    {
      name: t('location.page.attractions.gonio.name'),
      distance: '12 km',
      time: t('location.page.attractions.gonio.time'),
      image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=400&q=80',
      desc: t('location.page.attractions.gonio.description')
    }
  ];

  const transportation = [
    {
      icon: Plane,
      name: t('location.nearby.airport'),
      distance: '5 km',
      time: t('location.page.transport.airport.time'),
      details: t('location.page.transport.airport.details')
    },
    {
      icon: Car,
      name: t('location.nearby.center'),
      distance: '1 km',
      time: t('location.page.transport.center.time'),
      details: t('location.page.transport.center.details')
    },
    {
      icon: Train,
      name: t('location.page.transport.station.name'),
      distance: '3 km',
      time: t('location.page.transport.station.time'),
      details: t('location.page.transport.station.details')
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
            alt={t('location.title')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <div>
            <span className="text-brass-400 text-sm tracking-widest uppercase">{t('location.page.findUs')}</span>
            <h1 className="text-5xl md:text-7xl font-light mt-4 mb-4">{t('location.title')}</h1>
            <div className="brass-line" />
            <p className="text-xl text-cream-50/80 max-w-2xl mt-4">{t('location.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Address & Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Address Info */}
            <div>
              <span className="text-brass-600 text-sm tracking-widest uppercase">{t('location.page.ourAddress')}</span>
              <h2 className="section-title mt-4">Batumi Boutique Hotel</h2>
              <div className="brass-line !mx-0" />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cream-50" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-900">{t('contact.address.title')}</h3>
                    <p className="text-forest-600">
                      {t('contact.address.street')}<br />
                      {t('contact.address.city')}<br />
                      {t('contact.address.postal')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-brass flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-forest-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-900">{t('location.page.phone')}</h3>
                    <p className="text-forest-600">+995 422 00 00 00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-cream-50" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-900">{t('location.page.frontDesk')}</h3>
                    <p className="text-forest-600">{t('location.page.available247')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a 
                  href="https://maps.google.com/?q=Batumi,Georgia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="btn-boutique">
                    <Navigation className="mr-2 w-4 h-4" />
                    {t('location.directions')}
                  </Button>
                </a>
              </div>
            </div>

            {/* Interactive Google Map */}
            <div className="relative h-96 lg:h-auto rounded-2xl overflow-hidden shadow-xl border-2 border-forest-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23726.15869140033!2d41.62!3d41.6168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406786544e107d3b%3A0x9f604c5f7d4e1c5e!2sBatumi%2C%20Georgia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('location.page.mapTitle')}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportation.map((trans, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <trans.icon className="w-6 h-6 text-brass-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{trans.name}</h3>
                  <p className="text-forest-300 text-base font-medium">{trans.distance} • {trans.time}</p>
                  <p className="text-forest-400 text-sm">{trans.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brass-600 text-sm tracking-widest uppercase">{t('location.page.explore')}</span>
            <h2 className="section-title mt-4">{t('location.nearby.title')}</h2>
            <div className="brass-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover"
              >
                <div className="relative h-48">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 text-forest-900 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <MapPin size={14} />
                    {attraction.distance}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-forest-900 mb-1">{attraction.name}</h3>
                  <p className="text-sm text-forest-600 mb-2">{attraction.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-forest-500">
                    <Clock size={14} />
                    <span>{attraction.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-forest-800 to-forest-950 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="text-4xl font-light mb-6">
              {t('location.page.transferTitle')}
            </h2>
            <p className="text-forest-200 text-lg mb-10 max-w-2xl mx-auto">
              {t('location.page.transferDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button className="btn-boutique px-12 py-6 text-lg">
                  {t('location.page.arrangeTransfer')}
                </Button>
              </Link>
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-12 py-6 text-lg border-white/30 text-cream-50 hover:bg-white hover:text-forest-900">
                  <Phone className="mr-2 w-5 h-5" />
                  {t('location.page.callUs')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}







