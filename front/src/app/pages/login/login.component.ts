import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public loginForm: FormGroup;
public sucessLogin: boolean = false;
public loginError: boolean = false;

constructor(private fb: FormBuilder, private authService: AuthService) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [
      Validators.maxLength(12),
      Validators.required,
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
      ]]
    });
  }

  handleLoginForm() {
    this.sucessLogin = false;
    this.loginError = false;

    if (this.loginForm.valid) {
      console.log('Login válido, datos:', this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe(
        (response:any) => {
          this.sucessLogin = true;
        this.loginForm.reset();
    },
    (error) => {
      console.log(error);
      this.loginError = true;
      
    }
      )
      
    } else {
      this.showFormErrors();
      alert('Por favor, complete correctamente sus datos.');

    }
  }

  showFormErrors() {
    Object.keys(this.loginForm.controls).forEach(field => {
      const control = this.loginForm.get(field);
      if (control && control.invalid) {
        const errors = control.errors;
        if (errors?.['required']) {
          console.log(`${field} es requerido`);
        }
        if (errors?.['email']) {
          console.log(`${field} debe ser un email válido`);
        }
        if (errors?.['maxlength']) {
          console.log(`${field} debe tener un máximo de ${errors['maxlength'].requiredLength} caracteres`);
        }
        if (errors?.['pattern']) {
          console.log(`${field} no cumple con el patrón requerido`);
        }
      }
    });
  }
}