import { Router } from 'express';
import TechnologyController from '../controllers/contact.controller';

const technologyRouter = Router();

technologyRouter.get('/', TechnologyController.getAll);
technologyRouter.get('/:id', TechnologyController.getById);
technologyRouter.post('/', TechnologyController.create);
technologyRouter.put('/:id', TechnologyController.update);
technologyRouter.delete('/:id', TechnologyController.delete);

export default technologyRouter;