import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  message = '';
  isSuccess = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
   this.loginForm = this.fb.group({
  username: ['', Validators.required],
  password: ['', Validators.required]
});
  }

  onSubmit() {

  this.submitted = true;

  if (this.loginForm.invalid) return;

  this.loginService.login(this.loginForm.value)
    .subscribe({
      next: (res: any) => {

        console.log("Login Response:", res);

        if (res.status) {

          // Save JWT
          localStorage.setItem("token", res.jwt);

          // Save role
          localStorage.setItem("role", res.roles[0]);

          this.message = res.message;
          this.isSuccess = true;

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);

        } else {
          this.message = res.message;
          this.isSuccess = false;
        }
      },
      error: (err) => {
        console.error(err);
        this.message = "Invalid credentials ❌";
        this.isSuccess = false;
      }
    });
}
}
