import { Injectable } from '@angular/core';
import { environment } from '../../../../back/src/api/environment/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public API_URL = environment.api_url

  constructor(private http:HttpClient) { }

  contact(data: any) {
    return this.http.post(`${this.API_URL}/contact`, data)
  }

}
