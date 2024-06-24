import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { TempleteRefeComponent } from './templete-refe/templete-refe.component';
import { ComponentrefComponent } from './componentref/componentref.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { NgphasesComponent } from './ngphases/ngphases.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponentrefComponent,TempleteRefeComponent,NgcontentComponent,SiblingComponent,NgphasesComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';  
  appmsg:string
  appText:string=""
  componnetDataViaApp:string=''
  toDestroy:boolean=false;

  parentAppMethod(value:string){
    console.log(value)
    this.appText =value;
  }

  @ViewChild('ComponentrefComponent')componentdata:ElementRef;

  onChange1(inputdata:HTMLInputElement){
   // console.log(inputdata.value)
   this.appmsg=inputdata.value
  }

  constructor(){
    console.log("patent cons")
  }

  ngAfterViewInit(): void {
    console.log('parent ngAfterViewInit hook called')
    //console.log(this.childdata)
  }

  destroy(){
    this.toDestroy=!this.toDestroy


  }

}
