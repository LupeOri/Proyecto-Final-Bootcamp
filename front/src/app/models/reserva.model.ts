import { Experiencia } from './experiencia.model';
import { Usuario } from './usuario.model';

export interface Reserva {
    id: string;
    experiencia: Experiencia;
    usuario: Usuario;
    fecha: string;
    estado: 'confirmada' | 'pendiente' | 'cancelada' | 'a confirmar';
    total?: number;
  }