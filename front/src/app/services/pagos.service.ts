import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../back/src/api/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  public API_URL = environment.api_url

  constructor(private http: HttpClient) { 
    pagos(data: any) {
      return this.http.post(`${this.API_URL}/reservas/pagos`, data)
    }
   }
}
