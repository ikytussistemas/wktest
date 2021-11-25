import { InjectionToken } from '@angular/core';

export type ComponentType = 'warning' | 'info' | 'success' | 'danger';

export interface ComponentConfig {
    position?: {
        top: number;
        right: number;
    };
    animation?: {
        fadeOut: number;
        fadeIn: number;
    };
}

export const defaultComponentConfig: ComponentConfig = {
    position: {
        top: 50,
        right: 40,
    },
    animation: {
        fadeOut: 2500,
        fadeIn: 300,
    },
};

export const COMPONENT_CONFIG_TOKEN = new InjectionToken('component-config');
