import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };
  confirmPassword = '';

  constructor(private userService: UserService) {}

  onSubmit(registrationForm: NgForm): void {
    if (registrationForm.valid) {
      // Form is valid, proceed with submission
      console.log(this.user); // Example: Output user object to console
      // Call your UserService to submit user registration data
      this.userService.registerUser(this.user).subscribe(
        response => {
          console.log('User registration successful', response);
          // Optionally, you can reset the form after successful submission
          registrationForm.resetForm();
        },
        error => {
          console.error('Error occurred while registering user', error);
          // Handle error scenario as needed
        }
      );
    } else {
      // Form is invalid, handle validation errors or display messages
      console.error('Form is invalid');
      // Example: You can loop through form controls to mark them as touched
      Object.values(registrationForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
