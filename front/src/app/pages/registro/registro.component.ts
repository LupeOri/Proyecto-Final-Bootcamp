import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegisterComponent {
  public registerForm: FormGroup;
  public successRegister: boolean = false;
  public registerError: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [
        Validators.maxLength(12),
        Validators.required,
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
      ]]
    });
  }

  handleRegisterForm() {
    this.successRegister = false;
    this.registerError = false;

    if (this.registerForm.valid) {
      console.log('Formulario válido, datos:', this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe(
        (response: any) => {
          alert(response.msg);
          this.successRegister = true;
          this.registerForm.reset();
        },
        (error) => {
          console.log(error);
          this.registerError = true;
        }
      );
    } else {
      this.showFormErrors();
      alert('Por favor, complete correctamente el formulario.');
    }
  }

  showFormErrors() {
    Object.keys(this.registerForm.controls).forEach(field => {
      const control = this.registerForm.get(field);
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