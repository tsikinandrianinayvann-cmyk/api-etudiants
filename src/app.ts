import express from 'express';
import { EtudiantController } from './controllers/etudiant.controller';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes de la ressource /etudiants
app.get('/etudiants', EtudiantController.getAll);
app.get('/etudiants/:id', EtudiantController.getById);
app.post('/etudiants', EtudiantController.create);
app.put('/etudiants/:id', EtudiantController.update);
app.patch('/etudiants/:id', EtudiantController.updatePartial);
app.delete('/etudiants/:id', EtudiantController.delete);

// Middleware d'erreur
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
