import { ActionReducer, createReducer, on } from '@ngrx/store';
import { ProductState, adapter, initialProductState } from './products.state';
import {
  addToCart,
  clearCart,
  loadFeaturedProducts,
  loadFeaturedProductsFail,
  loadFeaturedProductsSuccess,
  loadProducts,
  loadProductsFail,
  loadProductsSuccess,
  loadSingleProduct,
  loadSingleProductFail,
  loadSingleProductsSuccess,
  removeFromCart,
  removeOneFromCart,
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

  // single product reducer
  on(loadSingleProduct, (state) => ({
    ...state,
    selectedProduct: null,
    loading: true,
  })),
  on(loadSingleProductsSuccess, (state, { product: selectedProduct }) => ({
    ...state,
    selectedProduct,
  })),
  on(loadSingleProductFail, (state, data) => ({
    ...state,
    loading: false,
    error: data.error,
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
  on(addToCart, (state, { product, quantity = 1 }) => {
    // check if product exists
    const { cart } = state;
    const _cart = JSON.parse(JSON.stringify(cart));

    let item = _cart[product.id];

    if (item) {
      item.quantity += quantity;
    } else {
      item = { quantity, product };
      _cart[product.id] = item;
    }

    return {
      ...state,
      cart: _cart,
    };
  }),
  on(removeFromCart, (state, { productId }) => {
    const { cart } = state;
    const _cart = JSON.parse(JSON.stringify(cart));

    if (_cart[productId]) {
      delete _cart[productId];
    }

    return {
      ...state,
      cart: _cart,
    };
  }),
  on(removeOneFromCart, (state, { productId }) => {
    const { cart } = state;
    const _cart = JSON.parse(JSON.stringify(cart));
    const item = _cart[productId];

    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      delete _cart[productId];
    }

    return {
      ...state,
      cart: _cart,
    };
  }),
  on(clearCart, (state) => {
    return {
      ...state,
      cart: {},
    };
  }),
);
