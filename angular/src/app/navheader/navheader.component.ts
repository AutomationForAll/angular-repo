import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navheader',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navheader.component.html',
  styleUrl: './navheader.component.css'
})
export class NavheaderComponent {

}
