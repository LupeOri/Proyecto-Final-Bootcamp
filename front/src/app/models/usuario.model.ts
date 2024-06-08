import { Reserva } from './reserva.model';
import { Valoracion } from './valoracion.model';


export interface Usuario {
    id: string;
    tipo: 'invitado' | 'anfitrion';
    nombre: string;
    email: string;
    password: string;
    imagen?: string;
    biografia?: string;
    valoraciones?: Valoracion[];
    reservas?: Reserva[];
  }