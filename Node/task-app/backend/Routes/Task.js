import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/Task/Task.js";
import { createTaskShema } from "../controllers/Task/TaskSchema.js";
import { verifyUser } from "../middleware/auth.js";
import validationMiddleware from "../middleware/validation.js";

const router = express.Router();

router
  .route("/")
  .get(verifyUser, getTasks)
  .post(validationMiddleware(createTaskShema), verifyUser, createTask);

router
  .route("/:id")
  .get(verifyUser, getTask)
  .patch(validationMiddleware(createTaskShema), verifyUser, updateTask)
  .delete(verifyUser, deleteTask);
export default router;
