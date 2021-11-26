import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'valid-msg',
  template: `
    <div *ngIf="hasErro()" class="messages-error border-r border-l">
      {{ text }}
    </div>
  `,
  styles: []
})
export class ValidMsgComponent {

  @Input() control: AbstractControl;
  text: string;

  hasErro(): boolean {
    if (this.control.hasError('required') && this.control.touched) {
      this.text = `Campo necessário.`;
      return true;
    }

    if (this.control.hasError('email') && this.control.touched) {
      this.text = `E-mail invalido.`;
      return true;
    }

    if (this.control.hasError('minlength') && this.control.touched) {
      this.text = `Tamanho mínimo: ${this.control.errors.minlength.requiredLength} caracteres.`;
      return true;
    }

    if (this.control.hasError('maxlength') && this.control.touched) {
      this.text = `Tamanho máximo: ${this.control.errors.maxlength.requiredLength} caracteres.`;
      return true;
    }
    return false;
  }
}
