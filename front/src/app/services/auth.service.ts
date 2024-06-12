import { environment } from './../../../../back/src/api/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public API_URL = environment.api_url;
  private tokenKey = 'token';
  private roleKey = 'role';

  constructor(private http: HttpClient, private router: Router) {}

  register(userToRegister: any): Observable<any> {
    return this.http.post(`${this.API_URL}/users/register`, userToRegister);
  }

  login(userToLogin: any): Observable<any> {
    return this.http.post(`${this.API_URL}/users/login`, userToLogin).pipe(
      tap((response: any) => {
        console.log('Respuesta del login:', response);
        if (response && response.data) {
          if (response.data.token && response.data.user && response.data.user.tipo) {
            this.setToken(response.data.token);
            this.setRole(response.data.user.tipo); // Aquí se llama al método setRole()
            console.log('Token guardado:', response.data.token);
            console.log('Rol guardado:', response.data.user.tipo);

            // Redirigir según el rol del usuario
            if (response.data.user.tipo === 'anfitrión') {
              this.router.navigate(['/myexperiences']);
            } else if (response.data.user.tipo === 'invitado') {
              this.router.navigate(['/experiences']);
            }
          } else {
            console.error('No se encontró el token o el rol en la respuesta');
          }
        } else {
          console.error('Respuesta de login no contiene "data"');
        }
      })
    );
  }

  isAuthenticate(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  getUserRole(): 'invitado' | 'anfitrión' | null {
    const role = localStorage.getItem(this.roleKey);
    return role as 'invitado' | 'anfitrión' | null;
  }

  public setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    console.log('Token guardado en localStorage:', localStorage.getItem(this.tokenKey));
  }

  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  public setRole(role: string): void { // Definición del método setRole()
    localStorage.setItem(this.roleKey, role);
  }

  logout(): void {
    this.removeToken();
    this.removeRole();
  }

  private removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  private removeRole(): void {
    localStorage.removeItem(this.roleKey);
  }
}