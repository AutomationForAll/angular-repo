import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-ngphases',
  standalone: true,
  imports: [],
  templateUrl: './ngphases.component.html',
  styleUrl: './ngphases.component.css'
})
export class NgphasesComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input()msg:string;

@ViewChild('child1') childdata: ElementRef;

@ContentChild('para')paracon:ElementRef

  constructor()
  {
    console.log("child cons")
    console.log(this.msg)
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy hook called')
  }
  ngAfterViewChecked(): void {
   console.log('ngAfterViewChecked hook called')
   console.log(this.childdata)
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit hook called')
    console.log(this.childdata)
  }
  ngAfterContentChecked(): void {
   console.log('ngAfterContentChecked hook called')
   console.log(this.paracon)
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit hook call')
    console.log(this.paracon)
  }
  ngDoCheck(): void {
    console.log("docheck hook call")
    console.log(this.msg)
    console.log('do check ',this.paracon)
  }
  ngOnInit(): void {
    
    console.log('on init hook call')
    console.log(this.msg)
    //console.log(this.childdata.nativeElement.value)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on ngOnChanges hook call');
    console.log(this.msg)
    //console.log(changes['msg'].currentValue)
    //console.log(changes['msg'].previousValue)
  }



}
