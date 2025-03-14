import { Router } from "express";
import ThoughtsController from "../controllers/thoughts.controller";


const thoughtsRouter = Router();

thoughtsRouter.get("/", ThoughtsController.getThoughtsLists);
thoughtsRouter.get("/:id", ThoughtsController.getThoughtsById);
thoughtsRouter.post("/", ThoughtsController.createThoughts);
thoughtsRouter.put("/:id", ThoughtsController.updateThoughts);
thoughtsRouter.delete("/:id", ThoughtsController.deleteThoughts);

export default thoughtsRouter;