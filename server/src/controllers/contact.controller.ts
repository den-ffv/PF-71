import { Request, Response } from 'express';
import { Contact } from '@prisma/client';
import prisma from '../utils/prisma';

class ContactController {

  public static async getAll(req: Request, res: Response): Promise<any> {
    try {
      const allContact: Contact[] = await prisma.contact.findMany();

      res.status(200).json({message: 'Successfully fetched', data: allContact});
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching contact', message: error.message });
    }
  }

  public static async getById(req: Request, res: Response): Promise<any> {
    try {
      const id = Number(req.params.id);
      const contactById: Contact | null = await prisma.contact.findUnique({
        where: { id },
      });
      if (!contactById) {
        res.status(404).json({ error: 'Contact not found' });
      }

      res.status(200).json({message: 'Successfully fetched', data: contactById});
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching contact', message: error.message });
    }
  }

  public static async create(req: Request, res: Response): Promise<any> {
    try {
      const data = req.body;

      const allContact: Contact[] = await prisma.contact.findMany();

      if (!allContact) {
        res.status(404).json({ error: 'Contact not found' });
      }
      
      const contact: Contact = await prisma.contact.create({
        data,
      });
      res.status(200).json({message: 'Successfully created', data: contact});
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Error creating contact', message: error.message });
    }
  }

  public static async update(req: Request, res: Response): Promise<any> {
    try {
      const id = Number(req.params.id);
      const data = req.body;
  
      const updatedContact = await prisma.contact.update({
        where: { id },
        data,
      });
  
      return res.status(200).json({message: 'Successfully updated', data: updatedContact});
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Error updating contact', message: error.message });
    }
  }  

  public static async delete(req: Request, res: Response): Promise<any> {
    try {
      const id = Number(req.params.id);
      await prisma.contact.delete({
        where: { id },
      });
      res.send({ message: 'Contact deleted successfully' });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting contact', message: error.message });
    }
  }
}

export default ContactController;