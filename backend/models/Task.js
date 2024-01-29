import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    completed: Boolean
})

const Task = mongoose.model("Task", taskSchema);

export const schema = Task.schema

export default Task;