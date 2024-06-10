// import { environment } from './../../../../back/src/api/environment/environment.prod';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   public API_URL = environment.api_url

//   constructor(private http: HttpClient) { }

//   register(userToRegister: any) {
//     return this.http.post(`${this.API_URL}/users/register`, userToRegister)
//     }
    
//     login(userToLogin: any) {
//       return this.http.post(`${this.API_URL}/users/login`, userToLogin)
//     }

//     isAuthenticate(): boolean {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         return false
//       } else {
//         return true
//       }
//     }

// }

import { environment } from './../../../../back/src/api/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public API_URL = environment.api_url;
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  register(userToRegister: any): Observable<any> {
    return this.http.post(`${this.API_URL}/users/register`, userToRegister);
  }

  login(userToLogin: any): Observable<any> {
    return this.http.post(`${this.API_URL}/users/login`, userToLogin).pipe(
      tap((response: any) => {
        console.log('Respuesta del login:', response);  // Log para depuración
        if (response && response.data && response.data.token) { // Ajuste aquí
          this.setToken(response.data.token);
          console.log('Token guardado:', response.data.token);  // Log para verificar almacenamiento
        } else {
          console.error('No se encontró el token en la respuesta');
        }
      })
    );
  }

  // isAuthenticate(): boolean {
  //   return this.getToken() !== null;
  // }

  isAuthenticate(): boolean {
          const token = localStorage.getItem('token');
          if (!token) {
            return false
          } else {
            return true
          }
        }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    console.log('Token guardado en localStorage:', localStorage.getItem(this.tokenKey));  // Log para verificar almacenamiento
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    this.removeToken();
  }

  private removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
