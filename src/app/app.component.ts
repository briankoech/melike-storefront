import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsFacade } from './products';
import { AsyncPipe } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe, MatBadgeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private productsFacade = inject(ProductsFacade);

  cartItemsCount$ = this.productsFacade.cartItemsCount$;
}
