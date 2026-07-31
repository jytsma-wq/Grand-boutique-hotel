import Link from 'next/link';
import Image from 'next/image';
import { Waves, Clock, Thermometer, Users, Star, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';
import { useTranslations } from 'next-intl';

interface JacuzziPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function JacuzziPage({ locale }: JacuzziPageProps) {
  const t = useTranslations('jacuzzi');
  const tPage = useTranslations('wellnessPages');
  
  const features = [
    { icon: Waves, title: t('features.hydrotherapy'), desc: t('features.hydrotherapyDesc') },
    { icon: Thermometer, title: t('features.perfectTemp'), desc: t('features.perfectTempDesc') },
    { icon: Star, title: t('features.outdoor'), desc: t('features.outdoorDesc') },
    { icon: Users, title: t('features.intimate'), desc: t('features.intimateDesc') }
  ];

  const benefits = [
    t('benefitsList.muscleRelief'),
    t('benefitsList.circulation'),
    t('benefitsList.stressRelief'),
    t('benefitsList.sleepQuality'),
    t('benefitsList.skinHealth'),
    t('benefitsList.immuneSystem')
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80'
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80"
            alt={t('title')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-forest-900/40 to-forest-900/80" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <div>
            <Waves className="w-16 h-16 text-cream-50 mb-6 mx-auto" />
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">{t('title')}</h1>
            <p className="text-xl text-cream-50/90 max-w-2xl mx-auto font-light">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-12 bg-forest-900 text-cream-50 border-y-4 border-forest-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-brass-400" />
              <div>
                <div className="text-sm uppercase tracking-wider text-cream-50/60">{t('openingHours')}</div>
                <div className="text-2xl font-bold">{t('hours')}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Thermometer className="w-8 h-8 text-brass-400" />
              <div>
                <div className="text-sm uppercase tracking-wider text-cream-50/60">{t('temperature')}</div>
                <div className="text-2xl font-bold">{t('tempValue')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('luxuryWellness')}</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 uppercase tracking-tight">
                {t('therapeuticRelaxation')}
              </h2>
              <p className="text-forest-700 text-lg leading-relaxed mb-6">
                {tPage('jacuzzi.overview')}
              </p>
              <div className="flex gap-4">
                <Link href={`/${locale}/booking`}>
                  <Button className="btn-boutique">{t('bookYourStay')}</Button>
                </Link>
              </div>
            </div>

            <div className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                alt={t('title')}
                className="w-full aspect-[4/3] object-cover border-4 border-forest-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('premiumAmenities')}</span>
            <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">{t('jacuzziFeatures')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index} className="bg-white border-2 border-forest-900 p-8 text-center"
              >
                <div className="w-16 h-16 bg-forest-900 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-cream-50" />
                </div>
                <h3 className="font-bold text-forest-900 mb-3 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-sm text-forest-600 font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('wellnessBenefits')}</span>
              <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">{t('healthBenefits')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index} className="flex items-center gap-4 bg-forest-50 border-l-4 border-forest-900 p-6"
                >
                  <div className="w-2 h-2 bg-forest-900 rounded-full flex-shrink-0" />
                  <span className="text-forest-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('visualExperience')}</span>
            <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">{t('jacuzziGallery')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index} className="relative aspect-[4/3] overflow-hidden border-2 border-forest-900 group"
              >
                <img
                  src={image}
                  alt={tPage('galleryImage', { facility: t('title'), number: index + 1 })}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
              {tPage('jacuzzi.ctaTitle')}
            </h2>
            <p className="text-cream-50/70 text-lg mb-10 max-w-2xl mx-auto font-light">
              {tPage('jacuzzi.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/wellness`}>
                <Button className="btn-boutique px-12 py-6 text-base">
                  {tPage('exploreAll')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-12 py-6 text-base border-2 border-white bg-transparent text-cream-50 hover:bg-white hover:text-forest-900 transition-all uppercase tracking-wider">
                  {tPage('reserveSession')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}







