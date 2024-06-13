import { Reserva } from './reserva.model';
import { Valoracion } from './valoracion.model';


export interface Usuario {
    _id: string;
    tipo: 'invitado' | 'anfitrion';
    // tipo: string;
    nombre: string;
    email: string;
    password: string;
    imagen?: string;
    biografia?: string;
    valoraciones?: Valoracion[];
    reservas?: Reserva[];
  }