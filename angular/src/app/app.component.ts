import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { TempleteRefeComponent } from './templete-refe/templete-refe.component';
import { ComponentrefComponent } from './componentref/componentref.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { NgphasesComponent } from './ngphases/ngphases.component';
import { NgIf,NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { CutomedirectivesDirective } from './cutomedirectives.directive';
import { HostlistnerAndbindingDirective } from './hostlistner-andbinding.directive';
import { CutomClassComponent } from './cutom-class/cutom-class.component';
import { CustomClassDirectiveDirective } from './custom-class-directive.directive';
import { subscribe } from './service/subscribe.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponentrefComponent,TempleteRefeComponent,NgcontentComponent,SiblingComponent,NgphasesComponent,NgIf,CutomedirectivesDirective,HostlistnerAndbindingDirective,CutomClassComponent,CustomClassDirectiveDirective,NgStyle,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[subscribe]
  //encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular';  
  appmsg:string
  appText:string=""
  componnetDataViaApp:string=''
  toDestroy:boolean=false;
  hide:boolean=false;
  active:boolean=true;
  tab:string=''

  parentAppMethod(value:string){
    console.log(value)
    this.appText =value;
  }

  @ViewChild('ComponentrefComponent')componentdata:ElementRef;

  onChange1(inputdata:HTMLInputElement){
   // console.log(inputdata.value)
   this.appmsg=inputdata.value
  }

  constructor(private sub:subscribe){
   
  }

  ngAfterViewInit(): void {
    console.log('parent ngAfterViewInit hook called')
    //console.log(this.childdata)
  }

  destroy(){
    this.toDestroy=!this.toDestroy


  }

  onClick(){
    console.log('click happen!!')
  }

  onclicksub(){
this.sub.onclicksubscribe('data from parent');
  }

}
