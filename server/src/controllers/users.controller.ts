import { Request, Response } from "express";
import {prisma} from "../utils/prisma";


class UsersController {
  public static async login(request: Request, response: Response): Promise<any> {
    try {
      const { login, password } = request.body;
      console.log(123123123);
      
      const user: any = await prisma.user.findUnique({
        where: {
          login: login
        }
      });
      if (!user) {
        return response.status(404).json({ message: "User not found" });
      }
      
      return response.status(200).json({ user });
    } catch (error) {
      console.error(error);
      response.status(500).json({ mess: "Internal server error", error });
    }
  }
  public static async register(request: Request, response: Response) {
    try {
      const { login, password } = request.body;

      const user = await prisma.user.findUnique({
        where: {
          login: login
        }
      });

      if (user) {
        return response.status(400).json({ message: "User already exists" });
      }

      const newUser = await prisma.user.create({
        data: {
          login,
          password
        }
      });
      return response.status(201).json({ user: newUser });
    } catch (error) {
      
    }
  
  }


}

export default UsersController;