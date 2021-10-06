import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() { // Escuta evento no hospedeiro da diretiva | Tag HTML
    /*
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
    );
    */
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    /*
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
    );
    */
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string; // Fazer associação de um atributo
                                                                // ou uma classe do HTML para uma variável
  /*
  //CASO PRECISE DE MANIPULAÇÃO EXTRA
  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra aqui
    return this.backgroundColor;
  }
  private backgroundColor: string;
  */
  constructor(/*private _elementRef: ElementRef, private _renderer: Renderer2*/) {

  }

}
