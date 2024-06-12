import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  private API_URL = 'environment.api_url';

  constructor(private http: HttpClient) {}

  pagos(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/myreservas/pago`, data);
  }
}
