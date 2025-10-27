import { Component, input, Input } from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [User],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {


  selectedUser = USERS[0];
  @Input() name!: string;
  @Input() avatar!: string;

  get userImgPath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  changeUser() {
    const randomlndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser = USERS[randomlndex];
  }


}
