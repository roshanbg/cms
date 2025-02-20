import { Component, inject, input } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CheckOut, Product } from '../../model/products.model';
import { AddressesService } from '../../service/addresses.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ProductCardComponent, FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  productsService = inject(ProductsService);
  addressesService = inject(AddressesService);

  product = input.required<Product>();

  numberOfItems: number = 0;
  selectedOption = '';
  payment: string = '';
  inputCardNumber = '';

  updateQuantity(id: number, newQuantity: number): void {
    const product = this.productsService.products.find((e) => e.id === id);
    if (!product) return;

    const checkoutItem = this.productsService.checkOut.find((e) => e.id === id);

    if (!checkoutItem)
      this.productsService.checkOut.push({
        id: product.id,
        name: product.name,
        total: product.unitPrice * newQuantity,
      });
    else checkoutItem.total = product.unitPrice * newQuantity;

    this.productsService.checkOut = this.productsService.checkOut.filter(
      (e) => e.total !== 0
    );
    this.productsService.totalAmmount = 0;
    this.productsService.checkOut.forEach(
      (e) => (this.productsService.totalAmmount += e.total)
    );
  }
}
