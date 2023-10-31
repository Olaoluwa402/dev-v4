import mongoose from "mongoose";
import { config } from "./config.js";

console.log(config.mongodb.db_url, "config.mongodb.db_url");
export const dbConnect = () => {
  const connection = mongoose.connect(config.mongodb.db_url);
  return connection;
};
