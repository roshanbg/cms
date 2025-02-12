import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customDatePipe',
  standalone: true,
})
export class CustomDatePipe implements PipeTransform {
  transform(value: number): string {
    let date = value.toString();
    date = date.slice(0, 4) + '/' + date.slice(4);
    date = date.slice(0, 7) + '/' + date.slice(7);
    return date;
  }
}
