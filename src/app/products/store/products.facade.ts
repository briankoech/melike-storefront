import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
  selectFeaturedProducts,
  selectFeaturedProductsCount,
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
  private snackbar = inject(MatSnackBar);

  readonly selectedProduct$: Observable<any> = this.store.select(
    selectSelectedProduct,
  );
  readonly products$: Observable<any> = this.store.select(selectProducts);
  readonly featuredProducts$ = this.store.select(selectFeaturedProducts);
  readonly featuredProductsCount$ = this.store.select(
    selectFeaturedProductsCount,
  );
  readonly cartItems$ = this.store.select(selectCartItems);
  readonly cartItemsCount$ = this.store.select(selectCartItemsCount);
  readonly cartTotal$ = this.store.select(selectCartTotal);

  featuredProductsCount = toSignal<number>(this.featuredProductsCount$);

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
    this.snackbar.open('Added to cart', 'Dismiss', {
      duration: 1500,
    });
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
