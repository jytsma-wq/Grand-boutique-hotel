'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Dumbbell, 
  Wind, 
  Flame, 
  Heart,
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface WellnessPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function WellnessPage({ locale }: WellnessPageProps) {
  const t = useTranslations();

  const facilities = [
    { href: '/wellness/pool', icon: Waves, name: t('wellness.facilities.pool'), desc: 'Infinity pool with Black Sea views' },
    { href: '/wellness/gym', icon: Dumbbell, name: t('wellness.facilities.gym'), desc: 'Technogym equipment, 24/7 access' },
    { href: '/wellness/sauna', icon: Wind, name: t('wellness.facilities.sauna'), desc: 'Traditional Finnish dry sauna' },
    { href: '/wellness/steam-room', icon: Flame, name: t('wellness.facilities.steam'), desc: 'Turkish hammam experience' },
    { href: '/wellness/jacuzzi', icon: Waves, name: t('wellness.facilities.jacuzzi'), desc: 'Outdoor hot tub' },
    { href: '/wellness/relaxation-lounge', icon: Heart, name: t('wellness.facilities.relaxation'), desc: 'Tranquil relaxation area' }
  ];

  const treatments = [
    {
      name: 'Georgian Wine Wrap',
      duration: 60,
      price: 85,
      priceGel: 234,
      desc: 'Antioxidant-rich wine therapy for skin rejuvenation',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80'
    },
    {
      name: 'Black Sea Salt Scrub',
      duration: 45,
      price: 65,
      priceGel: 179,
      desc: 'Exfoliating treatment with mineral-rich sea salt',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80'
    },
    {
      name: 'Aromatherapy Massage',
      duration: 90,
      price: 120,
      priceGel: 330,
      desc: 'Full body massage with essential oils',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&q=80'
    },
    {
      name: 'Couples Retreat',
      duration: 120,
      price: 220,
      priceGel: 605,
      desc: 'Side-by-side massage with champagne',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80'
    },
    {
      name: 'Hot Stone Therapy',
      duration: 75,
      price: 95,
      priceGel: 261,
      desc: 'Volcanic stone massage for deep relaxation',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&q=80'
    },
    {
      name: 'Anti-Aging Facial',
      duration: 60,
      price: 90,
      priceGel: 248,
      desc: 'Premium skincare treatment with lifting effect',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80'
    }
  ];

  const membershipTiers = [
    {
      name: t('wellness.membership.tiers.basic.name'),
      price: 99,
      priceGel: 272,
      benefits: ['Pool & gym access', '10% off treatments', 'Locker usage', 'Towel service']
    },
    {
      name: t('wellness.membership.tiers.premium.name'),
      price: 199,
      priceGel: 547,
      benefits: ['All Basic benefits', 'Sauna & steam access', '20% off treatments', '2 guest passes/month', 'Priority booking']
    },
    {
      name: t('wellness.membership.tiers.vip.name'),
      price: 349,
      priceGel: 960,
      benefits: ['All Premium benefits', 'Unlimited treatments', 'Private cabana', 'Personal trainer session', 'Complimentary beverages']
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80"
            alt="Wellness & Spa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <span className="text-white/60 text-sm tracking-[0.3em] uppercase font-light">Rejuvenate</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mt-6 mb-6 leading-none">{t('wellness.title')}</h1>
            <p className="text-xl text-white/70 max-w-2xl mt-6 font-light">{t('wellness.subtitle')}</p>
            <p className="text-white/60 mt-3 font-light">{t('wellness.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-charcoal-500 text-xs tracking-[0.3em] uppercase font-light">World-Class</span>
            <h2 className="section-title mt-4">{t('wellness.facilities.title')}</h2>
            <p className="text-charcoal-600 mt-4 text-sm uppercase tracking-[0.15em]">Open a subpage for each facility</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white border-2 border-charcoal-900 text-center"
              >
                <Link href={`/${locale}${facility.href}`} className="block p-6 h-full hover:bg-charcoal-50 transition-colors">
                  <div className="w-16 h-16 bg-charcoal-900 mx-auto mb-4 flex items-center justify-center">
                    <facility.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-charcoal-900 mb-2 uppercase tracking-wide text-sm">{facility.name}</h3>
                  <p className="text-xs text-charcoal-600 font-light">{facility.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Treatments - Brutalist Menu Format */}
      <section className="py-24 bg-charcoal-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-charcoal-500 text-xs tracking-[0.3em] uppercase font-light">Pamper Yourself</span>
            <h2 className="section-title mt-4">{t('wellness.treatments.title')}</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white border-t-2 border-charcoal-900 first:border-t-0 py-8 px-8 hover:bg-charcoal-50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-3">
                      <h3 className="text-xl font-bold text-charcoal-900 uppercase tracking-wide">{treatment.name}</h3>
                      <span className="text-sm text-charcoal-500 font-light flex items-center gap-1">
                        <Clock size={14} />
                        {treatment.duration} min
                      </span>
                    </div>
                    <p className="text-sm text-charcoal-600 font-light mb-4">{treatment.desc}</p>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-charcoal-900">${treatment.price}</div>
                        <div className="text-xs text-charcoal-500">{treatment.priceGel}₾</div>
                      </div>
                      <Link href={`/${locale}/booking`}>
                        <Button size="sm" className="btn-architectural-concrete rounded-none py-3 px-8">
                          {t('wellness.treatments.bookNow')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership - Brutalist */}
      <section className="py-24 bg-charcoal-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-white/50 text-xs tracking-[0.3em] uppercase font-light">Exclusive Access</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 uppercase tracking-tight">{t('wellness.membership.title')}</h2>
            <p className="text-white/70 mt-6 font-light">{t('wellness.membership.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`p-10 border-2 ${index === 2 ? 'bg-white text-charcoal-900 border-white' : 'bg-charcoal-800 border-white/20'}`}
              >
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-8 pb-6 border-b ${index === 2 ? 'border-charcoal-200' : 'border-white/20'}">
                  <span className="text-4xl font-bold">
                    ${tier.price}
                  </span>
                  <span className={`text-sm font-light ${index === 2 ? 'text-charcoal-600' : 'text-white/60'}`}>
                    /{t('wellness.membership.tiers.basic.price')}
                  </span>
                </div>
                <ul className="space-y-4 mb-10">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-1 h-1 mt-2 ${index === 2 ? 'bg-charcoal-900' : 'bg-white'}`} />
                      <span className={`text-sm font-light ${index === 2 ? 'text-charcoal-700' : 'text-white/80'}`}>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${index === 2 ? 'btn-architectural' : 'bg-white text-charcoal-900 hover:opacity-85 transition-opacity px-10 py-5 font-medium tracking-[0.25em] uppercase'}`}
                >
                  {t('wellness.membership.joinNow')}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Brutalist */}
      <section className="py-24 bg-charcoal-900 text-white border-t-4 border-charcoal-950">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight">
              Begin Your Wellness Journey
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-light">
              Let our expert therapists guide you to relaxation and rejuvenation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/booking`}>
                <Button className="btn-architectural rounded-none px-14 py-6 text-base">
                  {t('wellness.treatments.bookNow')}
                </Button>
              </Link>
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-14 py-6 text-base border-2 border-white bg-transparent text-white hover:bg-white hover:text-charcoal-900 transition-all uppercase tracking-wider">
                  Call Spa Directly
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
