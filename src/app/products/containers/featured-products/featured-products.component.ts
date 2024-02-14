import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models';
import { ProductsFacade } from '../../store';
import { data } from '../data';
import { ProductDetailsComponent } from '../../components';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [ProductDetailsComponent, MatIconModule, AsyncPipe, JsonPipe],
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

  addToCart({ product, quantity }: { product: Product; quantity: number }) {
    this.productsFacade.addToCart(product, quantity);
  }
}
