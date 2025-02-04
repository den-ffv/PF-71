import { Request, Response } from 'express';
import { Technology } from '@prisma/client';
import prisma from '../utils/prisma';

class TechnologyController {

  public static async getAll(req: Request, res: Response): Promise<any> {
    try {
      const allTechnology: Technology[] = await prisma.technology.findMany();

      res.status(200).json({message: 'Successfully fetched', data: allTechnology});
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching technology', message: error.message });
    }
  }

  public static async getById(req: Request, res: Response): Promise<any> {
    try {
      const id = Number(req.params.id);
      const technologyById: Technology | null = await prisma.technology.findUnique({
        where: { id },
      });
      if (!technologyById) {
        res.status(404).json({ error: 'Technology not found' });
      }

      res.status(200).json({message: 'Successfully fetched', data: technologyById});
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching technology', message: error.message });
    }
  }

  public static async create(req: Request, res: Response): Promise<any> {
    try {
      const data = req.body;

      const allTechnology: Technology[] = await prisma.technology.findMany();

      if (!allTechnology) {
        res.status(404).json({ error: 'Technology not found' });
      }
      
      const technology: Technology = await prisma.technology.create({
        data,
      });
      res.status(200).json({message: 'Successfully created', data: technology});
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Error creating technology', message: error.message });
    }
  }

  public static async update(req: Request, res: Response): Promise<any> {
    try {
      const id = Number(req.params.id);
      const data = req.body;
  
      const updatedTechnology = await prisma.technology.update({
        where: { id },
        data,
      });
  
      return res.status(200).json({message: 'Successfully updated', data: updatedTechnology});
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Error updating technology', message: error.message });
    }
  }  

  public static async delete(req: Request, res: Response): Promise<any> {
    try {
      const id = Number(req.params.id);
      await prisma.technology.delete({
        where: { id },
      });
      res.send({ message: 'Technology deleted successfully' });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting technology', message: error.message });
    }
  }
}

export default TechnologyController;