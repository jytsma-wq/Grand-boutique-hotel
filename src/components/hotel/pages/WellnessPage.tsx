import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  ArrowRight,
  Clock,
  Dumbbell,
  Flame,
  Heart,
  Phone,
  Sparkles,
  Waves,
  Wind,
} from 'lucide-react';
import { type Locale } from '@/i18n/config';
import { hotel } from '@/lib/site';

interface WellnessPageProps {
  locale: Locale;
}

export default function WellnessPage({ locale }: WellnessPageProps) {
  const t = useTranslations();

  const facilities = [
    { href: '/wellness/pool', icon: Waves, name: t('wellness.facilities.pool'), desc: t('wellness.page.facilities.pool') },
    { href: '/wellness/gym', icon: Dumbbell, name: t('wellness.facilities.gym'), desc: t('wellness.page.facilities.gym') },
    { href: '/wellness/sauna', icon: Wind, name: t('wellness.facilities.sauna'), desc: t('wellness.page.facilities.sauna') },
    { href: '/wellness/steam-room', icon: Flame, name: t('wellness.facilities.steam'), desc: t('wellness.page.facilities.steam') },
    { href: '/wellness/jacuzzi', icon: Waves, name: t('wellness.facilities.jacuzzi'), desc: t('wellness.page.facilities.jacuzzi') },
    { href: '/wellness/relaxation-lounge', icon: Heart, name: t('wellness.facilities.relaxation'), desc: t('wellness.page.facilities.relaxation') },
  ];

  const treatments = [
    {
      name: t('wellness.page.treatments.wine.name'),
      duration: 60,
      price: 85,
      priceGel: 234,
      desc: t('wellness.page.treatments.wine.description'),
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&q=80',
    },
    {
      name: t('wellness.page.treatments.salt.name'),
      duration: 45,
      price: 65,
      priceGel: 179,
      desc: t('wellness.page.treatments.salt.description'),
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&q=80',
    },
    {
      name: t('wellness.page.treatments.aromatherapy.name'),
      duration: 90,
      price: 120,
      priceGel: 330,
      desc: t('wellness.page.treatments.aromatherapy.description'),
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=700&q=80',
    },
    {
      name: t('wellness.page.treatments.couples.name'),
      duration: 120,
      price: 220,
      priceGel: 605,
      desc: t('wellness.page.treatments.couples.description'),
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&q=80',
    },
  ];

  const membershipTiers = [
    {
      name: t('wellness.membership.tiers.basic.name'),
      price: 99,
      priceGel: 272,
      benefits: ['poolGym', 'discount10', 'locker', 'towels'].map((key) => t(`wellness.membership.page.benefits.${key}`)),
    },
    {
      name: t('wellness.membership.tiers.premium.name'),
      price: 199,
      priceGel: 547,
      benefits: ['allBasic', 'saunaSteam', 'discount20', 'guestPasses', 'priority'].map((key) => t(`wellness.membership.page.benefits.${key}`)),
    },
    {
      name: t('wellness.membership.tiers.vip.name'),
      price: 349,
      priceGel: 960,
      benefits: ['allPremium', 'cabana', 'trainer', 'beverages', 'concierge'].map((key) => t(`wellness.membership.page.benefits.${key}`)),
    },
  ];

  return (
    <main className="luxury-page min-h-screen pt-20">
      <section className="relative min-h-[68dvh] overflow-hidden text-cream-50">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80"
          alt={t('wellness.title')}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/45 to-charcoal-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-950/80 to-transparent" />

        <div className="luxury-container relative z-10 flex min-h-[68dvh] items-end pb-14 md:pb-20">
          <div className="max-w-4xl">
            <p className="luxury-kicker text-brass-300">{t('wellness.rejuvenate')}</p>
            <h1 className="luxury-display mt-6 text-cream-50">{t('wellness.title')}</h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/75 md:text-xl">
              {t('wellness.description')}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={`/${locale}/booking`} className="luxury-button border-brass-400 bg-brass-400 text-charcoal-950">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span>{t('wellness.treatments.bookNow')}</span>
              </Link>
              <a href={`tel:${hotel.phone.href}`} className="luxury-button-outline luxury-button-outline-light text-cream-50">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{hotel.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-container">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="luxury-kicker">{t('wellness.worldClass')}</p>
              <h2 className="luxury-title mt-5 text-5xl md:text-7xl">{t('wellness.facilities.title')}</h2>
            </div>
            <p className="max-w-2xl text-sm font-light leading-7 text-forest-700">
              {t('wellness.page.facilitiesDescription')}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <Link key={facility.href} href={`/${locale}${facility.href}`} className="luxury-card group flex min-h-48 flex-col justify-between p-7">
                  <div className="flex items-start justify-between gap-5">
                    <span className="inline-flex h-13 w-13 items-center justify-center border border-brass-400/45 text-brass-700">
                      <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <ArrowRight className="h-5 w-5 text-brass-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                  <div className="mt-10">
                    <h3 className="luxury-title text-3xl">{facility.name}</h3>
                    <p className="mt-4 text-sm font-light leading-6 text-forest-700">{facility.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="luxury-section bg-cream-100">
        <div className="luxury-container">
          <div className="mb-14 text-center">
            <p className="luxury-kicker justify-center">{t('wellness.pamperYourself')}</p>
            <h2 className="luxury-title mt-5 text-5xl md:text-7xl">{t('wellness.treatments.title')}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {treatments.map((treatment) => (
              <article key={treatment.name} className="luxury-card grid overflow-hidden md:grid-cols-[0.8fr_1.2fr]">
                <div className="luxury-image relative min-h-72">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-7">
                  <div>
                    <div className="mb-5 flex items-center justify-between gap-5 border-b border-brass-400/25 pb-5">
                      <h3 className="luxury-title text-3xl">{treatment.name}</h3>
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-forest-500">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {t('wellness.treatments.duration', { minutes: treatment.duration })}
                      </span>
                    </div>
                    <p className="text-sm font-light leading-7 text-forest-700">{treatment.desc}</p>
                  </div>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-2xl text-forest-900">${treatment.price}</p>
                      <p className="text-xs uppercase tracking-[0.18em] text-forest-500">{treatment.priceGel} {t('common.gel')}</p>
                    </div>
                    <Link href={`/${locale}/booking`} className="luxury-button">
                      <span>{t('wellness.treatments.bookNow')}</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-section bg-charcoal-950 text-cream-50 luxury-grain">
        <div className="luxury-container">
          <div className="mb-14 text-center">
            <p className="luxury-kicker justify-center text-brass-300">{t('wellness.exclusiveAccess')}</p>
            <h2 className="luxury-title mt-5 text-5xl md:text-7xl">{t('wellness.membership.title')}</h2>
            <p className="mx-auto mt-6 max-w-2xl font-light leading-7 text-white/65">{t('wellness.membership.subtitle')}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {membershipTiers.map((tier, index) => (
              <article
                key={tier.name}
                className={`border p-8 ${
                  index === 1
                    ? 'border-brass-400 bg-brass-400 text-charcoal-950'
                    : 'border-white/12 bg-white/[0.04] text-cream-50'
                }`}
              >
                <p className={`text-xs uppercase tracking-[0.24em] ${index === 1 ? 'text-charcoal-950/65' : 'text-brass-300'}`}>
                  {t('wellness.membership.title')}
                </p>
                <h3 className="luxury-title mt-4 text-4xl">{tier.name}</h3>
                <div className={`mt-7 border-b pb-7 ${index === 1 ? 'border-charcoal-950/20' : 'border-white/10'}`}>
                  <span className="text-5xl">${tier.price}</span>
                  <span className={`ml-2 text-sm ${index === 1 ? 'text-charcoal-950/65' : 'text-white/55'}`}>
                    / {t('wellness.membership.tiers.basic.price')}
                  </span>
                  <p className={`mt-1 text-xs uppercase tracking-[0.18em] ${index === 1 ? 'text-charcoal-950/55' : 'text-white/40'}`}>
                    {tier.priceGel} {t('common.gel')}
                  </p>
                </div>
                <ul className="mt-7 space-y-4">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 ${index === 1 ? 'bg-charcoal-950' : 'bg-brass-300'}`} aria-hidden="true" />
                      <span className={`text-sm font-light leading-6 ${index === 1 ? 'text-charcoal-950/75' : 'text-white/70'}`}>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/contact`}
                  className={`mt-9 w-full ${index === 1 ? 'luxury-button-outline text-charcoal-950' : 'luxury-button border-brass-400 bg-brass-400 text-charcoal-950'}`}
                >
                  <span>{t('wellness.membership.joinNow')}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-container grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="luxury-kicker">{t('wellness.page.concierge')}</p>
            <h2 className="luxury-title mt-5 text-5xl md:text-7xl">{t('wellness.page.ctaTitle')}</h2>
            <p className="luxury-lede mt-7">
              {t('wellness.page.ctaDescription')}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link href={`/${locale}/booking`} className="luxury-button">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>{t('wellness.treatments.bookNow')}</span>
            </Link>
            <a href={`tel:${hotel.phone.href}`} className="luxury-button-outline text-forest-900">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{hotel.phone.display}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
