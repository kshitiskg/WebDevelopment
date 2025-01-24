import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
  standalone: true
})
export class NaPipe implements PipeTransform {

  transform(value: any, msg:string='N/A'): string {
      return (value === null || value === undefined || value === '')? msg :value; 
  }

}
