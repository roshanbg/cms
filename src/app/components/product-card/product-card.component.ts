import { Component, input, output } from '@angular/core';
import { Product } from '../../model/products.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();
  onClick = output<number>();

  numberOfItems: number = 0;

  public onAdd(): void {
    if (this.product().countity <= 0) return;

    this.numberOfItems += 1;
    this.product().countity -= 1;

    this.onClick.emit(this.numberOfItems);
  }

  public onRemove(): void {
    if (this.numberOfItems <= 0) return;

    this.numberOfItems -= 1;
    this.product().countity += 1;

    this.onClick.emit(this.numberOfItems);
  }
}
