import { Injectable } from '@angular/core';
import { Product, ProductsResponse } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  ricerca: string = "";

  constructor() { }

  async getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data: ProductsResponse = await response.json();

    return data;
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
