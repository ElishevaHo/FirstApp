import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})



export class NewTask {
  title='';
  summary='';
  dueDate='';

  onSubmit(form:NgForm){
    console.log(this.title);
    console.log(form);
  }

  

}
