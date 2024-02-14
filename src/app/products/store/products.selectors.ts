import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { AppState, ProductState } from '.';
import { Product } from '../models';

export const selectProductsFeature: MemoizedSelector<AppState, ProductState> =
  createFeatureSelector<ProductState>('products');

export const selectFeaturedProducts: MemoizedSelector<
  AppState,
  Array<Product>
> = createSelector(
  selectProductsFeature,
  (rs): Array<Product> => rs.featuredProducts as Array<Product>,
);

export const selectProducts: MemoizedSelector<
  AppState,
  Array<Product>
> = createSelector(
  selectProductsFeature,
  (rs): Array<Product> => rs.products as Array<Product>,
);

export const selectCartItems: MemoizedSelector<
  AppState,
  Array<Product>
> = createSelector(
  selectProductsFeature,
  (rs): Array<Product> => rs.cart as Array<Product>,
);

export const selectCartItemsCount: MemoizedSelector<AppState, number> =
  createSelector(selectCartItems, (rs): number => rs.length);
