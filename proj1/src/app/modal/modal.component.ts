import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../models/task.model';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() close = new EventEmitter<boolean>();
  @Output() newTask = new EventEmitter<NewTask>();
  // @Output() add = new EventEmitter<{title: string; summary: string; date: string;}>();
  enteredTitle!: '';
  enteredSummary!: '';
  enteredDueDate!: '';
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');


  onCloseButtonClick() {
    this.close.emit(false);
  }

  onLoseFocus() {
    this.close.emit(false);
  }

  onSubmition() {
    const task: NewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    };
    this.newTask.emit(task);
    //this.add.emit({
    //   title: this.enteredTitle(),
    //   summary: this.enteredSummary(),
    //   date: this.enteredDueDate(),})
  }
}
