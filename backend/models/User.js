import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true,"can't be blank"],
        match:[/^[a-zA-Z0-9]+$/, 'is invalid'],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"can't be blank"],
        match:[/\S+@\S+\.\S+/, 'is invalid'],
        unique:true,      
    },
    password:{
        type:String,
        required:true,
    },
})

const User = mongoose.model("User", UserSchema);
export const schema = User.schema;

export default User;