import { Router } from "express";
import ContactController from "../controllers/contact.controller";

const contractRouter = Router();

contractRouter.get("/", ContactController.getContactLists);
contractRouter.get("/:id", ContactController.getContactById);
contractRouter.post("/", ContactController.createContact);
contractRouter.put("/:id", ContactController.updateContact);
contractRouter.delete("/:id", ContactController.deleteContact);

export default contractRouter;