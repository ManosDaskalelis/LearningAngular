import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';
// import { User } from '../models/user.model';
// import { DUMMY_USERS } from './dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({ required: true }) user!: User;
  select = output<string>();
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!: string;
  // @Output() select = new EventEmitter<string>();
  // Avatar = input.required<string>();
  // Name = input.required<string>();
  // Id = input.required<string>();

  // selecterdUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selecterdUser().avatar); signals



  get imagePath() {
    return 'assets/users/' + this.user!.avatar;
  }

  // onSelectedUser() {
  // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // this.selecterdUser.set(DUMMY_USERS[randomIndex]);
  // console.log('Selected user:', this.selecterdUser());

  // }

  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}


