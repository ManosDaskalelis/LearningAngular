import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../models/task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input ({ required: true }) userid!: string;
  @Output() close = new EventEmitter<boolean>();
  // @Output() add = new EventEmitter<{title: string; summary: string; date: string;}>();
  enteredTitle!: '';
  enteredSummary!: '';
  enteredDueDate!: '';
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');
  private taskService = inject(TasksService);


  onCloseButtonClick() {
    this.close.emit(false);
  }

  onLoseFocus() {
    this.close.emit(false);
  }

  onSubmition() {
    this.taskService.addTasks({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    }, this.userid);
    this.close.emit();


    // const task: NewTask = {
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   dueDate: this.enteredDueDate,
    // };
    // this.newTask.emit(task);
    // //this.add.emit({
    // //   title: this.enteredTitle(),
    // //   summary: this.enteredSummary(),
    // //   date: this.enteredDueDate(),})
  }
}
