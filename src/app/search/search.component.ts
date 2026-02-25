import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() Parentmessagetochild!: string;
 
  @Output() searchChange = new EventEmitter<string>();
  @Output() parentMessage =new EventEmitter<string>();

  sendSearch(value: string) {
    this.searchChange.emit(value);
  }

  sendme(value: string){
    this.parentMessage .emit(value);
  }
}
