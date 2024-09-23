import {Router} from "express";

import authRoutes from "./auth.routes";
import noteRoutes from "./note.routes";

const route = Router();

route.use('/auth', authRoutes);
route.use('/note', noteRoutes);



export default route;