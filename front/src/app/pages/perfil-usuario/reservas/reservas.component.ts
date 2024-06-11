import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva.model';
import { LocalLeisureService } from 'src/app/services/local-leisure.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit{

 reservaList: Reserva[] = [];

  constructor(private localLeisureService: LocalLeisureService){

  }

  ngOnInit(){
    this.localLeisureService.getReservas().subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
          this.reservaList = response;
        } else {
          console.error('La respuesta de la API no es un array:', response);
        }
      },
      (error: any) => {
        console.error('Error al obtener las reservas:', error);
      }
    );
  }
}