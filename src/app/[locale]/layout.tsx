// src/app/[locale]/layout.tsx
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { locales, isRtlLocale, type Locale } from "@/i18n/config";
import Navigation from "@/components/hotel/Navigation";
import Footer from "@/components/hotel/Footer";
import MariamChatbot from "@/components/hotel/MariamChatbot";
import "./globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'site' });
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourtimestudio.com'),
    title: t('name'),
    description: t('description'),
    openGraph: {
      title: t('name'),
      description: t('description'),
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourtimestudio.com',
      siteName: t('name'),
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: t('name'),
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('name'),
      description: t('description'),
      images: ['/og-image.svg'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={isRtlLocale(locale as Locale) ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navigation locale={locale as Locale} />
          <main>{children}</main>
          <Footer locale={locale as Locale} />
          <MariamChatbot locale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}