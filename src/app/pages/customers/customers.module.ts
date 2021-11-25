import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { ComponentsModule } from '../../components/components.module';
import { ConfigModule } from '../../config/config.module';


@NgModule({
  declarations: [
    CustomersListComponent,
    CustomersEditComponent
  ],
  imports: [
    ConfigModule,
    ComponentsModule,
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
