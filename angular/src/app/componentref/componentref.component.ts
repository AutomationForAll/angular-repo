import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-componentref',
  standalone: true,
  imports: [],
  templateUrl: './componentref.component.html',
  styleUrl: './componentref.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ComponentrefComponent {

  componentvariable:string="componentvariable"

}
