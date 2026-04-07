import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService = inject(TaskService);
  private selectedFilter = signal<string>('all');
  // tasks = this.tasksService.allTask;
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tasksService.allTask().filter((x) => x.status === 'OPEN');
      case 'in-progress':
        return this.tasksService
          .allTask()
          .filter((x) => x.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService.allTask().filter((x) => x.status === 'DONE');
      default:
        return this.tasksService.allTask();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
