import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appChangeBorder]'
})
export class ChangeBorderDirective {
  @Input() colourBorder?: string;
  private colouringBorder: string = "";

  constructor(private elm:ElementRef) { }

  //change border colour when user hover over
  @HostListener('mouseenter') hoverBorder(){
    this.hoveringBorder(this.colouringBorder);
}
  hoveringBorder(colouringBorder: string):void{

      this.elm.nativeElement.style.borderColor = this.colourBorder;
    }

  //change colour back when hovering away
  @HostListener('mouseleave') hoverAwayBorder(){
    this.hoveringAwayBorder(this.colouringBorder);
  }
  hoveringAwayBorder(colouringBorder: string): void{

      this.elm.nativeElement.style.borderColor = this.colouringBorder;
  }
}
