// src/app/[locale]/layout.tsx
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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
  return {
    title: locale === 'en' ? 'Grand Boutique Hotel' : locale === 'ka' ? 'დიდი ბუტიკ ჰოტელი' : 'Grand Boutique Hotel',
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