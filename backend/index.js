import express from "express";
import adminRoute from "./routes/adminRoute.js";
import auth from "./routes/auth.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=> {
    return res.status(200).json({message: "Hello World!"});
})
app.use('/api/admin',adminRoute);
app.use('/auth',auth);


const start = async () => {
    try{
        await connectDB(process.env.mongoDBURL,process.env.PORT);
        app.listen(process.env.PORT,console.log(`Server is listening on port ${process.env.PORT}`));
    } catch(error){
        console.log(error);
    }
}

start();



