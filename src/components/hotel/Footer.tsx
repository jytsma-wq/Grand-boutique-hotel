import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { hotel } from '@/lib/site';

interface FooterProps {
  locale: 'tr' | 'en' | 'ka' | 'ru' | 'he' | 'ar';
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const currentYear = new Date().getFullYear();

  const stayLinks = [
    { href: '/rooms', label: tNav('rooms') },
    { href: '/offers', label: tNav('offers') },
    { href: '/booking', label: tNav('bookNow') },
    { href: '/contact', label: tNav('contact') },
  ];

  const experienceLinks = [
    { href: '/restaurant', label: tNav('restaurantBar') },
    { href: '/wellness', label: tNav('wellness') },
    { href: '/experiences', label: tNav('experiences') },
    { href: '/gallery', label: tNav('gallery') },
  ];

  const infoLinks = [
    { href: '/about', label: tNav('about') },
    { href: '/location', label: tNav('location') },
    { href: '/meetings', label: tNav('meetings') },
    { href: '/privacy', label: t('privacy') },
  ];

  return (
    <footer className="bg-charcoal-950 text-cream-50 luxury-grain">
      <div className="luxury-container py-16 md:py-24">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <p className="luxury-kicker text-brass-300">{hotel.address.locality}, {hotel.address.countryName}</p>
            <h2 className="luxury-title mt-6 max-w-4xl text-5xl md:text-7xl">
              {hotel.name}
            </h2>
            <p className="mt-7 max-w-2xl text-base font-light leading-8 text-white/60">
              {t('description')}
            </p>
          </div>

          <address className="not-italic">
            <div className="grid gap-5">
              <p className="flex items-start gap-4 text-white/70">
                <MapPin className="mt-1 h-5 w-5 text-brass-300" aria-hidden="true" />
                <span>{hotel.address.formatted}</span>
              </p>
              <p className="flex items-center gap-4 text-white/70">
                <Phone className="h-5 w-5 text-brass-300" aria-hidden="true" />
                <a href={`tel:${hotel.phone.href}`} className="transition-colors hover:text-brass-300">
                  {hotel.phone.display}
                </a>
              </p>
              <p className="flex items-center gap-4 text-white/70">
                <Mail className="h-5 w-5 text-brass-300" aria-hidden="true" />
                <a href={`mailto:${hotel.email}`} className="transition-colors hover:text-brass-300">
                  {hotel.email}
                </a>
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={hotel.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-brass-300 hover:text-brass-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href={hotel.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-brass-300 hover:text-brass-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </address>
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-3">
          <FooterColumn title={t('quickLinks')} links={stayLinks} locale={locale} />
          <FooterColumn title={t('explore')} links={experienceLinks} locale={locale} />
          <FooterColumn title={t('information')} links={infoLinks} locale={locale} />
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-light tracking-[0.08em] text-white/40">
            &copy; {currentYear} {hotel.name}. {t('rights')}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-white/40">
            <Link href={`/${locale}/privacy`} className="transition-colors hover:text-white">
              {t('privacy')}
            </Link>
            <Link href={`/${locale}/terms`} className="transition-colors hover:text-white">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  locale,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
  locale: FooterProps['locale'];
}) {
  return (
    <nav aria-label={title}>
      <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-brass-300">
        {title}
      </h3>
      <ul className="grid gap-4">
        {links.map((link) => (
          <li key={`${title}-${link.href}`}>
            <Link
              href={`/${locale}${link.href}`}
              className="inline-flex text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
