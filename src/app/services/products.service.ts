import { Injectable } from '@angular/core';
import { ProductsResponse } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  ricerca: string = "";

  constructor() { }

  async getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data: ProductsResponse = await response.json();
    // console.log(data);
    return data;
  }

  aggiornaStringRicerca(r: string) {
    console.log("NUOVA RICERCA:", r);
    this.ricerca = r;
  }
}
