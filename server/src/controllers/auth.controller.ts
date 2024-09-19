import { Request, Response } from 'express';
import prisma from "../utils/prisma";

import {User} from "../utils/type";

class AuthController {
  async signup(req: Request, res: Response): Promise<User> {
    try {
      const user = await prisma.user.create(req.body);
      return res.status(201).json(user);
    }catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async signin(req: Request, res: Response): Promise<User> {
    try {
      const user = await prisma.user.findUnique({ where: { id: Number(req.params.id) } });
      return res.json(user);
    }catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async get(req: Request, res: Response): Promise<User> {
    try {
      const users = await prisma.user.findMany();
      return res.json(users);
    }catch(error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async update(req: Request, res: Response): Promise<User> {
    try{
      const user = await prisma.user.update({
        where: { id: Number(req.params.id) },
        data: req.body
      });
      return res.json(user);
    }catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async delete(req: Request, res: Response): Promise<User> {
    try {
      await prisma.user.delete({ where: { id: Number(req.params.id) } });
      return res.status(204).send();
    }catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new AuthController();