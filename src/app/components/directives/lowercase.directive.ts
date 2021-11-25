import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[ikLoCase]'
})
export class LowerDirective {

    public valor: string;

    constructor(
        private el: ElementRef,
        private render: Renderer2) {}

    @HostListener('keyup', ['$event']) onKeylocase($event: any) {
        this.valor = $event.target.value.toLowerCase();
        this.render.setProperty(this.el.nativeElement, 'value', this.valor);
    }

    @HostListener('input', ['$event']) onKeylowercase($event: any) {
      this.valor = $event.target.value.toLowerCase();
      this.render.setProperty(this.el.nativeElement, 'value', this.valor);
  }
}
