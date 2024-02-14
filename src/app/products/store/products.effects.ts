import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../core/services';
import {
  loadFeaturedProducts,
  loadFeaturedProductsFail,
  loadFeaturedProductsSuccess,
  loadProducts,
} from './products.actions';
import { catchError, map, mergeMap, tap } from 'rxjs';
import { Product } from '../models';

export const fetchFeaturedProducts = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductsService)) => {
    return actions$.pipe(
      ofType(loadFeaturedProducts),
      tap((a) => console.log('loadFeaturedProducts effect', a)),
      mergeMap((a) =>
        productsService.getProducts().pipe(
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
