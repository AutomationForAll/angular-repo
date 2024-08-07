import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observe',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './observe.component.html',
  styleUrl: './observe.component.css'
})
export class ObserveComponent implements OnInit {
  ngOnInit(): void {
    this.hideAnimatedDiv()
  }

  data:any[]=[]

  arr1:any[]=[1,2,3,4]
  arr2:any[]=[5,6,7,8]
  data1:string='hello'

    myobsrevable =new Observable((ob)=>{
     setTimeout(()=>{ob.next(1)},5000) 
     setTimeout(()=>{ob.next(2)},6000)
     setTimeout(()=>{ob.next(3)},7000)
    // setTimeout(()=>{ob.error('this is error')},4000)
     setTimeout(()=>{ob.next(4)},8000)
     setTimeout(()=>{ob.next(5)},9000)
     setTimeout(()=>{ob.complete()},10000)
    });

  //myobsrevable=of(this.arr1,this.arr2)

 //myobsrevable=from(this.data1)

//  mypromise= new Promise((resolve,reject)=>{
//   resolve
//  })


  // fetchData(){
  //   this.myobsrevable.subscribe((value)=>{
  //     this.data.push(value);
  //   },(err)=>{
  //     alert('this is alert msg')
  //   },()=>{
  //     alert('this is complete msg')
  //   })
  // }

  fetchData(){
    this.myobsrevable.subscribe({

      next:(value)=>{
        this.data.push(value);
      },
      error:(err)=> {
        alert('this is error msg')
      },
      complete:()=> {
        alert('this is complete msg')
      }
    }
      
    )
  }


  public isDisplayed: boolean = false;

  hideAnimatedDiv() {
      setTimeout(() => {
          this.isDisplayed = true;
      }, 3000);
  }

 

}
