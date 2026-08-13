import { Request, Response, NextFunction } from 'express';
import { etudiantService } from '../services/etudiant.service';

export class EtudiantController {
  static getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = etudiantService.getAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id, 10);
      const data = etudiantService.getById(id);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static create(req: Request, res: Response, next: NextFunction) {
    try {
      const { nom, prenom } = req.body;
      const data = etudiantService.create(nom, prenom);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }

  static update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id, 10);
      const { nom, prenom } = req.body;
      const data = etudiantService.update(id, nom, prenom);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static updatePartial(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id, 10);
      const { nom, prenom } = req.body;
      const data = etudiantService.updatePartial(id, nom, prenom);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id, 10);
      etudiantService.delete(id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
