import { Router } from 'express';
import userRouter from './users.routes';
import homeRouter from './home.routes';
import contractRouter from './contact.routes';


const routes = Router();

routes.use('/user', userRouter);
routes.use('/home', homeRouter);
routes.use('/contact', contractRouter);

export default routes;