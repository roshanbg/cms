import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PRODUCTS_ROUTES } from './pages/products/products.routes';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ADDRESSES_ROUTES } from './pages/addresses/addresses.routes';
import { MENU_ROUTERS } from './pages/menu/menu.routes';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  ...PRODUCTS_ROUTES,
  {
    path: 'shopping',
    component: ShoppingListComponent,
  },
  ...ADDRESSES_ROUTES,
  ...MENU_ROUTERS,
];
