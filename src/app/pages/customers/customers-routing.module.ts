import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
  { path: '', component: CustomersListComponent},
  { path: ':id/add', component: CustomersEditComponent},
  { path: ':id/edit', component: CustomersEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
