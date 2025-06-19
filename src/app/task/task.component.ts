import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required: true}) title: string | undefined;
@Input({required: true}) summary: string | undefined;
@Input({required: true}) dueDate: string | undefined;
@Input({required: true}) id: string | undefined;
  

}
