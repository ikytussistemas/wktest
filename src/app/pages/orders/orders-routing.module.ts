import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';

const routes: Routes = [
  { path: '', component: OrderMenuComponent },
  { path: 'list', component: OrderListComponent },
  { path: 'list/:id/add', component: OrderEditComponent },
  { path: ':id/add', component: OrderEditComponent },
  { path: ':id/edit', component: OrderEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
