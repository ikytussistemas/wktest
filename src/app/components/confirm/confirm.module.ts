import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { ConfirmComponent } from './confirm.component';
import { defaultComponentConfig, COMPONENT_CONFIG_TOKEN } from '../shared/component-config';

@NgModule({
  declarations: [ConfirmComponent],
  entryComponents: [ConfirmComponent],
  imports: [CommonModule, OverlayModule]
})
export class ConfirmModule {
  public static forRoot(config = defaultComponentConfig): ModuleWithProviders<ConfirmModule> {
    return {
      ngModule: ConfirmModule,
      providers: [
        {
          provide: COMPONENT_CONFIG_TOKEN,
          useValue: { ...defaultComponentConfig, ...config },
        },
      ],
    };
  }
 }
