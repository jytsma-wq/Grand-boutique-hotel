'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, Utensils, Wine, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface RestaurantMenuPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function RestaurantMenuPage({ locale }: RestaurantMenuPageProps) {
  const starters = [
    { name: 'Khachapuri Adjarian', price: '$12', priceGel: '33₾', desc: 'Traditional cheese-filled bread boat with egg and butter' },
    { name: 'Badrijani Nigvzit', price: '$9', priceGel: '25₾', desc: 'Eggplant rolls with walnut paste, garlic, and herbs' },
    { name: 'Pkhali Trio', price: '$11', priceGel: '30₾', desc: 'Spinach, beetroot, and bean pâtés with walnut and spices' },
    { name: 'Lobio', price: '$8', priceGel: '22₾', desc: 'Red kidney beans with herbs, onions, and Georgian spices' },
    { name: 'Stuffed Mussels', price: '$14', priceGel: '39₾', desc: 'Black Sea mussels with rice, herbs, and aromatic spices' },
    { name: 'Salmon Carpaccio', price: '$16', priceGel: '44₾', desc: 'Thinly sliced salmon with citrus, capers, and olive oil' },
    { name: 'Burrata Salad', price: '$13', priceGel: '36₾', desc: 'Fresh burrata with heirloom tomatoes, basil, and balsamic' },
  ];

  const mainDishes = [
    { name: 'Khinkali (8 pcs)', price: '$10', priceGel: '28₾', desc: 'Juicy dumplings with spiced meat filling' },
    { name: 'Chakapuli', price: '$18', priceGel: '50₾', desc: 'Lamb stew with tarragon, plums, and white wine' },
    { name: 'Ojakhuri', price: '$15', priceGel: '41₾', desc: 'Pan-fried pork and potatoes with onions and spices' },
    { name: 'Grilled Sea Bass', price: '$24', priceGel: '66₾', desc: 'Fresh Black Sea bass with herb butter and lemon' },
    { name: 'Trout with Walnut Sauce', price: '$22', priceGel: '61₾', desc: 'Pan-seared trout with traditional Georgian walnut sauce' },
    { name: 'Beef Tenderloin', price: '$32', priceGel: '88₾', desc: 'Premium beef with red wine reduction and roasted vegetables' },
    { name: 'Duck Breast', price: '$28', priceGel: '77₾', desc: 'Cherry-glazed duck with seasonal vegetables' },
    { name: 'Lamb Chops', price: '$30', priceGel: '83₾', desc: 'Grilled lamb chops with rosemary and garlic' },
    { name: 'Risotto with Truffle', price: '$22', priceGel: '61₾', desc: 'Creamy Arborio rice with black truffle and parmesan' },
    { name: 'Chicken Tabaka', price: '$17', priceGel: '47₾', desc: 'Flattened and fried chicken with garlic sauce' },
    { name: 'Vegetarian Platter', price: '$19', priceGel: '52₾', desc: 'Grilled vegetables, hummus, and Georgian specialties' },
    { name: 'Mtsvadi (Shashlik)', price: '$20', priceGel: '55₾', desc: 'Traditional Georgian grilled meat skewers' },
  ];

  const desserts = [
    { name: 'Churchkhela', price: '$7', priceGel: '19₾', desc: 'Traditional Georgian candy made with grape must and walnuts' },
    { name: 'Pelamushi', price: '$6', priceGel: '17₾', desc: 'Grape pudding with walnuts and cinnamon' },
    { name: 'Gozinaki', price: '$8', priceGel: '22₾', desc: 'Honey-caramelized walnuts and hazelnuts' },
    { name: 'Tiramisu', price: '$10', priceGel: '28₾', desc: 'Classic Italian dessert with mascarpone and espresso' },
    { name: 'Chocolate Fondant', price: '$11', priceGel: '30₾', desc: 'Warm chocolate cake with molten center and vanilla ice cream' },
    { name: 'Panna Cotta', price: '$9', priceGel: '25₾', desc: 'Italian cream dessert with berry compote' },
    { name: 'Baklava', price: '$8', priceGel: '22₾', desc: 'Layered pastry with honey, nuts, and spices' },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Restaurant Menu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <motion.div {...fadeInUp}>
            <Link href={`/${locale}/restaurant`} className="inline-flex items-center gap-2 text-cream-50/70 hover:text-cream-50 mb-6 transition-colors">
              <ChevronLeft size={20} />
              <span className="uppercase tracking-wider text-sm">Back to Restaurant</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 leading-none">
              Our Menu
            </h1>
            <p className="text-xl text-cream-50/70 max-w-2xl font-light">
              A culinary journey through Georgian heritage and international excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Starters Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Utensils className="w-12 h-12 mx-auto mb-4 text-forest-900" />
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
              Starters
            </h2>
            <p className="text-forest-600 max-w-2xl mx-auto font-light">
              Begin your culinary journey with our carefully crafted appetizers
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {starters.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b-2 border-forest-200 pb-6"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-bold text-forest-900 uppercase tracking-wide text-base">
                      {item.name}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-forest-900">{item.price}</div>
                      <div className="text-xs text-forest-500">{item.priceGel}</div>
                    </div>
                  </div>
                  <p className="text-sm text-forest-600 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Dishes Section */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Wine className="w-12 h-12 mx-auto mb-4 text-forest-900" />
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
              Main Dishes
            </h2>
            <p className="text-forest-600 max-w-2xl mx-auto font-light">
              Signature dishes showcasing the best of Georgian and international cuisine
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainDishes.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border-2 border-forest-900 p-6"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-bold text-forest-900 uppercase tracking-wide text-base">
                      {item.name}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-forest-900">{item.price}</div>
                      <div className="text-xs text-forest-500">{item.priceGel}</div>
                    </div>
                  </div>
                  <p className="text-sm text-forest-600 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-forest-900" />
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-forest-900 mb-4">
              Desserts
            </h2>
            <p className="text-forest-600 max-w-2xl mx-auto font-light">
              Sweet endings to complete your dining experience
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {desserts.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b-2 border-forest-200 pb-6"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-bold text-forest-900 uppercase tracking-wide text-base">
                      {item.name}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-forest-900">{item.price}</div>
                      <div className="text-xs text-forest-500">{item.priceGel}</div>
                    </div>
                  </div>
                  <p className="text-sm text-forest-600 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
              Reserve Your Table
            </h2>
            <p className="text-cream-50/70 text-lg mb-12 max-w-2xl mx-auto font-light">
              Experience our culinary excellence. Book your table today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/booking`}>
                <Button className="btn-telegraph rounded-none px-14 py-6 text-base">
                  Make Reservation
                </Button>
              </Link>
              <Link href={`/${locale}/restaurant`}>
                <Button variant="outline" className="px-14 py-6 text-base border-2 border-white bg-transparent text-cream-50 hover:bg-white hover:text-forest-900 transition-all uppercase tracking-wider">
                  Back to Restaurant
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
