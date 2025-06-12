import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  ps = inject(ProductsService);
  route = inject(ActivatedRoute);


  ngOnInit(): void {
    // recupero l'id dall'indirizzo
    const id = this.route.snapshot.paramMap.get("id")

    // con l'id recuperato chiamo il metodo del servizio
    // che recupera dal server un prodotto in base all'id
    this.ps.getProductById(id!)
      .then(prodotto => this.product = prodotto)
      .catch(err => console.log(err));
  }
}
