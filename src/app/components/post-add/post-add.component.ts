import { Component, inject } from '@angular/core';
import { NuovoPost } from '../../models/post';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-post-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {
  model: NuovoPost = new NuovoPost();

  ps = inject(ProductsService);

  aggiungiPost() {
    console.log(this.model);
    this.ps.addPost(this.model);
    this.model = new NuovoPost();

    // qui potrei chiamare il servizio per fare una HTTP POST e salvare il post sul server
  }
}
