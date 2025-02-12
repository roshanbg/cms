import { Component, inject } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../model/products.model';
import { CustomDatePipe } from '../../pipe/custom-date.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomDatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  _productsService = inject(ProductsService);

  getLowStockProducts(): Product[] {
    return this._productsService.products.filter((e) => e.countity < 10);
  }

  getExpiringSoonProducts(): Product[] {
    const today = new Date();
    const tenDaysLater = new Date();
    tenDaysLater.setDate(today.getDate() + 10);

    const aftertenDays = +this._getFormattedDate(tenDaysLater);

    return this._productsService.products.filter(
      (e) => e.expDate < aftertenDays
    );
  }

  private _getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}${month}${day}`;
  }
}
