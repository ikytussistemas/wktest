import { Injectable, Injector, Inject, Output } from '@angular/core';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';

import { ComponentRef } from '../shared/component-ref';
import { LoadingConfig, LOADING_CONFIG_TOKEN, LoadingData } from './loading/loading-config';
import { LoadingComponent } from './loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private lastLoading: ComponentRef;
  private loading: ComponentRef;

  constructor(
    private overlay: Overlay,
    private parentInjector: Injector,
    @Inject(LOADING_CONFIG_TOKEN) private loadingConfig: LoadingConfig
  ) {

  }

  show(data?: LoadingData) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const loadingRef = new ComponentRef(overlayRef);
    this.lastLoading = loadingRef;

    const injector = this.getInjector(data, loadingRef, this.parentInjector);
    const loadingPortal = new ComponentPortal(LoadingComponent, null, injector);

    overlayRef.attach(loadingPortal);
    this.loading = loadingRef;
    return loadingRef;
  }

  dismiss() {
    this.loading.close();
  }

  private getPositionStrategy() {
    return this.overlay.position()
      .global()
      .top(this.getPosition())
      .right(this.loadingConfig.position.right + '%');
  }

  private getPosition() {
    const lastToastIsVisible = this.lastLoading && this.lastLoading.isVisible();
    const position = lastToastIsVisible
      ? this.lastLoading.getPosition().bottom
      : this.loadingConfig.position.top;

    return position + 'px';
  }

  private getInjector(data: LoadingData, loadingRef: ComponentRef, parentInjector: Injector) {
    const tokens = new WeakMap();

    tokens.set(LoadingData, data);
    tokens.set(ComponentRef, loadingRef);

    return new PortalInjector(parentInjector, tokens);
  }
}
