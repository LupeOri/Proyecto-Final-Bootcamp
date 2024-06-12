import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../back/src/api/environment/environment.prod';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  private API_URL = environment.api_url;

  constructor(private http: HttpClient, private authService: AuthService) {}

  pagos(data: any): Observable<any> {
    const token = this.authService.getToken(); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.API_URL}/myreservas/pago`, {headers});
  }
}
