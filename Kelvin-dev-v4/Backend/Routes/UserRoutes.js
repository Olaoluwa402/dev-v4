import express from "express";
import {
  createUsers,
  getUsers,
  getUser,
  editUser,
  deleteUsers,
} from "../controllers/UserController.js";

const router = express.Router();

router.route("/").post(createUsers).get(getUsers);

router.route("/:id").get(getUser).patch(editUser).delete(deleteUsers);

export default router;
