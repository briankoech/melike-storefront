import { ProductState } from './products.state';

export * from './products.state';
export * from './products.actions';
export * from './products.reducers';
export * from './products.facade';

export * as productEffects from './products.effects';

export interface AppState {
  products: ProductState;
}
