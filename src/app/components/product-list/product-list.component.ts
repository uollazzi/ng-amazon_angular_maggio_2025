import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product, ProductsResponse } from '../../models/product';
import { RouterModule } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productsService: ProductsService = inject(ProductsService);
  products: Product[] = [];

  ngOnInit(): void {
    // this.productsService
    //   .getProducts()
    //   .then(r => this.products = r.products)
    //   .catch(err => console.log("ERRORE NEL RECUPERO DEI PRODOTTI"));

    this.productsService
      .getProductsObservable()
      .pipe(
        catchError(err => {
          console.log("ERRORE NEL RECUPERO DEI PRODOTTI", err);
          return of(undefined);
        })
      )
      .subscribe(r => this.products = r != undefined ? r.products : []);
  }

  filteredProducts() {
    if (this.productsService.ricerca != "")
      return this.products.filter(x => x.title.toLowerCase().includes(this.productsService.ricerca.toLowerCase()));
    else
      return this.products;
  }
}
