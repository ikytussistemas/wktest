import { Component, Injector } from '@angular/core';

import { TableButtonColor, TableButtonIcon, TableOptions } from '../../../components/table/table-models';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../../shared/services/product.service';
import { GenericPageList } from '../../../shared/abstracts/generic.page-list';
import { ToolbarOptions } from 'src/app/components/toolbars/toolbar-models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent extends GenericPageList<Product, ProductService> {

  filter: any;
  toolbarOptions: ToolbarOptions = {
    count: 5,
    counts:[5, 10, 15, 20],
    searchFields: [
      {
        id: 'nome',
        filterField: 'nome',
        placeholder:'Nome do Aluno',
      },
    ],
    isStatus: false,
  };

  tableOptions: TableOptions = {
    entity: this.list,
    fields: [
      {name: 'name', label: 'Nome', pipe: 'uppercase'},
      {name: 'value', label: 'Vr.Unit', pipe: 'currency'}
    ],
    headers: ['Descrição', 'Vr Unitário'],
    emptyMessage: 'Nenhum registro encontrado',
    buttons:[
      {eventHandler: (event)=>this.goToEdit(event.id), title: 'Editar', color: TableButtonColor.PRIMARY , icon: TableButtonIcon.EDIT},
      {eventHandler: (event)=>this.openModalDelete(event.id, event.name), title: 'Deletar', color: TableButtonColor.DANGER, icon: TableButtonIcon.TRASH}
    ]
  };

  constructor(
    private inject: Injector,
    private productService: ProductService
  ) {
    super(inject, productService, 'name')
  }

  goToEdit(id: string){
    this.router.navigate([`products/${id}/edit`])
  }

  filtrar(event?: any){
  }

}
