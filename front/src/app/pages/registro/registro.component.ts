import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms'
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
      password: ['', [ Validators.maxLength(12), Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]]
    })
  }
 
 
 
 
  handleRegisterForm(){
 
         this.successRegister = false;
      this.registerError = false;
 
      if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe(
        (response: any) => {
          alert(response.msg);
        }, (error) => {
          console.log(error);
        })
         
          this.registerForm.reset();
        } else {
      alert('Por favor, complete correctamente el formulario.');
    }
  }
}