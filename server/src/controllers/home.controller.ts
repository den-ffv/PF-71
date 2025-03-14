import { Request, Response } from "express";
import HomeService from "../services/home.service";

class HomeController {

  public static async getHomeLists(request: Request, response: Response): Promise<Response> {
    try {
      const data = await HomeService.getList();

      if (!data) {
        return response.status(404).json({ message: "Home not found" });
      }
      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async getHomeById(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({ message: "Id is required" });
      }

      const data = await HomeService.getById(id);
      if (!data) {
        return response.status(404).json({ message: "Home not found" });
      }
      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async createHome(required: Request, res: Response): Promise<Response> {
    try {
      const newHome = await HomeService.create(required.body);

      return res.status(201).json(newHome);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async updateHome(request: Request, res: Response): Promise<Response> {
    try {

      const updatedHome = await HomeService.update(request.params.id, request.body);
      return res.status(200).json(updatedHome);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async deleteHome(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Id is required" });
      }
      await HomeService.delete(id);
      return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default HomeController;
