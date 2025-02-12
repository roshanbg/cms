import { Injectable } from '@angular/core';
import { Product } from '../model/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: 'Laben_App',
      countity: 5,
      expDate: 20250813,
      unitPrice: 5,
    },
    {
      id: 2,
      name: 'Mars',
      countity: 10,
      expDate: 20251013,
      unitPrice: 10,
    },
    {
      id: 3,
      name: 'Galexy',
      countity: 7,
      expDate: 20250910,
      unitPrice: 9,
    },
  ];
}
