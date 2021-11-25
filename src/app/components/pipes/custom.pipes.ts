import { PipeTransform, Pipe} from '@angular/core';
import {currency, length, lowerCase, mes, semana, upperCase } from './transformsFn';

@Pipe({
    name: 'customPipe'
})
export class CustomPipe implements PipeTransform {
    transform(value: any, type: string ): string {
      switch (type) {
        case 'length':
          return length(value);
          break;
        case 'lowerCase':
          return lowerCase(value);
          break;
        case 'uppercase':
          return upperCase(value);
          break;
        case 'mes':
          return mes(value);
          break;
        case 'semana':
          return semana(value);
          break;
        case 'currency':
          return currency(value);
          break;

        default:
          return value;
          break;
      }
    }
}
