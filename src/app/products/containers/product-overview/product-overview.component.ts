import { Component, Input, inject } from '@angular/core';
import { ProductsFacade } from '../../store';
import { Product } from '../../models';
import { ProductDetailsComponent } from '../../components';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [ProductDetailsComponent, AsyncPipe],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.scss',
})
export class ProductOverviewComponent {
  @Input() id!: number;

  private productsFacade = inject(ProductsFacade);

  product$ = this.productsFacade.selectedProduct$;

  ngOnInit(): void {
    this.productsFacade.loadProductDetails(this.id);
  }

  addToCart({ product, quantity }: { product: Product; quantity: number }) {
    this.productsFacade.addToCart(product, quantity);
  }
}
