import { Etudiant } from "../models/etudiant.model";

let etudiants: Etudiant[] = [
  { id: 1, nom: "Dupont", prenom: "Alice", email: "alice.dupont@email.com", age: 20 },
  { id: 2, nom: "Martin", prenom: "Bob", email: "bob.martin@email.com", age: 22 },
  { id: 3, nom: "Bernard", prenom: "Clara", email: "clara.bernard@email.com" }
];

let prochainId = 4;

export class EtudiantRepository {
  findAll(): Etudiant[] {
    return etudiants;
  }

  findById(id: number): Etudiant | undefined {
    return etudiants.find(e => e.id === id);
  }

  create(data: Omit<Etudiant, "id">): Etudiant {
    const nouvelEtudiant: Etudiant = {
      id: prochainId++,
      ...data
    };
    etudiants.push(nouvelEtudiant);
    return nouvelEtudiant;
  }

  update(id: number, data: Omit<Etudiant, "id">): Etudiant | null {
    const index = etudiants.findIndex(e => e.id === id);
    if (index === -1) return null;

    etudiants[index] = { id, ...data };
    return etudiants[index];
  }

  partialUpdate(id: number, data: Partial<Etudiant>): Etudiant | null {
    const etudiant = etudiants.find(e => e.id === id);
    if (!etudiant) return null;

    if (data.nom !== undefined) etudiant.nom = data.nom;
    if (data.prenom !== undefined) etudiant.prenom = data.prenom;
    if (data.email !== undefined) etudiant.email = data.email;
    if (data.age !== undefined) etudiant.age = data.age;

    return etudiant;
  }

  delete(id: number): Etudiant | null {
    const index = etudiants.findIndex(e => e.id === id);
    if (index === -1) return null;

    const [supprime] = etudiants.splice(index, 1);
    return supprime;
  }
}