import { Component, Injector, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';

import { GenericPageEdit } from 'src/app/shared/abstracts/generic.page-edit';
import { Customer, ItenOrder, Order, Product } from '../../../shared/models';
import { CustomerService, OrderService } from '../../../shared/services';
import { take } from 'rxjs/operators';
import { TableOptions, TableButtonColor, TableButtonIcon } from 'src/app/components/table/table-models';
import { ItensModalComponent } from './itens-modal/itens-modal.component';


@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent extends GenericPageEdit<Order, OrderService> {

  @ViewChild('modalProducts') modalproducts: ItensModalComponent;

  customer: Customer = { id: null, address: null, birthday: null, cpf: '', email: '', name: '' };
  itens: ItenOrder[] = [];

  tableOptions: TableOptions = {
    entity: this.itens,
    fields: [
      { name: 'name', label: 'Nome', pipe: 'uppercase' },
      { name: 'email', label: 'E-mail', pipe: 'lowerCase' },
      { name: 'cpf', label: 'CPF' }
    ],
    headers: ['Nome', 'E-mail', 'CPF'],
    emptyMessage: 'Nenhum Registro encontrado',
    buttons: [
      { eventHandler: (event) => this.goToEdit(event.id), title: 'Editar', color: TableButtonColor.PRIMARY, icon: TableButtonIcon.EDIT },
      { eventHandler: (event) => this.removeIten(event), title: 'Deletar', color: TableButtonColor.DANGER, icon: TableButtonIcon.TRASH }
    ]
  };

  constructor(
    protected injector: Injector,
    private orderService: OrderService,
    private customerService: CustomerService,
  ) {
    super(injector, orderService, 'orders', '/orders');
  }

  async formConstructorById() {
    return this.formBuilder.group({
      id: [this.object.id],
      cod: [{ value: this.object.cod, disabled: true }, [Validators.required, Validators.minLength(3)]],
      time: [{ value: this.object.time, disabled: true }],
      customer: this.formBuilder.group({
        id: [this.object.customer.id],
        name: [{ value: this.object.customer.name, disabled: true }, [Validators.required, Validators.minLength(3)]],
        email: [this.object.customer.email, [Validators.required, Validators.email]],
        cpf: [this.object.customer.cpf, [Validators.required]],
        birthday: [new Date(this.object.customer.birthday).toISOString().substr(0, 10)],
      }),
      products: [this.object.products],
      amount: [this.object.amount],
    });
  }

  async formConstructorNew() {
    return this.formBuilder.group({
      id: [null],
      cod: [{ value: new Date().valueOf(), disabled: true }, [Validators.required, Validators.minLength(3)]],
      time: [{ value: `${new Date().toISOString().substr(0, 10)} - ${new Date().getHours()}:${new Date().getMinutes()}`, disabled: true }],
      customer: this.formBuilder.group({
        id: [''],
        name: [{ value: '', disabled: true }, [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        cpf: ['', [Validators.required]],
        birthday: [''],
      }),
      products: [[]],
      amount: [0],
    });
  }

  async guardListAttrib() {
    this.customer = this.object.customer;
    this.itens = this.object.products;
  }

  async returnListAttrib() {
    this.object.customer = this.customer;
    this.object.products = this.itens;
  }

  findCustomerByCpf(cpf: string) {
    this.customerService.getByCPF(cpf).pipe(take(1)).subscribe((response) => {
      this.customer = response[0];
      this.formulario.patchValue({ customer: this.customer });
    })
  }

  goToEdit(id) {

  }

  openModalProduct() {
    this.modalproducts.open();
  }
  addIten(iten) {
    this.itens.push(iten)
    this.refreshItens(this.itens);
  }
  removeIten(iten: ItenOrder) {
    this.itens.splice(this.itens.indexOf(this.checkIten(iten)), 1);
    this.refreshItens(this.itens);
  }

  checkIten(iten: ItenOrder): ItenOrder {
    const itenFind = this.itens.find((i: ItenOrder) => i.product.id === iten.product.id);
    return itenFind;
  }
  refreshItens(itens) {
    let total = 0;
    for (let i of itens) {
      total += i.amount;
    }
    this.formulario.patchValue({ amount: total })
    this.onSubmit();
  }

  listFactory() {

  }

}
