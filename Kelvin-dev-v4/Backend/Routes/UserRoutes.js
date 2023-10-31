import express from "express";
import {
  createUsers,
  getUsers,
  getUser,
  editUser,
  deleteUser,
  loginUser,
} from "../controllers/UserController.js";
import { verifyUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/login").post(loginUser);

router.route("/").post(createUsers).get(getUsers);

router
  .route("/:id")
  .get(verifyUser, getUser)
  .patch(verifyUser, editUser)
  .delete(verifyUser, deleteUser);

export default router;
