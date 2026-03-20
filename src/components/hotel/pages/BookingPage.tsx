'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Check, 
  Shield, 
  Coffee, 
  ArrowUpRight,
  Sparkles,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { type Locale } from '@/i18n/config';

interface BookingPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function BookingPage({ locale }: BookingPageProps) {
  const t = useTranslations();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const benefits = [
    { icon: Shield, text: t('booking.benefit1') },
    { icon: Coffee, text: t('booking.benefit2') },
    { icon: ArrowUpRight, text: t('booking.benefit3') },
    { icon: Sparkles, text: t('booking.benefit4') },
  ];

  const handleSearch = () => {
    // In production, this would integrate with Mediator booking widget
    alert(`Search: ${checkIn} to ${checkOut}, ${adults} adults, ${children} children, ${rooms} rooms`);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
            alt="Book Your Stay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <span className="text-brass-400 text-sm tracking-widest uppercase">Reservations</span>
            <h1 className="text-5xl md:text-7xl font-light mt-4 mb-4">{t('booking.title')}</h1>
            <div className="brass-line" />
            <p className="text-xl text-white/80 max-w-2xl mt-4">{t('booking.bestPrice')}</p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-forest-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Check In */}
              <div>
                <label className="block text-sm text-forest-300 mb-2">{t('booking.checkIn')}</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-400" size={20} />
                  <Input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-forest-300"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div>
                <label className="block text-sm text-forest-300 mb-2">{t('booking.checkOut')}</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-400" size={20} />
                  <Input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-forest-300"
                  />
                </div>
              </div>

              {/* Adults */}
              <div>
                <label className="block text-sm text-forest-300 mb-2">{t('booking.adults')}</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-400" size={20} />
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 border border-white/20 text-white appearance-none"
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n} className="text-forest-900">{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Rooms */}
              <div>
                <label className="block text-sm text-forest-300 mb-2">{t('booking.rooms')}</label>
                <select
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white appearance-none"
                >
                  {[1, 2, 3, 4, 5].map(n => (
                    <option key={n} value={n} className="text-forest-900">{n}</option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button onClick={handleSearch} className="btn-telegraph w-full py-6">
                  <span>{t('booking.search')}</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-brass-600 text-sm tracking-widest uppercase">Exclusive</span>
            <h2 className="section-title mt-4">{t('booking.benefits')}</h2>
            <div className="brass-line" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 rounded-full gradient-brass mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-forest-900" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-forest-500" />
                  <span className="text-forest-900 font-medium">{benefit.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Price Guarantee */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-brass-600 text-sm tracking-widest uppercase">Our Promise</span>
              <h2 className="section-title mt-4">{t('booking.bestPrice')}</h2>
              <div className="brass-line !mx-0" />
              <p className="text-forest-700 text-lg mt-6 mb-8">
                Book directly with us and you&apos;ll always get the best available rate. 
                If you find a lower price elsewhere, we&apos;ll match it and give you an additional 10% off.
              </p>
              
              <div className="space-y-4">
                {[
                  'Price match guarantee with 10% extra off',
                  'No hidden fees or booking charges',
                  'Flexible cancellation policies',
                  'Priority room assignment',
                  'Welcome amenity upon arrival'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-forest flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-forest-700">{item}</span>
                  </div>
                ))}
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
                alt="Luxury Room"
                className="rounded-3xl w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brass-600">20%</div>
                  <div className="text-sm text-forest-600">Save vs OTAs</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-forest-800 to-forest-950 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Need Help with Your Reservation?
            </h2>
            <p className="text-forest-200 text-lg mb-10 max-w-2xl mx-auto">
              Our reservations team is available 24/7 to assist you with special requests, 
              group bookings, or any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-12 py-6 text-lg border-white/30 text-white hover:bg-white hover:text-forest-900">
                  <Phone className="mr-2 w-5 h-5" />
                  +995 422 00 00 00
                </Button>
              </a>
              <a href="mailto:reservations@batumiboutique.com">
                <Button className="btn-telegraph px-12 py-6 text-lg">
                  <span>Email Us</span>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
