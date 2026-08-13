export interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
}

export interface CustomError extends Error {
  status?: number;
}
