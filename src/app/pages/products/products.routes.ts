import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditorComponent } from './products-editor/products-editor.component';
import { PageMode } from '../../model/enums.model';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsListComponent,
      },
      {
        path: 'new',
        component: ProductsEditorComponent,
        data: {
          pageMode: PageMode.creat,
        },
      },
      {
        path: 'edit/:id',
        component: ProductsEditorComponent,
        data: {
          pageMode: PageMode.edit,
        },
      },
      {
        path: ':id',
        component: ProductsEditorComponent,
        data: {
          pageMode: PageMode.view,
        },
      },
    ],
  },
];
