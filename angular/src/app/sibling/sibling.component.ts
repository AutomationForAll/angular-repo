import { Component } from '@angular/core';

@Component({
  selector: 'app-sibling',
  standalone: true,
  imports: [],
  templateUrl: './sibling.component.html',
  styleUrl: './sibling.component.css'
})
export class SiblingComponent {

  name:string="data from sibling"
}
