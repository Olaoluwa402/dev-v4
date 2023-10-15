import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import httpStatus from "http-status";
import { dbConnect } from "./config/db.js";
import UserRoutes from "./Routes/UserRoutes.js";

// general middleware and .env config
dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));

// router initialization
app.use("/users", UserRoutes);

// initial http request from endpoint
app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    status: "success",
    payload: "Server running. Welcome!",
  });
});

// req handler to handle deviant links
app.all("*", (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: "success",
    payload: "ERROR: Endpoint or payload undefined",
  });
});

const port =
  process.env.NODE_ENV === "production" ? process.env.NODE_ENV : 9000;

dbConnect()
  .then((res) => {
    console.log(`db connection sccessful`.bgCyan);

    // listen on port
    app.listen(port, (err) => {
      if (err) {
        console.log(`err: ${err}`.bgRed);
      }
      console.log(
        `Server listening on port: ${port} in ${process.env.NODE_ENV} mode...`
          .bgGreen
      );
    });
  })
  .catch((err) => {
    console.log(`db connection error: ${err.message}`);
  });
