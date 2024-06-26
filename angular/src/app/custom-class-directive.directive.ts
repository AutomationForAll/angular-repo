import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomClassDirective]',
  standalone: true
})
export class CustomClassDirectiveDirective {

  constructor(private Element:ElementRef,private Renderer:Renderer2){

  }

  @Input() set appCustomClassDirective(cssClass:Object){
    let entries =Object.entries(cssClass);
   for(let i of entries ){
    console.log(entries[0].at(0))
    //console.log(i[0],i[1])
   this.Renderer.addClass(this.Element.nativeElement,entries[0].at(0))}
    }
  };


