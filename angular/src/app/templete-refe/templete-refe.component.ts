import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ComponentrefComponent } from '../componentref/componentref.component';

@Component({
  selector: 'app-templete-refe',
  standalone: true,
  imports: [],
  templateUrl: './templete-refe.component.html',
  styleUrl: './templete-refe.component.css'
})
export class TempleteRefeComponent {
   searchText1:string=''
  @ViewChild('searchText')searchData:ElementRef
 

  // setDataOnTextBox(value:HTMLInputElement){
  //   //console.log(this.searchData=value)
  //   this.searchData=value.value
  //   }

  setDataOnTextBox(){
     //console.log(this.searchData=value)
       this.searchText1=this.searchData.nativeElement.value
   }

   @Input() Componentref:ComponentrefComponent=undefined
   componentvariable:string=''

   ngOnInit(){

    this.componentvariable=this.Componentref.componentvariable;
   }

}
