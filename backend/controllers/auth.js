import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
    try {
        const {email, password,username} = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({email, password:hashedPassword, username});
        await newUser.save();
        res.status(201).json({message:"User created successfully"});
    } catch (error) {
        res.status(500).json({message:"Something went wrong",error:error.message});
    }

}

export const login = async (req,res) => {
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username})
        if(!user){
            return res.status(401).json({message:"Invalid Credentials"});
        }
        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            return res.status(401).json({message:"Invalid Credentials"});
        }
        const token = jwt.sign({username:user.username,id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.json({message:"User logged in successfully"});
    } catch (error) {
        res.status(500).json({message:"Something went wrong",error:error.message});
    }
}