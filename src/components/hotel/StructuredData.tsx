interface HotelSchemaProps {
  locale: string;
}

function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://batumiboutique.com').replace(/\/$/, '');
}

export function HotelSchema({ locale }: HotelSchemaProps) {
  const siteUrl = getSiteUrl();
  
  const hotelData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Batumi Boutique Hotel",
    "description": "Experience 2026 modern architecture at Batumi's premier boutique hotel. Refined luxury meets Georgian hospitality on the stunning Black Sea coast.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rustaveli Avenue 123",
      "addressLocality": "Batumi",
      "addressRegion": "Adjara",
      "postalCode": "6000",
      "addressCountry": "GE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.6507,
      "longitude": 41.6356
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "priceRange": "$120-$800",
    "telephone": "+995 422 00 00 00",
    "email": "info@batumiboutique.com",
    "@id": `${siteUrl}/#hotel`,
    "url": siteUrl,
    "image": `${siteUrl}/og-image.svg`,
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelData) }}
    />
  );
}

export function LocalBusinessSchema() {
  const siteUrl = getSiteUrl();
  
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Batumi Boutique Hotel",
    "image": `${siteUrl}/og-image.svg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rustaveli Avenue 123",
      "addressLocality": "Batumi",
      "addressRegion": "Adjara",
      "postalCode": "6000",
      "addressCountry": "GE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.6507,
      "longitude": 41.6356
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "telephone": "+995 422 00 00 00",
    "email": "info@batumiboutique.com",
    "@id": `${siteUrl}/#localbusiness`,
    "url": siteUrl,
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}







