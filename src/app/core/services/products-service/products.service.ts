import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const BASE_URL = 'https://dummyjson.com';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly http = inject(HttpClient);

  constructor() {}

  getProducts() {
    return this.http.get(`${BASE_URL}/products`);
  }
}
