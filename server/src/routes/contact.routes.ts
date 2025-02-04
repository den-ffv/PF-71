import { Router } from 'express';
import ContactController from '../controllers/contact.controller';

const contactRouter = Router();

contactRouter.get('/', ContactController.getAll);
contactRouter.get('/:id', ContactController.getById);
contactRouter.post('/', ContactController.create);
contactRouter.put('/:id', ContactController.update);
contactRouter.delete('/:id', ContactController.delete);

export default contactRouter;