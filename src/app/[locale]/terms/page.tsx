import { type Locale } from '@/i18n/config';
import { getTranslations } from 'next-intl/server';
import { createLocalizedMetadata } from '@/lib/seo';
import { hotel } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.terms' });

  return createLocalizedMetadata({
    locale,
    path: '/terms',
    titleKey: 'footer.terms',
    description: t('metadataDescription', { hotel: hotel.name }),
  });
}

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  const sections = [
    {
      title: t('terms.reservationsTitle'),
      body: [t('terms.reservationsBody1', { hotel: hotel.name }), t('terms.reservationsBody2')],
    },
    {
      title: t('terms.checkInTitle'),
      body: [t('terms.checkInBody1'), t('terms.checkInBody2')],
    },
    {
      title: t('terms.cancellationTitle'),
      body: [t('terms.cancellationBody')],
    },
    {
      title: t('terms.responsibilitiesTitle'),
      body: [t('terms.responsibilitiesBody1'), t('terms.responsibilitiesBody2')],
    },
    {
      title: t('terms.liabilityTitle'),
      body: [t('terms.liabilityBody')],
    },
    {
      title: t('terms.contactTitle'),
      body: [t('terms.contactBody', { email: hotel.reservationsEmail, phone: hotel.phone.display })],
    },
  ];

  return (
    <main className="luxury-page min-h-screen pt-20">
      <section className="bg-charcoal-950 py-24 text-cream-50 luxury-grain md:py-32">
        <div className="luxury-container">
          <p className="luxury-kicker text-brass-300">{t('label')}</p>
          <h1 className="luxury-display mt-6 text-cream-50">{t('terms.title')}</h1>
          <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-white/65">
            {t('terms.intro', { hotel: hotel.name })}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-white/40">
            {t('effectiveDate')}
          </p>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-container">
          <div className="mx-auto max-w-4xl border border-brass-400/25 bg-cream-50 p-6 shadow-2xl md:p-12">
            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.title} className="border-b border-brass-400/20 pb-10 last:border-b-0 last:pb-0">
                  <h2 className="luxury-title text-3xl text-forest-900">{section.title}</h2>
                  <div className="mt-5 space-y-4 text-base font-light leading-8 text-forest-700">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-brass-400/25 pt-8 text-sm font-light leading-7 text-forest-700">
              <p>{hotel.address.formatted}</p>
              <p>
                <a href={`mailto:${hotel.email}`} className="transition-colors hover:text-brass-700">
                  {hotel.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
