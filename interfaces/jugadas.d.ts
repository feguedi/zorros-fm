type FieldSide = 'OWN' | 'OPPONENT' | 'MID';

export interface Source {
  _id:       string;
  nombre:    string;
  thumbnail: string;
}

export enum Kind {
  Defense = "DEFENSE",
  Offense = "OFFENSE",
  Drill = "DRILL",
  KickoffReturn = "KICKOFF RETURN",
  Kickoff = "KICKOFF",
  Punt = "PUNT",
}

export interface Meta {
  yard:              number;
  fieldSide:         FieldSide;
  down:              number;
  distance:          number;
  offenseFormation?: string;
  defenseFormation?: string;
  motion?:           string;
}

export interface Jugada {
  _id:        string;
  name:       string;
  kind:       Kind[];
  sources:    Source[];
  meta?:      Meta;
  createdAt?: Date;
  updatedAt?: Date;
}
