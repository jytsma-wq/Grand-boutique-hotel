'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Waves, Clock, Thermometer, Users, Droplets, Sun, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface PoolPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function PoolPage({ locale }: PoolPageProps) {
  const features = [
    { icon: Waves, title: 'Infinity Edge', desc: 'Seamless blend with Black Sea horizon' },
    { icon: Thermometer, title: 'Heated Water', desc: 'Comfortable 28°C year-round' },
    { icon: Sun, title: 'Panoramic Views', desc: 'Floor-to-ceiling glass walls' },
    { icon: Users, title: 'Adults Only', desc: 'Tranquil atmosphere guaranteed' }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80'
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1920&q=80"
            alt="Infinity Pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-forest-900/40 to-forest-900/80" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <motion.div {...fadeInUp}>
            <Waves className="w-16 h-16 text-cream-50 mb-6 mx-auto" />
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">Infinity Pool</h1>
            <p className="text-xl text-cream-50/90 max-w-2xl mx-auto font-light">
              Where the pool meets the horizon, creating an endless vista of blue
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
                <div className="text-2xl font-bold">6:00 AM - 10:00 PM</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Droplets className="w-8 h-8 text-brass-400" />
              <div>
                <div className="text-sm uppercase tracking-wider text-cream-50/60">Water Temperature</div>
                <div className="text-2xl font-bold">28°C (82°F)</div>
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
              <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Signature Feature</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 uppercase tracking-tight">
                Breathtaking Infinity Pool
              </h2>
              <p className="text-forest-700 text-lg leading-relaxed mb-6">
                Our rooftop infinity pool is the crown jewel of Batumi Boutique Hotel. Stretching 25 meters with 
                an infinity edge that seemingly merges with the Black Sea, this architectural masterpiece offers 
                an unparalleled swimming experience.
              </p>
              <p className="text-forest-600 leading-relaxed mb-8">
                Floor-to-ceiling glass walls provide 180-degree panoramic views while you swim. The heated water 
                maintains a perfect 28°C year-round, making it comfortable in any season. Underwater LED lighting 
                creates a magical ambiance for evening swims.
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
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
                alt="Pool View"
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
            <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">Pool Features</h2>
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

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Visual Experience</span>
            <h2 className="text-4xl font-bold mt-4 uppercase tracking-tight">Pool Gallery</h2>
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
                  alt={`Pool view ${index + 1}`}
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
              Experience Our Infinity Pool
            </h2>
            <p className="text-cream-50/70 text-lg mb-10 max-w-2xl mx-auto font-light">
              Complimentary access for all hotel guests. Day passes available for non-guests.
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
                  Call for Day Pass
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
