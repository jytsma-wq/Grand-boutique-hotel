import { type Locale } from '@/i18n/config';
import { createLocalizedMetadata } from '@/lib/seo';
import { hotel } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/privacy',
    titleKey: 'footer.privacy',
  });
}

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'We collect information that guests provide directly when making a reservation, checking in, contacting the concierge team, or using hotel services.',
      'This may include contact details, identification details required by law, payment and billing information, stay preferences, and special requests.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      `Personal data is used to process reservations, provide tailored service, process secure payments, manage required guest records, and support a seamless experience at ${hotel.name}.`,
      'We may send essential booking confirmations, pre-arrival information, and service updates related to a guest stay.',
    ],
  },
  {
    title: '3. Information Sharing',
    body: [
      'We do not sell personal data. We only share necessary information with trusted providers such as payment processors, booking systems, and operational partners when needed to provide hotel services.',
    ],
  },
  {
    title: '4. Data Security',
    body: [
      'We use reasonable administrative, technical, and organizational safeguards to protect personal information from unauthorized access, alteration, disclosure, or loss.',
    ],
  },
  {
    title: '5. Contact Us',
    body: [
      `For privacy questions or requests, contact ${hotel.privacyEmail}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="luxury-page min-h-screen pt-20">
      <section className="bg-charcoal-950 py-24 text-cream-50 luxury-grain md:py-32">
        <div className="luxury-container">
          <p className="luxury-kicker text-brass-300">Legal</p>
          <h1 className="luxury-display mt-6 text-cream-50">Privacy Policy</h1>
          <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-white/65">
            How {hotel.name} handles guest information for reservations, stays, and hotel services.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-white/40">
            Effective date: March 2026
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
