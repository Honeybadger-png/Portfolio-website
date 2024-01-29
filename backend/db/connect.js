import mongoose from "mongoose";
import express from "express";

const app = express();

const connectDB = (mongoDBURL) => {
    return mongoose.connect(mongoDBURL)
}

export default connectDB;