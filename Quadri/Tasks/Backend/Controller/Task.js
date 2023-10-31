import httpStatus from "http-status"
import taskModel from "../model/Task.js"
import userModel from "../model/User.js"

 export const createTask = async (req,res)=>{

    // get the required fields from the body
    const {title, desc} = req.body

    // get the current user

    const userId = req.user.id

    // create user task

    try {
        const titleExist = await taskModel.findOne({title:title})
        if(titleExist){
            res.status(httpStatus.BAD_REQUEST).json({
                status:"error",
                payload:"Title already exist"
            })
            return
        }

        const task = await taskModel.create({
            title,
            desc,
            userId
        })

        // pass the created task to reference the user

        const user = await userModel.findOne({_id: userId})
        user.tasks.push(task._id)
        await user.save()
        res.status(httpStatus.CREATED).json({
            status:"success",
            payload:task
        })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({
            status:"error",
            payload:error.message
        })
        
    }
}

export const getTasks = async(req,res)=>{
    try {
        const tasks = await taskModel.findOne({userId:req.user.id}).populate("userId")
        res.status(httpStatus.OK).json({
            status:"success",
            payload:tasks
        })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({
            status:"error",
            payload:error.message
        })
    }
}


export const getTask = async (req,res)=>{
    const {id}=req.params

    try {
        const task = await taskModel.findById({_id:id})
        if(!task){
            res.status(httpStatus.NOT_FOUND).json({
                status:"error",
                payload:"Task not found"
            })
            return;
        }

        res.status(httpStatus.OK).json({
            status:"success",
            payload:task
        })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({
            status:"error",
            payload:error.message
        })
    }
}

export const updateTask =async(req,res)=>{
    const taskId = req.params.id
    const {title,desc} = req.body

    try {
        const taskExist = await taskModel.findOne({_id:taskId})
        if(!taskExist){
            res.status(httpStatus.NOT_FOUND).json({
                status:"error",
                payload:"Task not found"
            })
        }

        const updatedTask = await taskModel.findOneAndUpdate(
        {_id:taskId}
        ,{title,desc}
        ,{new:true})
        res.status(httpStatus.OK).json({
            status:"success",
            payload:updatedTask
        })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({
            status:"error",
            payload:error.message
        })
    }
}

export const deleteTask =async(req,res)=>{
        const {id} = req.params
        try {
            const task = await taskModel.findById({_id:id})
            if (!task){
                res.status(httpStatus.NOT_FOUND).json({
                    status:"error",
                    payload:"task not found"
                })

                return;
            }
            await userModel.findByIdAndDelete({_id:id})
            res.status(httpStatus.OK).json({
                status:"success",
                payload:"task deleted successfully"
            })
        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({
                status:"error",
                payload:error.message
            })
        }
}