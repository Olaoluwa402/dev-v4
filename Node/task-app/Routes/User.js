import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/User/User.js";
import { verifyUser, authorized } from "../middleware/auth.js";
import validationMiddleware from "../middleware/validation.js";
import { CreateUserSchema } from "../controllers/User/UserSchema.js";

const router = express.Router();

router.route("/login").post(loginUser);
router
  .route("/")
  .post(validationMiddleware(CreateUserSchema), createUser)
  .get(getUsers);
router
  .route("/:id")
  .get(verifyUser, authorized(["default", "admin"]), getUser)
  .patch(verifyUser, authorized(["default", "admin"]), updateUser)
  .delete(verifyUser, authorized(["default"]), deleteUser);

export default router;
