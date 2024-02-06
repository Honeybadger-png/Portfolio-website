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

    const {name,description,projectId,source_code_link,projectName,images,tags,mainImage} = req.body;


    const project = new Project ({
        name:name,
        description:description,
        projectId:projectId,
        source_code_link:source_code_link,
        tags:tags,
        projectName:projectName,
        mainImage:mainImage,
        images:images,
    })
    console.log(req.body);
    res.json(req.file).status(200)
}
export const dummyCreateProject = async (req,res,next) => {
    console.log(req.body);
    res.json({message:"Project Created"}).status(200);
}