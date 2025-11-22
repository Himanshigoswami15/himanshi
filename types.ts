
export interface Dish {
  name: string;
  price: string;
  image: string;
  model?: string;
  description: string;
}

export interface MenuCategory {
  title: string;
  dishes: Dish[];
  featuredImage: string;
  video?: string;
}
