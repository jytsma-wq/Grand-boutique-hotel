// app/layout.tsx or src/components/layout.tsx
// app/layout.tsx
import Footer from '@/components/Footer';
import type { Metadata } from "next";
interface FooterProps {
  locale: 'tr' | 'en' | 'ka' | 'ru' | 'he' | 'ar';
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Hotel Information */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-normal uppercase tracking-[0.3em] mb-8 text-white/90">
              Batumi Boutique
            </h3>
            <p className="font-light text-white/60 text-xs leading-relaxed mb-2 tracking-[0.05em]">Rustaveli Avenue 123</p>
            <p className="font-light text-white/60 text-xs leading-relaxed mb-2 tracking-[0.05em]">6000 Batumi, Georgia</p>
            <p className="font-light text-white/60 text-xs leading-relaxed mt-8 tracking-[0.05em]">+995 422 00 00 00</p>
            <p className="font-light text-white/60 text-xs leading-relaxed tracking-[0.05em]">info@batumiboutique.com</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-normal uppercase tracking-[0.3em] mb-8 text-white/90">
              Explore
            </h3>
            <ul className="space-y-4 font-light text-white/60 text-xs">
              <li>
                <Link href={`/${locale}/rooms`} className="hover:text-brass-400 transition-colors uppercase tracking-[0.15em]">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/restaurant`} className="hover:text-brass-400 transition-colors uppercase tracking-[0.15em]">
                  Dining
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/wellness`} className="hover:text-brass-400 transition-colors uppercase tracking-[0.15em]">
                  Wellness & Spa
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/offers`} className="hover:text-brass-400 transition-colors uppercase tracking-[0.15em]">
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div>
            <h3 className="text-base font-normal uppercase tracking-[0.3em] mb-8 text-white/90">
              Information
            </h3>
            <ul className="space-y-4 font-light text-white/60 text-xs">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-brass-400 transition-colors uppercase tracking-[0.15em]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-brass-400 transition-colors uppercase tracking-[0.15em]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/location`} className="hover:text-brass-400 transition-colors uppercase tracking-[0.15em]">
                  Location
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/gallery`} className="hover:text-brass-400 transition-colors uppercase tracking-[0.15em]">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Newsletter */}
          <div>
            <h3 className="text-base font-normal uppercase tracking-[0.3em] mb-8 text-white/90">
              Follow Us
            </h3>
            <div className="flex gap-6 mb-10">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-brass-400 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-brass-400 transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-light text-white/40 text-center md:text-left tracking-[0.1em]">
            &copy; {currentYear} Batumi Boutique Hotel. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <Link href={`/${locale}/privacy`} className="text-[10px] font-light text-white/40 hover:text-white/70 transition-colors uppercase tracking-[0.15em]">
              Privacy Policy
            </Link>
            <Link href={`/${locale}/terms`} className="text-[10px] font-light text-white/40 hover:text-white/70 transition-colors uppercase tracking-[0.15em]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <Footer locale="en" />
      </body>
    </html>
  );
}


