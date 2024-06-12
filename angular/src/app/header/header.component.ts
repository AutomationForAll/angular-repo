import { Component} from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import {TopheaderComponent} from '../topheader/topheader.component'
import { CustomePipePipe } from '../custome-pipe.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopheaderComponent,UpperCasePipe,DatePipe,CustomePipePipe,NgIf,NgTemplateOutlet,NgFor
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 i:string="hello! this is from header";
j:string="This is movable item!!";
isVisible:boolean=true
friendList=[
  {
    age:12,
    name:"a"
  },
  {
    age:13,
    name:"b"
  },
  {
    age:10,
    name:"c"
  }


]

birthday = new Date()



 show(msg:string) {
  alert(msg)
}

hidedata(){
  return this.isVisible=false;
}

// constructor(){
//   alert(`hello ${this.i}`)
// }
}
