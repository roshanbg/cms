import { Injectable, input } from '@angular/core';
import { CheckOut, Product } from '../model/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      imageUrl: '/assets/yogurt.jpeg',
      name: 'Laben App',
      countity: 5,
      expDate: 20250214,
      unitPrice: 5,
      selected: false,
    },
    {
      id: 2,
      imageUrl: '/assets/mars.jpeg',
      name: 'Mars',
      countity: 10,
      expDate: 20251013,
      unitPrice: 10,
      selected: false,
    },
    {
      id: 3,
      imageUrl: '/assets/galaxy.jpeg',
      name: 'Galaxy',
      countity: 7,
      expDate: 20250910,
      unitPrice: 9,
      selected: false,
    },
  ];

  totalAmmount: number = 0;
  checkOut: CheckOut[] = [];
}
