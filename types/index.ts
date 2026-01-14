export interface User {
  id: number;
  name: string;
  email: string;
  mobile_country_code: string;
  mobile: string;
  image: string;
  email_verified_at: boolean;
  count_items_cart: number;
  token: string;
}

// response body
export interface Response {
  status: boolean;
  status_code: number;
  data: User;
  message: string;
}
export type Product = {
  id: number;
  image: string;
  category: string;
  title: string;
  price: number;
  oldPrice: number | null;
  discount: string | null;
  rating: number;
  reviews: number;
  colors: string[];
};
