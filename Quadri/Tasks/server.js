import dotenv from "dotenv"
dotenv.config();
import express from "express"
import morgan from "morgan"
import colors from "colors"
import cors from "cors"
import httpStatus from "http-status"
import { dbConnect } from "./Config/db.js";

import router from "./routes/User.js";

const app = express()

app.use(cors());
app.use(morgan("dev"))

app.use("/users",router)
// app.use("/user/id",router)
app.get("/",(req,res)=>{
res.status(httpStatus.OK).json({
    status:"success",
    payload: "Welcome to Quadri task App"
});
});

app.all("*",(req,res)=>{
    res.status(httpStatus.NOT_FOUND).json({
        status:"error",
        payload:"page not found, no defined endpoint "
    })
})


//listening to request from clients server

dbConnect()
.then((result)=>{
    console.log(`Connected To Database`.green);

    const port=

process.env.NODE_ENV=== "production" ? process.env.NODE_ENV:8000;
app.listen(port , (err)=>{
    if(err){
        console.log(`error: ${err}`.bgRed);
        return;
    }
    console.log(`app is running on port:${port} in ${process.env.NODE_ENV} mode`.bgGreen);

    })
})
.catch((error)=>
    console.log(`db error: ${error}`.red))


