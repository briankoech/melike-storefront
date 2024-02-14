import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PageInfo, Product } from '../../../products/models';
import { Observable } from 'rxjs';

const BASE_URL = 'https://dummyjson.com';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly http = inject(HttpClient);

  constructor() {}

  getProducts(pageInfo: PageInfo) {
    return this.http.get(
      `${BASE_URL}/products?limit=${pageInfo.limit}&skip=${pageInfo.skip}`,
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${BASE_URL}/products/${id}`);
  }
}
