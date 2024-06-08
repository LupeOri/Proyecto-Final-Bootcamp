import { Usuario } from './usuario.model';
import { Valoracion } from './valoracion.model';

export interface Experiencia {
    id: string;
    titulo: string;
    descripcion: string;
    ubicacion: string;
    precio: string;
    duracion: string;
    categoria: 'cena' | 'cata' | 'tour' | 'clases' | 'fiesta' | 'otras categorias';
    usuario: Usuario;
    valoraciones: Valoracion[];
    imagen?: string;
  }