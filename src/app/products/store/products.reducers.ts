import { ActionReducer, createReducer, on } from '@ngrx/store';
import { ProductState, adapter, initialProductState } from './products.state';
import {
  addToCart,
  loadFeaturedProducts,
  loadFeaturedProductsFail,
  loadFeaturedProductsSuccess,
  loadProducts,
  loadProductsFail,
  loadProductsSuccess,
  removeFromCart,
} from './products.actions';

export const productsReducer: ActionReducer<ProductState> = createReducer(
  initialProductState,

  // products reducer
  on(loadProducts, (state) => ({ ...state, loading: true })),
  on(loadProductsSuccess, (state, { data }) => ({
    ...state,
    products: [...data],
  })),
  on(loadProductsFail, (state, rs) => ({
    ...state,
    loading: false,
    error: rs.error,
  })),

  // featured products reducer
  on(loadFeaturedProducts, (state) => ({ ...state, loading: true })),
  on(loadFeaturedProductsSuccess, (state, { data }) => ({
    ...state,
    featuredProducts: [...data],
  })),
  on(loadFeaturedProductsFail, (state, rs) => ({
    ...state,
    loading: false,
    error: rs.error,
  })),

  // cart actions reducer
  on(addToCart, (state, { data }) => ({
    ...state,
    cart: [...state.cart, data],
  })),
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    cart: state.cart.filter((p) => p.id !== productId),
  })),
);
