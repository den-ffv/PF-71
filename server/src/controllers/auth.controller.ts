import { Request, Response } from 'express';
import bcrypt from "bcrypt";

import prisma from "../utils/prisma";
import { removeFields } from "../utils/helpers";


class AuthController {
  async signup(req: Request, res: Response): Promise<Response> {
    try {
      const {  email, password, firstname, lastname } = req.body;


      const passwordSold = await bcrypt.genSalt(5);
      const hashPassword = await bcrypt.hash(password, passwordSold);

      const user = await prisma.autor.create({data: {
        email,
        password: hashPassword,
        firstname,
        lastname,
        createdAt: new Date(),
        updatedAt: new Date()
      }});
      return res.status(201).json(removeFields(user, ["password"]));
    }catch (error) {
      console.error(error)
      return res.status(500).json({ error });
    }
  }

  async signin(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const user = await prisma.autor.findUnique({where: {email}});

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }

      return res.status(200).json(removeFields(user, ["password"]));
    }catch (error) {
      console.error(error)
      return res.status(500).json({ error });
    }
  }

  async get(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.body;

      const user = await prisma.autor.findUnique({ where: { id } });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    }catch(error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try{
      const id = Number(req.params.id);

      const updateUser = await prisma.autor.update({
        where: { id },
        data: req.body
      });

      if (!updateUser) {
        return res.status(404).json({ error: "User not found" });
      }
    
      return res.json(updateUser);
    }catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);

      await prisma.autor.delete({ where: { id } });

      return res.status(204).send("User deleted");
    }catch (error) {
      console.error(error)
      return res.status(500).json({ error });
    }
  }
}

export default new AuthController();