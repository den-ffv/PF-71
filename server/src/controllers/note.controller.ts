import { Request, Response } from 'express';
import prisma from '../utils/prisma';

import { Note } from '@prisma/client';

class NoteController {

  public static async list(req: Request, res: Response): Promise<Response> {
    try {
      const notes: Note[] = await prisma.note.findMany();
      const count: number =  await prisma.note.count();

      return res.status(200).json({message: 'Successfully fetched', data: notes, count});
    }catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to fetch notes', message: error.message });
    }
  }

  public static async getById(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const note = await prisma.note.findUnique({ where: { id } });

      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }

      return res.status(200).json({message: 'Successfully fetched', data: note});
    }catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Error fetching note', message: error.message });
    }
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    try {

      const data = req.body;

      const newNote = await prisma.note.create({ data });

      return res.status(200).json({message: 'Successfully created', data: newNote});
    }catch(error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Error creating note', message: error.message });
    }
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    try{
      const id  = Number(req.params.id);
      const data = req.body;

      const updateNote = await prisma.note.update({
        where: { id },
        data
      });
      return res.status(200).json({message: 'Successfully updated', data: updateNote});
    }catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Error updating note', message: error.message });
    }
  }

  public static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      await prisma.note.delete({ where: { id } });

      return res.status(204).json({message: 'Note deleted'});
    }catch (error: any) {
      console.error(error)
      return res.status(500).json({ error: 'Error deleting note', message: error.message });
    }
  }
}

export default NoteController;