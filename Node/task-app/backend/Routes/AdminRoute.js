import express from "express";
import { updateRole, getAllUsers } from "../controllers/Admin/User.js";

import { verifyUser, authorized } from "../middleware/auth.js";
import validationMiddleware from "../middleware/validation.js";
import { UserSchemaFromAdmin } from "../controllers/Admin/UserSchema.js";

const router = express.Router();

router.route("/").get(verifyUser, authorized(["admin"]), getAllUsers);

router
  .route("/updaterole")
  .patch(
    validationMiddleware(UserSchemaFromAdmin),
    verifyUser,
    authorized(["admin"]),
    updateRole
  );

export default router;
