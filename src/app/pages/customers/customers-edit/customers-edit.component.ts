import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { Customer } from '../../../shared/models/customer.model';
import { CustomerService } from 'src/app/shared/services';
import { GenericPageEdit } from 'src/app/shared/abstracts/generic.page-edit';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss']
})
export class CustomersEditComponent extends GenericPageEdit<Customer, CustomerService> {

  constructor(
    protected injector: Injector,
    private customerService: CustomerService
  ) {
    super(injector, customerService, 'customers', '/customers');
  }

  async formConstructorById() {
    return this.formBuilder.group({
      id: [this.object.id],
      name: [this.object.name, [Validators.required, Validators.minLength(3)]],
      email: [this.object.email, [Validators.required, Validators.email]],
      cpf: [this.object.cpf, [Validators.required]],
      birthday: [new Date(this.object.birthday).toISOString().substr(0, 10)],
      address: this.formBuilder.group({
        cep: [this.object.address.cep],
        numero: [this.object.address.numero],
        complemento: [this.object.address.complemento],
        logradouro: [this.object.address.logradouro],
        bairro: [this.object.address.bairro],
        estado: [this.object.address.estado],
        cidade: [this.object.address.cidade],
      })
    })
  }

  async formConstructorNew() {
    return this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      birthday: [''],
      address: this.formBuilder.group({
        cep: [''],
        numero: [''],
        complemento: [''],
        logradouro: [''],
        bairro: [''],
        estado: [''],
        cidade: [''],
      })
    });
  }

}
