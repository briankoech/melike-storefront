import { AsyncPipe, CurrencyPipe, KeyValuePipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductsFacade } from '../../store';
import { Product } from '../../models';
import { QuantityUpdaterComponent } from '../../components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    KeyValuePipe,
    CurrencyPipe,
    NgIf,
    QuantityUpdaterComponent,
    RouterLink,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private readonly productsFacade = inject(ProductsFacade);

  cartItems$ = this.productsFacade.cartItems$;
  cartTotal$ = this.productsFacade.cartTotal$;

  ngOnInit() {}

  addToCart(product: Product) {
    this.productsFacade.addToCart(product, 1);
  }

  removeFromCart(product: Product) {
    this.productsFacade.removeFromCart(product);
  }

  removeOneFromCart(product: Product) {
    this.productsFacade.removeOneFromCart(product);
  }
}
