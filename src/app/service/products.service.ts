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
    {
      id: 4,
      imageUrl: '/assets/barakat.jpeg',
      name: 'Barakat',
      countity: 15,
      expDate: 20260910,
      unitPrice: 5,
      selected: false,
    },
    {
      id: 5,
      imageUrl: '/assets/lays.jpeg',
      name: 'Lays',
      countity: 25,
      expDate: 20250810,
      unitPrice: 6.5,
      selected: false,
    },
    {
      id: 6,
      imageUrl: '/assets/kitkat.jpeg',
      name: 'KitKat',
      countity: 88,
      expDate: 20250410,
      unitPrice: 3,
      selected: false,
    },
    {
      id: 7,
      imageUrl: '/assets/pringles.jpeg',
      name: 'Pringles',
      countity: 45,
      expDate: 20250610,
      unitPrice: 12,
      selected: false,
    },
    {
      id: 8,
      imageUrl: '/assets/oreo.jpeg',
      name: 'OREO',
      countity: 78,
      expDate: 20250410,
      unitPrice: 15,
      selected: false,
    },
    {
      id: 9,
      imageUrl: '/assets/break.jpeg',
      name: 'BREAK',
      countity: 3,
      expDate: 20250110,
      unitPrice: 6,
      selected: false,
    },
    {
      id: 10,
      imageUrl: '/assets/lotus.jpeg',
      name: 'Lotus',
      countity: 25,
      expDate: 20250210,
      unitPrice: 11,
      selected: false,
    },
    {
      id: 11,
      imageUrl: '/assets/finns.jpeg',
      name: 'FINNS',
      countity: 2,
      expDate: 20250410,
      unitPrice: 3.5,
      selected: false,
    },
  ];

  totalAmmount: number = 0;
  checkOut: CheckOut[] = [];
}
