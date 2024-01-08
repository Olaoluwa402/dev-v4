//load evn variable into process.env
import dotenv from "dotenv";
import path from "path";

const __dir = path.resolve();
const envFilePath = path.resolve(__dir, ".env");
dotenv.config({ path: envFilePath });

import express from "express";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import httpStatus from "http-status";
import { dbConnect } from "./config/db.js";
import { config } from "./config/config.js";

//controllers
import UserRoute from "./Routes/User.js";
import TaskRoute from "./Routes/Task.js";
import AdminRoute from "./Routes/AdminRoute.js";

const app = express();

//general middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes instantiation
app.use("/admin", AdminRoute);
app.use("/users", UserRoute);
app.use("/tasks", TaskRoute);

//set static folder for frontend build to be served by the backend in production
console.log(process.env.NODE_ENV, "process.env.NODE_ENV");
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "Welcome to task app manager",
    });
  });
}

app.all("*", (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: "error",
    payload: "Not found, No defined endpoint",
  });
});

//connect to db
dbConnect()
  .then((result) => {
    console.log(`db connection successful`.bgCyan);

    //listen to request from clients via a set port
    const port = config.env === "production" ? process.env.PORT : 9000;
    app.listen(port, (err) => {
      if (err) {
        console.log(`error: ${err}`.bgRed);
        return;
      }
      console.log(
        `app connected on port:${port} in ${config.env} mode`.bgGreen
      );
    });
  })
  .catch((err) => console.log(`db error: ${err}`.bgMagenta));
