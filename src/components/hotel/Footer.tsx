import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-white border-t border-brass-500/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Hotel Information */}
          <div>
            <h3 className="text-xl font-normal uppercase tracking-[0.15em] mb-6">
              Batumi Boutique
            </h3>
            <p className="font-light text-white/70 mb-2">Rustaveli Avenue 123</p>
            <p className="font-light text-white/70 mb-2">6000 Batumi, Georgia</p>
            <p className="font-light text-white/70 mt-6">+995 422 00 00 00</p>
            <p className="font-light text-white/70">info@batumiboutique.com</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-normal uppercase tracking-[0.15em] mb-6">
              Explore
            </h3>
            <ul className="space-y-3 font-light text-white/70">
              <li>
                <Link href="/rooms" className="hover:text-brass-400 transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-brass-400 transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/wellness" className="hover:text-brass-400 transition-colors">
                  Wellness & Spa
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brass-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Policy */}
          <div>
            <h3 className="text-xl font-normal uppercase tracking-[0.15em] mb-6">
              Policies
            </h3>
            <ul className="space-y-3 font-light text-white/70">
              <li>
                <Link href="/privacy" className="hover:text-brass-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brass-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brass-400 transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Socials & Branding */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-light text-white/50 text-center md:text-left">
            &copy; {currentYear} Batumi Boutique Hotel. All rights reserved.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/50 hover:text-brass-400 transition-colors" 
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/50 hover:text-brass-400 transition-colors" 
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/50 hover:text-brass-400 transition-colors" 
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="uppercase tracking-[0.15em] text-[10px] sm:text-xs font-medium text-white/40">
            Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}