import { environment } from './../../../../back/src/api/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public API_URL = environment.api_url

  constructor(private http: HttpClient) { }

  register(userToRegister: any) {
    return this.http.post(`${this.API_URL}/users/register`, userToRegister)
    }
    
    login() {
      return this.http.post(`${this.API_URL}/users/login`, {})
    }

}
