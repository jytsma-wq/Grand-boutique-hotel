'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Waves, Clock, Thermometer, Users, Star, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

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
  const features = [
    { icon: Waves, title: 'Hydrotherapy Jets', desc: 'Multiple massage jet configurations' },
    { icon: Thermometer, title: 'Perfect Temperature', desc: 'Maintained at 38-40°C' },
    { icon: Star, title: 'Outdoor Setting', desc: 'Rooftop location with sea views' },
    { icon: Users, title: 'Intimate Capacity', desc: 'Accommodates up to 6 guests' }
  ];

  const benefits = [
    'Muscle tension relief and pain reduction',
    'Improved blood circulation',
    'Stress and anxiety relief',
    'Better sleep quality',
    'Joint pain and arthritis relief',
    'Post-workout recovery',
    'Skin rejuvenation',
    'Romantic atmosphere for couples'
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
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80"
            alt="Outdoor Jacuzzi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/40 to-charcoal-900/80" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <Waves className="w-16 h-16 text-white mb-6 mx-auto" />
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">Outdoor Jacuzzi</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Rooftop hot tub with panoramic Black Sea views and therapeutic jets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-12 bg-charcoal-900 text-white border-y-4 border-charcoal-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-gold-400" />
              <div>
                <div className="text-sm uppercase tracking-wider text-white/60">Opening Hours</div>
                <div className="text-2xl font-bold">7:00 AM - 11:00 PM</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Thermometer className="w-8 h-8 text-gold-400" />
              <div>
                <div className="text-sm uppercase tracking-wider text-white/60">Water Temperature</div>
                <div className="text-2xl font-bold">38-40°C (100-104°F)</div>
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
              <span className="text-charcoal-500 text-xs tracking-[0.3em] uppercase font-light">Luxury Relaxation</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 uppercase tracking-tight">
                Rooftop Outdoor Jacuzzi
              </h2>
              <p className="text-charcoal-700 text-lg leading-relaxed mb-6">
                Our premium outdoor jacuzzi is located on the rooftop terrace, offering breathtaking 180-degree 
                views of the Black Sea. The therapeutic hydrotherapy jets provide targeted massage while you soak 
                in the perfectly heated water (38-40°C).
              </p>
              <p className="text-charcoal-600 leading-relaxed mb-8">
                Accommodating up to 6 guests, the jacuzzi features multiple jet configurations for customized 
                massage experiences. Underwater LED lighting creates a magical ambiance for evening sessions. 
                Perfect for romantic evenings or post-spa relaxation.
              </p>
              <div className="flex gap-4">
                <Link href={`/${locale}/booking`}>
                  <Button className="btn-architectural">Book Your Stay</Button>
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
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                alt="Jacuzzi View"
                className="w-full aspect-[4/3] object-cover border-4 border-charcoal-900"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-charcoal-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-charcoal-500 text-xs tracking-[0.3em] uppercase font-light">Premium Amenities</span>
            <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">Jacuzzi Features</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-charcoal-900 p-8 text-center"
              >
                <div className="w-16 h-16 bg-charcoal-900 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-charcoal-900 mb-3 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-sm text-charcoal-600 font-light">{feature.desc}</p>
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
              <span className="text-charcoal-500 text-xs tracking-[0.3em] uppercase font-light">Wellness Benefits</span>
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
                  className="flex items-center gap-4 bg-charcoal-50 border-l-4 border-charcoal-900 p-6"
                >
                  <div className="w-2 h-2 bg-charcoal-900 rounded-full flex-shrink-0" />
                  <span className="text-charcoal-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-charcoal-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-charcoal-500 text-xs tracking-[0.3em] uppercase font-light">Visual Experience</span>
            <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">Jacuzzi Gallery</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-[4/3] overflow-hidden border-2 border-charcoal-900 group"
              >
                <img
                  src={image}
                  alt={`Jacuzzi view ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
              Unwind in Our Rooftop Jacuzzi
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-light">
              Complimentary access for all hotel guests. Towels and robes provided. Reservations recommended for evening sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/wellness`}>
                <Button className="btn-architectural px-12 py-6 text-base">
                  Explore All Wellness Facilities
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-12 py-6 text-base border-2 border-white bg-transparent text-white hover:bg-white hover:text-charcoal-900 transition-all uppercase tracking-wider">
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
