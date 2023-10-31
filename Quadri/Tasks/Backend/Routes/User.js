import express from "express"
import { createUser
        ,getUsers
        ,getUser,updateUser
        ,deleteUser,
        userLogin
 
         } from "../Controller/User.js"
import { userVerification, Authorized } from "../Middleware/Auth.js"
import validateMiddle from "../Middleware/Validation.js"
import { createUserSchema } from "../Controller/userSchema.js"

        

        const router = express.Router()

        router.route("/login").post(userLogin)
        router
        .route("/")
        .post( validateMiddle(createUserSchema), createUser)
        .get(getUsers)
        router
        .route("/:id")
        .get(userVerification, Authorized(["default,", "admin"]), getUser)
        .patch( userVerification, Authorized(["default","admin"]),updateUser)
        .delete(userVerification, Authorized(["default"]), deleteUser)

        export default router;