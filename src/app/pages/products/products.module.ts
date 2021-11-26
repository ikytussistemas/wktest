import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigModule } from '../../config/config.module';
import { ComponentsModule } from '../../components/components.module';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';


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
