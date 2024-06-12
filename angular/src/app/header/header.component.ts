import { Component} from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import {TopheaderComponent} from '../topheader/topheader.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopheaderComponent,UpperCasePipe,DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 i:string="hello! this is from header";
j:string="This is movable item!!";
inStock=0;

birthday = new Date()



 show(msg:string) {
  alert(msg)
}

hide(){
  return false;
}

// constructor(){
//   alert(`hello ${this.i}`)
// }
}
