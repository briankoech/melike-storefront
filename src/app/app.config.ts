import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productEffects, productsReducer } from './products';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// TODO: set prod mode

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ products: productsReducer }),
    provideEffects(productEffects),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording state changes when the extension window is not open
      trace: true, // Record and log all actions
      traceLimit: 75, // Limit the stack trace frames stored
    }),
    provideAnimationsAsync(),
  ],
};
