import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/User.js";
import { verifyUser, authorized } from "../middleware/auth.js";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/").post(createUser).get(getUsers);
router
  .route("/:id")
  .get(verifyUser, authorized(["default", "admin"]), getUser)
  .patch(verifyUser, authorized(["default", "admin"]), updateUser)
  .delete(verifyUser, authorized(["default"]), deleteUser);

export default router;
