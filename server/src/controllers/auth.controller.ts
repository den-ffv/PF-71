import { Request, Response } from 'express';
import prisma from "../utils/prisma";


class AuthController {
  async signup(req: Request, res: Response): Promise<Response> {
    try {
      const user = await prisma.autor.create(req.body);
      return res.status(201).json(user);
    }catch (error) {
      return res.status(500).json({ error });
    }
  }
  async signin(req: Request, res: Response): Promise<Response> {
    try {
      const user = await prisma.autor.findUnique({where: {email: req.body.email}});
      return res.status(200).json(user);
    }catch (error) {
      console.error(error)
      return res.status(500).json({ error });
    }
  }
  async get(req: Request, res: Response): Promise<Response> {
    try {
      const users = await prisma.autor.findMany();
      return res.json(users);
    }catch(error) {
      return res.status(500).json({ error });
    }
  }
  async update(req: Request, res: Response): Promise<Response> {
    try{
      const user = await prisma.autor.update({
        where: { id: Number(req.params.id) },
        data: req.body
      });
      return res.json(user);
    }catch (error) {
      return res.status(500).json({ error });
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      await prisma.autor.delete({ where: { id: Number(req.params.id) } });
      return res.status(204).send();
    }catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new AuthController();