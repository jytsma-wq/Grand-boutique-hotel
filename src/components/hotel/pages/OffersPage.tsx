import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, Calendar, Check, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface OffersPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function OffersPage({ locale }: OffersPageProps) {
  const t = useTranslations();
  const formatDate = (date: Date) => new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(date);

  const offers = [
    {
      id: 1,
      title: t('offers.items.earlyBird.title'),
      subtitle: t('offers.items.earlyBird.subtitle'),
      description: t('offers.items.earlyBird.description'),
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      price: t('offers.fromPerNight', { price: '$90' }),
      originalPrice: t('offers.fromPerNight', { price: '$120' }),
      savings: '−25%',
      validUntil: formatDate(new Date('2026-12-31T12:00:00Z')),
      includes: [t('offers.items.earlyBird.include1'), t('offers.items.earlyBird.include2'), t('offers.items.earlyBird.include3'), t('offers.items.earlyBird.include4')]
    },
    {
      id: 2,
      title: t('offers.items.romantic.title'),
      subtitle: t('offers.items.romantic.subtitle'),
      description: t('offers.items.romantic.description'),
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      price: t('offers.fromPerNight', { price: '$280' }),
      originalPrice: t('offers.fromPerNight', { price: '$380' }),
      savings: t('offers.saveAmount', { amount: '$100' }),
      validUntil: t('offers.ongoing'),
      includes: [t('offers.items.romantic.include1'), t('offers.items.romantic.include2'), t('offers.items.romantic.include3'), t('offers.items.romantic.include4')]
    },
    {
      id: 3,
      title: t('offers.items.family.title'),
      subtitle: t('offers.items.family.subtitle'),
      description: t('offers.items.family.description'),
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      price: t('offers.fromPerNight', { price: '$220' }),
      originalPrice: t('offers.fromPerNight', { price: '$300' }),
      savings: t('offers.saveAmount', { amount: '$80' }),
      validUntil: t('offers.ongoing'),
      includes: [t('offers.items.family.include1'), t('offers.items.family.include2'), t('offers.items.family.include3'), t('offers.items.family.include4')]
    },
    {
      id: 4,
      title: t('offers.items.wellness.title'),
      subtitle: t('offers.items.wellness.subtitle'),
      description: t('offers.items.wellness.description'),
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      price: t('offers.fromPerNight', { price: '$350' }),
      originalPrice: t('offers.fromPerNight', { price: '$480' }),
      savings: t('offers.saveAmount', { amount: '$130' }),
      validUntil: formatDate(new Date('2026-03-31T12:00:00Z')),
      includes: [t('offers.items.wellness.include1'), t('offers.items.wellness.include2'), t('offers.items.wellness.include3'), t('offers.items.wellness.include4')]
    },
    {
      id: 5,
      title: t('offers.items.extended.title'),
      subtitle: t('offers.items.extended.subtitle'),
      description: t('offers.items.extended.description'),
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
      price: t('offers.fromPerNight', { price: '$85' }),
      originalPrice: t('offers.fromPerNight', { price: '$120' }),
      savings: '−30%',
      validUntil: t('offers.ongoing'),
      includes: [t('offers.items.extended.include1'), t('offers.items.extended.include2'), t('offers.items.extended.include3'), t('offers.items.extended.include4')]
    },
    {
      id: 6,
      title: t('offers.items.wine.title'),
      subtitle: t('offers.items.wine.subtitle'),
      description: t('offers.items.wine.description'),
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
      price: t('offers.fromPerNight', { price: '$190' }),
      originalPrice: t('offers.fromPerNight', { price: '$250' }),
      savings: t('offers.saveAmount', { amount: '$60' }),
      validUntil: t('offers.ongoing'),
      includes: [t('offers.items.wine.include1'), t('offers.items.wine.include2'), t('offers.items.wine.include3'), t('offers.items.wine.include4')]
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
            alt={t('offers.title')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <div>
            <span className="text-brass-400 text-sm tracking-widest uppercase">{t('offers.exclusive')}</span>
            <h1 className="text-5xl md:text-7xl font-light mt-4 mb-4">{t('offers.title')}</h1>
            <div className="brass-line" />
            <p className="text-xl text-cream-50/80 max-w-2xl mt-4">{t('offers.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <div
                key={offer.id} className="glass-card rounded-2xl overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
                  
                  {/* Savings Badge */}
                  <div className="absolute top-4 right-4 bg-brass-500 text-forest-950 px-4 py-2 rounded-full text-sm font-semibold">
                    <Tag className="w-4 h-4 inline mr-1" />
                    {offer.savings}
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-brass-400 text-sm">{offer.subtitle}</div>
                    <h3 className="text-2xl font-semibold text-cream-50">{offer.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-forest-600 mb-4">{offer.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-brass-600">{offer.price}</span>
                    <span className="text-forest-400 line-through">{offer.originalPrice}</span>
                  </div>

                  {/* Includes */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-forest-900 mb-2">{t('offers.includes')}</div>
                    <div className="grid grid-cols-2 gap-2">
                      {offer.includes.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-forest-600">
                          <Check className="w-4 h-4 text-forest-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Valid Until */}
                  <div className="flex items-center gap-2 text-sm text-forest-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{t('offers.validUntil')}: {offer.validUntil}</span>
                  </div>

                  {/* CTA */}
                  <Link href={`/${locale}/booking?offer=${offer.id}`}>
                    <Button className="btn-boutique w-full">
                      <span>{t('offers.bookNow')}</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-light mb-6">
              {t('offers.newsletterTitle')}
            </h2>
            <p className="text-forest-200 mb-8">
              {t('offers.newsletterDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <label htmlFor="offers-email" className="sr-only">
                {t('offers.emailLabel')}
              </label>
              <input
                id="offers-email"
                name="email"
                type="email"
                autoComplete="email"
                spellCheck={false}
                placeholder={t('offers.emailPlaceholder')}
                className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-cream-50 placeholder:text-forest-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
              />
              <Button className="btn-boutique px-8 py-4">
                <span>{t('offers.subscribe')}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}







