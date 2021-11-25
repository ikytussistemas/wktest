import { Injectable, Injector, Inject } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';

import { ComponentRef } from '../shared/component-ref';
import { ComponentConfig, COMPONENT_CONFIG_TOKEN } from '../shared/component-config';
import { ConfirmData, ConfirmComponent } from './confirm.component';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  private lastConfirm: ComponentRef;
  private confirm: ComponentRef;

  private subject = new Subject<any>();

  constructor(
    private overlay: Overlay,
    private parentInjector: Injector,
    @Inject(COMPONENT_CONFIG_TOKEN) private confirmConfig: ComponentConfig
  ) {

  }

  show(data?: ConfirmData) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const confirmRef = new ComponentRef(overlayRef);
    this.lastConfirm = confirmRef;

    const injector = this.getInjector(data, confirmRef, this.parentInjector);
    const confirmPortal = new ComponentPortal(ConfirmComponent, null, injector);

    overlayRef.attach(confirmPortal);
    this.confirm = confirmRef;

    return confirmRef;
  }

  private dismiss() {
    this.confirm.close();
  }

  private getPositionStrategy() {
    return this.overlay.position()
      .global()
      .top(this.getPosition())
      .right(this.confirmConfig.position.right + '%');
  }

  private getPosition() {
    const lastConfirmIsVisible = this.lastConfirm && this.lastConfirm.isVisible();
    const position = lastConfirmIsVisible
      ? this.lastConfirm.getPosition().bottom
      : this.confirmConfig.position.top;

    return position + 'px';
  }

  private getInjector(data: ConfirmData, loadingRef: ComponentRef, parentInjector: Injector) {
    const tokens = new WeakMap();

    tokens.set(ConfirmData, data);
    tokens.set(ComponentRef, loadingRef);

    return new PortalInjector(parentInjector, tokens);
  }
}
