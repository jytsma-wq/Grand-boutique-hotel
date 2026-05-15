import { type Locale } from '@/i18n/config';
import { createLocalizedMetadata } from '@/lib/seo';
import { hotel } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return createLocalizedMetadata({
    locale,
    path: '/terms',
    titleKey: 'footer.terms',
    description: `Terms and conditions for reservations, stays, and guest services at ${hotel.name}.`,
  });
}

const sections = [
  {
    title: '1. Reservations & Payment',
    body: [
      `All reservations are subject to availability. To secure your booking, a valid credit card or approved payment method may be required. By providing payment details, you authorize ${hotel.name} to charge the applicable deposit, pre-authorization, or full stay amount according to the selected rate.`,
      'Rates may be quoted in GEL or USD and may include taxes or service charges depending on the booking channel and rate plan.',
    ],
  },
  {
    title: '2. Check-in & Check-out',
    body: [
      'Check-in is available from 15:00. Check-out is until 12:00 noon. Early check-in and late check-out are subject to availability and may incur an additional fee.',
      'A valid government-issued photo ID or passport is required at check-in for each registered guest where required by law.',
    ],
  },
  {
    title: '3. Cancellation Policy',
    body: [
      "Standard reservations may be cancelled or modified without penalty up to 48 hours before scheduled arrival unless a stricter rate condition applies. Late cancellations, no-shows, non-refundable rates, promotional bookings, and group reservations may be charged according to the confirmed booking terms.",
    ],
  },
  {
    title: '4. Guest Responsibilities',
    body: [
      'Guests are responsible for respecting hotel property, other guests, and local laws. The hotel may charge for damage to rooms, furnishings, equipment, or facilities caused during a stay.',
      'Smoking policies, quiet hours, pet policies, event use, and additional guest rules may be confirmed separately by the hotel team.',
    ],
  },
  {
    title: '5. Liability',
    body: [
      'The hotel is not responsible for loss, damage, or theft of personal property except where required by applicable Georgian law. Guests are encouraged to use the in-room safe for valuables.',
    ],
  },
  {
    title: '6. Contact',
    body: [
      `For reservation questions or clarification of these terms, contact ${hotel.reservationsEmail} or ${hotel.phone.display}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="luxury-page min-h-screen pt-20">
      <section className="bg-charcoal-950 py-24 text-cream-50 luxury-grain md:py-32">
        <div className="luxury-container">
          <p className="luxury-kicker text-brass-300">Legal</p>
          <h1 className="luxury-display mt-6 text-cream-50">Terms & Conditions</h1>
          <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-white/65">
            Reservation, stay, and guest service terms for {hotel.name}.
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
