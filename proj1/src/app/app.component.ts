import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { DUMMY_USERS } from './users/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { ModalComponent } from "./modal/modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UsersComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;  

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  } 

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
