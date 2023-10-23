import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    role: {type:String, enum:["admin","default", "supervisor"],default:"default"},
    email: {type:String, required: true, unique:true},
    phoneNumber: {type:String, required: true, unique:true},
    userCode: {type:String, required: true, unique: true},
    password: {type:String, required: true}
},

{timestamp:true}
)

const userModel = mongoose.model("user", userSchema)
export default userModel