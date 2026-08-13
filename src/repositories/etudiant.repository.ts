import { Etudiant } from '../models/etudiant.model';

class EtudiantRepository {
  private etudiants: Etudiant[] = [
    { id: 1, nom: 'Dupont', prenom: 'Alice' },
    { id: 2, nom: 'Martin', prenom: 'Bob' }
  ];

  findAll(): Etudiant[] {
    return this.etudiants;
  }

  findById(id: number): Etudiant | undefined {
    return this.etudiants.find(e => e.id === id);
  }

  create(nom: string, prenom: string): Etudiant {
    const newId = this.etudiants.length > 0 ? this.etudiants[this.etudiants.length - 1].id + 1 : 1;
    const nouvelEtudiant: Etudiant = { id: newId, nom, prenom };
    this.etudiants.push(nouvelEtudiant);
    return nouvelEtudiant;
  }

  update(id: number, nom: string, prenom: string): Etudiant | null {
    const index = this.etudiants.findIndex(e => e.id === id);
    if (index === -1) return null;
    this.etudiants[index] = { id, nom, prenom };
    return this.etudiants[index];
  }

  updatePartial(id: number, nom?: string, prenom?: string): Etudiant | null {
    const etudiant = this.findById(id);
    if (!etudiant) return null;
    if (nom) etudiant.nom = nom;
    if (prenom) etudiant.prenom = prenom;
    return etudiant;
  }

  delete(id: number): boolean {
    const index = this.etudiants.findIndex(e => e.id === id);
    if (index === -1) return false;
    this.etudiants.splice(index, 1);
    return true;
  }
}

export const etudiantRepository = new EtudiantRepository();
