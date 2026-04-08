interface HotelSchemaProps {
  locale: string;
}

export function HotelSchema({ locale }: HotelSchemaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourtimestudio.com';
  
  const hotelData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": locale === 'ka' ? 'Grand Boutique Hotel' : locale === 'ru' ? 'Grand Boutique Hotel' : locale === 'tr' ? 'Grand Boutique Hotel' : locale === 'he' ? 'Grand Boutique Hotel' : locale === 'ar' ? 'Grand Boutique Hotel' : 'Grand Boutique Hotel',
    "description": locale === 'ka' ? '2026 ì. ìîäåðíè àðõèòåêòóðà áàòóìèñ ïðåìèóì áóòèê ãîñòèíèöàè. Óàâêõâåëè ãóñàêëóëè ôóôóëè çêàðòóëè ãðóçèóë ìòêîëáèñ ìäèâîìäåáèò.' : locale === 'ru' ? 'Ñîâðåìåííàÿ àðõèòåêòóðà 2026 ãîäà â ïðåìèàëüíîì áóòèê-îòåëå Áàòóìè. Èçûñêàííàÿ ðîñêîøü ãðóçèíñêîãî ãîñòåïðèèìñòâà íà æèâîïèñíîì ÷åðíîìîðñêîì ïîáåðåæüå.' : locale === 'tr' ? '2026 modern mimarisi ile Batumi\'nin önde gelen butik otelinde zarif lüks. Muhteþem Karadeniz kýyýsýnda Gürcü misafirperverliði.' : locale === 'he' ? 'àçàìà àäàøà 2026 bimat hamkhaber shel hotel boutique mukdam leBatumi. hofek yad leGeorgia al chof yam shachor.' : 'Experience 2026 modern architecture at Batumi\'s premier boutique hotel. Refined luxury meets Georgian hospitality on the stunning Black Sea coast.',
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rustaveli Avenue",
      "addressLocality": "Batumi",
      "addressCountry": "GE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.6507",
      "longitude": "41.6356"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "priceRange": "$120-$800",
    "telephone": "+995 123 456 789",
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourtimestudio.com';
  
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Grand Boutique Hotel",
    "image": `${siteUrl}/og-image.svg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rustaveli Avenue",
      "addressLocality": "Batumi",
      "addressRegion": "Adjara",
      "postalCode": "6000",
      "addressCountry": "GE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.6507",
      "longitude": "41.6356"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "telephone": "+995 123 456 789",
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







