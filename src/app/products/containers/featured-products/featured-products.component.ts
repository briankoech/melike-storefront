import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsFacade, loadFeaturedProducts } from '../../store';
import { data } from '../data';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  AsyncPipe,
  CurrencyPipe,
  JsonPipe,
  NgFor,
  PercentPipe,
} from '@angular/common';
import { Product } from '../../models';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CurrencyPipe,
    PercentPipe,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss',
})
export class FeaturedProductsComponent implements OnInit {
  private productsFacade = inject(ProductsFacade);

  list = data.map((item) => ({
    ...item,
    rating: new Array(Math.floor(item.rating)),
  }));

  featuredProducts$ = this.productsFacade.featuredProducts$;

  selectedSlide = 0;

  ngOnInit(): void {
    this.productsFacade.loadFeaturedProducts();
  }

  onNext() {
    const currentSlide = this.selectedSlide + 1;
    this.selectedSlide = currentSlide >= this.list.length ? 0 : currentSlide;
  }

  onPrevious() {
    const currentSlide = this.selectedSlide - 1;
    this.selectedSlide = currentSlide < 0 ? this.list.length - 1 : currentSlide;
  }

  createRange(num: number) {
    return new Array(Math.floor(num));
  }

  addToCart(product: Product) {
    this.productsFacade.addToCart(product);
  }
}
