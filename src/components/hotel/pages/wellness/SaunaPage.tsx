'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wind, Clock, Thermometer, Droplets, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface SaunaPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function SaunaPage({ locale }: SaunaPageProps) {
  const features = [
    { icon: Thermometer, title: 'Dry Heat', desc: '80-90°C traditional Finnish sauna' },
    { icon: Wind, title: 'Cedar Wood', desc: 'Premium Nordic cedar construction' },
    { icon: Sparkles, title: 'Aromatherapy', desc: 'Essential oil infusions available' },
    { icon: Heart, title: 'Health Benefits', desc: 'Detox, relaxation, improved circulation' }
  ];

  const benefits = [
    'Deep muscle relaxation and stress relief',
    'Improved cardiovascular health',
    'Skin purification and detoxification',
    'Enhanced immune system function',
    'Better sleep quality',
    'Post-workout recovery',
    'Respiratory system benefits',
    'Mental clarity and meditation'
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    'https://images.unsplash.com/photo-1521143493539-5a7e0c0d7a3f?w=800&q=80',
    'https://images.unsplash.com/photo-1596178060810-4dd9c3c0eb1e?w=800&q=80',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80'
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80"
            alt="Finnish Sauna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-forest-900/40 to-forest-900/80" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <motion.div {...fadeInUp}>
            <Wind className="w-16 h-16 text-cream-50 mb-6 mx-auto" />
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">Finnish Sauna</h1>
            <p className="text-xl text-cream-50/90 max-w-2xl mx-auto font-light">
              Traditional dry sauna experience for ultimate relaxation and detoxification
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
                <div className="text-sm uppercase tracking-wider text-cream-50/60">Opening Hours</div>
                <div className="text-2xl font-bold">8:00 AM - 10:00 PM</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Thermometer className="w-8 h-8 text-brass-400" />
              <div>
                <div className="text-sm uppercase tracking-wider text-cream-50/60">Temperature</div>
                <div className="text-2xl font-bold">80-90°C (176-194°F)</div>
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
              <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Traditional Wellness</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 uppercase tracking-tight">
                Authentic Finnish Sauna
              </h2>
              <p className="text-forest-700 text-lg leading-relaxed mb-6">
                Our traditional Finnish sauna is constructed from premium Nordic cedar wood, creating an authentic 
                and aromatic environment. The dry heat (80-90°C) promotes deep relaxation, detoxification, and 
                numerous health benefits.
              </p>
              <p className="text-forest-600 leading-relaxed mb-8">
                The sauna accommodates up to 6 people and features tiered seating for varying heat intensities. 
                Aromatherapy essential oils are available to enhance your experience. A cold plunge pool is located 
                adjacent for the traditional hot-cold contrast therapy.
              </p>
              <div className="flex gap-4">
                <Link href={`/${locale}/booking`}>
                  <Button className="btn-telegraph">Book Your Stay</Button>
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
                src="https://images.unsplash.com/photo-1521143493539-5a7e0c0d7a3f?w=800&q=80"
                alt="Sauna Interior"
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
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Premium Amenities</span>
            <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">Sauna Features</h2>
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

      {/* Health Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Wellness Benefits</span>
              <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">Health Benefits</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 bg-forest-50 border-l-4 border-forest-900 p-6"
                >
                  <div className="w-2 h-2 bg-forest-900 rounded-full flex-shrink-0" />
                  <span className="text-forest-700 font-medium">{benefit}</span>
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
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Visual Experience</span>
            <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">Sauna Gallery</h2>
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
                  alt={`Sauna view ${index + 1}`}
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
              Experience Traditional Sauna Therapy
            </h2>
            <p className="text-cream-50/70 text-lg mb-10 max-w-2xl mx-auto font-light">
              Complimentary access for all hotel guests. Aromatherapy oils and towels provided.
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
                  Reserve Your Session
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
