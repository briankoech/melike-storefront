import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { CartItem, Product } from '../models';

export interface ProductState extends EntityState<Product> {
  loading: boolean;
  products: Product[];
  error: string | null;
  cart: Record<number, CartItem>;
  featuredProducts: Product[];
  selectedProduct: Product | null;
}

export const selectId = (product: Product) => product.id;

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId,
});

export const initialProductState: ProductState = adapter.getInitialState({
  loading: false,
  products: [],
  error: null,
  cart: {},
  featuredProducts: [],
  selectedProduct: null,
});
