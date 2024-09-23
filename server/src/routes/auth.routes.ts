import {Router} from "express";
import AuthController from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/test", (req, res) => {  return res.send("Hello World") });

authRoutes.post('/get', AuthController.get);
authRoutes.post('/login', AuthController.signin);
authRoutes.post('/signup', AuthController.signup);
authRoutes.post('/delete', AuthController.delete)


export default authRoutes;