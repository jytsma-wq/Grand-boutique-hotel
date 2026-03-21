export interface Room {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: any;
  slug: { current: string };
  features: string[];
}

export interface Experience {
  _id: string;
  name: string;
  description: string;
  image: any;
  category: string;
}
