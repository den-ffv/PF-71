import { Router } from "express";
import ProjectController from "../controllers/project.controller";

const projectRouter = Router();

projectRouter.get("/", ProjectController.getProjectLists);
projectRouter.get("/:id", ProjectController.getProjectById);
projectRouter.post("/", ProjectController.createProject);
projectRouter.put("/:id", ProjectController.updateProject);
projectRouter.delete("/:id", ProjectController.deleteProject);

export default projectRouter;