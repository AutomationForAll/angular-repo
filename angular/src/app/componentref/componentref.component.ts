import { Component, ViewEncapsulation } from '@angular/core';
import { subscribe } from '../service/subscribe.service';

@Component({
  selector: 'app-componentref',
  standalone: true,
  imports: [],
  templateUrl: './componentref.component.html',
  styleUrl: './componentref.component.css',
  //encapsulation:ViewEncapsulation.ShadowDom
})
export class ComponentrefComponent {

  componentvariable:string="componentvariable"

  constructor(private sub:subscribe){
   
  }

  onclicksub(){
    this.sub.onclicksubscribe('data from child');
      }

}
