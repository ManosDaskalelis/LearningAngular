import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() close = new EventEmitter<boolean>();
  enteredTitle!: Task["title"];
  enteredSummary!:  Task["summary"];
  enteredDueDate!: Task["dueDate"];
  
  onCloseButtonClick() {
    this.close.emit(false);
    console.log(this.enteredTitle);
    console.log(this.enteredDueDate);
    console.log(this.enteredSummary);
    
  }

  onLoseFocus(){
    this.close.emit(false);
  }

}
