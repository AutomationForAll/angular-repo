import { Component } from '@angular/core';
import { ObserveComponent } from '../observe/observe.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ObserveComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
