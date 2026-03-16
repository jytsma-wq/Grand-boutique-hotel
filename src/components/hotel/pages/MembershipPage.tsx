'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Dumbbell, 
  Wind, 
  Heart,
  Check,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface MembershipPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function MembershipPage({ locale }: MembershipPageProps) {
  const t = useTranslations();

  const membershipTiers = [
    {
      name: 'Basic',
      price: 99,
      priceGel: 272,
      benefits: ['Pool & gym access', '10% off treatments', 'Locker usage', 'Towel service'],
      icon: Dumbbell,
    },
    {
      name: 'Premium',
      price: 199,
      priceGel: 547,
      benefits: ['All Basic benefits', 'Sauna & steam access', '20% off treatments', '2 guest passes/month', 'Priority booking'],
      icon: Waves,
      featured: true,
    },
    {
      name: 'VIP',
      price: 349,
      priceGel: 960,
      benefits: ['All Premium benefits', 'Unlimited treatments', 'Private cabana', 'Personal trainer session', 'Complimentary beverages'],
      icon: Heart,
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80"
            alt="Wellness Membership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <span className="text-white/60 text-sm tracking-[0.3em] uppercase font-light">Exclusive Access</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mt-6 mb-6 leading-none">
              Membership
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mt-6 font-light">
              Join our wellness community and enjoy exclusive benefits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-charcoal-500 text-xs tracking-[0.3em] uppercase font-light">Choose Your Plan</span>
            <h2 className="section-title mt-4">Membership Tiers</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`p-10 border-2 ${tier.featured ? 'bg-charcoal-900 text-white border-charcoal-900' : 'bg-white border-charcoal-200'}`}
              >
                <div className={`w-14 h-14 mb-6 flex items-center justify-center ${tier.featured ? 'bg-white' : 'bg-charcoal-900'}`}>
                  <tier.icon className={`w-7 h-7 ${tier.featured ? 'text-charcoal-900' : 'text-white'}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-current/20">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className={`text-sm font-light ${tier.featured ? 'text-white/60' : 'text-charcoal-500'}`}>
                    /month
                  </span>
                </div>
                <ul className="space-y-4 mb-10">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.featured ? 'text-gold-400' : 'text-charcoal-600'}`} />
                      <span className={`text-sm font-light ${tier.featured ? 'text-white/80' : 'text-charcoal-700'}`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href={`/${locale}/contact`}>
                  <Button 
                    className={`w-full ${tier.featured ? 'bg-white text-charcoal-900 hover:bg-white/90' : 'btn-luxury'}`}
                  >
                    Join Now
                  </Button>
                </Link>
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
              Questions About Membership?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-light">
              Our wellness team is happy to help you choose the right plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button className="btn-luxury px-12 py-6 text-base">
                  <span>Contact Us</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={`/${locale}/wellness`}>
                <Button variant="outline" className="px-12 py-6 text-base border-2 border-white text-white hover:bg-white hover:text-charcoal-900 uppercase tracking-wider">
                  Back to Wellness
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
