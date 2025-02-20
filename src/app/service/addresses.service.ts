import { Injectable } from '@angular/core';
import { Addresses } from '../model/adresses.model';

@Injectable({
  providedIn: 'root',
})
export class AddressesService {
  addresses: Addresses[] = [
    {
      id: 1,
      name: 'Dubai',
      street: 'Nad Alhammar',
      building: 'Alzaroni',
      apartmentNumber: 204,
    },
    {
      id: 2,
      name: 'Dubai',
      street: 'Nad Alhammar',
      building: 'Mai',
      apartmentNumber: 206,
    },
    {
      id: 3,
      name: 'Asharja',
      street: 'Manzel',
      building: 'Marena',
      apartmentNumber: 611,
    },
  ];
}
