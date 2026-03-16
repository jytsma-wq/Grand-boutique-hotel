import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-charcoal-50 py-24 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto bg-white border-2 border-charcoal-900 p-8 sm:p-16 shadow-lg">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal-900 uppercase tracking-widest mb-4">
            Privacy Policy
          </h1>
          <div className="w-16 h-1 bg-charcoal-900 mb-6"></div>
          <p className="text-sm text-charcoal-500 uppercase tracking-wider font-medium">
            Effective Date: March 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-charcoal-800 font-light leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-charcoal-900 uppercase tracking-wide mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you provide directly to us when making a reservation, checking in, or communicating with our concierge team. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact details (name, email address, phone number)</li>
              <li>Identification documents (passport or ID card details required by law)</li>
              <li>Payment and billing information</li>
              <li>Stay preferences and special requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal-900 uppercase tracking-wide mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              Your personal data is used exclusively to process your reservations, provide tailored concierge services, process secure payments, and ensure a seamless experience at Batumi Boutique Hotel. We may use your email to send essential booking confirmations and pre-arrival information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal-900 uppercase tracking-wide mb-4">
              3. Information Sharing & Third Parties
            </h2>
            <p>
              We value your privacy and do not sell your personal data. We only share necessary information with trusted third-party service providers (such as payment gateways and secure booking engines) strictly for the purpose of facilitating your stay. All third parties are required to maintain the confidentiality of your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal-900 uppercase tracking-wide mb-4">
              4. Data Security
            </h2>
            <p>
              We implement industry-standard security measures, including encryption and secure server hosting, to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-charcoal-900 uppercase tracking-wide mb-4">
              5. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact our management team:
            </p>
            <div className="mt-4 p-4 bg-charcoal-50 border-l-4 border-charcoal-900">
              <p>Email: privacy@batumiboutique.com</p>
              <p>Address: Rustaveli Avenue 123, Batumi, Adjara, Georgia 6000</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}