import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations();

  const values = [
    {
      icon: Heart,
      title: t('about.values.hospitalityTitle'),
      description: t('about.values.hospitalityDescription')
    },
    {
      icon: Leaf,
      title: t('about.values.sustainabilityTitle'),
      description: t('about.values.sustainabilityDescription')
    },
    {
      icon: Sparkles,
      title: t('about.values.excellenceTitle'),
      description: t('about.values.excellenceDescription')
    },
    {
      icon: Target,
      title: t('about.values.serviceTitle'),
      description: t('about.values.serviceDescription')
    }
  ];

  const stats = [
    { value: '2026', label: t('about.stats.architecture') },
    { value: '50+', label: t('about.stats.rooms') },
    { value: '98%', label: t('about.stats.satisfaction') },
    { value: '24/7', label: t('about.stats.concierge') }
  ];

  const team = [
    {
      name: 'Giorgi Beridze',
      role: t('about.roles.generalManager'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Natia Gvelukashvili',
      role: t('about.roles.guestRelations'),
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Davit Kiknadze',
      role: t('about.roles.executiveChef'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
            alt={tSite('name')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <div >
            <span className="text-brass-400 text-sm tracking-widest uppercase mb-4 block">{t('about.ourStory')}</span>
            <h1 className="text-5xl md:text-7xl font-light mb-4">{tNav('about')}</h1>
            <div className="brass-line" />
            <p className="text-xl text-forest-200 max-w-2xl mx-auto mt-6">
              {t('about.heroSubtitle')}
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
                {t('about.story1')}
              </p>
              <p className="text-forest-600 leading-relaxed mb-6">
                {t('about.story2')}
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
                alt={t('about.architecture')}
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
              <span className="text-brass-400 text-sm tracking-widest uppercase">{t('about.architecture')}</span>
              <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">
                {t('about.modernDesign')}
              </h2>
              <div className="brass-line !mx-0" />
              <p className="text-forest-200 text-lg mb-8 mt-6">
                {t('about.architectureDescription')}
              </p>
              
              <div className="space-y-4">
                {[
                  t('about.feature1'),
                  t('about.feature2'),
                  t('about.feature3'),
                  t('about.feature4'),
                  t('about.feature5')
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
                alt={t('about.architecture')}
                className="rounded-2xl aspect-[4/3] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80"
                alt={t('about.architecture')}
                className="rounded-2xl aspect-[4/3] object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80"
                alt={t('about.architecture')}
                className="rounded-2xl aspect-[4/3] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80"
                alt={t('about.architecture')}
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
              {t('about.experienceTitle', { hotel: tSite('name') })}
            </h2>
            <p className="text-forest-200 text-lg mb-10">
              {t('about.experienceDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/rooms`}>
                <Button className="btn-boutique px-12 py-6 text-lg">
                  {t('about.exploreRooms')}
                </Button>
              </Link>
              <Link href={`/${locale}/contact`}>
                <Button variant="outline" className="px-12 py-6 text-lg border-white/30 text-white hover:bg-white hover:text-forest-900">
                  {t('about.contactUs')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}






