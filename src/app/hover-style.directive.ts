import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective implements OnInit{
  @Input() fontWeight?: string;
  @Input() decoration?: string;

  public hoveringColour: string = "";

  constructor(private elm:ElementRef) {

  }

  ngOnInit():void {

  }

  @HostListener('mouseenter') hoverOver() {
    this.hoveringOver(this.hoveringColour);
  }

  @HostListener('mouseleave') stopHover() {
    this.stopHovering(this.hoveringColour);
  }

  //underline title if user hovers over it
  hoveringOver(hoveringColour: string):void{
    this.elm.nativeElement.style.textDecoration = this.decoration || 'underline' ;
    this.elm.nativeElement.style.fontWeight = this.fontWeight;

  }
  //remove underline, if user removes mouse from title
  stopHovering(hoveringColour: string):void{
    this.elm.nativeElement.style.textDecoration = 'none';
    this.elm.nativeElement.style.fontWeight = 'normal';

  }

}
