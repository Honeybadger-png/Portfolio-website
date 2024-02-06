import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    projectId:{
        type:String,
        required:true,
        unique:true,
    },
    souce_code_link:{
        type:String,
    },
    description:{
        type:String
    },
    tags:[{
        name:{
            type:String,
            required:true,
        },
        color:{
            type:String,
            required:true,
        }
    }],
    mainImage:{
        type:String,
        required:true,
    },
    images:[{
        name:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        }
    }]
})

const Project = mongoose.model("Project", projectSchema);

export const schema = Project.schema
export default Project;