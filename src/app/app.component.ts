import { Component } from '@angular/core';
import { CategoryButtonsComponent } from "./components/category-buttons/category-buttons.component";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoryButtonsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-amazon';
}
