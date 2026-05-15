export interface SanityImage {
  _type?: 'image';
  asset?: unknown;
  alt?: string;
}

export interface PortableTextSpan {
  _type?: 'span';
  text?: string;
}

export interface PortableTextBlock {
  _type?: 'block';
  children?: PortableTextSpan[];
}

export interface SanityRoom {
  _id: string;
  slug?: string | { current?: string };
  name?: string;
  shortDescription?: string;
  fullDescription?: PortableTextBlock[] | string;
  size?: number | string;
  maxGuests?: number;
  amenities?: string[];
  images?: SanityImage[];
  priceUsd?: number;
  priceGel?: number;
  order?: number;
}

export interface SanityHomePage {
  heroTitle?: string;
  heroSubtitle?: string;
  heroTitleLocalized?: string;
  heroSubtitleLocalized?: string;
  heroImage?: SanityImage;
  welcomeSection?: {
    title?: string;
    description?: string;
  };
  featuredRooms?: SanityRoom[];
  rooms?: SanityRoom[];
}

export interface SiteSettings {
  hotelName?: string;
  hotelNameLocalized?: string;
  tagline?: string;
  taglineLocalized?: string;
}

export interface Experience {
  _id: string;
  name: string;
  description: string;
  image: unknown;
  category: string;
}
