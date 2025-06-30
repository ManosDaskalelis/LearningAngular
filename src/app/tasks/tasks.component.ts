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
  private tasksService: TasksService = new TasksService();

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onShowModal() {
    this.isModalVisible = true;
  }

  onCloseModal(isModalVisible: boolean) {
    this.isModalVisible = false;
  }

  onFormSubmit(task: NewTask) {
    const newTask: Task = {
      id: new Date().getTime().toString(),
      userId: this.userId || '',
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    }
    this.tasks.unshift(newTask);
    this.isModalVisible = false;
    console.log(newTask.id);
    
  }
}


