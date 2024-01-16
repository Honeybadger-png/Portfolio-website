import express from "express";
import adminRoute from "./routes/adminRoute.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/",(req,res)=> {
    return res.status(200).json({message: "Hello World!"});
})

app.use('/admin',adminRoute);

const start = async () => {
    try{
        await connectDB(process.env.MONGO_DB_URL,process.env.PORT);

    } catch(err){
        console.log(err);
    }
}

start();



