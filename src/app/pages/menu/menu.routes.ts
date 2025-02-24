import { Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuEditorComponent } from './menu-editor/menu-editor.component';
import { PageMode } from '../../model/enums.model';

export const MENU_ROUTERS: Routes = [
  {
    path: 'menus',
    children: [
      {
        path: '',
        component: MenuListComponent,
      },
      {
        path: 'new',
        component: MenuEditorComponent,
        data: {
          pageMode: PageMode.creat,
        },
      },
      {
        path: 'edit/:id',
        component: MenuEditorComponent,
        data: {
          pageMode: PageMode.edit,
        },
      },
      {
        path: ':id',
        component: MenuEditorComponent,
        data: {
          pageMode: PageMode.view,
        },
      },
    ],
  },
];
