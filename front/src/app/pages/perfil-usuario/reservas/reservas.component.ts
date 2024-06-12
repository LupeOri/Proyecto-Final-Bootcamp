import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva.model';
import { AuthService } from 'src/app/services/auth.service';
import { LocalLeisureService } from 'src/app/services/local-leisure.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  reservaList: Reserva[] = [];

  constructor(private localLeisureService: LocalLeisureService, private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isAuthenticate()) {
      this.localLeisureService.getReservas().subscribe(
        (response: any) => {
          if (Array.isArray(response)) {
            this.reservaList = response
              .filter(reserva => reserva.estado === 'confirmada') // Filtre les réservations par statut "confirmada"
              .map(reserva => ({
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
    } else {
      console.error('Usuario no autenticado');
    }
  }
}
