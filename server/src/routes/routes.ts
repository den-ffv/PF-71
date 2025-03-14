import { Router } from 'express';
import userRouter from './users.routes';
import homeRouter from './home.routes';
import contractRouter from './contact.routes';
import projectRouter from './project.routes';
import thoughtsRouter from './thoughts.routes';
import experienceRouter from './experience.routes';


const routes = Router();

routes.use('/user', userRouter);
routes.use('/home', homeRouter);
routes.use('/contact', contractRouter);
routes.use('/project', projectRouter);
routes.use('/thoughts', thoughtsRouter);
routes.use('/experience', experienceRouter);

export default routes;