import { Product } from './product.model';

export interface CartItem {
  quantity: number;
  product: Product;
}
