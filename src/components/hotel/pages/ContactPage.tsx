'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { type Locale } from '@/i18n/config';

interface ContactPageProps {
  locale: Locale;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ContactPage({ locale }: ContactPageProps) {
  const t = useTranslations();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const departments = [
    { name: t('contact.departments.reception'), phone: '+995 422 00 00 01', icon: Phone },
    { name: t('contact.departments.reservations'), phone: '+995 422 00 00 02', icon: MessageSquare },
    { name: t('contact.departments.restaurant'), phone: '+995 422 00 00 03', icon: Phone },
    { name: t('contact.departments.spa'), phone: '+995 422 00 00 04', icon: Phone },
    { name: t('contact.departments.events'), phone: '+995 422 00 00 05', icon: Phone },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <motion.div {...fadeInUp}>
            <span className="text-gold-400 text-sm tracking-widest uppercase">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-light mt-4 mb-4">{t('contact.title')}</h1>
            <div className="gold-line" />
            <p className="text-xl text-white/80 max-w-2xl mt-4">{t('contact.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-light text-charcoal-900 mb-8">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-charcoal-50 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-charcoal-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Message Sent!</h3>
                  <p className="text-charcoal-600">{t('contact.form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <Input required className="border-charcoal-200 focus:border-gold-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        {t('contact.form.email')}
                      </label>
                      <Input type="email" required className="border-charcoal-200 focus:border-gold-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <Input type="tel" className="border-charcoal-200 focus:border-gold-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        {t('contact.form.subject')}
                      </label>
                      <Input required className="border-charcoal-200 focus:border-gold-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <Textarea required rows={5} className="border-charcoal-200 focus:border-gold-400" />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="btn-luxury px-8 py-6">
                    <span>{isSubmitting ? 'Sending...' : t('contact.form.submit')}</span>
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-light text-charcoal-900 mb-8">{t('contact.departments.title')}</h2>
              
              <div className="space-y-6 mb-12">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-charcoal-50 hover:bg-charcoal-100 transition-colors">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                      <dept.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-charcoal-900">{dept.name}</div>
                      <a href={`tel:${dept.phone}`} className="text-gold-600 hover:text-gold-700">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Address */}
              <div className="bg-charcoal-900 text-white rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-gold-400">{t('contact.address.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-gold-400 mt-1" size={20} />
                    <div>
                      <div>{t('contact.address.street')}</div>
                      <div>{t('contact.address.city')}</div>
                      <div>{t('contact.address.postal')}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-gold-400" size={20} />
                    <div>24/7 Front Desk</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-gold-400" size={20} />
                    <a href="mailto:info@batumiboutique.com" className="hover:text-gold-400">
                      info@batumiboutique.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-charcoal-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-charcoal-400 mx-auto mb-4" />
            <p className="text-charcoal-600">Interactive Map</p>
            <p className="text-sm text-charcoal-400">Batumi, Georgia</p>
          </div>
        </div>
      </section>
    </main>
  );
}
