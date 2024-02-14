import { AsyncPipe, CurrencyPipe, KeyValuePipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductsFacade } from '../../store';
import { data } from '../data';
import { Product } from '../../models';
import { QuantityUpdaterComponent } from '../../components';

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
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private readonly productsFacade = inject(ProductsFacade);

  cartItems$ = this.productsFacade.cartItems$;

  ngOnInit() {
    data.forEach((product) => this.productsFacade.addToCart(product, 1));
  }

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
