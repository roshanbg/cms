import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../service/products.service';
import { Router, RouterLink } from '@angular/router';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomDatePipe } from '../../../pipe/custom-date.pipe';
import { CurrencyPipe } from '@angular/common';
import { ToolsComponent } from '../../../components/tools/tools.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    ToolsComponent,
    FontAwesomeModule,
    RouterLink,
    CustomDatePipe,
    CurrencyPipe,
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  private router = inject(Router);
  productsService = inject(ProductsService);

  faSquarePlus = faSquarePlus;

  takeAction(event: { id: number; type: string }): void {
    switch (event.type) {
      case 'edit':
        this.router.navigateByUrl(`/products/edit/${event.id}`);
        break;
      case 'view':
        this.router.navigateByUrl(`/products/${event.id}`);
        break;
      case 'delete':
        this.deleteItem(event.id);
    }
  }

  deleteItem(id: number): void {
    this.productsService.products = this.productsService.products.filter(
      (e) => e.id !== id
    );
  }
}
