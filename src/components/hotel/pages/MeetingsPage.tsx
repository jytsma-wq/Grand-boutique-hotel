'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Wifi, Coffee, Utensils, Monitor, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface MeetingsPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function MeetingsPage({ locale }: MeetingsPageProps) {
  const t = useTranslations();

  const venues = [
    {
      name: 'Grand Ballroom',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
      capacity: 300,
      size: '450 m²',
      features: ['Theater & Banquet Setup', 'Stage & Dance Floor', 'Built-in AV System', 'Natural Light']
    },
    {
      name: 'Conference Center',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80',
      capacity: 100,
      size: '180 m²',
      features: ['Boardroom Setup', 'Video Conferencing', 'Projection System', 'Soundproofing']
    },
    {
      name: 'Executive Boardroom',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      capacity: 20,
      size: '60 m²',
      features: ['Private Meeting Space', 'Smart Board', 'Premium Furniture', 'Catering Service']
    },
    {
      name: 'Rooftop Terrace',
      image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80',
      capacity: 150,
      size: '300 m²',
      features: ['Outdoor Events', 'Panoramic Sea View', 'Weather Backup', 'BBQ Facilities']
    }
  ];

  const packages = [
    {
      name: 'Day Conference Package',
      price: '$75',
      pricePer: 'per person',
      includes: [
        'Conference room rental',
        'Morning & afternoon coffee breaks',
        'Buffet lunch',
        'Basic AV equipment',
        'Wi-Fi access',
        'Notepads and pens'
      ]
    },
    {
      name: 'Residential Conference Package',
      price: '$250',
      pricePer: 'per person/night',
      includes: [
        'Accommodation for 1 night',
        'All day conference facilities',
        'Breakfast, lunch & dinner',
        'Coffee breaks throughout',
        'Full AV equipment',
        'Team building activity',
        'Airport transfer'
      ]
    }
  ];

  const amenities = [
    { icon: Wifi, name: 'High-Speed Wi-Fi' },
    { icon: Monitor, name: 'AV Equipment' },
    { icon: Coffee, name: 'Coffee Service' },
    { icon: Utensils, name: 'Catering' }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80"
            alt="Meetings & Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <span className="text-white/60 text-sm tracking-[0.3em] uppercase font-light">Corporate Events</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mt-6 mb-6 leading-none">{t('meetings.title')}</h1>
            <p className="text-xl text-white/70 max-w-2xl font-light">{t('meetings.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-charcoal-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <p className="text-lg text-charcoal-200">{t('meetings.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-charcoal-500 text-xs tracking-[0.3em] uppercase font-light">Our Spaces</span>
            <h2 className="section-title mt-4">{t('meetings.venues.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-charcoal-900 overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{venue.name}</h3>
                    <div className="flex items-center gap-4 text-white/70 mt-2 text-sm">
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        {t('meetings.venues.capacity', { count: venue.capacity })}
                      </span>
                      <span>{venue.size}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {venue.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-charcoal-50 text-charcoal-700 px-3 py-1.5 uppercase tracking-wider">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-charcoal-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3 bg-white px-6 py-4 border-2 border-charcoal-900">
                <div className="w-12 h-12 bg-charcoal-900 flex items-center justify-center">
                  <amenity.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-charcoal-900 uppercase tracking-wide text-sm">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-charcoal-500 text-xs tracking-[0.3em] uppercase font-light">Solutions</span>
            <h2 className="section-title mt-4">{t('meetings.packages.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`p-10 border-2 ${index === 1 ? 'bg-charcoal-900 text-white border-charcoal-900' : 'bg-white border-charcoal-900'}`}
              >
                <h3 className="text-xl font-bold uppercase tracking-wide mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`text-3xl font-bold ${index === 1 ? 'text-white' : 'text-charcoal-900'}`}>
                    {pkg.price}
                  </span>
                  <span className={index === 1 ? 'text-charcoal-300' : 'text-charcoal-500'}>{pkg.pricePer}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        index === 1 ? 'bg-white/20' : 'bg-charcoal-200'
                      }`}>
                        <svg className={`w-3 h-3 ${index === 1 ? 'text-charcoal-900' : 'text-charcoal-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={index === 1 ? 'text-charcoal-200' : 'text-charcoal-600'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className={index === 1 ? 'btn-architectural w-full' : 'btn-architectural w-full'}>
                  {t('meetings.inquire')}
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
              Plan Your Perfect Event
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-light">
              Our dedicated events team is ready to help you create an unforgettable experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/contact?department=events`}>
                <Button className="btn-architectural rounded-none px-14 py-6 text-base">
                  {t('meetings.inquire')}
                </Button>
              </Link>
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-14 py-6 text-base border-2 border-white bg-transparent text-white hover:bg-white hover:text-charcoal-900 transition-all uppercase tracking-wider">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +995 422 00 00 00
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
