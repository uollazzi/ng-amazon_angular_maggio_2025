import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productsService: ProductsService = inject(ProductsService);
  products: Product[] = [];

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .then(r => this.products = r.products)
      .catch(err => console.log("ERRORE NEL RECUPERO DEI PRODOTTI"));

    this.products.filter(f => f.title == this.productsService.ricerca)
  }

  filterProduct() {
    if (this.productsService.ricerca != "")
      return this.products.filter(x => x.title == this.productsService.ricerca);
    else
      return this.products;
  }
}
