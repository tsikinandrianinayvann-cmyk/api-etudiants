import express from "express";
import cors from "cors";
import { EtudiantController } from "./controllers/etudiant.controller";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
const PORT = 3000;

const etudiantController = new EtudiantController();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API Étudiants - Bienvenue !",
    endpoints: {
      "GET /etudiants": "Lister tous les étudiants",
      "GET /etudiants/:id": "Lire un étudiant",
      "POST /etudiants": "Créer un étudiant",
      "PUT /etudiants/:id": "Modifier complètement",
      "PATCH /etudiants/:id": "Modifier partiellement",
      "DELETE /etudiants/:id": "Supprimer"
    }
  });
});

app.get("/etudiants", (req, res) => etudiantController.getAll(req, res));
app.get("/etudiants/:id", (req, res, next) => etudiantController.getById(req, res, next));
app.post("/etudiants", (req, res, next) => etudiantController.create(req, res, next));
app.put("/etudiants/:id", (req, res, next) => etudiantController.update(req, res, next));
app.patch("/etudiants/:id", (req, res, next) => etudiantController.partialUpdate(req, res, next));
app.delete("/etudiants/:id", (req, res, next) => etudiantController.delete(req, res, next));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});