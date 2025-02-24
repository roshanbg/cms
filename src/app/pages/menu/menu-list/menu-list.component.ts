import { Component, inject } from '@angular/core';
import { MenusService } from '../../../service/menus.service';
import { ToolsComponent } from '../../../components/tools/tools.component';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [ToolsComponent, FontAwesomeModule, RouterLink, FormsModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
})
export class MenuListComponent {
  menusService = inject(MenusService);
  private _router = inject(Router);

  faSquarePlus = faSquarePlus;
  takeAction(event: { id: number; type: string }): void {
    switch (event.type) {
      case 'edit':
        this._router.navigateByUrl(`/menus/edit/${event.id}`);
        break;
      case 'view':
        this._router.navigateByUrl(`/menus/${event.id}`);
        break;
      case 'delete':
        this.deleteItem(event.id);
    }
  }

  deleteItem(id: number): void {
    this.menusService.menus = this.menusService.menus.filter(
      (e) => e.id !== id
    );
  }
}
