import { formatCurrency, getCurrencySymbol } from "@angular/common";

export function semana(value) {
  switch (value) {
    case 0:
      return 'Domingo';
      break;
    case 1:
      return 'Segunda-feira';
      break;
    case 2:
      return 'Terça-feira';
      break;
    case 3:
      return 'Quarta-feira';
      break;
    case 4:
      return 'Quinta-feira';
      break;
    case 5:
      return 'Sexta-feira';
      break;
    case 6:
      return 'Sábado';
      break;
    default:
      return value;
      break;
  }
};

export function mes(value) {
  switch (value) {
    case 1:
      return 'Janeiro';
      break;
    case 2:
      return 'Fevereiro';
      break;
    case 3:
      return 'Março';
      break;
    case 4:
      return 'Abril';
      break;
    case 5:
      return 'Maio';
      break;
    case 6:
      return 'Junho';
      break;
    case 7:
      return 'Julho';
      break;
    case 8:
      return 'Agosto';
      break;
    case 9:
      return 'Setembro';
      break;
    case 10:
      return 'OUtubro';
      break;
    case 11:
      return 'Novembro';
      break;
    case 12:
      return 'Dezembro';
      break;
    default:
      return value;
      break;
  }
}

export function lowerCase(value: string) {
  return value.toLowerCase()
}

export function upperCase(value: string) {
  return value.toUpperCase()
}

export function length(value: any) {
  return value.length;
}

export function currency(value: any) {
  return formatCurrency(value, 'pt-BR', getCurrencySymbol('BRL', 'wide'), 'BRL', '1.2-2');
}
