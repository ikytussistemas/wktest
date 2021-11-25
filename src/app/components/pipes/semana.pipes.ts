import { PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'semana'
})
export class Semana implements PipeTransform {
    transform(dia: any ): string {
        if (dia === 0) {
            return 'Domingo';
        }
        if (dia === 1) {
            return 'Segunda-feira';
        }
        if (dia === 2) {
            return 'Terça-feira';
        }
        if (dia === 3) {
            return 'Quarta-feira';
        }
        if (dia === 4) {
            return 'Quinta-feira';
        }
        if (dia === 5) {
            return 'Sexta-feira';
        }
        if (dia === 6) {
            return 'Sábado';
        }
        return dia;
    }
}
