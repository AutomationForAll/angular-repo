import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { TempleteRefeComponent } from './templete-refe/templete-refe.component';
import { ComponentrefComponent } from './componentref/componentref.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponentrefComponent,TempleteRefeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';  

  appText:string=""
  componnetDataViaApp:string=''

  parentAppMethod(value:string){
    console.log(value)
    this.appText =value;
  }

  @ViewChild('ComponentrefComponent')componentdata:ElementRef;



}
