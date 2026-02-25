import { Category } from './category';

export interface Product {
  product_id: number;
  productName: string;
  description: string;
  price: number;
  special_price: number | null;
  discount: number;
  image: string;
  quality: number;
  category: Category | null;
}
