import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef, renderer: Renderer2) { 
    renderer.setStyle(el.nativeElement, 'color', '#e35e6b')
  }

}
