import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roleId: [1]
    });
  }

  onSubmit() {

    console.log("Register button clicked"); // 👈 Debug line

    this.submitted = true;

    if (this.registerForm.invalid) {
      console.log("Form invalid");
      return;
    }

    console.log("Sending data:", this.registerForm.value);

    this.userService.registerUser(this.registerForm.value)
      .subscribe({
        next: (response) => {
          console.log("Success:", response);
          alert("User Registered Successfully");
        },
        error: (error) => {
          console.error("API Error:", error);
          alert("Registration Failed");
        }
      });
  }
}
