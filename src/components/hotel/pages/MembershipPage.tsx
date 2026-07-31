import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { 
  Waves, 
  Dumbbell, 
  Heart,
  Check,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface MembershipPageProps {
  locale: Locale;
}

export default function MembershipPage({ locale }: MembershipPageProps) {
  const t = useTranslations();

  const membershipTiers = [
    {
      name: t('wellness.membership.tiers.basic.name'),
      price: 99,
      priceGel: 272,
      benefits: ['poolGym', 'discount10', 'locker', 'towels'].map((key) => t(`wellness.membership.page.benefits.${key}`)),
      icon: Dumbbell,
    },
    {
      name: t('wellness.membership.tiers.premium.name'),
      price: 199,
      priceGel: 547,
      benefits: ['allBasic', 'saunaSteam', 'discount20', 'guestPasses', 'priority'].map((key) => t(`wellness.membership.page.benefits.${key}`)),
      icon: Waves,
      featured: true,
    },
    {
      name: t('wellness.membership.tiers.vip.name'),
      price: 349,
      priceGel: 960,
      benefits: ['allPremium', 'unlimitedTreatments', 'cabana', 'trainer', 'beverages'].map((key) => t(`wellness.membership.page.benefits.${key}`)),
      icon: Heart,
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80"
            alt={t('wellness.membership.title')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-cream-50 px-6">
          <div>
            <span className="text-cream-50/60 text-sm tracking-[0.3em] uppercase font-light">{t('wellness.exclusiveAccess')}</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mt-6 mb-6 leading-none">
              {t('wellness.membership.title')}
            </h1>
            <p className="text-xl text-cream-50/70 max-w-2xl mt-6 font-light">
              {t('wellness.membership.page.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('wellness.membership.page.choosePlan')}</span>
            <h2 className="section-title mt-4">{t('wellness.membership.page.tiers')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <div
                key={tier.name} className={`p-10 border-2 ${tier.featured ? 'bg-forest-900 text-cream-50 border-forest-900' : 'bg-white border-forest-200'}`}
              >
                <div className={`w-14 h-14 mb-6 flex items-center justify-center ${tier.featured ? 'bg-white' : 'bg-forest-900'}`}>
                  <tier.icon className={`w-7 h-7 ${tier.featured ? 'text-forest-900' : 'text-cream-50'}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-current/20">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className={`text-sm font-light ${tier.featured ? 'text-cream-50/60' : 'text-forest-500'}`}>
                    {t('wellness.membership.page.perMonth')}
                  </span>
                </div>
                <ul className="space-y-4 mb-10">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.featured ? 'text-brass-400' : 'text-forest-600'}`} />
                      <span className={`text-sm font-light ${tier.featured ? 'text-cream-50/80' : 'text-forest-700'}`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href={`/${locale}/contact`}>
                  <Button 
                    className={`w-full ${tier.featured ? 'bg-white text-forest-900 hover:bg-white/90' : 'btn-boutique'}`}
                  >
                    {t('wellness.membership.joinNow')}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
              {t('wellness.membership.page.ctaTitle')}
            </h2>
            <p className="text-cream-50/70 text-lg mb-10 max-w-2xl mx-auto font-light">
              {t('wellness.membership.page.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button className="btn-boutique px-12 py-6 text-base">
                  <span>{t('nav.contact')}</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={`/${locale}/wellness`}>
                <Button variant="outline" className="px-12 py-6 text-base border-2 border-white text-cream-50 hover:bg-white hover:text-forest-900 uppercase tracking-wider">
                  {t('wellness.membership.page.backToWellness')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}







