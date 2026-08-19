import { Etudiant } from "../models/etudiant.model";
import { EtudiantRepository } from "../repositories/etudiant.repository";
import { createError } from "../middlewares/errorHandler";

const repository = new EtudiantRepository();

export class EtudiantService {
  getAll(): Etudiant[] {
    return repository.findAll();
  }

  getById(id: number): Etudiant {
    const etudiant = repository.findById(id);
    if (!etudiant) {
      throw createError(404, `Étudiant avec l'ID ${id} non trouvé`);
    }
    return etudiant;
  }

  create(data: { nom: string; prenom: string; email: string; age?: number }): Etudiant {
    if (!data.nom || !data.prenom || !data.email) {
      throw createError(400, "Les champs nom, prenom et email sont obligatoires");
    }
    return repository.create(data);
  }

  update(id: number, data: { nom: string; prenom: string; email: string; age?: number }): Etudiant {
    if (!data.nom || !data.prenom || !data.email) {
      throw createError(400, "Avec PUT, tous les champs (nom, prenom, email) sont obligatoires");
    }

    const updated = repository.update(id, data);
    if (!updated) {
      throw createError(404, `Étudiant avec l'ID ${id} non trouvé`);
    }
    return updated;
  }

  partialUpdate(id: number, data: Partial<Etudiant>): Etudiant {
    const updated = repository.partialUpdate(id, data);
    if (!updated) {
      throw createError(404, `Étudiant avec l'ID ${id} non trouvé`);
    }
    return updated;
  }

  delete(id: number): Etudiant {
    const deleted = repository.delete(id);
    if (!deleted) {
      throw createError(404, `Étudiant avec l'ID ${id} non trouvé`);
    }
    return deleted;
  }
}