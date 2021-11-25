export type IkButton = {
  eventHandler: (event?: any) => any,
  title?: string,
  color?: ButtonColor,
  icon?: ButtonIcons,
}

export enum ButtonColor {
  PRIMARY = 'outline-primary',
  SECONDARY = 'outline-secondary',
  SUCCESS = 'outline-success',
  DANGER = 'outline-danger',
  WARNING = 'outline-warning',
  INFO = 'outline-info',
  LIGHT = 'outline-light',
  DARK = 'outline-dark',
}

export enum ButtonIcons {
  EDIT = 'edit',
  PLUS = 'plus',
  SAVE = 'check',
  TRASH = 'trash',

  RETURN = 'door-open',
  TURMA = 'table',
}
