import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { GenericPageEdit } from 'src/app/shared/abstracts/generic.page-edit';
import { Product } from '../../../shared/models';
import { ProductService } from '../../../shared/services';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent extends GenericPageEdit<Product, ProductService> {

  constructor(
    protected injector: Injector,
    private productService: ProductService
  ) {
    super(injector, productService, 'products', '/products');
  }

  async formConstructorById() {
    return this.formBuilder.group({
      id: [this.object.id],
      name: [this.object.name, [Validators.required, Validators.minLength(3)]],
      value: [this.object.value],
    });
  }

  async formConstructorNew() {
    return this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      value: [0],
    });
  }

  async returnListAttrib() {
    this.object.name = this.object.name.toUpperCase();
  }

}
