import { Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';

export const MENU_ROUTERS: Routes = [
  {
    path: 'menus',
    component: MenuListComponent,
  },
];
