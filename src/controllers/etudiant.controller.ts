import { Request, Response, NextFunction } from "express";
import { EtudiantService } from "../services/etudiant.service";
import { createError } from "../middlewares/errorHandler";

const service = new EtudiantService();

export class EtudiantController {
  getAll(req: Request, res: Response) {
    const etudiants = service.getAll();
    res.status(200).json({
      success: true,
      count: etudiants.length,
      data: etudiants
    });
  }

  getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        throw createError(400, "L'ID doit être un nombre");
      }

      const etudiant = service.getById(id);
      res.status(200).json({
        success: true,
        data: etudiant
      });
    } catch (error) {
      next(error);
    }
  }

  create(req: Request, res: Response, next: NextFunction) {
    try {
      const etudiant = service.create(req.body);
      res.status(201).json({
        success: true,
        message: "Étudiant créé avec succès",
        data: etudiant
      });
    } catch (error) {
      next(error);
    }
  }

  update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        throw createError(400, "L'ID doit être un nombre");
      }

      const etudiant = service.update(id, req.body);
      res.status(200).json({
        success: true,
        message: "Étudiant modifié complètement",
        data: etudiant
      });
    } catch (error) {
      next(error);
    }
  }

  partialUpdate(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        throw createError(400, "L'ID doit être un nombre");
      }

      const etudiant = service.partialUpdate(id, req.body);
      res.status(200).json({
        success: true,
        message: "Étudiant modifié partiellement",
        data: etudiant
      });
    } catch (error) {
      next(error);
    }
  }

  delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        throw createError(400, "L'ID doit être un nombre");
      }

      const etudiant = service.delete(id);
      res.status(200).json({
        success: true,
        message: "Étudiant supprimé avec succès",
        data: etudiant
      });
    } catch (error) {
      next(error);
    }
  }
}