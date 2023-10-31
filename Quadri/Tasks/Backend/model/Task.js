import mongoose from "mongoose"

const TaskSchema = mongoose.Schema({
    title: {type:String, required:true},
    desc: {type:String, required:true },
    status: {type:String, enum:["pending","completed"],default:"pending"},
    userId: {type:mongoose.Schema.ObjectId},
},
    {timestamp:true}
)

const taskModel = mongoose.model("tasks",TaskSchema)

export default taskModel;