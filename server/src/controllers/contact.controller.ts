import { Request, Response } from "express";
import ContactService from "../services/contact.service"; 

class ContactController {

  public static async getContactLists(request: Request, response: Response): Promise<Response> {
    try {
      const data = await ContactService.getList();

      if (!data) {
        return response.status(404).json({ message: "Contact not found" });
      }
      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async getContactById(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({ message: "Id is required" });
      }

      const data = await ContactService.getById(id);
      if (!data) {
        return response.status(404).json({ message: "Contact not found" });
      }
      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async createContact(required: Request, res: Response): Promise<Response> {
    try {
      const newContact = await ContactService.create(required.body);

      return res.status(201).json(newContact);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async updateContact(request: Request, res: Response): Promise<Response> {
    try {

      const updatedContact = await ContactService.update(request.params.id, request.body);
      return res.status(200).json(updatedContact);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async deleteContact(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Id is required" });
      }
      await ContactService.delete(id);
      return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default ContactController;
