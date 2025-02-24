import { Component, inject } from '@angular/core';
import { MenusService } from '../../../service/menus.service';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
})
export class MenuListComponent {
  menusService = inject(MenusService);
}
