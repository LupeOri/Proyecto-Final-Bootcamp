import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalLeisureService {

   private baseUrl: string = "http://localhost:5000/"

  constructor(private http:HttpClient) {}
    getExperiencias() {
      return this.http.get(`${this.baseUrl}experiencias`);

  }
}
