import { Injectable, Injector } from '@angular/core';

import { Customer } from '../models';
import { GenericService } from '../abstracts/generic.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends GenericService<Customer> {

  constructor(protected injector: Injector) {
    super(injector, 'customers');
  }

  getByCPF(cpf: string) {
    return this.db
      .collection<Customer>('customers', ref => ref.where('cpf', '>=', cpf))
      .valueChanges()
  }

}

