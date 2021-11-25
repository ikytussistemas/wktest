import { Component, OnInit, Inject } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { ComponentAnimationState } from '../shared/component-animation';
import { ComponentRef } from '../shared/component-ref';
import { COMPONENT_CONFIG_TOKEN, ComponentConfig } from '../shared/component-config';

export class ConfirmData {
  message?: string;
  siFn?: () => void;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  animationState: ComponentAnimationState = 'default';

  constructor(
    readonly data: ConfirmData,
    readonly ref: ComponentRef,
    @Inject(COMPONENT_CONFIG_TOKEN) private confirmConfig: ComponentConfig
  ) {
    data.message = data.message || 'Deseja excluir registro?';
    data.siFn = data.siFn;
  }

  ngOnInit() {
  }

  close() {
    this.animationState = 'closing';
    this.ref.close();
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ComponentAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }
}
