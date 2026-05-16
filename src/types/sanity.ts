export interface SanityImage {
  _type?: 'image';
  asset: {
    _ref: string;
    _type?: 'reference';
    _weak?: boolean;
  };
  crop?: {
    _type?: 'sanity.imageCrop';
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    _type?: 'sanity.imageHotspot';
    x: number;
    y: number;
    height: number;
    width: number;
  };
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

export interface SanityMenuItem {
  _key?: string;
  name: string;
  description?: string;
  origin?: string;
  region?: string;
  year?: string;
  ingredients?: string;
  priceUsd?: number;
  priceGel?: number;
  included?: boolean;
  image?: SanityImage | string;
}

export interface SanityMenuSection {
  _key?: string;
  sectionKey: string;
  title: string;
  subtitle?: string;
  image?: SanityImage | string;
  items?: SanityMenuItem[];
}

export interface SanityRestaurantPage {
  title?: string;
  description?: PortableTextBlock[] | string;
  heroImage?: SanityImage;
  images?: SanityImage[];
  openingHours?: Array<{ day?: string; hours?: string }>;
  menuPdf?: unknown;
  menuSections?: SanityMenuSection[];
}

export type SanityBarPage = SanityRestaurantPage;

export interface Experience {
  _id: string;
  name: string;
  description: string;
  image?: SanityImage;
  category: string;
}
