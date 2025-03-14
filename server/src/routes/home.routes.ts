import { Router } from "express";
import HomeController from "../controllers/home.controller";

const homeRouter = Router();

homeRouter.get("/", HomeController.getHomeLists);
homeRouter.get("/:id", HomeController.getHomeById);
homeRouter.post("/", HomeController.createHome);
homeRouter.put("/:id", HomeController.updateHome);
homeRouter.delete("/:id", HomeController.deleteHome);

export default homeRouter;
