import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ComponentsModule } from '../../components/components.module';
import { ConfigModule } from '../../config/config.module';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsEditComponent
  ],
  imports: [
    ConfigModule,
    CommonModule,
    ComponentsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
