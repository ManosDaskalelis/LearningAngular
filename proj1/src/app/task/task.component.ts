import { Component, inject, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private taskService = inject(TasksService);

  onCompleteTask() {
    console.log(this.task);
    this.taskService.removeTask(this.task.id);
    console.log(this.task);
  }
} 
