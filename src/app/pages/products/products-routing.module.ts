import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsEditComponent } from './products-edit/products-edit.component';

import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent},
  { path: ':id/add', component: ProductsEditComponent},
  { path: ':id/edit', component: ProductsEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
