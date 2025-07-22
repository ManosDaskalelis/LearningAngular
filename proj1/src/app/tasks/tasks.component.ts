import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { NewTask, Task } from '../models/task.model';
import { ModalComponent } from "../modal/modal.component";
import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, ModalComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isModalVisible: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onShowModal() {
    this.isModalVisible = true;
  }

  onCloseModal(isModalVisible: boolean) {
    this.isModalVisible = false;
  }

  onFormSubmit(task: NewTask) {
    this.isModalVisible = false;
  }
}


