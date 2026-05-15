'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { type Locale } from '@/i18n/config';
import { hotel } from '@/lib/site';

interface ContactPageProps {
  locale: Locale;
}

export default function ContactPage({ locale }: ContactPageProps) {
  const t = useTranslations();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const departments = [
    { name: t('contact.departments.reception'), phone: '+995 422 00 00 01', icon: Phone },
    { name: t('contact.departments.reservations'), phone: '+995 422 00 00 02', icon: MessageSquare },
    { name: t('contact.departments.restaurant'), phone: '+995 422 00 00 03', icon: Phone },
    { name: t('contact.departments.spa'), phone: '+995 422 00 00 04', icon: Phone },
    { name: t('contact.departments.events'), phone: '+995 422 00 00 05', icon: Phone },
  ];

  return (
    <main className="luxury-page min-h-screen pt-20">
      <section className="relative min-h-[62dvh] overflow-hidden text-cream-50">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt={t('contact.title')}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/45 to-charcoal-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-950/75 to-transparent" />

        <div className="luxury-container relative z-10 flex min-h-[62dvh] items-end pb-14 md:pb-20">
          <div className="max-w-4xl">
            <p className="luxury-kicker text-brass-300">Get in touch</p>
            <h1 className="luxury-display mt-6 text-cream-50">{t('contact.title')}</h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/75 md:text-xl">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="luxury-card p-6 md:p-10">
            <p className="luxury-kicker">{t('contact.sendMessage')}</p>
            <h2 className="luxury-title mt-5 text-4xl md:text-5xl">{t('contact.sendMessage')}</h2>

            {isSubmitted ? (
              <div className="mt-10 border border-brass-400/30 bg-cream-100 p-8 text-center" role="status" aria-live="polite">
                <CheckCircle aria-hidden="true" className="mx-auto h-14 w-14 text-brass-700" />
                <h3 className="luxury-title mt-5 text-3xl text-forest-900">{t('contact.messageSent')}</h3>
                <p className="mt-3 text-sm font-light leading-6 text-forest-700">{t('contact.form.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <ContactField label={t('contact.form.name')} htmlFor="contact-name">
                    <Input id="contact-name" name="name" autoComplete="name" required className="h-12 rounded-none border-brass-400/30 bg-cream-50 focus-visible:ring-brass-400" />
                  </ContactField>
                  <ContactField label={t('contact.form.email')} htmlFor="contact-email">
                    <Input id="contact-email" name="email" type="email" autoComplete="email" spellCheck={false} required className="h-12 rounded-none border-brass-400/30 bg-cream-50 focus-visible:ring-brass-400" />
                  </ContactField>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <ContactField label={t('contact.form.phone')} htmlFor="contact-phone">
                    <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className="h-12 rounded-none border-brass-400/30 bg-cream-50 focus-visible:ring-brass-400" />
                  </ContactField>
                  <ContactField label={t('contact.form.subject')} htmlFor="contact-subject">
                    <Input id="contact-subject" name="subject" autoComplete="off" required className="h-12 rounded-none border-brass-400/30 bg-cream-50 focus-visible:ring-brass-400" />
                  </ContactField>
                </div>

                <ContactField label={t('contact.form.message')} htmlFor="contact-message">
                  <Textarea id="contact-message" name="message" autoComplete="off" required rows={6} className="rounded-none border-brass-400/30 bg-cream-50 focus-visible:ring-brass-400" />
                </ContactField>

                <div aria-live="polite" className="sr-only">
                  {isSubmitting ? t('common.loading') : ''}
                </div>
                <button type="submit" disabled={isSubmitting} className="luxury-button disabled:opacity-60">
                  <span>{isSubmitting ? t('common.loading') : t('contact.form.submit')}</span>
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>

          <div className="grid gap-6">
            <section className="luxury-card p-6 md:p-8" aria-labelledby="direct-contacts-heading">
              <p className="luxury-kicker">{t('contact.departments.title')}</p>
              <h2 id="direct-contacts-heading" className="luxury-title mt-5 text-4xl md:text-5xl">
                {t('contact.departments.title')}
              </h2>

              <div className="mt-8 grid gap-3">
                {departments.map((department) => {
                  const Icon = department.icon;

                  return (
                    <div key={department.name} className="flex items-center gap-4 border border-brass-400/20 bg-cream-50 p-4">
                      <span className="flex h-12 w-12 items-center justify-center bg-charcoal-950 text-brass-300">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-900">{department.name}</p>
                        <a href={`tel:${department.phone.replaceAll(' ', '')}`} className="mt-1 inline-flex text-sm text-forest-600 transition-colors hover:text-brass-700">
                          {department.phone}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <address className="not-italic">
              <section className="bg-charcoal-950 p-6 text-cream-50 md:p-8 luxury-grain" aria-labelledby="contact-address-heading">
                <p className="luxury-kicker text-brass-300">{hotel.address.locality}</p>
                <h2 id="contact-address-heading" className="luxury-title mt-5 text-4xl md:text-5xl">
                  {t('contact.address.title')}
                </h2>
                <div className="mt-8 grid gap-5 text-sm font-light leading-7 text-white/70">
                  <p className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-brass-300" aria-hidden="true" />
                    <span>{hotel.address.formatted}</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <Clock className="h-5 w-5 shrink-0 text-brass-300" aria-hidden="true" />
                    <span>24/7 Front Desk</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <Mail className="h-5 w-5 shrink-0 text-brass-300" aria-hidden="true" />
                    <a href={`mailto:${hotel.email}`} className="transition-colors hover:text-brass-300">
                      {hotel.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-4">
                    <Phone className="h-5 w-5 shrink-0 text-brass-300" aria-hidden="true" />
                    <a href={`tel:${hotel.phone.href}`} className="transition-colors hover:text-brass-300">
                      {hotel.phone.display}
                    </a>
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href={`/${locale}/booking`} className="luxury-button border-brass-400 bg-brass-400 text-charcoal-950">
                    <span>{t('booking.title')}</span>
                  </Link>
                  <a href={`mailto:${hotel.email}`} className="luxury-button-outline luxury-button-outline-light text-cream-50">
                    <span>{t('contact.form.email')}</span>
                  </a>
                </div>
              </section>
            </address>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16">
        <div className="luxury-container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="luxury-kicker">{t('location.title')}</p>
              <h2 className="luxury-title mt-5 text-4xl md:text-6xl">{t('contact.batumiGeorgia')}</h2>
              <p className="mt-6 text-sm font-light leading-7 text-forest-700">
                {hotel.address.formatted}
              </p>
            </div>
            <div className="relative min-h-80 overflow-hidden border border-brass-400/30 bg-charcoal-950 text-cream-50">
              <Image
                src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=1200&q=80"
                alt="Batumi city near the hotel"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/30 to-transparent" />
              <div className="absolute inset-0 flex items-center p-8">
                <div>
                  <MapPin className="h-10 w-10 text-brass-300" aria-hidden="true" />
                  <p className="mt-5 text-sm uppercase tracking-[0.22em] text-white/65">{t('contact.interactiveMap')}</p>
                  <p className="mt-3 max-w-md font-light leading-7 text-white/75">{hotel.address.formatted}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactField({
  children,
  htmlFor,
  label,
}: {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-forest-600">
        {label}
      </label>
      {children}
    </div>
  );
}
