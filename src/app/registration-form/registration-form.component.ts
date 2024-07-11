import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  user: any = {}; // Model to bind form data
  confirmPassword: string = ''; // Initialize confirmPassword

  constructor(private userService: UserService) {}

  onSubmit() {
    if (this.user.password !== this.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('User registered successfully', response);
        alert('User registered successfully');
      },
      error => {
        console.error('Error registering user', error);
        alert('Error registering user');
      }
    );
  }
}
