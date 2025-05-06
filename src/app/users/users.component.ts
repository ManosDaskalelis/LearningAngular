import { Component, Input, input} from '@angular/core';
// import { User } from '../models/user.model';
// import { DUMMY_USERS } from './dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();
  
  // selecterdUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selecterdUser().avatar);



   get imagePath() {
      return 'assets/users/' + this.avatar;
    }

  onSelectedUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selecterdUser.set(DUMMY_USERS[randomIndex]);
    // console.log('Selected user:', this.selecterdUser());

  }
} 
