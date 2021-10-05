import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]' // apenas elementos do tipo p terão as propriedades dessa diretiva fundoAmarelo
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    //console.log(this._elementRef);
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
    );
  }
}
