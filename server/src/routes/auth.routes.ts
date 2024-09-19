import {Router} from "express";
import AuthController from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post('/auth/get', AuthController.get);
authRoutes.post('/auth/login', AuthController.signin);
authRoutes.post('/auth/signup', AuthController.signup);
authRoutes.post('/auth/delete', AuthController.delete)
