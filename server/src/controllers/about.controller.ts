import { Request, Response } from 'express';
import { About } from '@prisma/client';

class AboutController {

  public static async getById(req: Request, res: Response): Promise<void> {
    res.send('GET request to the homepage');
  }

  public static async create(req: Request, res: Response): Promise<void> {
    res.send('POST request to the homepage');
  }

  public static async update(req: Request, res: Response): Promise<void> {
    res.send('PUT request to the homepage');
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    res.send('DELETE request to the homepage');
  }
}

export default AboutController;