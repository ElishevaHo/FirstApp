import { Component, input, Input, Output, EventEmitter } from '@angular/core';
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
  @Input({ required: true }) name!: string;
  @Input() avatar!: string;
  @Input({ required: true }) id!: string;
  
  @Output() userClicked = new EventEmitter<string>();


  onUserClicked() {
    this.userClicked.emit(this.id);
  }


  get userImgPath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  changeUser() {
    const randomlndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser = USERS[randomlndex];
  }


}
