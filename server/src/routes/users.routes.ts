import { Router, Request, Response } from 'express';
import usersController from '../controllers/users.controller';

const userRouter = Router();

userRouter.post('/login', usersController.login);
userRouter.post('/register', usersController.register);

export default userRouter;