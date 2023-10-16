import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/User.js";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/").post(createUser).get(getUsers);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
