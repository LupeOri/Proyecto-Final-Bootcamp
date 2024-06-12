import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva.model';
import { LocalLeisureService } from 'src/app/services/local-leisure.service';
import { Experiencia } from 'src/app/models/experiencia.model';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  reservaList: Reserva[] = [];

  constructor(private localLeisureService: LocalLeisureService) {}

  ngOnInit() {
    this.localLeisureService.getReservas().subscribe(
      (response: any) => {
        // Tu lógica aquí
        if (Array.isArray(response)) {
          this.reservaList = response.map(reserva => ({
            id: reserva._id,
            experiencia: reserva.experiencia,
            usuario: reserva.usuario,
            fecha: reserva.fecha,
            estado: reserva.estado,
            comentario: reserva.comentario,
            personas: reserva.personas
          }));
        } else {
          console.error('La respuesta de la API no es un array válido:', response);
        }
      },
      (error: any) => {
        console.error('Error al obtener las reservas:', error);
      }
    );
  }
}