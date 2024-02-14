import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, MatButtonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() addToCart = new EventEmitter<Product>();

  onAddToCart(product: Product) {
    this.addToCart.emit(product);
  }
}
