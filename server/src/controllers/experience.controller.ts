import { Request, Response } from "express";
import ExperienceService from "../services/experience.service"; 

class ExperienceController {

  public static async getExperienceLists(request: Request, response: Response): Promise<Response> {
    try {
      const data = await ExperienceService.getList();

      if (!data) {
        return response.status(404).json({ message: "Experience not found" });
      }
      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async getExperienceById(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({ message: "Id is required" });
      }

      const data = await ExperienceService.getById(id);
      if (!data) {
        return response.status(404).json({ message: "Experience not found" });
      }
      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async createExperience(required: Request, res: Response): Promise<Response> {
    try {
      const newExperience = await ExperienceService.create(required.body);

      return res.status(201).json(newExperience);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async updateExperience(request: Request, res: Response): Promise<Response> {
    try {

      const updatedExperience = await ExperienceService.update(request.params.id, request.body);
      return res.status(200).json(updatedExperience);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async deleteExperience(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Id is required" });
      }
      await ExperienceService.delete(id);
      return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default ExperienceController;
