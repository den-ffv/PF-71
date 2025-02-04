import { Request, Response } from 'express';
import { About } from '@prisma/client';
import prisma from '../utils/prisma';

class AboutController {

  public static async getById(req: Request, res: Response): Promise<any> {
    try {
      const id = Number(req.params.id);
      const aboutById: About | null = await prisma.about.findUnique({
        where: { id },
      });
      if (!aboutById) {
        res.status(404).json({ error: 'About not found' });
      }

      res.status(200).json({message: 'Successfully fetched', data: aboutById});
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching note', message: error.message });
    }
  }

  public static async create(req: Request, res: Response): Promise<any> {
    try {
      const data = req.body;

      const allAbout: About[] = await prisma.about.findMany();

      if (!allAbout) {
        res.status(404).json({ error: 'About not found' });
      }
      allAbout.map((about: About) => {
        if(about?.is_active === true) {
          data.is_active = false;
        }
      })

      const about: About = await prisma.about.create({
        data,
      });
      res.status(200).json({message: 'Successfully created', data: about});
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Error creating note', message: error.message });
      
    }
  }

  public static async update(req: Request, res: Response): Promise<any> {
    try {
      const id = Number(req.params.id);
      const data = req.body;
  
      const [allAbout, aboutById] = await prisma.$transaction([
        prisma.about.findMany(),
        prisma.about.findUnique({ where: { id } }),
      ]);
  
      if (!aboutById) {
        return res.status(404).json({ error: 'About not found' });
      }
  
      if (data.is_active === true) {
        const activeExists = allAbout.some(about => about.is_active === true && about.id !== id);
        if (activeExists) {
          return res.status(400).json({ error: 'There is already an active about' });
        }
      }
  
      const updatedAbout = await prisma.about.update({
        where: { id },
        data,
      });
  
      return res.status(200).json({message: 'Successfully updated', data: updatedAbout});
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Error updating note', message: error.message });
    }
  }  

  public static async delete(req: Request, res: Response): Promise<any> {
    try {
      const id = Number(req.params.id);
      await prisma.about.delete({
        where: { id },
      });
      res.send({ message: 'About deleted successfully' });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting note', message: error.message });
    }
  }
}

export default AboutController;