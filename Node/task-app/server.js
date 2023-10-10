//load evn variable into process.env
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import httpStatus from "http-status";

const app = express();

//general middlewares
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    status: "success",
    payload: "Welcome to task app manager",
  });
});

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
