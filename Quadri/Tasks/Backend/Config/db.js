import mongoose from "mongoose";
import {config} from "./config.js"
export const dbConnect = () => {
    const connection = mongoose.connect("mongodb+srv://kazeemquadri75:$Immaculate@cluster0.m8jbwt9.mongodb.net/Task");
    return connection;
  };
