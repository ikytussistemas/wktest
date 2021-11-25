import { Injectable, Injector } from '@angular/core';

import { GenericService } from '../abstracts/generic.service';
import { Order } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends GenericService<Order> {

  constructor(protected injector: Injector) {
    super(injector, 'orders');
  }

}

