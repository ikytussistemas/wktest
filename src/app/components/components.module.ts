import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { CustomPipe } from './pipes/custom.pipes';
import { FabComponent } from './buttons/fab/fab.component';
import { HeaderComponent } from './header/header.component'; import { ConfigModule } from '../config/config.module';
import { IkMaskDirective } from './directives/ik-mask.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ModalComponent } from './modal/modal.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TableComponent } from './table/table.component';
import { ToolbarBaseComponent } from './toolbars/toolbar-base/toolbar-base.component';
import { ToolbarEditComponent } from './toolbars/toolbar-edit/toolbar-edit.component';
import { ValidMsgComponent } from './valid-msg/valid-msg.component';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    CustomPipe,
    FabComponent,
    HeaderComponent,
    IkMaskDirective,
    LoadingSpinnerComponent,
    ModalComponent,
    ProgressBarComponent,
    TableComponent,
    ToolbarBaseComponent,
    ToolbarEditComponent,
    ValidMsgComponent,
  ],
  exports: [
    BaseLayoutComponent,
    CustomPipe,
    FabComponent,
    HeaderComponent,
    IkMaskDirective,
    LoadingSpinnerComponent,
    ModalComponent,
    ProgressBarComponent,
    TableComponent,
    ToolbarBaseComponent,
    ToolbarEditComponent,
    ValidMsgComponent,
  ],
  imports: [
    ConfigModule,
    CommonModule
  ]
})
export class ComponentsModule { }
