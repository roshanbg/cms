import { Routes } from '@angular/router';
import { AddressesListComponent } from './addresses-list/addresses-list.component';
import { PageMode } from '../../model/enums.model';
import { AddressesEditorComponent } from './addresses-editor/addresses-editor.component';

export const ADDRESSES_ROUTES: Routes = [
  {
    path: 'addresses',
    children: [
      {
        path: '',
        component: AddressesListComponent,
      },
      {
        path: 'new',
        component: AddressesEditorComponent,
        data: {
          pageMode: PageMode.creat,
        },
      },
      {
        path: 'edit/:id',
        component: AddressesEditorComponent,
        data: {
          pageMode: PageMode.edit,
        },
      },
      {
        path: ':id',
        component: AddressesEditorComponent,
        data: {
          pageMode: PageMode.view,
        },
      },
    ],
  },
];
