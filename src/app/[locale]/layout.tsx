import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale, isRtlLocale } from '@/i18n/config';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/hotel/Navigation';
import TopBar from '@/components/hotel/TopBar';
import Footer from '@/components/hotel/Footer';
import MariamChatbot from '@/components/hotel/MariamChatbot';
import WhatsAppButton from '@/components/hotel/WhatsAppButton';
import { inter, playfairDisplay, lato } from '@/lib/fonts';
import '@/app/globals.css';


export const metadata: Metadata = {
  title: {
    default: 'Batumi Boutique Hotel | Luxury Stay in Georgia',
    template: '%s | Batumi Boutique Hotel',
  },
  description: 'Experience modern architecture at Batumi\'s premier boutique hotel. Refined luxury meets Georgian hospitality on the stunning Black Sea coast. Rooms, spa, fine dining & events.',
  keywords: [
    'Batumi Hotel', 'Boutique Hotel Georgia', 'Black Sea Hotel', 'Luxury Hotel Batumi',
    'Batumi Accommodation', 'Georgia Beach Hotel', 'Spa Hotel Batumi', 'Fine Dining Batumi',
    'Conference Venue Batumi', 'Wedding Venue Georgia', 'Batumi Boutique',
    'ბათუმის სასტუმრო', 'отель батуми', 'Batumi otel',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://batumiboutique.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ka': '/ka',
      'ru': '/ru',
      'tr': '/tr',
      'he': '/he',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: 'Batumi Boutique Hotel',
    description: 'Where Modern Luxury Meets the Black Sea. 2026 architecture, refined rooms, world-class spa, Georgian fine dining.',
    type: 'website',
    siteName: 'Batumi Boutique Hotel',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batumi Boutique Hotel',
    description: 'Where Modern Luxury Meets the Black Sea',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as Locale)) {
    notFound();
  }
  
  const messages = await getMessages();
  const isRtl = isRtlLocale(locale as Locale);

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} data-scroll-behavior="smooth" suppressHydrationWarning className={`${inter.variable} ${playfairDisplay.variable} ${lato.variable}`}>
      <head />
      <body className="antialiased min-h-screen flex flex-col font-sans bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <TopBar locale={locale as Locale} />
            <Navigation locale={locale as Locale} siteSettings={null} />
            <main className="flex-grow">
              {children}
            </main>
            <Footer locale={locale as Locale} />
            <MariamChatbot locale={locale as Locale} />
            <WhatsAppButton />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
