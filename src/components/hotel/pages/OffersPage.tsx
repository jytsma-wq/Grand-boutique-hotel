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

  const offers = [
    {
      id: 1,
      title: 'Early Bird Special',
      subtitle: 'Book 30 days in advance and save 25%',
      description: 'Plan ahead and enjoy significant savings on your stay. Includes breakfast and late checkout.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      price: 'From $90/night',
      originalPrice: '$120/night',
      savings: '25% OFF',
      validUntil: 'December 31, 2026',
      includes: ['Daily breakfast for two', 'Late checkout until 2 PM', 'Free room upgrade', 'Welcome drink']
    },
    {
      id: 2,
      title: 'Romantic Escape',
      subtitle: 'Perfect for couples',
      description: 'Celebrate love with a romantic getaway including spa treatments, champagne, and more.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      price: 'From $280/night',
      originalPrice: '$380/night',
      savings: 'Save $100',
      validUntil: 'Ongoing',
      includes: ['Champagne on arrival', 'Couples spa treatment', 'Candlelit dinner', 'Room decoration', 'Late checkout']
    },
    {
      id: 3,
      title: 'Family Fun Package',
      subtitle: 'Memories for the whole family',
      description: 'Create unforgettable family memories with our family-friendly package including kids activities.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      price: 'From $220/night',
      originalPrice: '$300/night',
      savings: 'Save $80',
      validUntil: 'Ongoing',
      includes: ['Connecting rooms available', 'Kids eat free', 'Family excursion', 'Kids club access', 'Pool toys']
    },
    {
      id: 4,
      title: 'Spa & Wellness Retreat',
      subtitle: 'Rejuvenate your mind and body',
      description: 'A complete wellness experience with daily spa treatments, healthy cuisine, and yoga sessions.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      price: 'From $350/night',
      originalPrice: '$480/night',
      savings: 'Save $130',
      validUntil: 'March 31, 2026',
      includes: ['Daily spa treatment', 'Healthy breakfast', 'Yoga & meditation', 'Access to wellness facilities', 'Herbal tea service']
    },
    {
      id: 5,
      title: 'Extended Stay Offer',
      subtitle: 'Stay longer, save more',
      description: 'Stay 7 nights or more and enjoy 30% off plus exclusive benefits for long-term guests.',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
      price: 'From $85/night',
      originalPrice: '$120/night',
      savings: '30% OFF',
      validUntil: 'Ongoing',
      includes: ['Weekly room cleaning', 'Laundry service', 'Kitchen access', 'Workspace setup', 'Local SIM card']
    },
    {
      id: 6,
      title: 'Georgian Wine Experience',
      subtitle: 'Taste the tradition',
      description: 'Discover Georgia\'s 8,000-year-old winemaking heritage with exclusive tastings and tours.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
      price: 'From $190/night',
      originalPrice: '$250/night',
      savings: 'Save $60',
      validUntil: 'Ongoing',
      includes: ['Wine tasting session', 'Vineyard tour', 'Wine pairing dinner', 'Souvenir wine bottle', 'Sommelier consultation']
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
            alt="Special Offers"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <div>
            <span className="text-brass-400 text-sm tracking-widest uppercase">Exclusive</span>
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
              Get <span className="text-brass-400">Exclusive</span> Offers
            </h2>
            <p className="text-forest-200 mb-8">
              Subscribe to our newsletter and be the first to know about special promotions and seasonal offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <label htmlFor="offers-email" className="sr-only">
                Email address
              </label>
              <input
                id="offers-email"
                name="email"
                type="email"
                autoComplete="email"
                spellCheck={false}
                placeholder="Enter your email…"
                className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-cream-50 placeholder:text-forest-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
              />
              <Button className="btn-boutique px-8 py-4">
                <span>Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}








