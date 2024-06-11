import { Component } from '@angular/core';
import {TopheaderComponent} from '../topheader/topheader.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopheaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
i="hello! this is from header";
j="This is movable item!!"
}
