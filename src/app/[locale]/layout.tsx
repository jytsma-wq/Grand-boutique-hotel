// src/app/[locale]/layout.tsx
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { locales, isRtlLocale, type Locale } from "@/i18n/config";
import Navigation from "@/components/hotel/Navigation";
import Footer from "@/components/hotel/Footer";
import MariamChatbot from "@/components/hotel/MariamChatbot";
import { HotelSchema, LocalBusinessSchema } from "@/components/hotel/StructuredData";

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
  const dir = isRtlLocale(locale as Locale) ? 'rtl' : 'ltr';

  return (
    <>
      <HotelSchema locale={locale} />
      <LocalBusinessSchema />
      <div lang={locale} dir={dir}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        <NextIntlClientProvider messages={messages}>
          <Navigation locale={locale as Locale} />
          <main id="main-content">{children}</main>
          <Footer locale={locale as Locale} />
          <MariamChatbot locale={locale as Locale} />
        </NextIntlClientProvider>
      </div>
    </>
  );
}
