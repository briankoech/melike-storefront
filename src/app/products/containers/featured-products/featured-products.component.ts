import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Product } from '../../models';
import { ProductsFacade } from '../../store';
import { ProductDetailsComponent } from '../../components';
import { MatIconModule } from '@angular/material/icon';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from '../../../core/animations';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [
    ProductDetailsComponent,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss',
  animations: [
    trigger('slideAnimation', [
      transition('void => *', [useAnimation(fadeIn)]),
      transition('* => void', [useAnimation(fadeOut)]),
    ]),
  ],
})
export class FeaturedProductsComponent implements OnInit, OnDestroy {
  private productsFacade = inject(ProductsFacade);

  featuredProducts$ = this.productsFacade.featuredProducts$;
  count = this.productsFacade.featuredProductsCount;

  selectedSlide = 0;
  interval: any;

  ngOnInit(): void {
    this.productsFacade.loadFeaturedProducts();

    this.interval = setInterval(() => {
      this.onNext(true);
    }, 2000);
  }

  onNext(selfTrigger?: boolean) {
    if (!selfTrigger) {
      clearInterval(this.interval);
    }
    const next = this.selectedSlide + 1;
    const count = this.count() || 0;
    this.selectedSlide = next >= count ? 0 : next;
  }

  onPrevious() {
    clearInterval(this.interval);
    const prev = this.selectedSlide - 1;
    const count = this.count() || 0;
    this.selectedSlide = prev < 0 ? count - 1 : prev;
  }

  addToCart({ product, quantity }: { product: Product; quantity: number }) {
    this.productsFacade.addToCart(product, quantity);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
