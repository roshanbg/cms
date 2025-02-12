import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PRODUCTS_ROUTES } from './pages/products/products.routes';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  ...PRODUCTS_ROUTES,
];
