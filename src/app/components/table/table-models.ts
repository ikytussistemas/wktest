import { Pipe } from '@angular/core';

type TableButton = {
  eventHandler: (event?: any) => any,
  title?: string,
  color?: TableButtonColor,
  icon?: TableButtonIcon,
}

type PipeType = 'currency'| 'length' | 'lowerCase' | 'mes' | 'semana' | 'uppercase';

export enum TableButtonColor {
  PRIMARY = 'outline-primary',
  SECONDARY = 'outline-secondary',
  SUCCESS = 'outline-success',
  DANGER = 'outline-danger',
  WARNING = 'outline-warning',
  INFO = 'outline-info',
  LIGHT = 'outline-light',
  DARK = 'outline-dark',
}

export enum TableButtonIcon {
  EDIT = 'edit',
  PLUS = 'plus',
  SAVE = 'check',
  TRASH = 'trash',
  USER = 'user',
  USERS = 'users',
}

export type TableField = {
  name: string,
  pipe?: PipeType,
  sub?: string,
  currency?: boolean;
  label?: string,
}

export type TableOptions = {
  entity: any[],
  headers: string[],
  fields: TableField[],
  buttons?: TableButton[],
  emptyMessage?: string,
}
