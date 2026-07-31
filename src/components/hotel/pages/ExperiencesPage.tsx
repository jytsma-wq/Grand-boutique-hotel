import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface ExperiencesPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ExperiencesPage({ locale }: ExperiencesPageProps) {
  const t = useTranslations();

  const categories = [
    t('experiences.categories.all'),
    t('experiences.categories.sightseeing'),
    t('experiences.categories.nature'),
    t('experiences.categories.culture'),
    t('experiences.categories.adventure'),
  ];

  const experiences = [
    {
      id: 1,
      name: t('experiences.items.boulevard.name'),
      category: t('experiences.categories.sightseeing'),
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80',
      distance: '0.5',
      duration: t('experiences.items.boulevard.duration'),
      description: t('experiences.items.boulevard.description')
    },
    {
      id: 2,
      name: t('experiences.items.oldBatumi.name'),
      category: t('experiences.categories.culture'),
      image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80',
      distance: '1.2',
      duration: t('experiences.items.oldBatumi.duration'),
      description: t('experiences.items.oldBatumi.description')
    },
    {
      id: 3,
      name: t('experiences.items.botanical.name'),
      category: t('experiences.categories.nature'),
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
      distance: '8',
      duration: t('experiences.items.botanical.duration'),
      description: t('experiences.items.botanical.description')
    },
    {
      id: 4,
      name: t('experiences.items.gonio.name'),
      category: t('experiences.categories.culture'),
      image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800&q=80',
      distance: '12',
      duration: t('experiences.items.gonio.duration'),
      description: t('experiences.items.gonio.description')
    },
    {
      id: 5,
      name: t('experiences.items.mtirala.name'),
      category: t('experiences.categories.nature'),
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
      distance: '25',
      duration: t('experiences.items.mtirala.duration'),
      description: t('experiences.items.mtirala.description')
    },
    {
      id: 6,
      name: t('experiences.items.wineTour.name'),
      category: t('experiences.categories.culture'),
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
      distance: '15',
      duration: t('experiences.items.wineTour.duration'),
      description: t('experiences.items.wineTour.description')
    },
    {
      id: 7,
      name: t('experiences.items.boatTour.name'),
      category: t('experiences.categories.adventure'),
      image: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&q=80',
      distance: '0.3',
      duration: t('experiences.items.boatTour.duration'),
      description: t('experiences.items.boatTour.description')
    },
    {
      id: 8,
      name: t('experiences.items.paragliding.name'),
      category: t('experiences.categories.adventure'),
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
      distance: '20',
      duration: t('experiences.items.paragliding.duration'),
      description: t('experiences.items.paragliding.description')
    },
    {
      id: 9,
      name: t('experiences.items.cooking.name'),
      category: t('experiences.categories.culture'),
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
      distance: null,
      duration: t('experiences.items.cooking.duration'),
      description: t('experiences.items.cooking.description')
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
            alt={t('experiences.title')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <div>
            <span className="text-brass-400 text-sm tracking-widest uppercase">{t('experiences.discover')}</span>
            <h1 className="text-5xl md:text-7xl font-light mt-4 mb-4">{t('experiences.title')}</h1>
            <div className="brass-line" />
            <p className="text-xl text-cream-50/80 max-w-2xl mt-4">{t('experiences.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-forest-100 sticky top-20 z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full px-6 border-forest-200 text-forest-700 hover:bg-forest-50"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id} className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden card-hover">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 text-forest-900 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.category}
                    </div>
                    
                    {/* Distance */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-brass-400 text-sm">
                        <MapPin size={14} />
                        <span>{exp.distance ? t('experiences.distance', { km: exp.distance }) : t('experiences.onSite')}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-cream-50 mt-1">{exp.name}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-forest-600 text-sm mb-4">{exp.description}</p>
                    
                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-forest-500 mb-4">
                      <Clock size={14} />
                      <span>{t('experiences.duration', { value: exp.duration })}</span>
                    </div>

                    {/* CTA */}
                    <Button variant="outline" className="w-full border-forest-200 text-forest-700 hover:bg-forest-50 group-hover:border-brass-400 group-hover:text-brass-600">
                      {t('experiences.learnMore')}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="text-4xl font-light mb-6">
              {t('experiences.conciergeTitle')}
            </h2>
            <p className="text-forest-200 text-lg mb-10 max-w-2xl mx-auto">
              {t('experiences.conciergeDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button className="btn-boutique px-12 py-6 text-lg">
                  <span>{t('experiences.contactConcierge')}</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}







