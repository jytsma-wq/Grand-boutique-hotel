import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { type SanityImageSource } from '@sanity/image-url/lib/types/types';
import { unstable_cache } from 'next/cache';
import { defaultLocale, isValidLocale, type Locale } from '@/i18n/config';
import { type SanityBarPage, type SanityImage, type SanityRestaurantPage } from '@/types/sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const isSanityConfigured = Boolean(projectId && dataset);

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset: dataset || 'production',
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function getImageUrl(source: SanityImageSource | SanityImage | string | null | undefined, width?: number): string {
  if (!source) return '/placeholder.jpg';
  
  // If it's a string (external URL), return as-is
  if (typeof source === 'string') return source;

  if (typeof source !== 'object') return '/placeholder.jpg';

  const imageSource = source as Record<string, unknown>;
  
  // If it's a Sanity image object, use urlFor
  if (imageSource._type === 'image' || imageSource.asset) {
    let imageBuilder = urlFor(source);
    if (width) imageBuilder = imageBuilder.width(width);
    return imageBuilder.url();
  }
  
  return '/placeholder.jpg';
}

function getSanityLocale(locale: string): Locale {
  return isValidLocale(locale) ? locale : defaultLocale;
}

function localizedField(fieldName: string, locale: Locale): string {
  if (locale === defaultLocale) return fieldName;
  return `coalesce(${fieldName}_${locale}, ${fieldName})`;
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
        "hotelNameLocalized": ${localizedField('hotelName', sanityLocale)},
        "taglineLocalized": ${localizedField('tagline', sanityLocale)}
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
        "name": ${localizedField('name', sanityLocale)},
        "shortDescription": ${localizedField('shortDescription', sanityLocale)},
        "fullDescription": ${localizedField('fullDescription', sanityLocale)},
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
        "name": ${localizedField('name', sanityLocale)},
        "shortDescription": ${localizedField('shortDescription', sanityLocale)},
        "fullDescription": ${localizedField('fullDescription', sanityLocale)},
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
        "heroTitleLocalized": ${localizedField('heroTitle', sanityLocale)},
        "heroSubtitleLocalized": ${localizedField('heroSubtitle', sanityLocale)},
        heroImage,
        welcomeSection {
          "title": ${localizedField('title', sanityLocale)},
          "description": ${localizedField('description', sanityLocale)}
        },
        "rooms": featuredRooms[]-> {
          _id,
          slug,
          "name": ${localizedField('name', sanityLocale)},
          "shortDescription": ${localizedField('shortDescription', sanityLocale)},
          size,
          maxGuests,
          images,
          priceUsd,
          priceGel,
          order
        }
      }
    `, null);
  },
  ['homePage'],
  { revalidate: 3600, tags: ['homePage'] }
);

const menuSectionProjection = (locale: Locale) => `
  menuSections[] {
    _key,
    sectionKey,
    "title": ${localizedField('title', locale)},
    "subtitle": ${localizedField('subtitle', locale)},
    image,
    items[] {
      _key,
      "name": ${localizedField('name', locale)},
      "description": ${localizedField('description', locale)},
      "origin": ${localizedField('origin', locale)},
      "region": ${localizedField('region', locale)},
      year,
      "ingredients": ${localizedField('ingredients', locale)},
      priceUsd,
      priceGel,
      included,
      image
    }
  }
`;

export const getRestaurantPage = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch<SanityRestaurantPage | null>(`
      *[_type == "restaurantPage"][0] {
        "title": ${localizedField('title', sanityLocale)},
        "description": ${localizedField('description', sanityLocale)},
        heroImage,
        images,
        openingHours,
        menuPdf,
        ${menuSectionProjection(sanityLocale)}
      }
    `, null);
  },
  ['restaurantPage'],
  { revalidate: 3600, tags: ['restaurantPage'] }
);

export const getBarPage = unstable_cache(
  async (locale: string) => {
    const sanityLocale = getSanityLocale(locale);
    return sanityFetch<SanityBarPage | null>(`
      *[_type == "barPage"][0] {
        "title": ${localizedField('title', sanityLocale)},
        "description": ${localizedField('description', sanityLocale)},
        heroImage,
        images,
        openingHours,
        menuPdf,
        ${menuSectionProjection(sanityLocale)}
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
        "name": ${localizedField('name', sanityLocale)},
        "description": ${localizedField('description', sanityLocale)},
        "benefits": ${localizedField('benefits', sanityLocale)},
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
        "title": ${localizedField('title', sanityLocale)},
        "description": ${localizedField('description', sanityLocale)},
        "includes": ${localizedField('includes', sanityLocale)},
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
        "title": ${localizedField('title', sanityLocale)},
        "description": ${localizedField('description', sanityLocale)},
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
        "question": ${localizedField('question', sanityLocale)},
        "answer": ${localizedField('answer', sanityLocale)},
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
        "title": ${localizedField('title', sanityLocale)},
        "description": ${localizedField('description', sanityLocale)},
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
