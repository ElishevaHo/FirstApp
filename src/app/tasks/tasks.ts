import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { fakeTasks } from './fake_tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  tasks = fakeTasks;
@Input() userName?: string;
@Input() userId?: string;

showNewTask= false;



get userSelectedTasks() {
return this.tasks.filter((task) => task.userId === this.userId)
}


showNew(){
  this.showNewTask=true;
}
}
