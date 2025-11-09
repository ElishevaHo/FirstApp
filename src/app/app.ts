import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { Tasks } from './tasks/tasks' 



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,User,Tasks],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('firstApp');
  users = USERS;
  selectedUser ?: any;


  onUserSelected(userId:string){
    const userClicked = this.users.find((user)=>user.id === userId)
    console.log('user Clicked from father', userClicked);
    if(userClicked){
    this.selectedUser = userClicked;
    }

  }
}

