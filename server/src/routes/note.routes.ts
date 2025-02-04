import {Router} from 'express';
import NoteController from '../controllers/note.controller';

const noteRoutes = Router();

noteRoutes.get('/:id', NoteController.getById);
noteRoutes.get('/', NoteController.list);
noteRoutes.post('/:id', NoteController.create);
noteRoutes.put('/:id', NoteController.update);
noteRoutes.delete('/:id', NoteController.delete);


export default noteRoutes;