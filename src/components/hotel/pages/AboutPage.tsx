'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Users, 
  Heart, 
  Leaf, 
  Star,
  Building2,
  Sparkles,
  Target
} from 'lucide-react';
import { type Locale } from '@/i18n/config';

interface AboutPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function AboutPage({ locale }: AboutPageProps) {
  const tSite = useTranslations('site');
  const tNav = useTranslations('nav');
  const t = useTranslations('about');

  const values = [
    {
      icon: Heart,
      title: 'Georgian Hospitality',
      description: 'We embrace the ancient tradition of Georgian hospitality, treating every guest like family with warmth and genuine care.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Luxury',
      description: 'Our commitment to environmental responsibility ensures that luxury and sustainability coexist harmoniously.'
    },
    {
      icon: Sparkles,
      title: 'Modern Excellence',
      description: '2026 architecture meets timeless elegance, creating spaces that inspire and rejuvenate.'
    },
    {
      icon: Target,
      title: 'Personalized Service',
      description: 'Every detail is tailored to your preferences, ensuring a uniquely memorable experience.'
    }
  ];

  const stats = [
    { value: '2026', label: 'Architecture' },
    { value: '50+', label: 'Rooms & Suites' },
    { value: '98%', label: 'Guest Satisfaction' },
    { value: '24/7', label: 'Concierge Service' }
  ];

  const team = [
    {
      name: 'Giorgi Beridze',
      role: 'General Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Natia Gvelukashvili',
      role: 'Head of Guest Relations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Davit Kiknadze',
      role: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
            alt="About Batumi Boutique Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <div >
            <span className="text-brass-400 text-sm tracking-widest uppercase mb-4 block">{t('about.ourStory')}</span>
            <h1 className="text-5xl md:text-7xl font-light mb-4">{tNav('about')}</h1>
            <div className="brass-line" />
            <p className="text-xl text-forest-200 max-w-2xl mx-auto mt-6">
              A masterpiece of modern architecture on Georgia&apos;s stunning Black Sea coast
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brass-600 text-sm tracking-widest uppercase">{t('about.est')}</span>
              <h2 className="section-title mt-4">{t('about.whereVisionMeetsReality')}</h2>
              <div className="brass-line !mx-0" />
              <p className="text-forest-700 text-lg leading-relaxed mb-6 mt-6">
                Batumi Boutique Hotel was born from a dream to create something extraordinary on the shores of the Black Sea. 
                Our 2026 modern architecture design represents the pinnacle of contemporary elegance, seamlessly blending 
                with the natural beauty of Georgia&apos;s coastal gem.
              </p>
              <p className="text-forest-600 leading-relaxed mb-6">
                Every corner of our hotel tells a story of meticulous craftsmanship, from the forest green facades that 
                mirror the sea to the golden accents that capture the warmth of Georgian hospitality. We&apos;ve created more 
                than a hotel—we&apos;ve created a destination where memories are made.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {team.map((member, i) => (
                    <img
                      key={i}
                      src={member.image}
                      alt={member.name}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <span className="text-sm text-forest-600">{t('about.meetOurTeam')}</span>
              </div>
            </div>

            <div className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Hotel Interior"
                className="rounded-3xl w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full gradient-brass flex items-center justify-center">
                    <Award className="w-8 h-8 text-forest-900" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-forest-900">{t('about.fiveStar')}</div>
                    <div className="text-sm text-forest-600">{t('about.luxuryRating')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-forest-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index} className="text-center"
              >
                <div className="text-4xl md:text-5xl font-light text-brass-400 mb-2">{stat.value}</div>
                <div className="text-forest-200 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brass-600 text-sm tracking-widest uppercase">{t('about.ourPhilosophy')}</span>
            <h2 className="section-title mt-4">{t('about.whatWeStandFor')}</h2>
            <div className="brass-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index} className="glass-card rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 rounded-full gradient-forest mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-3">{value.title}</h3>
                <p className="text-forest-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brass-600 text-sm tracking-widest uppercase">{t('about.ourTeam')}</span>
            <h2 className="section-title mt-4">{t('about.meetThePeople')}</h2>
            <div className="brass-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index} className="group text-center"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-48 h-48 rounded-full overflow-hidden mx-auto border-4 border-forest-100 group-hover:border-brass-400 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-card px-4 py-1 rounded-full">
                    <Star className="w-4 h-4 text-brass-500 inline" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-forest-900">{member.name}</h3>
                <p className="text-brass-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 bg-forest-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brass-400 text-sm tracking-widest uppercase">Architecture</span>
              <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">
                2026 Modern Design
              </h2>
              <div className="brass-line !mx-0" />
              <p className="text-forest-200 text-lg mb-8 mt-6">
                Our building represents the future of hospitality design. Floor-to-ceiling windows frame 
                breathtaking Black Sea views, while sustainable materials and innovative climate systems 
                ensure comfort with minimal environmental impact.
              </p>
              
              <div className="space-y-4">
                {[
                  'Floor-to-ceiling glass facade reflecting the sea',
                  'Living green walls throughout public spaces',
                  'Smart room technology integration',
                  'Geothermal heating and cooling',
                  'Rainwater collection and recycling'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brass-400 rounded-full" />
                    <span className="text-forest-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80"
                alt="Modern architecture"
                className="rounded-2xl aspect-[4/3] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80"
                alt="Interior design"
                className="rounded-2xl aspect-[4/3] object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80"
                alt="Room view"
                className="rounded-2xl aspect-[4/3] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80"
                alt="Exterior view"
                className="rounded-2xl aspect-[4/3] object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-forest-800 to-forest-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-700/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brass-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Building2 className="w-16 h-16 text-brass-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Experience {tSite('name')}
            </h2>
            <p className="text-forest-200 text-lg mb-10">
              Discover why guests from around the world choose Batumi Boutique Hotel 
              for their Black Sea getaway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/rooms`}>
                <Button className="btn-telegraph px-12 py-6 text-lg">
                  Explore Rooms
                </Button>
              </Link>
              <Link href={`/${locale}/contact`}>
                <Button variant="outline" className="px-12 py-6 text-lg border-white/30 text-white hover:bg-white hover:text-forest-900">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}








