import { NgFor } from '@angular/common';
import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-childheader',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './childheader.component.html',
  styleUrl: './childheader.component.css'
})
export class ChildheaderComponent {
  
  inputValue:string='data'
  @Input()
  friend:{ age: number,
    name: string};
    @Output()
    inputText:EventEmitter<string>=new EventEmitter<string>();

    inputTextAdded(){
        this.inputText.emit(this.inputValue)
    }
}
