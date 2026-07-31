import { absoluteUrl, hotel, localizedUrl } from '@/lib/site';
import { defaultLocale, isValidLocale, locales } from '@/i18n/config';
import { useTranslations } from 'next-intl';

interface HotelSchemaProps {
  locale: string;
}

function jsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function getSchemaLocale(locale: string) {
  return isValidLocale(locale) ? locale : defaultLocale;
}

export function HotelSchema({ locale }: HotelSchemaProps) {
  const t = useTranslations();
  const schemaLocale = getSchemaLocale(locale);
  const pageUrl = localizedUrl(schemaLocale);
  const siteUrl = absoluteUrl();
  
  const hotelData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": t('site.name'),
    "description": t('site.description'),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": t('contact.address.street'),
      "addressLocality": t('contact.address.city'),
      "addressRegion": hotel.address.region,
      "postalCode": hotel.address.postalCode,
      "addressCountry": hotel.address.countryCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": hotel.geo.latitude,
      "longitude": hotel.geo.longitude
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "priceRange": hotel.priceRange,
    "telephone": hotel.phone.display,
    "email": hotel.email,
    "@id": `${siteUrl}/#hotel`,
    "url": pageUrl,
    "image": `${siteUrl}/og-image.svg`,
    "inLanguage": schemaLocale,
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": t('rooms.amenities.wifi'), "value": true },
      { "@type": "LocationFeatureSpecification", "name": t('rooms.amenities.parking'), "value": true },
      { "@type": "LocationFeatureSpecification", "name": t('rooms.amenities.pool'), "value": true },
      { "@type": "LocationFeatureSpecification", "name": t('rooms.amenities.spa'), "value": true },
      { "@type": "LocationFeatureSpecification", "name": t('rooms.amenities.fitness'), "value": true },
      { "@type": "LocationFeatureSpecification", "name": t('rooms.amenities.dining'), "value": true },
      { "@type": "LocationFeatureSpecification", "name": t('nav.bar'), "value": true },
      { "@type": "LocationFeatureSpecification", "name": t('rooms.roomService'), "value": true }
    ],
    "checkinTime": "15:00",
    "checkoutTime": "12:00",
    "numberOfRooms": 50,
    "availableLanguage": locales
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: jsonLd(hotelData) }}
    />
  );
}

export function LocalBusinessSchema({ locale }: HotelSchemaProps) {
  const t = useTranslations();
  const schemaLocale = getSchemaLocale(locale);
  const pageUrl = localizedUrl(schemaLocale);
  const siteUrl = absoluteUrl();
  
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": t('site.name'),
    "image": `${siteUrl}/og-image.svg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": t('contact.address.street'),
      "addressLocality": t('contact.address.city'),
      "addressRegion": hotel.address.region,
      "postalCode": hotel.address.postalCode,
      "addressCountry": hotel.address.countryCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": hotel.geo.latitude,
      "longitude": hotel.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "telephone": hotel.phone.display,
    "email": hotel.email,
    "@id": `${siteUrl}/#localbusiness`,
    "url": pageUrl,
    "priceRange": "$$",
    "inLanguage": schemaLocale
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: jsonLd(localBusiness) }}
    />
  );
}






