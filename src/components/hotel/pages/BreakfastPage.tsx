'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, Coffee, Croissant, Egg, Apple, Milk, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface BreakfastPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function BreakfastPage({ locale }: BreakfastPageProps) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      const hours = now.getHours();
      setIsOpen(hours >= 7 && hours < 11);
    };
    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const breakfastCategories = [
    {
      name: 'Georgian Breakfast',
      icon: Egg,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80',
      items: [
        { name: 'Adjarian Khachapuri', desc: 'Traditional cheese bread boat with butter and egg', included: true },
        { name: 'Imeruli Khachapuri', desc: 'Round cheese-filled flatbread', included: true },
        { name: 'Churchkhela', desc: 'Traditional grape and walnut candy', included: true },
        { name: 'Sulguni Cheese', desc: 'Fresh Georgian cheese platter', included: true },
      ]
    },
    {
      name: 'Hot Dishes',
      icon: Coffee,
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80',
      items: [
        { name: 'Eggs Any Style', desc: 'Fried, scrambled, poached, or omelette', included: true },
        { name: 'Shakshuka', desc: 'Eggs poached in spiced tomato sauce', included: true },
        { name: 'Pancakes', desc: 'Fluffy pancakes with maple syrup', included: true },
        { name: 'French Toast', desc: 'Classic with berries and cream', included: true },
      ]
    },
    {
      name: 'Continental Selection',
      icon: Croissant,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
      items: [
        { name: 'Fresh Croissants', desc: 'Butter and chocolate varieties', included: true },
        { name: 'Artisan Breads', desc: 'Selection of fresh baked breads', included: true },
        { name: 'Danish Pastries', desc: 'Assorted fruit and cream pastries', included: true },
        { name: 'Muffins & Scones', desc: 'Blueberry, chocolate, and plain', included: true },
      ]
    },
    {
      name: 'Fresh & Healthy',
      icon: Apple,
      image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=80',
      items: [
        { name: 'Seasonal Fruits', desc: 'Fresh local and imported fruits', included: true },
        { name: 'Greek Yogurt', desc: 'With honey and granola', included: true },
        { name: 'Smoothie Bowl', desc: 'Açaí or tropical blend', included: true },
        { name: 'Avocado Toast', desc: 'On sourdough with poached egg', included: true },
      ]
    },
    {
      name: 'Beverages',
      icon: Milk,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
      items: [
        { name: 'Fresh Juices', desc: 'Orange, apple, grapefruit, carrot', included: true },
        { name: 'Coffee Selection', desc: 'Espresso, cappuccino, latte, americano', included: true },
        { name: 'Premium Teas', desc: 'Georgian and international blends', included: true },
        { name: 'Hot Chocolate', desc: 'Rich Belgian chocolate', included: true },
      ]
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1920&q=80"
            alt="Breakfast at Azure Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <span className="text-white/60 text-sm tracking-[0.3em] uppercase font-light">Azure Restaurant</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mt-6 mb-6 leading-none">
              Breakfast
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-8 font-light">
              Start your day with a delightful selection of Georgian and international breakfast favorites
            </p>
            
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 border-2 ${
              isOpen ? 'border-white text-white' : 'border-white/50 text-white/50'
            }`}>
              <div className={`w-2 h-2 ${isOpen ? 'bg-white' : 'bg-white/50'}`} />
              <span className="uppercase tracking-wider text-sm font-medium">
                {isOpen ? 'Now Serving Breakfast' : 'Breakfast Hours: 7:00 AM - 11:00 AM'}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opening Hours Banner */}
      <section className="bg-forest-900 text-white py-10 border-t-2 border-forest-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <Clock className="text-white/70" size={28} />
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-light mb-1">Opening Time</div>
                <div className="text-2xl font-bold tracking-wide">7:00 AM</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20" />
            <div className="flex items-center gap-4">
              <Clock className="text-white/70" size={28} />
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-light mb-1">Closing Time</div>
                <div className="text-2xl font-bold tracking-wide">11:00 AM</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20" />
            <div className="text-center md:text-left">
              <div className="text-xs text-white/50 uppercase tracking-wider font-light mb-1">Location</div>
              <div className="text-lg font-medium tracking-wide">Azure Restaurant, Ground Floor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Complimentary</span>
            <h2 className="section-title mt-4">Breakfast Included</h2>
            <p className="text-lg text-forest-600 font-light leading-relaxed">
              All hotel guests enjoy our full breakfast buffet as part of their stay. 
              Experience the finest Georgian and international morning cuisine with panoramic Black Sea views.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breakfast Categories */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Our Selection</span>
            <h2 className="section-title mt-4">Breakfast Menu</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {breakfastCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-forest-900 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-forest-900" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-forest-900 mt-2 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-forest-900 text-sm uppercase tracking-wide">{item.name}</div>
                          <div className="text-xs text-forest-500 font-light">{item.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Dietary */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">Dietary Options</span>
            <h2 className="section-title mt-4">Special Requirements</h2>
            <p className="text-forest-600 font-light leading-relaxed mb-8">
              We cater to all dietary requirements including vegetarian, vegan, gluten-free, and halal options. 
              Please inform our staff of any allergies or special dietary needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Vegetarian', 'Vegan', 'Gluten-Free', 'Halal', 'Dairy-Free', 'Nut-Free'].map((diet) => (
                <span key={diet} className="px-4 py-2 border-2 border-forest-200 text-forest-700 text-sm uppercase tracking-wider">
                  {diet}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
              Book Your Stay
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-light">
              Enjoy complimentary breakfast with every room booking. 
              Start your day with the best views of the Black Sea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/booking`}>
                <Button className="btn-telegraph px-12 py-5">
                  Book Now
                </Button>
              </Link>
              <Link href={`/${locale}/restaurant`}>
                <Button variant="outline" className="px-12 py-5 border-2 border-white bg-transparent text-white hover:bg-white hover:text-forest-900 uppercase tracking-wider">
                  View Full Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
