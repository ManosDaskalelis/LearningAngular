import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>([]);

  allTask = this.tasks.asReadonly();

  constructor() {}

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };

    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t)),
    );
  }
}
