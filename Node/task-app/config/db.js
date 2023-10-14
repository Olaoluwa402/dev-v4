import mongoose from "mongoose";
import { config } from "./config.js";

export const dbConnect = () => {
  const connection = mongoose.connect(config.mongodb.db_url);
  return connection;
};
