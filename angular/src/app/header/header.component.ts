import { Component, Input } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { TopheaderComponent } from '../topheader/topheader.component'
import { CustomePipePipe } from '../custome-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { ChildheaderComponent } from './childheader/childheader.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopheaderComponent,ChildheaderComponent, UpperCasePipe, DatePipe, CustomePipePipe, NgIf, NgTemplateOutlet, NgFor,FormsModule,
  NgStyle,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  i: string = "hello! this is from header";
  j: string = "This is movable item!!";
  isVisible: boolean = true
  isDisabled: boolean = true
  msg:string="This is from component";
  numberOfItems:number=0;
  searchText:String="";
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

 textFromChild:string="random"

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

  updateText(value:string){
    console.log(value)
    this.textFromChild=value;
  }

  @Input()
  headerText:string=""

  // headerMethod(value:string){
  //   this.headerText =value;
  // }

}
