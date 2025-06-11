import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-category-buttons',
  imports: [],
  templateUrl: './category-buttons.component.html',
  styleUrl: './category-buttons.component.css'
})
export class CategoryButtonsComponent implements OnInit {
  categories: Category[] = [];
  productsService: ProductsService = inject(ProductsService);

  ngOnInit(): void {
    this.productsService.getCategories()
      .then(r => this.categories = r)
      .catch(err => console.log(err));
  }
}
