import {Router} from 'express';

import authRoutes from './auth.routes';
import noteRoutes from './note.routes';
import aboutRouter from './about.routes';
import contactRouter from './contact.routes';
import technologyRouter from './technology.routes';

const route = Router();

route.use('/auth', authRoutes);
route.use('/note', noteRoutes);
route.use('/about', aboutRouter);
route.use('/contact', contactRouter);
route.use('/technology', technologyRouter);



export default route;