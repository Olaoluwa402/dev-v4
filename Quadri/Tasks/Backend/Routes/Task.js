import express from "express"

import { createTask, deleteTask, getTask, getTasks, updateTask } from "../Controller/Task.js"
import {createTaskSchema} from "../Controller/TaskSchema.js"
import { userVerification } from "../Middleware/Auth.js"
import validateMiddle from "../Middleware/Validation.js"


const taskRouter = express.Router()

taskRouter
.route("/")
.post( validateMiddle(createTaskSchema),userVerification,createTask)
.get(userVerification,getTasks)

taskRouter
.route("/:id")
.get(userVerification,getTask)
.patch(validateMiddle(createTaskSchema),userVerification,updateTask)
.delete(userVerification,deleteTask)


export default taskRouter