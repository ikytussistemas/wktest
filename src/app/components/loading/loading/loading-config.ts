import { InjectionToken, TemplateRef } from '@angular/core';

export class LoadingData {
  message?: string;
  color?: {'color': string};
}

export type LoadingType = 'warning' | 'info' | 'success' | 'danger';

export interface LoadingConfig {
  position?: {
    top: number;
    right: number;
  };
  animation?: {
    fadeOut: number;
    fadeIn: number;
  };
}

export const defaultLoadingConfig: LoadingConfig = {
  position: {
    top: 50,
    right: 40,
  },
  animation: {
    fadeOut: 2500,
    fadeIn: 300,
  },
};

export const LOADING_CONFIG_TOKEN = new InjectionToken('loading-config');
