import { Component, ElementRef, inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { TempleteRefeComponent } from './templete-refe/templete-refe.component';
import { ComponentrefComponent } from './componentref/componentref.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { NgphasesComponent } from './ngphases/ngphases.component';
import { NgFor, NgIf,NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { CutomedirectivesDirective } from './cutomedirectives.directive';
import { HostlistnerAndbindingDirective } from './hostlistner-andbinding.directive';
import { CutomClassComponent } from './cutom-class/cutom-class.component';
import { CustomClassDirectiveDirective } from './custom-class-directive.directive';
import { subscribe } from './service/subscribe.service';
import { UserData } from './module/appdata';
import { ObserveComponent } from './observe/observe.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponentrefComponent,TempleteRefeComponent,NgcontentComponent,SiblingComponent,NgphasesComponent,NgIf,CutomedirectivesDirective,HostlistnerAndbindingDirective,CutomClassComponent,CustomClassDirectiveDirective,NgStyle,NgSwitch,NgSwitchCase,NgSwitchDefault,NgFor,ObserveComponent,NavheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[subscribe]
  //encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'angular';  
  appmsg:string
  appText:string=""
  componnetDataViaApp:string=''
  toDestroy:boolean=false;
  hide:boolean=false;
  active:boolean=true;
  tab:string=''
  data:UserData[]= this.sub.getData()
  showloader:boolean=false
  
router:Router=inject(Router)

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
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.router.events.subscribe((routerevent)=>{
      if(routerevent instanceof NavigationStart){
        this.showloader=true
      }
      if(routerevent instanceof NavigationEnd|| routerevent instanceof NavigationCancel){
        this.showloader=false
      }
    })
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

 

}
