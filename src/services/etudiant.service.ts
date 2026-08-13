import { etudiantRepository } from '../repositories/etudiant.repository';
import { Etudiant, CustomError } from '../models/etudiant.model';

class EtudiantService {
  getAll(): Etudiant[] {
    return etudiantRepository.findAll();
  }

  getById(id: number): Etudiant {
    const etudiant = etudiantRepository.findById(id);
    if (!etudiant) {
      const err: CustomError = new Error('Étudiant non trouvé');
      err.status = 404;
      throw err;
    }
    return etudiant;
  }

  create(nom?: string, prenom?: string): Etudiant {
    if (!nom || !prenom) {
      const err: CustomError = new Error('Le nom et le prénom sont requis');
      err.status = 400;
      throw err;
    }
    return etudiantRepository.create(nom, prenom);
  }

  update(id: number, nom?: string, prenom?: string): Etudiant {
    if (!nom || !prenom) {
      const err: CustomError = new Error('Remplacement complet requis : nom et prénom obligatoires');
      err.status = 400;
      throw err;
    }
    const updated = etudiantRepository.update(id, nom, prenom);
    if (!updated) {
      const err: CustomError = new Error('Étudiant non trouvé');
      err.status = 404;
      throw err;
    }
    return updated;
  }

  updatePartial(id: number, nom?: string, prenom?: string): Etudiant {
    const updated = etudiantRepository.updatePartial(id, nom, prenom);
    if (!updated) {
      const err: CustomError = new Error('Étudiant non trouvé');
      err.status = 404;
      throw err;
    }
    return updated;
  }

  delete(id: number): void {
    const deleted = etudiantRepository.delete(id);
    if (!deleted) {
      const err: CustomError = new Error('Étudiant non trouvé');
      err.status = 404;
      throw err;
    }
  }
}

export const etudiantService = new EtudiantService();
