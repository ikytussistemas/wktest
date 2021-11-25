import { AnimationEvent } from '@angular/animations';
import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { componentAnimations, ComponentAnimationState } from '../../shared/component-animation';
import { ComponentRef } from '../../shared/component-ref';
import { LoadingConfig, LoadingData, LOADING_CONFIG_TOKEN } from './loading-config';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [componentAnimations.fadeComponent],
})
export class LoadingComponent implements OnInit {

  static teste = new EventEmitter<boolean>();
  color = 'red';
  style = { color: 'blue', fontWeight: 'bolder', fontStyle: 'italic' };
  animationState: ComponentAnimationState = 'default';

  constructor(
    readonly data: LoadingData,
    readonly ref: ComponentRef,
    @Inject(LOADING_CONFIG_TOKEN) private loadingConfig: LoadingConfig
  ) {
    data.message = data.message || 'Aguarde...';
  }

  ngOnInit(): void {
  }

  ct(): void {
    const t = LoadingComponent.teste.emit(true);
  }

  close(): void {
    this.animationState = 'closing';
    this.ref.close();
  }

  onFadeFinished(event: AnimationEvent): void {
    const { toState } = event;
    const isFadeOut = (toState as ComponentAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }
}
