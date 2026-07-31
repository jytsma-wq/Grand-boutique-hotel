import Link from 'next/link';
import Image from 'next/image';
import { Heart, Sparkles, Waves, Wind, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';
import { useTranslations } from 'next-intl';

interface RelaxationLoungePageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function RelaxationLoungePage({ locale }: RelaxationLoungePageProps) {
  const t = useTranslations('relaxationLounge');
  const tPage = useTranslations('wellnessPages');
  
  const highlights = [
    { icon: Heart, title: t('features.quietZones'), desc: t('features.quietZonesDesc') },
    { icon: Sparkles, title: t('features.aromatherapy'), desc: t('features.aromatherapyDesc') },
    { icon: Waves, title: t('features.seaViews'), desc: t('features.seaViewsDesc') },
    { icon: Wind, title: t('features.breathingCorner'), desc: t('features.breathingCornerDesc') }
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="relative h-[65vh] min-h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80"
            alt={t('title')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-forest-900/40 to-forest-900/80" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <div>
            <Heart className="w-16 h-16 text-cream-50 mb-6 mx-auto" />
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">{t('title')}</h1>
            <p className="text-xl text-cream-50/85 max-w-3xl mx-auto font-light">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('luxuryWellness')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 uppercase tracking-tight">{t('calmRetreat')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.title} className="bg-white border-2 border-forest-900 p-8 text-center"
              >
                <div className="w-16 h-16 bg-forest-900 mx-auto mb-6 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-cream-50" />
                </div>
                <h3 className="font-bold text-forest-900 mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm text-forest-600 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">{tPage('relaxation.ctaTitle')}</h2>
            <p className="text-cream-50/70 text-lg mb-10 max-w-2xl mx-auto font-light">
              {tPage('relaxation.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/wellness`}>
                <Button className="btn-boutique px-12 py-6 text-base">
                  {tPage('exploreAll')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={`/${locale}/booking`}>
                <Button variant="outline" className="px-12 py-6 text-base border-2 border-white bg-transparent text-cream-50 hover:bg-white hover:text-forest-900 transition-all uppercase tracking-wider">
                  {t('bookYourStay')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}







