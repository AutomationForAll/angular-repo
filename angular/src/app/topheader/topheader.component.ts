import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topheader',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './topheader.component.html',
  styleUrl: './topheader.component.css'
})
export class TopheaderComponent {

  topHeaderData:string=""
  @Output()
  topHeaderEvent:EventEmitter<string>= new EventEmitter<string>()

  topHeadermethod(){
    this.topHeaderEvent.emit(this.topHeaderData)
  }

}
