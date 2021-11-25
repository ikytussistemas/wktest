import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
