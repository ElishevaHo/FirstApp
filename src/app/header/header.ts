import { Component } from '@angular/core';
import { App } from '../app';
import { from } from 'rxjs';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  showDialog : boolean = false;  

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.maxLength(50)]),
    message: new FormControl('', Validators.required)
  });

  openDialog() {
    this.showDialog = true;
  }

    send() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
  
 

    console.log("===== Contact Form Data =====");
    console.log(JSON.stringify(this.contactForm.value, null, 2));

    this.contactForm.reset();
    this.showDialog = false;
 }

   cancel(){
    this.contactForm.reset();
    this.showDialog = false;
   }
}
