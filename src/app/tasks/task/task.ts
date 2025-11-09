import { Component, Input } from '@angular/core';
import { TaskObj } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task {
  @Input({required: true}) task!: TaskObj;
}
