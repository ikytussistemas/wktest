import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const BASE_URL = '';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsModule,
    RouterModule,
    ReactiveFormsModule

  ]
})
export class ConfigModule { }
