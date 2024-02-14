import { Component, OnInit, inject } from '@angular/core';
import { ProductsFacade } from '../../store';
import { AsyncPipe } from '@angular/common';
import { ProductItemComponent } from '../../components';
import { Product } from '../../models';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  private productsFacade = inject(ProductsFacade);

  products$ = this.productsFacade.products$;

  ngOnInit(): void {
    this.productsFacade.loadProducts({ skip: 0, limit: 50 });
  }

  addToCart(product: Product) {
    this.productsFacade.addToCart(product, 1);
  }
}
