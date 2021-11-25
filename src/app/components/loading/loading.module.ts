import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { LoadingComponent } from './loading/loading.component';
import { defaultLoadingConfig, LOADING_CONFIG_TOKEN } from './loading/loading-config';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [LoadingComponent],
  entryComponents: [LoadingComponent]
})
export class LoadingModule {
  public static forRoot(config = defaultLoadingConfig): ModuleWithProviders<LoadingModule> {
    return {
      ngModule: LoadingModule,
      providers: [
        {
          provide: LOADING_CONFIG_TOKEN,
          useValue: { ...defaultLoadingConfig, ...config },
        },
      ],
    };
  }
}
