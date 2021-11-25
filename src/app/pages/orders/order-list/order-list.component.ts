import { Component, Injector } from '@angular/core';
import { time } from 'console';

import { TableButtonColor, TableButtonIcon, TableOptions } from 'src/app/components/table/table-models';
import { ToolBarOptions } from 'src/app/components/toolbars/toolbar-base/toolbar-base.component';
import { GenericPageList } from 'src/app/shared/abstracts/generic.page-list';
import { Order } from 'src/app/shared/models';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent extends GenericPageList<Order, OrderService> {

  filter: any;
  toolbarOptions: ToolBarOptions = {
    emptyMessage: 'teste'
  };

  tableOptions: TableOptions = {
    entity: this.list,
    fields: [
      { name: 'cod', label: 'Código' },
      { name: 'time', label: 'Data / Hora' },
      { name: 'customer', sub: 'name', label: 'Cliente'},
      { name: 'amount', label: 'Valor do Pedido', pipe: 'currency'}
    ],
    headers: ['Código', 'Data/Hora', 'Cliente', 'Valor do Pedido'],
    emptyMessage: 'Nenhum registro encontrado',
    buttons: [
      { eventHandler: (event) => this.goToEdit(event.id), title: 'Editar', color: TableButtonColor.PRIMARY, icon: TableButtonIcon.EDIT },
      { eventHandler: (event) => this.openModalDelete(event.id, event.name), title: 'Deletar', color: TableButtonColor.DANGER, icon: TableButtonIcon.TRASH }
    ]
  };

  constructor(
    private inject: Injector,
    private orderService: OrderService
  ) {
    super(inject, orderService, 'time')
  }

  goToEdit(id: string) {
    this.router.navigate([`/orders/${id}/edit`])
  }

  filtrar(event?: any) {
  }

}
