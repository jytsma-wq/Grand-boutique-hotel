import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

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

export async function getSiteSettings(locale: string) {
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
}

export async function getRooms(locale: string) {
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
}

export async function getRoomBySlug(slug: string, locale: string) {
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
}

export async function getHomePage(locale: string) {
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
}

export async function getRestaurantPage(locale: string) {
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
}

export async function getBarPage(locale: string) {
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
}

export async function getSpaTreatments(locale: string) {
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
}

export async function getOffers(locale: string) {
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
}

export async function getExperiences(locale: string) {
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
}

export async function getGallery() {
  return client.fetch(`
    *[_type == "galleryImage"] | order(order asc) {
      _id,
      title,
      image,
      category,
      order
    }
  `);
}

export async function getChatbotKnowledge(locale: string) {
  return client.fetch(`
    *[_type == "chatbotKnowledge"] {
      _id,
      "question": question_${locale},
      "answer": answer_${locale},
      keywords
    }
  `);
}

export async function getPopup(locale: string) {
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
}
