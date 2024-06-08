import { Experiencia } from './experiencia.model';
import { Usuario } from './usuario.model';

export interface Valoracion {
    id: string;
    experiencia: Experiencia;
    usuario: Usuario;
    comentario: string;
    fecha: string;
    puntuacion: number;
  }