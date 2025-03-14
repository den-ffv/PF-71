import { Router } from "express";
import ExperienceController from "../controllers/experience.controller";

const experienceRouter = Router();

experienceRouter.get("/", ExperienceController.getExperienceLists);
experienceRouter.get("/:id", ExperienceController.getExperienceById);
experienceRouter.post("/", ExperienceController.createExperience);
experienceRouter.put("/:id", ExperienceController.updateExperience);
experienceRouter.delete("/:id", ExperienceController.deleteExperience);

export default experienceRouter;