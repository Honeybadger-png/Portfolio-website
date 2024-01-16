import mongoose from "mongoose";
import express from "express";

const app = express();

const connectDB = (mongoDBURL,port) => {
    mongoose.connect(mongoDBURL).then(()=> {
        console.log("MongoDB Connected!");
        app.listen(port, ()=> {
            console.log(`App is running on port ${port}`);
        })
    }).catch((err)=> {
        console.log(err);
    })
}

export default connectDB;