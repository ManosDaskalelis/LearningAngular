import { Component, Input, output } from '@angular/core';


@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name: string | undefined;
  isShown: boolean = false;
  
  onClick() {
    return this.isShown = this.isShown ? false : true; 
  }

}


