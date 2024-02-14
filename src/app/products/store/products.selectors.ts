import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { AppState, ProductState } from '.';
import { CartItem, Product } from '../models';

export const selectProductsFeature: MemoizedSelector<AppState, ProductState> =
  createFeatureSelector<ProductState>('products');

export const selectSelectedProduct: MemoizedSelector<AppState, Product> =
  createSelector(
    selectProductsFeature,
    (state): Product => state.selectedProduct as Product,
  );

export const selectFeaturedProducts: MemoizedSelector<
  AppState,
  Array<Product>
> = createSelector(
  selectProductsFeature,
  (state): Array<Product> => state.featuredProducts as Array<Product>,
);

export const selectProducts: MemoizedSelector<
  AppState,
  Array<Product>
> = createSelector(
  selectProductsFeature,
  (state): Array<Product> => state.products as Array<Product>,
);

export const selectCartItems: MemoizedSelector<
  AppState,
  Record<number, CartItem>
> = createSelector(
  selectProductsFeature,
  (state): Record<number, CartItem> => state.cart,
);

export const selectCartItemsCount: MemoizedSelector<AppState, number> =
  createSelector(selectCartItems, (items): number => {
    return Object.values(items).reduce((acc, item) => acc + item.quantity, 0);
  });
