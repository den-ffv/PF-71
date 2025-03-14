import { Request, Response } from "express";
import ThoughtsService from "../services/thoughts.service"; 

class ThoughtsController {

  public static async getThoughtsLists(request: Request, response: Response): Promise<Response> {
    try {
      const data = await ThoughtsService.getList();

      if (!data) {
        return response.status(404).json({ message: "Thoughts not found" });
      }
      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async getThoughtsById(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({ message: "Id is required" });
      }

      const data = await ThoughtsService.getById(id);
      if (!data) {
        return response.status(404).json({ message: "Thoughts not found" });
      }
      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async createThoughts(required: Request, res: Response): Promise<Response> {
    try {
      const newThoughts = await ThoughtsService.create(required.body);

      return res.status(201).json(newThoughts);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async updateThoughts(request: Request, res: Response): Promise<Response> {
    try {

      const updatedThoughts = await ThoughtsService.update(request.params.id, request.body);
      return res.status(200).json(updatedThoughts);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async deleteThoughts(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Id is required" });
      }
      await ThoughtsService.delete(id);
      return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default ThoughtsController;
