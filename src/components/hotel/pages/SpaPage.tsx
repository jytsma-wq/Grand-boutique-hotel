'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Locale } from '@/i18n/config';

interface SpaPageProps {
  locale: Locale;
}

export default function SpaPage({ locale }: SpaPageProps) {
  const t = useTranslations();

  const spaPackages = [
    {
      name: t('spa.page.packages.signature.name'),
      duration: 180,
      price: 280,
      priceGel: 770,
      desc: t('spa.page.packages.signature.description'),
      includes: [t('spa.page.packages.signature.include1'), t('spa.page.packages.signature.include2'), t('spa.page.packages.signature.include3'), t('spa.page.packages.signature.include4')]
    },
    {
      name: t('spa.page.packages.deep.name'),
      duration: 120,
      price: 195,
      priceGel: 537,
      desc: t('spa.page.packages.deep.description'),
      includes: [t('spa.page.packages.deep.include1'), t('spa.page.packages.deep.include2'), t('spa.page.packages.deep.include3'), t('spa.page.packages.deep.include4')]
    },
    {
      name: t('spa.page.packages.detox.name'),
      duration: 150,
      price: 240,
      priceGel: 660,
      desc: t('spa.page.packages.detox.description'),
      includes: [t('spa.page.packages.detox.include1'), t('spa.page.packages.detox.include2'), t('spa.page.packages.detox.include3'), t('spa.page.packages.detox.include4')]
    },
    {
      name: t('spa.page.packages.couples.name'),
      duration: 150,
      price: 450,
      priceGel: 1238,
      desc: t('spa.page.packages.couples.description'),
      includes: [t('spa.page.packages.couples.include1'), t('spa.page.packages.couples.include2'), t('spa.page.packages.couples.include3'), t('spa.page.packages.couples.include4')]
    }
  ];

  const addOnServices = [
    { name: t('spa.page.addOns.massage'), price: 45, priceGel: 124 },
    { name: t('spa.page.addOns.aromatherapy'), price: 25, priceGel: 69 },
    { name: t('spa.page.addOns.hotStone'), price: 35, priceGel: 96 },
    { name: t('spa.page.addOns.sauna'), price: 55, priceGel: 151 },
    { name: t('spa.page.addOns.champagne'), price: 40, priceGel: 110 },
    { name: t('spa.page.addOns.fruit'), price: 30, priceGel: 83 }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section - Brutalist */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80"
            alt={t('spa.title')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <div>
            <span className="text-white/60 text-sm tracking-[0.3em] uppercase font-light">{t('spa.ultimateRelaxation')}</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mt-6 mb-6 leading-none">
              {t('spa.title')}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-8 font-light">
              {t('spa.page.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Spa Philosophy - Brutalist */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('spa.ourPhilosophy')}</span>
              <h2 className="section-title mt-4 mb-8">{t('spa.holisticWellness')}</h2>
              <p className="text-lg text-forest-700 mb-6 font-light leading-relaxed">
                {t('spa.page.philosophy1')}
              </p>
              <p className="text-forest-600 font-light leading-relaxed">
                {t('spa.page.philosophy2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Packages - Brutalist Menu Format */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('spa.curatedExperiences')}</span>
            <h2 className="section-title mt-4">{t('spa.spaPackages')}</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {spaPackages.map((pkg) => (
              <div
                key={pkg.name} className="bg-white border-t-2 border-forest-900 first:border-t-0 py-10 px-10 hover:bg-forest-50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-forest-900 uppercase tracking-wide">{pkg.name}</h3>
                      <span className="text-sm text-forest-500 font-light flex items-center gap-1">
                        <Clock size={14} />
                        {t('spa.page.minutes', { count: pkg.duration })}
                      </span>
                    </div>
                    <p className="text-sm text-forest-600 font-light mb-6">{pkg.desc}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-xs text-forest-500 uppercase tracking-wider font-bold mb-3">{t('spa.page.includes')}:</h4>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-forest-700">
                            <div className="w-1 h-1 bg-forest-900 mt-2 flex-shrink-0" />
                            <span className="font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-6">
                      <div>
                        <div className="text-3xl font-bold text-forest-900">${pkg.price}</div>
                        <div className="text-xs text-forest-500">{pkg.priceGel}₾</div>
                      </div>
                      <Link href={`/${locale}/booking`}>
                        <Button className="btn-boutique-concrete rounded-none py-3 px-10">
                          {t('spa.page.bookNow')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services - Brutalist Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('spa.enhanceYourExperience')}</span>
            <h2 className="section-title mt-4">{t('spa.addOnServices')}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOnServices.map((service) => (
                <div
                  key={service.name} className="bg-white border-2 border-forest-900 p-6 hover:bg-forest-50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-bold text-forest-900 uppercase tracking-wide flex-1">{service.name}</h3>
                    <div className="text-right ml-4">
                      <div className="text-xl font-bold text-forest-900">${service.price}</div>
                      <div className="text-xs text-forest-500">{service.priceGel}₾</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spa Etiquette - Brutalist */}
      <section className="py-24 bg-forest-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <span className="text-white/50 text-xs tracking-[0.3em] uppercase font-light">{t('spa.pleaseNote')}</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 uppercase tracking-tight">{t('spa.spaEtiquette')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h3 className="text-lg font-bold uppercase tracking-wide mb-4 border-b border-white/20 pb-3">{t('spa.arrival')}</h3>
                <ul className="space-y-3 text-white/80 font-light">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-white mt-2" />
                    <span>{t('spa.arrive15Minutes')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-white mt-2" />
                    <span>{t('spa.lateArrivals')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-white mt-2" />
                    <span>{t('spa.complimentaryRobe')}</span>
                  </li>
                </ul>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-lg font-bold uppercase tracking-wide mb-4 border-b border-white/20 pb-3">{t('spa.policies')}</h3>
                <ul className="space-y-3 text-white/80 font-light">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-white mt-2" />
                    <span>{t('spa.cancellationPolicy')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-white mt-2" />
                    <span>{t('spa.mobileSilenced')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-white mt-2" />
                    <span>{t('spa.gratuities')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery - Pool & Treatment Rooms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest-500 text-xs tracking-[0.3em] uppercase font-light">{t('spa.visualJourney')}</span>
            <h2 className="section-title mt-4">{t('spa.spaGallery')}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=1000&fit=crop" 
                  alt={t('spa.page.galleryAlt', { number: 1 })}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop" 
                  alt={t('spa.page.galleryAlt', { number: 2 })}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop" 
                  alt={t('spa.page.galleryAlt', { number: 3 })}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596178060810-4dd9c3c0eb1e?w=800&h=1000&fit=crop" 
                  alt={t('spa.page.galleryAlt', { number: 4 })}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&h=1000&fit=crop" 
                  alt={t('spa.page.galleryAlt', { number: 5 })}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=600&fit=crop" 
                  alt={t('spa.page.galleryAlt', { number: 6 })}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Column 4 */}
            <div className="space-y-4">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop" 
                  alt={t('spa.page.galleryAlt', { number: 7 })}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&h=1000&fit=crop" 
                  alt={t('spa.page.galleryAlt', { number: 8 })}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Brutalist */}
      <section className="py-24 bg-forest-900 text-white border-t-4 border-forest-950">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight">
              {t('spa.page.ctaTitle')}
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-light">
              {t('spa.page.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${locale}/booking`}>
                <Button className="btn-boutique rounded-none px-14 py-6 text-base">
                  {t('spa.page.makeReservation')}
                </Button>
              </Link>
              <a href="tel:+995422000000">
                <Button variant="outline" className="px-14 py-6 text-base border-2 border-white bg-transparent text-white hover:bg-white hover:text-forest-900 transition-all uppercase tracking-wider">
                  <Phone className="mr-2 w-5 h-5" />
                  {t('spa.page.call')}: +995 422 00 00 00
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}





