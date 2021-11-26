import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ikUpCase]'
})
export class UpperDirective {

  public valor;

  constructor(
    private el: ElementRef,
    private render: Renderer2) { }

  @HostListener('keyup', ['$event']) onKeyup($event: any) {
    this.valor = $event.target.value.toUpperCase();
    this.render.setProperty(this.el.nativeElement, 'value', this.valor);
  }

  @HostListener('input', ['$event']) onKeypress($event: any) {
    this.valor = $event.target.value.toUpperCase();
    this.render.setProperty(this.el.nativeElement, 'value', this.valor);
  }
}
