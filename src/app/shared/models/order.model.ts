import { ItenOrder } from './itenOrder.model';
import { Customer } from './customer.model';

export class Order {
  id: string;
  cod: string;
  time: Date;
  customer: Customer;
  products: ItenOrder[];
  amount: number;
}
