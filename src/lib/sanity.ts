import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { unstable_cache } from 'next/cache';
import { defaultLocale, isValidLocale, type Locale } from '@/i18n/config';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const isSanityConfigured = Boolean(projectId && dataset);

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset: dataset || 'production',
  useCdn: true,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export function getImageUrl(source: any, width?: number): string {
  if (!source) return '/placeholder.jpg';
  
  // If it's a string (external URL), return as-is
  if (typeof source === 'string') return source;
  
  // If it's a Sanity image object, use urlFor
  if (source._type === 'image' || source.asset) {
    let builder = urlFor(source);
    if (width) builder = builder.width(width);
    return builder.url();
  }
  
  return '/placeholder.jpg';
}

function getSanityLocale(locale: string): Locale {
  return isValidLocale(locale) ? locale : defaultLocale;
}

async function sanityFetch<T>(
  query: string,
  fallback: T,
  params: Record<string, unknown> = {}
): Promise<T> {
  if (!isSanityConfigured) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Sanity is not configured. Falling back to local content.');
    }

    return fallback;
  }

  return client.fetch<T>(query, params);
}

export const getSiteSettings = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch(`
      *[_type == "siteSettings"][0] {
        hotelName,
        tagline,
        logo,
        address,
        phone,
        email,
        socialLinks,
        "hotelNameLocalized": hotelName_${sanityLocale},
        "taglineLocalized": tagline_${sanityLocale}
      }
    `, null);
  },
  ['siteSettings'],
  { revalidate: 86400, tags: ['siteSettings'] }
);

export const getRooms = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch(`
      *[_type == "room"] | order(order asc) {
        _id,
        slug,
        "name": name_${sanityLocale},
        "shortDescription": shortDescription_${sanityLocale},
        "fullDescription": fullDescription_${sanityLocale},
        size,
        maxGuests,
        amenities,
        images,
        priceUsd,
        priceGel,
        order
      }
    `, []);
  },
  ['rooms'],
  { revalidate: 3600, tags: ['rooms'] }
);

export const getRoomBySlug = unstable_cache(
  async (slug: string, locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch(`
      *[_type == "room" && slug.current == $slug][0] {
        _id,
        slug,
        "name": name_${sanityLocale},
        "shortDescription": shortDescription_${sanityLocale},
        "fullDescription": fullDescription_${sanityLocale},
        size,
        maxGuests,
        amenities,
        images,
        priceUsd,
        priceGel,
        order
      }
    `, null, { slug });
  },
  ['roomBySlug'],
  { revalidate: 3600, tags: ['rooms'] }
);

export const getHomePage = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch(`
      *[_type == "homePage"][0] {
        heroTitle,
        heroSubtitle,
        "heroTitleLocalized": heroTitle_${sanityLocale},
        "heroSubtitleLocalized": heroSubtitle_${sanityLocale},
        heroImage,
        sections
      }
    `, null);
  },
  ['homePage'],
  { revalidate: 3600, tags: ['homePage'] }
);

export const getRestaurantPage = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch(`
      *[_type == "restaurantPage"][0] {
        "title": title_${sanityLocale},
        "description": description_${sanityLocale},
        heroImage,
        images,
        openingHours,
        menuPdf
      }
    `, null);
  },
  ['restaurantPage'],
  { revalidate: 3600, tags: ['restaurantPage'] }
);

export const getBarPage = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch(`
      *[_type == "barPage"][0] {
        "title": title_${sanityLocale},
        "description": description_${sanityLocale},
        heroImage,
        images,
        openingHours,
        menuPdf
      }
    `, null);
  },
  ['barPage'],
  { revalidate: 3600, tags: ['barPage'] }
);

export const getSpaTreatments = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch(`
      *[_type == "spaTreatment"] | order(order asc) {
        _id,
        slug,
        "name": name_${sanityLocale},
        "description": description_${sanityLocale},
        "benefits": benefits_${sanityLocale},
        duration,
        priceUsd,
        priceGel,
        image,
        order
      }
    `, []);
  },
  ['spaTreatments'],
  { revalidate: 3600, tags: ['spaTreatments'] }
);

export const getOffers = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch(`
      *[_type == "offer" && active == true] | order(order asc) {
        _id,
        slug,
        "title": title_${sanityLocale},
        "description": description_${sanityLocale},
        "includes": includes_${sanityLocale},
        image,
        validFrom,
        validTo,
        priceUsd,
        priceGel,
        order
      }
    `, []);
  },
  ['offers'],
  { revalidate: 1800, tags: ['offers'] }
);

export const getExperiences = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch(`
      *[_type == "experience"] | order(order asc) {
        _id,
        slug,
        "title": title_${sanityLocale},
        "description": description_${sanityLocale},
        image,
        distance,
        order
      }
    `, []);
  },
  ['experiences'],
  { revalidate: 86400, tags: ['experiences'] }
);

export const getGallery = unstable_cache(
  async () => {
    return sanityFetch(`
      *[_type == "galleryImage"] | order(order asc) {
        _id,
        title,
        image,
        category,
        order
      }
    `, []);
  },
  ['gallery'],
  { revalidate: 86400, tags: ['gallery'] }
);

export const getChatbotKnowledge = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch(`
      *[_type == "chatbotKnowledge"] {
        _id,
        "question": question_${sanityLocale},
        "answer": answer_${sanityLocale},
        keywords
      }
    `, []);
  },
  ['chatbotKnowledge'],
  { revalidate: 86400, tags: ['chatbotKnowledge'] }
);

export const getPopup = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch(`
      *[_type == "popup" && active == true][0] {
        _id,
        "title": title_${sanityLocale},
        "description": description_${sanityLocale},
        image,
        buttonText,
        buttonLink,
        active
      }
    `, null);
  },
  ['popup'],
  { revalidate: 900, tags: ['popup'] }
);
