import { Component, EventEmitter, Output } from '@angular/core';
import { 
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrls: ['./new-user.css']
})
export class NewUser {

  @Output() submitUser = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  categories = ['personal', 'work', 'urgent'];

  passwordsMatch(group: AbstractControl) {
    const formGroup = group as FormGroup;

    const pass = formGroup.get('password')?.value;
    const confirm = formGroup.get('confirm')?.value;

    return pass === confirm ? null : { mismatch: true };
  }

  form = new FormGroup({
    name: new FormGroup({
      first: new FormControl('', [
        Validators.required,
        Validators.maxLength(18),
      ]),
      last: new FormControl('', [
        Validators.required,
        Validators.maxLength(18),
      ]),
    }),

    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

    passwordGroup: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirm: new FormControl('', [
          Validators.required,
        ]),
      },
      { validators: this.passwordsMatch } 
    ),

    category: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.valid) {
      this.submitUser.emit(this.form.value);
      console.log('-------form-----');
      
      console.log(this.form.value);
      
    }
  }
}
