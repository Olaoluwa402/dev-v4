import express from "express"
import { createUser
        ,getUsers
        ,getUser,updateUser
        ,deleteUser } from "../Controller/User.js"

        

        const router = express.Router()

        router.route("/").post(createUser).get(getUsers)
        router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser)

        export default router;