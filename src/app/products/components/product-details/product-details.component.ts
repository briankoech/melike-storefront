import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Product } from '../../models';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuantityUpdaterComponent } from '../quantity-updater/quantity-updater.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    QuantityUpdaterComponent,
    CurrencyPipe,
    PercentPipe,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<{
    product: Product;
    quantity: number;
  }>();

  count = signal<number>(1);
  selectedImage = signal<string | null>(null);

  createRange(num: number) {
    return new Array(Math.floor(num));
  }

  onAddToCart() {
    this.addToCart.emit({ product: this.product, quantity: this.count() });
  }

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement() {
    this.count.update((value) => (value === 1 ? value : value - 1));
  }

  updateSelectedImage(image: string) {
    this.selectedImage.set(image);
  }
}
