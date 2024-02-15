/* import Project Model */
import MultipleFileUpload from '../functions/FileUploader/MultipleFileUpload.js';
import SingleFileUpload from '../functions/FileUploader/SingleFileUpload.js';

import Project from '../models/Project.js';

export const uploadMultipleFiles =  (req, res,next) => {
    try {
        MultipleFileUpload(req, res, function (err) {
            if(err){
                console.log(err);
            }else {
                res.json({mainImage:req.files.mainImage,images:req.files.images}).status(200);
            }
        })
    } catch (error) {
        console.log("error",error);
    }
    
}

export const uploadFile =  (req, res,next) => {
    try {
        SingleFileUpload(req, res, function (err) {
            if(err){
                console.log(err);
            }else {
                res.json({mainImage:req.mainImage,images:req.images}).status(200);
            }
        })
    } catch (error) {
        console.log("error",error);
    }
}

export const createProject = async (req,res,next) => {
    try {
        
        const {name,description,projectId,source_code_link,images,tags,mainImage} = req.body;
    
        console.log("body"+req);
        const project = new Project ({
            name:name,
            description:description,
            projectId:projectId,
            source_code_link:source_code_link,
            tags:tags,
            mainImage:mainImage.name,
            images:images,
        })
            
        await project.save();

        res.status(200).json({message:"Project Created"});
    } catch (error) {
        res.status(500).json({message:"Something went wrong",error:error.message});
    }
}

export const getProjects = async (req,res,next) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({message:"Something went wrong",error:error.message});
    }
}

export const getProject = async (req,res,next) => {
    try {
        const projectId = req.params.projectId;
        const project = await Project.findOne({projectId:projectId});
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({message:"Something went wrong",error:error.message});
    }
}
export const dummyCreateProject = async (req,res,next) => {
    console.log(req.body);
    res.json({message:"Project Created"}).status(200);
}