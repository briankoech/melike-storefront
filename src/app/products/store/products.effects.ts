import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../core/services';
import {
  loadFeaturedProducts,
  loadFeaturedProductsFail,
  loadFeaturedProductsSuccess,
  loadProducts,
  loadProductsFail,
  loadProductsSuccess,
  loadSingleProduct,
  loadSingleProductsSuccess,
} from './products.actions';
import { catchError, map, mergeMap, tap } from 'rxjs';
import { PageInfo, Product } from '../models';

export const fetchFeaturedProducts = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductsService)) => {
    return actions$.pipe(
      ofType(loadFeaturedProducts),
      mergeMap((pageInfo: PageInfo) =>
        productsService.getProducts(pageInfo).pipe(
          tap((rs: any) => console.log(rs)),
          map(({ products }: { products: Array<Product> }) =>
            loadFeaturedProductsSuccess({ data: products }),
          ),
          catchError((err) => [loadFeaturedProductsFail({ error: 'failed ' })]),
        ),
      ),
    );
  },
  { functional: true },
);

export const fetchProducts = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductsService)) => {
    return actions$.pipe(
      ofType(loadProducts),
      mergeMap((pageInfo: PageInfo) =>
        productsService.getProducts(pageInfo).pipe(
          tap((rs: any) => console.log(rs)),
          map(({ products }: { products: Array<Product> }) =>
            loadProductsSuccess({ data: products }),
          ),
          catchError((err) => [loadProductsFail({ error: 'failed ' })]),
        ),
      ),
    );
  },
  { functional: true },
);

export const fetchProductDetail = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductsService)) => {
    return actions$.pipe(
      ofType(loadSingleProduct),
      mergeMap(({ id }: any) =>
        productsService.getProduct(id).pipe(
          map((product: Product) => loadSingleProductsSuccess({ product })),
          catchError((err) => [loadProductsFail({ error: 'failed ' })]),
        ),
      ),
    );
  },
  { functional: true },
);
