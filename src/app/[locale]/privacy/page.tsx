import { type Locale } from '@/i18n/config';
import { getTranslations } from 'next-intl/server';
import { createLocalizedMetadata } from '@/lib/seo';
import { hotel } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.privacy' });

  return createLocalizedMetadata({
    locale,
    path: '/privacy',
    titleKey: 'footer.privacy',
    description: t('intro', { hotel: hotel.name }),
  });
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  const sections = [
    {
      title: t('privacy.collectTitle'),
      body: [t('privacy.collectBody1'), t('privacy.collectBody2')],
    },
    {
      title: t('privacy.useTitle'),
      body: [t('privacy.useBody1', { hotel: hotel.name }), t('privacy.useBody2')],
    },
    {
      title: t('privacy.sharingTitle'),
      body: [t('privacy.sharingBody')],
    },
    {
      title: t('privacy.securityTitle'),
      body: [t('privacy.securityBody')],
    },
    {
      title: t('privacy.contactTitle'),
      body: [t('privacy.contactBody', { email: hotel.privacyEmail })],
    },
  ];

  return (
    <main className="luxury-page min-h-screen pt-20">
      <section className="bg-charcoal-950 py-24 text-cream-50 luxury-grain md:py-32">
        <div className="luxury-container">
          <p className="luxury-kicker text-brass-300">{t('label')}</p>
          <h1 className="luxury-display mt-6 text-cream-50">{t('privacy.title')}</h1>
          <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-white/65">
            {t('privacy.intro', { hotel: hotel.name })}
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
                <a href={`mailto:${hotel.privacyEmail}`} className="transition-colors hover:text-brass-700">
                  {hotel.privacyEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
