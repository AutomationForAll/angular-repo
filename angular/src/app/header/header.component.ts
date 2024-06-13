import { Component } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { TopheaderComponent } from '../topheader/topheader.component'
import { CustomePipePipe } from '../custome-pipe.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopheaderComponent, UpperCasePipe, DatePipe, CustomePipePipe, NgIf, NgTemplateOutlet, NgFor,FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  i: string = "hello! this is from header";
  j: string = "This is movable item!!";
  isVisible: boolean = true
  msg:string="This is from component";
  numberOfItems:number=0;
  inStock:number=10;
  friendList = [
    {
      age: 12,
      name: "a"
    },
    {
      age: 13,
      name: "b"
    },
    {
      age: 10,
      name: "c"
    }


  ]

  birthday = new Date()



  show(msg: string) {
    alert(msg)
  }

  hidedata() {
    return this.isVisible = false;
  }

  // constructor(){
  //   alert(`hello ${this.i}`)
  // }

  onInputmsg(event:any){
    this.msg=event.target.value

  }

  onIncrease(){
if(this.numberOfItems<this.inStock){
this.numberOfItems++;}
  }

  onDescrease(){
    if(this.numberOfItems>0){
this.numberOfItems--;
  }}
}
