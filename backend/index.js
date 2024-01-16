import express from "express";
import adminRoute from "./routes/adminRoute.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());

app.get("/",(req,res)=> {
    return res.status(200).json({message: "Hello World!",error: err.message});
})
app.use('/admin',adminRoute);


const start = async () => {
    try{
        await connectDB(process.env.mongoDBURL,process.env.PORT);
    } catch(err){
        console.log(err);
    }
}

start();



