import { Component, Injector } from '@angular/core';
import { TableButtonColor, TableButtonIcon, TableOptions } from 'src/app/components/table/table-models';
import { ToolBarOptions } from 'src/app/components/toolbars/toolbar-base/toolbar-base.component';
import { GenericPageList } from 'src/app/shared/abstracts/generic.page-list';
import { CustomerService } from 'src/app/shared/services';
import { Customer } from '../../../shared/models/customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent extends GenericPageList<Customer, CustomerService> {

  filter: any;
  toolbarOptions: ToolBarOptions;

  tableOptions: TableOptions = {
    entity: this.list,
    fields: [
      { name: 'name', label: 'Nome', pipe: 'uppercase' },
      { name: 'email', label: 'E-mail', pipe: 'lowerCase' },
      { name: 'cpf', label: 'CPF' }
    ],
    headers: ['Nome', 'E-mail', 'CPF'],
    emptyMessage: 'Nenhum Registro encontrado',
    buttons: [
      { eventHandler: (event) => this.goToEdit(event.id), title: 'Editar', color: TableButtonColor.PRIMARY, icon: TableButtonIcon.EDIT },
      { eventHandler: (event) => this.openModalDelete(event.id, event.name), title: 'Deletar', color: TableButtonColor.DANGER, icon: TableButtonIcon.TRASH }
    ]
  };

  constructor(
    private inject: Injector,
    private customerService: CustomerService
  ) {
    super(inject, customerService, 'name')
  }

  goToEdit(id: string) {
    this.router.navigate([`customers/${id}/edit`])
  }

  filtrar(event?: any) {
  }

}
