import "./[locale]/globals.css";
import { headers } from "next/headers";
import { defaultLocale, isRtlLocale, isValidLocale } from "@/i18n/config";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestHeaders = await headers();
  const requestLocale = requestHeaders.get("x-next-intl-locale");
  const locale = requestLocale && isValidLocale(requestLocale) ? requestLocale : defaultLocale;
  const dir = isRtlLocale(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>{children}</body>
    </html>
  );
}

