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
      expDate: '5/1/2025',
      unitPrice: 5,
    },
    {
      id: 2,
      name: 'Mars',
      countity: 10,
      expDate: '5/2/2025',
      unitPrice: 10,
    },
    {
      id: 3,
      name: 'Galexy',
      countity: 7,
      expDate: '8/3/2025',
      unitPrice: 9,
    },
  ];
}
