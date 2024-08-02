export type RolUsuario = 'COACH' | 'ADMINISTRADOR' | 'JUGADOR';

export interface Perfil {
  id:       string;
  nombre:   string;
  nickname: string;
  rol:      RolUsuario[];
  telefono: number;
}
