import { absoluteUrl, hotel, localizedUrl } from '@/lib/site';
import { defaultLocale, isValidLocale } from '@/i18n/config';

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
  const schemaLocale = getSchemaLocale(locale);
  const pageUrl = localizedUrl(schemaLocale);
  const siteUrl = absoluteUrl();
  
  const hotelData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": hotel.name,
    "description": hotel.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hotel.address.streetAddress,
      "addressLocality": hotel.address.locality,
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
      { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Spa", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Fitness Center", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Bar", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": true }
    ],
    "checkinTime": "15:00",
    "checkoutTime": "12:00",
    "numberOfRooms": 50,
    "languages": ["English", "Georgian", "Russian", "Turkish", "Hebrew", "Arabic"]
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
  const schemaLocale = getSchemaLocale(locale);
  const pageUrl = localizedUrl(schemaLocale);
  const siteUrl = absoluteUrl();
  
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": hotel.name,
    "image": `${siteUrl}/og-image.svg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hotel.address.streetAddress,
      "addressLocality": hotel.address.locality,
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







