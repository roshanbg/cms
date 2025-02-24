import { Component, inject } from '@angular/core';
import { AddressesService } from '../../../service/addresses.service';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToolsComponent } from '../../../components/tools/tools.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-addresses-list',
  standalone: true,
  imports: [FontAwesomeModule, ToolsComponent, RouterLink],
  templateUrl: './addresses-list.component.html',
  styleUrl: './addresses-list.component.scss',
})
export class AddressesListComponent {
  addressesService = inject(AddressesService);
  private _router = inject(Router);

  faSquarePlus = faSquarePlus;

  takeAction(event: { id: number; type: string }): void {
    switch (event.type) {
      case 'edit':
        this._router.navigateByUrl(`addresses/edit/${event.id}`);
        break;
      case 'view':
        this._router.navigateByUrl(`addresses/${event.id}`);
        break;
      case 'delete':
        this.deleteItem(event.id);
    }
  }

  deleteItem(id: number): void {
    this.addressesService.addresses = this.addressesService.addresses.filter(
      (e) => e.id !== id
    );
  }
}
