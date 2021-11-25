import { Injectable, Injector } from '@angular/core';

import { GenericService } from '../abstracts/generic.service';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService<Product> {

  constructor(protected injector: Injector) {
    super(injector, 'products');
  }

}
