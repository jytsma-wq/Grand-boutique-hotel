import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { unstable_cache } from 'next/cache';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2024-01-01',
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

export const getSiteSettings = unstable_cache(
  async (locale: string) => {
    return client.fetch(`
      *[_type == "siteSettings"][0] {
        hotelName,
        tagline,
        logo,
        address,
        phone,
        email,
        socialLinks,
        "hotelNameLocalized": hotelName_${locale},
        "taglineLocalized": tagline_${locale}
      }
    `);
  },
  ['siteSettings'],
  { revalidate: 86400, tags: ['siteSettings'] }
);

export const getRooms = unstable_cache(
  async (locale: string) => {
    return client.fetch(`
      *[_type == "room"] | order(order asc) {
        _id,
        slug,
        "name": name_${locale},
        "shortDescription": shortDescription_${locale},
        "fullDescription": fullDescription_${locale},
        size,
        maxGuests,
        amenities,
        images,
        priceUsd,
        priceGel,
        order
      }
    `);
  },
  ['rooms'],
  { revalidate: 3600, tags: ['rooms'] }
);

export const getRoomBySlug = unstable_cache(
  async (slug: string, locale: string) => {
    return client.fetch(`
      *[_type == "room" && slug.current == $slug][0] {
        _id,
        slug,
        "name": name_${locale},
        "shortDescription": shortDescription_${locale},
        "fullDescription": fullDescription_${locale},
        size,
        maxGuests,
        amenities,
        images,
        priceUsd,
        priceGel,
        order
      }
    `, { slug });
  },
  ['roomBySlug'],
  { revalidate: 3600, tags: ['rooms'] }
);

export const getHomePage = unstable_cache(
  async (locale: string) => {
    return client.fetch(`
      *[_type == "homePage"][0] {
        heroTitle,
        heroSubtitle,
        "heroTitleLocalized": heroTitle_${locale},
        "heroSubtitleLocalized": heroSubtitle_${locale},
        heroImage,
        sections
      }
    `);
  },
  ['homePage'],
  { revalidate: 3600, tags: ['homePage'] }
);

export const getRestaurantPage = unstable_cache(
  async (locale: string) => {
    return client.fetch(`
      *[_type == "restaurantPage"][0] {
        "title": title_${locale},
        "description": description_${locale},
        heroImage,
        images,
        openingHours,
        menuPdf
      }
    `);
  },
  ['restaurantPage'],
  { revalidate: 3600, tags: ['restaurantPage'] }
);

export const getBarPage = unstable_cache(
  async (locale: string) => {
    return client.fetch(`
      *[_type == "barPage"][0] {
        "title": title_${locale},
        "description": description_${locale},
        heroImage,
        images,
        openingHours,
        menuPdf
      }
    `);
  },
  ['barPage'],
  { revalidate: 3600, tags: ['barPage'] }
);

export const getSpaTreatments = unstable_cache(
  async (locale: string) => {
    return client.fetch(`
      *[_type == "spaTreatment"] | order(order asc) {
        _id,
        slug,
        "name": name_${locale},
        "description": description_${locale},
        "benefits": benefits_${locale},
        duration,
        priceUsd,
        priceGel,
        image,
        order
      }
    `);
  },
  ['spaTreatments'],
  { revalidate: 3600, tags: ['spaTreatments'] }
);

export const getOffers = unstable_cache(
  async (locale: string) => {
    return client.fetch(`
      *[_type == "offer" && active == true] | order(order asc) {
        _id,
        slug,
        "title": title_${locale},
        "description": description_${locale},
        "includes": includes_${locale},
        image,
        validFrom,
        validTo,
        priceUsd,
        priceGel,
        order
      }
    `);
  },
  ['offers'],
  { revalidate: 1800, tags: ['offers'] }
);

export const getExperiences = unstable_cache(
  async (locale: string) => {
    return client.fetch(`
      *[_type == "experience"] | order(order asc) {
        _id,
        slug,
        "title": title_${locale},
        "description": description_${locale},
        image,
        distance,
        order
      }
    `);
  },
  ['experiences'],
  { revalidate: 86400, tags: ['experiences'] }
);

export const getGallery = unstable_cache(
  async () => {
    return client.fetch(`
      *[_type == "galleryImage"] | order(order asc) {
        _id,
        title,
        image,
        category,
        order
      }
    `);
  },
  ['gallery'],
  { revalidate: 86400, tags: ['gallery'] }
);

export const getChatbotKnowledge = unstable_cache(
  async (locale: string) => {
    return client.fetch(`
      *[_type == "chatbotKnowledge"] {
        _id,
        "question": question_${locale},
        "answer": answer_${locale},
        keywords
      }
    `);
  },
  ['chatbotKnowledge'],
  { revalidate: 86400, tags: ['chatbotKnowledge'] }
);

export const getPopup = unstable_cache(
  async (locale: string) => {
    return client.fetch(`
      *[_type == "popup" && active == true][0] {
        _id,
        "title": title_${locale},
        "description": description_${locale},
        image,
        buttonText,
        buttonLink,
        active
      }
    `);
  },
  ['popup'],
  { revalidate: 900, tags: ['popup'] }
);
