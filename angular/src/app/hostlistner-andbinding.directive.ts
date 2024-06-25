import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlistnerAndbinding]',
  standalone: true
})
export class HostlistnerAndbindingDirective {

  private element:ElementRef;
  private renderer:Renderer2;
  
  constructor(ele:ElementRef,renderer: Renderer2) { 
  this.element=ele;
  this.renderer=renderer;

}

@HostListener('mouseover') OnMouseEnter(){
 this.renderer.addClass(this.element.nativeElement,'button')

}

 @HostListener('mouseout') OnMouseOut(){
   this.renderer.removeClass(this.element.nativeElement,'button')
  
  }

@HostBinding('value')input:string='yellow'




}
