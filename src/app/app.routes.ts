import { Routes } from '@angular/router';
import {
  FeaturedProductsComponent,
  ProductListComponent,
} from './products/containers';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './products/containers/featured-products/featured-products.component'
      ).then((m) => m.FeaturedProductsComponent),
  },
  {
    path: 'store',
    loadComponent: () =>
      import('./products/containers').then((m) => m.ProductListComponent),
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./products/containers').then((m) => m.ProductOverviewComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./products/containers').then((m) => m.CartComponent),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
