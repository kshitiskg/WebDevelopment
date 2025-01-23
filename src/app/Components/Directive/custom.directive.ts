import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor(private el:ElementRef,private rendere:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
      this.rendere.setStyle(this.el.nativeElement,'backgroundColor','yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.rendere.setStyle(this.el.nativeElement,'backgroundColor','');
  }

     
}
