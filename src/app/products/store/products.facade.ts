import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectCartItems,
  selectCartItemsCount,
  selectFeaturedProducts,
  selectProducts,
} from './products.selectors';
import {
  addToCart,
  loadFeaturedProducts,
  loadProducts,
} from './products.actions';
import { Observable } from 'rxjs';
import { ProductState } from './products.state';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductsFacade {
  private readonly store = inject(Store<ProductState>);

  readonly products$: Observable<any> = this.store.select(selectProducts);
  readonly featuredProducts$ = this.store.select(selectFeaturedProducts);
  readonly cartItems$ = this.store.select(selectCartItems);
  readonly cartItemsCount$ = this.store.select(selectCartItemsCount);

  loadFeaturedProducts(): void {
    this.store.dispatch(loadFeaturedProducts({ skip: 30, limit: 7 }));
  }

  loadProducts(skip: number, limit: number): void {
    this.store.dispatch(loadProducts({ skip, limit }));
  }

  addToCart(product: Product): void {
    this.store.dispatch(addToCart({ data: product }));
  }
}
