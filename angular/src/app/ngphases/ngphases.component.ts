import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ngphases',
  standalone: true,
  imports: [],
  templateUrl: './ngphases.component.html',
  styleUrl: './ngphases.component.css'
})
export class NgphasesComponent {

  @Input()msg:string

  constructor()
  {
    console.log(this.msg)
  }

}
