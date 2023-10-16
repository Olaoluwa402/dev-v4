import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/User.js";
import { verifyUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/").post(createUser).get(getUsers);
router
  .route("/:id")
  .get(verifyUser, getUser)
  .patch(verifyUser, updateUser)
  .delete(verifyUser, deleteUser);

export default router;
