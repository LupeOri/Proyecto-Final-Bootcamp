import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalLeisureService {

  private baseUrl: string = "http://localhost:5000/";

  constructor(private http: HttpClient, private authService: AuthService) {} // Inyecta AuthService

  getExperiencias() {
    return this.http.get(`${this.baseUrl}experiencias`);
  }

  getExperienciasById(id: string) {
    return this.http.get(`${this.baseUrl}experiencias/${id}`);
  }

  getReservas() {
    const token = this.authService.getToken(); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}myreservas`, { headers });
  }
}