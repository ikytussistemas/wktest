import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigModule } from '../../config/config.module';
import { ComponentsModule } from '../../components/components.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { CustomersRoutingModule } from './customers-routing.module';


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
