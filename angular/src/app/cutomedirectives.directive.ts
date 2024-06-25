import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { bindCallback } from 'rxjs';

@Directive({
  selector: '[appCutomedirectives]',
  standalone: true
})
export class CutomedirectivesDirective implements OnInit {
private element:ElementRef
private renderer:Renderer2
//@Input('appCutomedirectives')setBackgroundColor:string='black';
//@Input()setfont:string='yellow';

@Input('appCutomedirectives')changeColorAndFont={
  setBackgroundColor:'gray',
  setfont:'blue'
};
  constructor(elm:ElementRef,rend:Renderer2) { 
  this.element=elm;
  this.renderer=rend;
  }
  ngOnInit(): void {
  //     this.element.nativeElement.style.backgroundColor='yellow';
  //  this.element.nativeElement.style.color='red'

  this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.changeColorAndFont.setBackgroundColor)
  this.renderer.setStyle(this.element.nativeElement,'color',this.changeColorAndFont.setfont)
  //this.renderer.setAttribute(this.element.nativeElement,'title','this is button')
 // this.renderer.removeAttribute(this.element.nativeElement,'title')
  }

}
