'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  ArrowUpRight,
  Calendar,
  Check,
  Coffee,
  Mail,
  Phone,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { type Locale } from '@/i18n/config';
import { hotel } from '@/lib/site';

interface BookingPageProps {
  locale: Locale;
}

export default function BookingPage({ locale }: BookingPageProps) {
  const t = useTranslations();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [searchMessage, setSearchMessage] = useState('');

  const benefits = [
    { icon: Shield, text: t('booking.benefit1') },
    { icon: Coffee, text: t('booking.benefit2') },
    { icon: ArrowUpRight, text: t('booking.benefit3') },
    { icon: Sparkles, text: t('booking.benefit4') },
  ];

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchMessage(
      `${t('booking.bestPrice')}. ${hotel.reservationsEmail} / ${hotel.phone.display}`
    );
  };

  return (
    <main className="luxury-page min-h-screen pt-20">
      <section className="relative min-h-[66dvh] overflow-hidden text-cream-50">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
          alt={t('booking.title')}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/45 to-charcoal-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-950/75 to-transparent" />

        <div className="luxury-container relative z-10 flex min-h-[66dvh] items-end pb-14 md:pb-20">
          <div className="max-w-4xl">
            <p className="luxury-kicker text-brass-300">Reservations</p>
            <h1 className="luxury-display mt-6 text-cream-50">{t('booking.title')}</h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/75 md:text-xl">
              {t('booking.bestPrice')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 py-10 text-cream-50">
        <div className="luxury-container">
          <form onSubmit={handleSearch} className="border border-white/10 bg-white/[0.04] p-5 md:p-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-[1fr_1fr_0.8fr_0.8fr_0.8fr_auto]">
              <BookingField label={t('booking.checkIn')} htmlFor="booking-check-in" icon={<Calendar className="h-5 w-5" aria-hidden="true" />}>
                <Input
                  id="booking-check-in"
                  name="check-in"
                  type="date"
                  autoComplete="off"
                  value={checkIn}
                  onChange={(event) => setCheckIn(event.target.value)}
                  className="h-12 rounded-none border-white/15 bg-cream-50 text-charcoal-950 focus-visible:ring-brass-400"
                />
              </BookingField>

              <BookingField label={t('booking.checkOut')} htmlFor="booking-check-out" icon={<Calendar className="h-5 w-5" aria-hidden="true" />}>
                <Input
                  id="booking-check-out"
                  name="check-out"
                  type="date"
                  autoComplete="off"
                  value={checkOut}
                  onChange={(event) => setCheckOut(event.target.value)}
                  className="h-12 rounded-none border-white/15 bg-cream-50 text-charcoal-950 focus-visible:ring-brass-400"
                />
              </BookingField>

              <BookingSelect
                id="booking-adults"
                name="adults"
                label={t('booking.adults')}
                value={adults}
                onChange={setAdults}
                icon={<Users className="h-5 w-5" aria-hidden="true" />}
                options={[1, 2, 3, 4, 5]}
              />

              <BookingSelect
                id="booking-children"
                name="children"
                label={t('booking.children')}
                value={children}
                onChange={setChildren}
                icon={<Users className="h-5 w-5" aria-hidden="true" />}
                options={[0, 1, 2, 3, 4]}
              />

              <BookingSelect
                id="booking-rooms"
                name="rooms"
                label={t('booking.rooms')}
                value={rooms}
                onChange={setRooms}
                options={[1, 2, 3, 4, 5]}
              />

              <div className="flex items-end">
                <button type="submit" className="luxury-button min-h-12 w-full border-brass-400 bg-brass-400 text-charcoal-950 xl:w-auto">
                  <span>{t('booking.search')}</span>
                </button>
              </div>
            </div>

            {searchMessage ? (
              <p className="mt-5 border-t border-white/10 pt-5 text-sm font-light leading-6 text-white/70" role="status" aria-live="polite">
                {searchMessage}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-container">
          <div className="mb-14 text-center">
            <p className="luxury-kicker justify-center">Direct booking</p>
            <h2 className="luxury-title mt-5 text-5xl md:text-7xl">{t('booking.benefits')}</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article key={benefit.text} className="luxury-card p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center border border-brass-400/45 text-brass-700">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div className="mt-7 flex justify-center">
                    <Check className="h-5 w-5 text-brass-600" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-sm font-medium leading-6 text-forest-800">{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="luxury-section bg-cream-100">
        <div className="luxury-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="luxury-kicker">Our promise</p>
            <h2 className="luxury-title mt-5 text-5xl md:text-7xl">{t('booking.bestPrice')}</h2>
            <p className="luxury-lede mt-7">
              Book directly with the hotel for the clearest rate, direct support from our reservations team, and priority handling of arrival details.
            </p>
            <div className="mt-9 grid gap-4">
              {[
                'Price match support for direct reservations',
                'No hidden booking charges',
                'Flexible cancellation guidance',
                'Priority room assignment when available',
                'Welcome amenity on arrival',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-brass-400/25 pt-4">
                  <Check className="mt-1 h-5 w-5 text-brass-600" aria-hidden="true" />
                  <span className="text-sm font-light leading-6 text-forest-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="luxury-image relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80"
                alt="Luxury room prepared for arrival"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 border border-brass-400/35 bg-cream-50 p-6 shadow-2xl">
              <p className="text-4xl text-brass-700">20%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-forest-600">Direct value</p>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section bg-charcoal-950 text-cream-50 luxury-grain">
        <div className="luxury-container grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="luxury-kicker text-brass-300">Reservations team</p>
            <h2 className="luxury-title mt-5 text-5xl md:text-7xl">Need help with your stay?</h2>
            <p className="mt-7 max-w-2xl font-light leading-7 text-white/65">
              Contact us for group bookings, special requests, accessibility needs, or arrival coordination.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <a href={`tel:${hotel.phone.href}`} className="luxury-button border-brass-400 bg-brass-400 text-charcoal-950">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{hotel.phone.display}</span>
            </a>
            <a href={`mailto:${hotel.reservationsEmail}`} className="luxury-button-outline luxury-button-outline-light text-cream-50">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Email us</span>
            </a>
            <Link href={`/${locale}/contact`} className="luxury-button-outline luxury-button-outline-light text-cream-50">
              <span>{t('nav.contact')}</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function BookingField({
  children,
  htmlFor,
  icon,
  label,
}: {
  children: React.ReactNode;
  htmlFor: string;
  icon?: React.ReactNode;
  label: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
        {icon}
        <span>{label}</span>
      </label>
      {children}
    </div>
  );
}

function BookingSelect({
  id,
  name,
  label,
  value,
  onChange,
  options,
  icon,
}: {
  id: string;
  name: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  options: number[];
  icon?: React.ReactNode;
}) {
  return (
    <BookingField htmlFor={id} label={label} icon={icon}>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-12 w-full border border-white/15 bg-cream-50 px-4 text-sm text-charcoal-950 shadow-xs outline-none transition focus-visible:ring-2 focus-visible:ring-brass-400"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </BookingField>
  );
}
