import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectCartItems,
  selectCartItemsCount,
  selectFeaturedProducts,
  selectProducts,
  selectSelectedProduct,
} from './products.selectors';
import {
  addToCart,
  clearCart,
  loadFeaturedProducts,
  loadProducts,
  loadSingleProduct,
  removeFromCart,
  removeOneFromCart,
} from './products.actions';
import { Observable } from 'rxjs';
import { ProductState } from './products.state';
import { PageInfo, Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductsFacade {
  private readonly store = inject(Store<ProductState>);

  readonly selectedProduct$: Observable<any> = this.store.select(
    selectSelectedProduct,
  );
  readonly products$: Observable<any> = this.store.select(selectProducts);
  readonly featuredProducts$ = this.store.select(selectFeaturedProducts);
  readonly cartItems$ = this.store.select(selectCartItems);
  readonly cartItemsCount$ = this.store.select(selectCartItemsCount);

  loadFeaturedProducts(): void {
    this.store.dispatch(loadFeaturedProducts({ skip: 30, limit: 7 }));
  }

  loadProducts(pageInfo: PageInfo): void {
    this.store.dispatch(loadProducts(pageInfo));
  }

  loadProductDetails(id: number): void {
    this.store.dispatch(loadSingleProduct({ id }));
  }

  addToCart(product: Product, quantity: number): void {
    this.store.dispatch(addToCart({ product, quantity }));
  }

  removeFromCart({ id: productId }: Product): void {
    this.store.dispatch(removeFromCart({ productId }));
  }

  removeOneFromCart({ id: productId }: Product): void {
    this.store.dispatch(removeOneFromCart({ productId }));
  }

  clearCart(): void {
    this.store.dispatch(clearCart());
  }
}
