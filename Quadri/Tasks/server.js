import dotenv from "dotenv"
dotenv.config();
import express from "express"
import morgan from "morgan"
import colors from "colors"
import cors from "cors"
import httpStatus from "http-status"
import { dbConnect } from "./Config/db.js";
import { config } from "./Config/config.js";

import router from "./routes/User.js";

const app = express()

app.use(cors());
app.use(morgan("dev"))
app.use(express.json())

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
    console.log(`Connected To Database`.bgGreen);

    

    const port=  config.env === "production" ? config.env : 8000;
app.listen(port , (err)=>{
    if(err){
        console.log(`error: ${err}`.bgRed);
        return;
    }
    console.log(`app is running on port:${port} in ${config.env} mode`.bgGreen);

    })
})
.catch((err) => console.log(`db error: ${err}`.bgRed));

