'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dumbbell, Clock, Users, Zap, Heart, Activity, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';
import { useTranslations } from 'next-intl';

interface GymPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function GymPage({ locale }: GymPageProps) {
  const t = useTranslations('gym');
  
  const features = [
    { icon: Dumbbell, title: t('features.technogym'), desc: t('features.technogymDesc') },
    { icon: Activity, title: t('features.personalTraining'), desc: t('features.personalTrainingDesc') },
    { icon: Heart, title: t('features.cardioZone'), desc: t('features.cardioZoneDesc') },
    { icon: Zap, title: t('features.freeWeights'), desc: t('features.freeWeightsDesc') }
  ];

  const equipment = [
    t('equipmentListItems.treadmills'),
    t('equipmentListItems.bikes'),
    t('equipmentListItems.ellipticals'),
    t('equipmentListItems.rowing'),
    t('equipmentListItems.strength'),
    t('equipmentListItems.freeWeightsSection'),
    t('equipmentListItems.yoga'),
    t('equipmentListItems.recovery')
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
    'https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=800&q=80',
    'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80',
    'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80'
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Fitness Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-forest-900/40 to-forest-900/80" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <motion.div {...fadeInUp}>
            <Dumbbell className="w-16 h-16 text-cream-50 mb-6 mx-auto" />
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">{t('title')}</h1>
            <p className="text-xl text-cream-50/90 max-w-2xl mx-auto font-light">
              {t('subtitle')}
            </p>
          </motion.div>
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
              <Users className="w-8 h-8 text-brass-400" />
              <div>
                <div className="text-sm uppercase tracking-wider text-cream-50/60">Personal Trainers</div>
                <div className="text-2xl font-bold">7:00 AM - 9:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('luxuryWellness')}</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 uppercase tracking-tight">
                {t('premiumFitness')}
              </h2>
              <p className="text-forest-700 text-lg leading-relaxed mb-6">
                Our 200 square meter fitness center features the latest Technogym equipment, offering everything 
                from cardio machines to free weights. Floor-to-ceiling windows provide inspiring sea views while 
                you work out.
              </p>
              <p className="text-forest-600 leading-relaxed mb-8">
                Available 24/7 for hotel guests with keycard access. Personal trainers are available during daytime 
                hours to help you achieve your fitness goals. Complimentary towels, water, and premium toiletries 
                provided.
              </p>
              <div className="flex gap-4">
                <Link href={`/${locale}/booking`}>
                  <Button className="btn-telegraph">{t('bookYourStay')}</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                alt="Gym Equipment"
                className="w-full aspect-[4/3] object-cover border-4 border-forest-900"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('premiumAmenities')}</span>
            <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">{t('gymFeatures')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-forest-900 p-8 text-center"
              >
                <div className="w-16 h-16 bg-forest-900 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-cream-50" />
                </div>
                <h3 className="font-bold text-forest-900 mb-3 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-sm text-forest-600 font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('equipmentList')}</span>
              <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">{t('equipmentList')}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipment.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 bg-forest-50 border-l-4 border-forest-900 p-6"
                >
                  <div className="w-2 h-2 bg-forest-900 rounded-full flex-shrink-0" />
                  <span className="text-forest-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('visualExperience')}</span>
            <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">{t('gymGallery')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-[4/3] overflow-hidden border-2 border-forest-900 group"
              >
                <img
                  src={image}
                  alt={`Gym view ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
              Maintain Your Fitness Routine
            </h2>
            <p className="text-cream-50/70 text-lg mb-10 max-w-2xl mx-auto font-light">
              24/7 access for hotel guests. Personal training sessions available upon request.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/wellness`}>
                <Button className="btn-telegraph px-12 py-6 text-base">
                  Explore All Wellness Facilities
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-12 py-6 text-base border-2 border-white bg-transparent text-cream-50 hover:bg-white hover:text-forest-900 transition-all uppercase tracking-wider">
                  Book Personal Trainer
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
