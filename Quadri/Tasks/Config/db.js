import mongoose from "mongoose";
export const dbConnect = ()=>{
    const connection = mongoose.connect(process.env.MONGO_URI);

    return connection;
}