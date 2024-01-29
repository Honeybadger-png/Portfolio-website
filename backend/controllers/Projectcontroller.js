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
    const mainImage = req.files.mainImage[0].path;
    const imagePaths = req.files.images.map(image => image.path);
    const {name,description,projectId,source_code_link,projectName} = req.body;
    const imageTitles = req.body.imageTitles.split(',');
    const imageLinks = req.body.imageLinks.split(',');
    const tagNames = req.body.tagNames.split(',');
    const tagColors = req.body.tagColors.split(',');
    let images = [];
    let tags = [];
    for(let i=0;i<imagePaths.length;i++){
        images.push({
            url:imagePaths[i],
            title:imageTitles[i],
            link:imageLinks[i],
        })
    }
    for(let i=0;i<tagNames.length;i++){
        tags.push({
            name:tagNames[i],
            color:tagColors[i],
        })
    }

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
    project.save();
    res.json(project).status(200)
}