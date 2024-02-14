import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductsFacade } from './products';
import { AsyncPipe } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    MatBadgeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private productsFacade = inject(ProductsFacade);

  cartItemsCount$ = this.productsFacade.cartItemsCount$;

  ngOnInit(): void {
    // fetch cart from localstorage
  }

  ngOnDestroy(): void {
    // save cart to local storage
  }
}
