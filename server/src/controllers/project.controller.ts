import { Request, Response } from "express";
import ProjectService from "../services/project.service"; 

class ProjectController {

  public static async getProjectLists(request: Request, response: Response): Promise<Response> {
    try {
      const data = await ProjectService.getList();

      if (!data) {
        return response.status(404).json({ message: "Project not found" });
      }
      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async getProjectById(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({ message: "Id is required" });
      }

      const data = await ProjectService.getById(id);
      if (!data) {
        return response.status(404).json({ message: "Project not found" });
      }
      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async createProject(required: Request, res: Response): Promise<Response> {
    try {
      const newProject = await ProjectService.create(required.body);

      return res.status(201).json(newProject);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async updateProject(request: Request, res: Response): Promise<Response> {
    try {

      const updatedProject = await ProjectService.update(request.params.id, request.body);
      return res.status(200).json(updatedProject);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async deleteProject(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Id is required" });
      }
      await ProjectService.delete(id);
      return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default ProjectController;
