import { Component, input, Input, Output, EventEmitter } from '@angular/core';
import { USERS } from '../fake_users';
import { UserObj } from './user.model';
import { NewUser } from './new-user/new-user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [User,NewUser],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {


  selectedUser = USERS[0];
  showAddUser=false;
  
  users: any =[];
  
   openAddUser() {
    this.showAddUser = true;
  }

   closeAddUser() {
    this.showAddUser = false;
  }

  addUser(user:any) {
    this.users.push(user);
    this.closeAddUser();
  }

  @Input({ required: true }) user!: UserObj;
  @Input({ required: true }) isSelected!: boolean;
  
  @Output() userClicked = new EventEmitter<string>();


  onUserClicked() {
    this.userClicked.emit(this.user.id);
  }


  get userImgPath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  changeUser() {
    const randomlndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser = USERS[randomlndex];
  }


}
