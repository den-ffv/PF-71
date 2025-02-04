import {Router} from 'express';

import authRoutes from './auth.routes';
import noteRoutes from './note.routes';
import aboutRouter from './about.routes';

const route = Router();

route.use('/auth', authRoutes);
route.use('/note', noteRoutes);
route.use('/about', aboutRouter);



export default route;