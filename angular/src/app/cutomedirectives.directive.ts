import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCutomedirectives]',
  standalone: true
})
export class CutomedirectivesDirective implements OnInit {
private element:ElementRef
private renderer:Renderer2
//backgroundColor:string='yello';
  constructor(elm:ElementRef,rend:Renderer2) { 
  this.element=elm;
  this.renderer=rend;
  }
  ngOnInit(): void {
  //     this.element.nativeElement.style.backgroundColor='yellow';
  //  this.element.nativeElement.style.color='red'

  this.renderer.setStyle(this.element.nativeElement,'backgroundColor','yellow')
  this.renderer.setStyle(this.element.nativeElement,'color','red')
  this.renderer.setAttribute(this.element.nativeElement,'title','this is button')
  this.renderer.removeAttribute(this.element.nativeElement,'title')
  }

}
