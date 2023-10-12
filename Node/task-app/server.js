//load evn variable into process.env
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import httpStatus from "http-status";
import { dbConnect } from "./config/db.js";

//controllers
import UserRoute from "./Routes/User.js";

const app = express();

//general middlewares
app.use(cors());
app.use(morgan("dev"));

// routes instantiation
app.use("/users", UserRoute);

app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    status: "success",
    payload: "Welcome to task app manager",
  });
});

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
    const port =
      process.env.NODE_ENV === "production" ? process.env.NODE_ENV : 9000;
    app.listen(port, (err) => {
      if (err) {
        console.log(`error: ${err}`.bgRed);
        return;
      }
      console.log(
        `app connected on port:${port} in ${process.env.NODE_ENV} mode`.bgGreen
      );
    });
  })
  .catch((err) => console.log(`db error: ${err}`.bgMagenta));
