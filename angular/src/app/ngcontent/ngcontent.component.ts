import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { SiblingComponent } from '../sibling/sibling.component';

@Component({
  selector: 'app-ngcontent',
  standalone: true,
  imports: [],
  templateUrl: './ngcontent.component.html',
  styleUrl: './ngcontent.component.css'
})
export class NgcontentComponent {

  // @ContentChild('h1') child:ElementRef
  
  // fetchData(){
  //   console.log(this.child.nativeElement.innerText)

  // }

  // @ContentChild(SiblingComponent) child:SiblingComponent
 
  // fetchData(){
  //      console.log(this.child.name)
  
  //    }

  // @ContentChildren('h1') child:QueryList<ElementRef>
  
  //  fetchData(){
  //   for (const x of this.child) {
  //     console.log(x.nativeElement.innerText)
  //   }

  @ContentChildren(SiblingComponent) child:QueryList<SiblingComponent>
  
   fetchData(){
     for (const x of this.child) {
       console.log(x.name)
     }
    


   }



}
