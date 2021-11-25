import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { ConfigModule } from '../../config/config.module';
import { ComponentsModule } from '../../components/components.module';
import { ItensModalComponent } from './order-edit/itens-modal/itens-modal.component';


@NgModule({
  declarations: [
    OrderMenuComponent,
    OrderListComponent,
    OrderEditComponent,
    ItensModalComponent
  ],
  imports: [
    ConfigModule,
    ComponentsModule,
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
