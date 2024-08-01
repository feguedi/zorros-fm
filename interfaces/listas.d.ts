import type { Jugada } from './jugadas';
import type { Autor } from './autor';

export type TipoLista = 'ENTRENAMIENTO' | 'SCOUT' | 'JUEGO';

export interface Lista {
  _id:       string;
  nombre:    string;
  jugadas:   Jugada[];
  autor:     Autor;
  activa:    boolean;
  tipo:      TipoLista;
  createdAt: Date;
  updatedAt: Date;
}
