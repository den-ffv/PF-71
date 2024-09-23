import {Router} from "express";
import NoteController from "../controllers/note.controller";

const noteRoutes = Router();

noteRoutes.get('/getOne', NoteController.getOne);
noteRoutes.get('/list', NoteController.list);
noteRoutes.post('/create', NoteController.create);
noteRoutes.put('/update', NoteController.update);
noteRoutes.delete('/delete', NoteController.delete);


export default noteRoutes;