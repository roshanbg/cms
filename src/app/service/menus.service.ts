import { Injectable } from '@angular/core';
import { Menu } from '../model/menus.model';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  menus: Menu[] = [
    {
      id: 1,
      name: 'Chocolate',
    },
    {
      id: 2,
      name: 'Pizza',
    },
  ];
}
