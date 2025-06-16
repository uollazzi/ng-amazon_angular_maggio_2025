import { inject, Injectable } from '@angular/core';
import { Product, ProductsResponse } from '../models/product';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  ricerca: string = "";

  constructor(private http: HttpClient) { }

  // http: HttpClient = inject(HttpClient);

  async getProducts(): Promise<ProductsResponse> {
    const response = await fetch("https://dummyjson.com/products");
    const data: ProductsResponse = await response.json();

    return data;
  }

  getProductsObservable(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>("https://dummyjson.com/products");
  }

  async getProductById(id: string) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data: Product = await response.json();

    return data;
  }

  async getCategories() {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data: Category[] = await response.json();

    return data;
  }

  async searchProducts(q: string) {
    const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURI(q)}`);
    const data: ProductsResponse = await response.json();

    return data;
  }

  aggiornaStringRicerca(r: string) {
    console.log("NUOVA RICERCA:", r);
    this.ricerca = r;
  }
}
