import { Router } from 'express';
import AboutController from '../controllers/about.controller';

const aboutRouter = Router();

aboutRouter.get('/:id', AboutController.getById);
aboutRouter.post('/', AboutController.create);
aboutRouter.put('/:id', AboutController.update);
aboutRouter.delete('/:id', AboutController.delete);

export default aboutRouter;