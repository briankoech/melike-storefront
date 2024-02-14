import { createAction, props } from '@ngrx/store';
import { Product } from '../models';

/** Products */
export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';
export const LOAD_PRODUCTS_FAIL = '[Products] Load Products Fail';

export const LOAD_PRODUCT_DETAIL = '[Products] Load Product Details';
export const LOAD_PRODUCT_DETAIL_SUCCESS =
  '[Products] Load Product Details Success';
export const LOAD_PRODUCT_DETAIL_FAIL = '[Products] Load Product Details Fail';

/* Feature Products */
export const LOAD_FEATURED_PRODUCTS =
  '[FEATURED_PRODUCTS] Load featured products';
export const LOAD_FEATURED_PRODUCTS_SUCCESS =
  '[FEATURED_PRODUCTS] Load featured products Success';
export const LOAD_FEATURED_PRODUCTS_FAIL =
  '[FEATURED_PRODUCTS] Load featured products Fail';

/* Cart */
export const ADD_TO_CART = '[Products] Add To Cart';
export const REMOVE_FROM_CART = '[Products] Remove From Cart';
export const REMOVE_ONE_FROM_CART = '[Products] Remove one quantity From Cart';
export const CLEAR_CART = '[Products] Clear all items from Cart';
export const LOAD_CART = '[Products] Load Cart';

export const loadProducts = createAction(
  LOAD_PRODUCTS,
  props<{ skip: number; limit: number }>(),
);
export const loadProductsSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{ data: Array<Product> }>(),
);
export const loadProductsFail = createAction(
  LOAD_PRODUCTS_FAIL,
  props<{ error: string }>(),
);

// single product
export const loadSingleProduct = createAction(
  LOAD_PRODUCT_DETAIL,
  props<{ id: number }>(),
);

export const loadSingleProductsSuccess = createAction(
  LOAD_PRODUCT_DETAIL_SUCCESS,
  props<{ product: Product }>(),
);

export const loadSingleProductFail = createAction(
  LOAD_PRODUCT_DETAIL_FAIL,
  props<{ error: string }>(),
);

export const loadFeaturedProducts = createAction(
  LOAD_FEATURED_PRODUCTS,
  props<{ skip: number; limit: number }>(),
);

export const loadFeaturedProductsSuccess = createAction(
  LOAD_FEATURED_PRODUCTS_SUCCESS,
  props<{ data: Array<Product> }>(),
);

export const loadFeaturedProductsFail = createAction(
  LOAD_FEATURED_PRODUCTS_FAIL,
  props<{ error: string }>(),
);

export const addToCart = createAction(
  ADD_TO_CART,
  props<{ product: Product; quantity: number }>(),
);

export const removeFromCart = createAction(
  REMOVE_FROM_CART,
  props<{ productId: number }>(),
);

export const removeOneFromCart = createAction(
  REMOVE_ONE_FROM_CART,
  props<{ productId: number }>(),
);

export const clearCart = createAction(CLEAR_CART);

export const loadCart = createAction(LOAD_CART);
