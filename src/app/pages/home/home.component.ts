import { Component, inject } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../model/products.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  _productsService = inject(ProductsService);

  getLowStockProducts(): Product[] {
    return this._productsService.products.filter((e) => e.countity < 10);
  }

  // getExpiringSoonProducts(): Product[] {
  //   // const today = new Date();
  //   // const tenDaysLater = new Date();
  //   // tenDaysLater.setDate(today.getDate() + 10);

  //   // return this._productsService.products.filter(
  //   //   (e) => e.expDate >= today && e.expDate <= tenDaysLater
  //   // );
  // }
}
